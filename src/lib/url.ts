/** base 경로를 반영한 사이트 내부 주소를 만든다. */
export const url = (path = ''): string =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
