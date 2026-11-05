# DEVLOG.md

작업 이력. 최신 항목을 위에 적는다.

## 2026-11-05

### v0.04 (mini): 1차 작업 정리
- 1차 버전을 임시 주소에 배포한 상태로 세션을 마쳤다. 다음 단계는 사용자·대표 검토다.
- GitHub Actions 버전 갱신을 `DEV_PLAN.md`에 남겼다.

### v0.03 (mini): Astro 사이트 구현과 임시 배포
- 8개 페이지와 GNB, 푸터, CTA를 Astro로 구현했다.
- Swiper, AOS, 제품 정렬 FLIP을 적용하고 문의 페이지는 `준비중`으로 두었다.
- `dev` 브랜치 push 시 GitHub Pages로 배포하도록 구성했다.
- `npm run brief`, `scripts/check-device.sh`를 추가했다.
- 상세: `report/2026-11-05-site-build.md`

### v0.02 (mini): 저장소 공개 전환 반영
- 현재 플랜으로 비공개 저장소의 Pages를 켤 수 없어(HTTP 422) 사용자 결정으로 저장소를 공개했다.
- 공개 전 추적 파일과 이력에서 비밀값과 개인 연락처를 검사했고 발견되지 않았다.
- Pages를 GitHub Actions 빌드 방식으로 켰다.

### v0.01 (mini): 프로젝트 초기 구성과 문서 작성
- 기존 사이트와 Decagon을 분석하고 리뉴얼 범위를 확정했다.
- 비공개 Artifact로 8개 페이지 목업을 만들었다.
- 문서 7종과 `.gitignore`를 작성하고 `main`, `dev` 브랜치를 구성했다.
- 사용자·대표 확인용 임시 호스팅은 GitHub Pages로, 최종 배포 방식은 도메인 연결 시 결정하기로 했다.
- 문의는 `준비중`으로 결정했다.
- 메일 서버가 웹서버와 다른 IP임을 확인하고 앞선 판단을 정정했다.
- 상세: `report/2026-11-05-project-documents.md`
