import { defineConfig } from 'astro/config';

// 임시 주소(arawon.github.io/raregen) 기준. 도메인 연결 시 site를 바꾸고 base를 제거한다.
export default defineConfig({
  site: 'https://arawon.github.io',
  base: '/raregen',
  trailingSlash: 'ignore',
});
