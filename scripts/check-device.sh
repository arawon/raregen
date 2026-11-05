#!/bin/sh
# 장비 이동 시 점검: 장비 의존 파일이 git에 추적되는지 확인한다.
# 사용법: sh scripts/check-device.sh [--fix]
#   --fix  .gitignore 대상인데 추적 중인 파일을 추적에서만 제외한다. (파일은 남긴다)

set -u

echo "장비: $(scutil --get ComputerName 2>/dev/null || hostname)"
echo "브랜치: $(git branch --show-current)"
echo "Node: $(node -v 2>/dev/null || echo 미설치)"
echo "GitHub SSH: $(ssh -T -o BatchMode=yes -o ConnectTimeout=10 git@github.com 2>&1 | head -1)"

tracked_ignored=$(git ls-files -i -c --exclude-standard)

if [ -z "$tracked_ignored" ]; then
  echo "추적 중인 장비 의존 파일: 없음"
  exit 0
fi

echo "추적 중인 장비 의존 파일:"
echo "$tracked_ignored"

if [ "${1:-}" = "--fix" ]; then
  echo "$tracked_ignored" | while IFS= read -r file; do
    git rm --cached --quiet -- "$file"
  done
  echo "추적에서 제외했습니다. 내용을 확인하고 커밋하세요."
else
  echo "제외하려면 --fix 옵션으로 다시 실행하세요."
  exit 1
fi
