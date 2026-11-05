// 세션 시작 시 저장소 현재 상태를 한 번에 보여 준다.
import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

const run = (command) => {
  try {
    return execSync(command, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return '';
  }
};
const heading = (title) => console.log(`\n## ${title}`);

heading('장비');
console.log(run('scutil --get ComputerName') || '확인 불가');
console.log(`Node ${process.version}, npm ${run('npm -v')}, 의존성 ${existsSync('node_modules') ? '설치됨' : '미설치 (npm install 필요)'}`);

heading('브랜치');
console.log(run('git status --short --branch') || '변경 없음');

heading('최근 커밋');
console.log(run('git log --oneline -5'));

heading('Phase 상태');
let phase = null;
const counts = new Map();
for (const line of readFileSync('docs/DEV_PLAN.md', 'utf8').split('\n')) {
  if (line.startsWith('## Phase')) {
    phase = line.replace('## ', '');
    counts.set(phase, { done: 0, total: 0 });
  } else if (phase && /^\| (✅|🔄|⬜|⏸) \|/.test(line)) {
    const count = counts.get(phase);
    count.total += 1;
    if (line.startsWith('| ✅')) count.done += 1;
  }
}
for (const [name, count] of counts) console.log(`${count.done}/${count.total}  ${name}`);

heading('계정');
console.log(`GitHub CLI: ${run('gh auth status --active 2>&1 | grep -o "account [^ ]*"') || '미로그인'}`);
console.log('계정과 비용 항목은 docs/ACCOUNT_COST.md 참고. 누적 원가는 기록된 항목이 아직 없음.');

heading('임시 사이트');
console.log('https://arawon.github.io/raregen/');
