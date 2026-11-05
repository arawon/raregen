# CHANGE_DEVICE.md

장비 간 작업 인수인계 프로토콜. 최종 갱신: 2026-11-05 (v0.01)

## 1. 이전 장비에서 정리

1. 작업 내용을 commit하고 push한다.
2. `DEVLOG.md`, `DEV_PLAN.md`, 보고서에 진행 상황을 남긴다.
3. 테스트용으로 로그인한 계정과 띄워 둔 서비스를 정리한다 (docker, supabase, gcp, firebase, GitHub CLI 등).
4. 저장소에 없는 중요한 파일이 있으면 §4를 갱신한다.

## 2. 새 장비에서 시작

```bash
git clone git@github.com:arawon/raregen.git
cd raregen
git checkout dev
scutil --get ComputerName
```

1. 장비명을 §5와 대조한다. 커밋 표기는 `vX.XX (장비명): 내용`이다.
2. `npm install` 후 `npm run brief`를 실행한다.
3. `npm run check-device`를 실행한다. 장비 의존 파일이 추적 중이면 `sh scripts/check-device.sh --fix`로 추적에서 제외한다.
4. §4의 값을 이 장비에 구성할 수 있는지 검토한다.
5. 전체 문서의 정합성을 확인한다.

## 3. 장비별 준비물

- GitHub SSH 키 등록 (`git@github.com:arawon/raregen.git` 접근)
- Git 사용자 설정
- Node.js 24
- GitHub CLI는 필요할 때만 로그인하고 작업 후 정리한다.
- 로컬 확인: `npm run dev`, 빌드 확인: `npm run build && npm run preview`
- 배포는 `dev` 브랜치 push로 자동 진행되므로 장비별 배포 설정이 없다.

## 4. git에 보관되지 않는 값

| 항목 | 위치 | 장비별 구성 |
|---|---|---|
| `.env*` | 저장소 루트 | 현재 없음. 생기면 여기에 키 이름만 기록 |
| `.claude/settings.local.json` | 장비 로컬 | 선택 사항 |
| Claude 메모리 | 장비 로컬 | 저장소 문서가 우선이며 이전하지 않음 |
| Claude 임시 작업 폴더의 목업 원본 | 세션 임시 폴더 | 이전 불가. 목업 원본은 Artifact에 보관되어 있고 URL은 `ARCHITECTURE.md` §3 참고 |

## 5. 장비 목록

| 커밋 표기 | 장비 | `ComputerName` |
|---|---|---|
| `mini` | Mac mini | `Won의 Mac mini` |
| `imac` | iMac | 확인 전 |
| `mba` | MacBook Air | 확인 전 |

새 장비가 생기면 짧은 이름을 정해 이 표와 `CLAUDE.md`에 추가한다.
