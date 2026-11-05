export const company = {
  name: '㈜레어젠',
  nameEn: 'RareGen',
  ceo: '윤초희',
  address: '서울특별시 서초구 방배로25길 20, 승인빌딩 2층',
  tel: '02-2088-7065',
  fax: '02-2088-7067',
  email: 'jhyoon@raregen.co.kr',
  bizNo: '663-81-01167',
};

export const brands = [
  { name: 'TIANGEN', logo: 'brand_logo01.png', href: 'https://en.tiangen.com/' },
  { name: 'Thermo Fisher Scientific', logo: 'brand_logo02.png', href: 'https://www.thermofisher.com/kr/ko/home.html' },
  { name: 'Axygen', logo: 'brand_logo03.png', href: 'https://www.corning.com/kr/ko/products/life-sciences/resources/brands/axygen-brand-products.html' },
  { name: 'Falcon', logo: 'brand_logo04.png', href: 'https://www.corning.com/kr/ko/products/life-sciences/resources/brands/falcon-brand-products.html' },
  { name: 'Biotix', logo: 'brand_logo05.png', href: 'https://biotix.com/' },
  { name: 'Merck', logo: 'brand_logo06.png', href: 'https://www.sigmaaldrich.com/KR/ko' },
  { name: 'QIAGEN', logo: 'brand_logo07.png', href: 'https://www.qiagen.com/us/' },
  { name: 'SPL', logo: 'brand_logo08.png', href: 'http://www.ispl.co.kr/index.php' },
  { name: 'Coriell', logo: 'brand_logo09.png', href: 'https://www.coriell.org/' },
  { name: 'Eppendorf', logo: 'brand_logo10.png', href: 'https://www.eppendorf.com/KR-ko/' },
  { name: 'Medicom', logo: 'brand_logo11.png', href: 'https://medicom.com/' },
  { name: 'NEB', logo: 'brand_logo12.png', href: 'https://international.neb.com/' },
  { name: 'Neptune', logo: 'brand_logo13.png', href: 'http://neptunescientific.com/' },
  { name: 'Agilent', logo: 'brand_logo14.png', href: 'https://www.agilent.com/' },
  { name: 'Sarstedt', logo: 'brand_logo15.png', href: 'https://www.sarstedt.com/en/home/' },
];

/** GNB 제품정보 하위 메뉴와 제품정보 탭의 공통 목록 */
export const productMenu = [
  { key: 'brands', href: 'products/brands/', title: '취급 브랜드', desc: '15개 브랜드의 시약과 장비', icon: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z' },
  { key: 'bead', href: 'products/magnetic-bead/', title: '마그네틱 비드', desc: '국내 기술로 제조한 PureSeek', icon: 'M5 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0M14 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M7.5 17a3 3 0 1 0 6 0a3 3 0 1 0-6 0' },
  { key: 'mro', href: 'products/mro/', title: '기업 소모성 자재', desc: '공장용품부터 사무용품까지', icon: 'M3.5 8 12 3.5 20.5 8v8L12 20.5 3.5 16zM3.5 8 12 12.5 20.5 8M12 12.5v8' },
  { key: 'list', href: 'products/list/', title: '제품 목록', desc: '모델명과 사양을 보고 견적 문의', icon: 'M9 6h11M9 12h11M9 18h11M4 6h.5M4 12h.5M4 18h.5' },
];
