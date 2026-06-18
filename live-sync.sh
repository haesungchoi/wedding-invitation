#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# live-sync.sh — GitHub 푸시를 로컬에 자동 반영 (macOS / Linux / Git Bash)
#
# 참고: 터미널을 계속 띄우기 싫다면, 이 스크립트 대신 VSCode 상태바의
#       동기화 버튼(↓ 숫자)을 눌러 필요할 때만 받아와도 됩니다.
#
# 사용법:
#   1) VSCode에서 이 저장소를 열고, index.html을 Live Server로 실행
#   2) 터미널에서:  bash live-sync.sh
#   3) 끝! 원격(GitHub)이 갱신되면 자동으로 git pull → 파일이 바뀌고
#      Live Server가 브라우저를 자동 새로고침합니다.
#
#   중단: Ctrl+C
#
# 주의: 로컬에서 직접 파일을 수정하면 pull 충돌이 날 수 있습니다.
#       동기화 중에는 로컬 편집을 피하거나, 충돌 시 `git stash` 후 다시 실행하세요.
# ─────────────────────────────────────────────────────────────
cd "$(dirname "$0")" || exit 1
BRANCH=$(git rev-parse --abbrev-ref HEAD)
INTERVAL="${1:-3}"   # 확인 주기(초), 기본 3초

echo "▶ 자동 동기화: origin/$BRANCH  (${INTERVAL}초마다 확인)  — 중단: Ctrl+C"
while true; do
  git fetch origin "$BRANCH" -q 2>/dev/null || true
  LOCAL=$(git rev-parse @ 2>/dev/null)
  REMOTE=$(git rev-parse "origin/$BRANCH" 2>/dev/null || echo "$LOCAL")
  if [ "$LOCAL" != "$REMOTE" ]; then
    if git pull --ff-only origin "$BRANCH" -q 2>/dev/null; then
      echo "[$(date +%H:%M:%S)] ✓ 업데이트됨 → $(git rev-parse --short HEAD)  $(git log -1 --pretty=%s)"
    else
      echo "[$(date +%H:%M:%S)] ✗ pull 실패 — 로컬 수정사항 충돌일 수 있어요. 'git stash' 후 다시 시도하세요."
    fi
  fi
  sleep "$INTERVAL"
done
