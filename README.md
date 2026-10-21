# 이재 이유식 웹앱

아이폰·안드로이드 홈 화면에 추가해 쓰는 이유식 달력 앱 (GitHub Pages로 배포).

## 구조
- `src/engine.js` 식단·레시피 엔진 (날짜별 수유, 6끼 슬라이딩, 생선 주간 한도, 조리 레시피 계산)
- `src/ui.js` 화면 로직 (달력·로드맵·조리법·오늘·더보기). 맨 위 `VERSION`이 앱 버전
- `src/page.html` 화면 마크업과 스타일 (`/*ENGINE*/`, `/*UI*/` 자리에 위 두 파일이 들어감)
- `src/head.html` 웹앱용 head (아이콘, manifest)
- `build.py` 위를 합쳐 `index.html`을 만들고 `sw.js` 캐시 이름을 버전에 맞춤
- `index.html`, `sw.js`, `manifest.webmanifest`, `icon-*.png` 배포되는 파일

## 수정·배포 순서
1. `src/` 파일 수정, `src/ui.js`의 `VERSION` 올리기
2. `python3 build.py`
3. 커밋 후 `main`에 푸시 → GitHub Pages가 1~2분 뒤 자동 반영
4. 홈 화면 앱은 다음에 열 때 새 버전을 받음(인터넷 연결 시)
