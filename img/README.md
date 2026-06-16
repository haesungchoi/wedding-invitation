# img — 웹용 최적화 이미지 (사이트가 실제 사용)

청첩장 화면(`screens/*.jsx`, `pc-layout.jsx`)이 로딩하는 **최적화본**입니다.

- 사양: 긴 변 최대 1600px, JPEG 품질 86, progressive, EXIF 회전 보정.
- 모바일 레티나 화면 기준 화질 손실은 거의 없으며, 용량은 원본 대비 약 92% 작습니다.
- **원본 풀해상도**는 `../img-original/` 에 같은 경로/파일명으로 보관돼 있습니다.

재생성: 저장소 루트에서 `python3 optimize_images.py` (원본은 `img-original/` 에서 읽음).
