#!/usr/bin/env python3
"""
모바일 청첩장 이미지 최적화 스크립트.

- 원본(마스터)은 img-original/ 에 그대로 보존한다.
- 최적화본은 img/ 에 동일한 경로/파일명(.jpg)으로 생성한다 → 코드 수정 불필요.
- 화질 우선 설정: 긴 변 최대 1600px, 품질 86, progressive, EXIF 회전 보정.
- 이미 충분히 작은 이미지는 재인코딩 결과가 더 크면 원본을 그대로 복사한다.

재실행 안전: img-original/ 을 항상 원본 소스로 사용한다.
"""
import os
import shutil
import sys
from PIL import Image, ImageOps

ORIG_DIR = "img-original"
OUT_DIR = "img"
MAX_SIDE = 1600
QUALITY = 86

def human(n):
    for unit in ("B", "KB", "MB"):
        if n < 1024:
            return f"{n:.0f}{unit}"
        n /= 1024
    return f"{n:.1f}GB"

def main():
    if not os.path.isdir(ORIG_DIR):
        print(f"[!] {ORIG_DIR}/ 가 없습니다. 먼저 원본을 옮겨주세요.", file=sys.stderr)
        sys.exit(1)

    total_before = total_after = 0
    count = 0
    for root, _dirs, files in os.walk(ORIG_DIR):
        rel = os.path.relpath(root, ORIG_DIR)
        out_root = OUT_DIR if rel == "." else os.path.join(OUT_DIR, rel)
        os.makedirs(out_root, exist_ok=True)
        for fname in sorted(files):
            src = os.path.join(root, fname)
            dst = os.path.join(out_root, fname)
            before = os.path.getsize(src)

            if not fname.lower().endswith((".jpg", ".jpeg", ".png")):
                shutil.copy2(src, dst)
                continue

            try:
                im = Image.open(src)
                im = ImageOps.exif_transpose(im)  # 회전 메타데이터를 픽셀에 반영
                if im.mode in ("RGBA", "P", "LA"):
                    im = im.convert("RGB")
                w, h = im.size
                scale = min(1.0, MAX_SIDE / max(w, h))
                if scale < 1.0:
                    im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
                im.save(dst, "JPEG", quality=QUALITY, optimize=True,
                        progressive=True)
            except Exception as e:
                print(f"[!] {src} 처리 실패({e}) → 원본 복사", file=sys.stderr)
                shutil.copy2(src, dst)
                after = os.path.getsize(dst)
                total_before += before
                total_after += after
                count += 1
                continue

            after = os.path.getsize(dst)
            # 재인코딩이 더 크면 원본을 그대로 사용
            if after >= before:
                shutil.copy2(src, dst)
                after = before

            total_before += before
            total_after += after
            count += 1
            print(f"{human(before):>8} -> {human(after):>8}  {os.path.join(rel, fname) if rel != '.' else fname}")

    print("-" * 60)
    saved = total_before - total_after
    pct = (saved / total_before * 100) if total_before else 0
    print(f"이미지 {count}개")
    print(f"합계: {human(total_before)} -> {human(total_after)}  "
          f"({pct:.1f}% 절감, {human(saved)} 감소)")

if __name__ == "__main__":
    main()
