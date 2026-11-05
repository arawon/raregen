export interface Spec { k: string; v: string }

export interface Product {
  id: string;
  name: string;
  group: string;
  price: number;
  specs: Spec[];
}

export const products: Product[] = [
  { id: 'RGB01168', name: 'PureSeek 마그네틱비드 1L', group: '마그네틱 비드', price: 2000000, specs: [{ k: '모델명', v: 'RGB01168' }, { k: '용량', v: '1L' }, { k: '원산지', v: '국내' }] },
  { id: 'Q32856', name: 'Qubit Assay tube (500ea)', group: '튜브', price: 141000, specs: [{ k: '모델명', v: 'Q32856' }, { k: '포장 단위', v: '1 pack = 500 ea' }, { k: '제품 라인', v: 'Qubit™' }, { k: '유형', v: 'Assay Tube' }, { k: '용도', v: 'Qubit Fluorometer' }, { k: '배송 조건', v: 'Room Temperature' }] },
  { id: 'EK0032', name: 'T4 Polynucleotide Kinase (10 U/μL)', group: '시약·키트', price: 213000, specs: [{ k: '모델명', v: 'EK0032' }, { k: '포장 단위', v: '1 set = 2500 unit' }, { k: '농도', v: '10 U/μL' }, { k: '버퍼', v: '10X Reaction Buffer' }] },
  { id: 'MEDI-1122B', name: 'SafeTouch® UltraGrip Latex PF Glove, Powder-Free, Small', group: '장갑', price: 122000, specs: [{ k: '모델명', v: 'MEDI-1122B' }, { k: '사이즈', v: 'Small' }, { k: '특징', v: 'Powder-Free' }] },
  { id: 'Q32854', name: 'Qubit™ dsDNA HS Assay Kit', group: '시약·키트', price: 432000, specs: [{ k: '모델명', v: 'Q32854' }, { k: '포장 단위', v: '1 kit = 500 assay' }] },
  { id: '3451PK', name: 'Snap Cap Low Retention Microcentrifuge Tube (1.5mL)', group: '튜브', price: 33000, specs: [{ k: '모델명', v: '3451PK' }, { k: '포장 단위', v: '1 pk = 500 ea' }, { k: '용량', v: '1.5mL' }] },
  { id: '50050', name: '50ml Conical tube, PP/HDPE, 500/cs, In Sleeves', group: '튜브', price: 100000, specs: [{ k: '모델명', v: '50050' }, { k: '포장 단위', v: '500개/박스' }, { k: '용량', v: '50ml' }, { k: '외경', v: '30 x 115mm' }, { k: 'RCF Rating', v: '14,000 xg' }, { k: '특징', v: '멸균 제품' }] },
  { id: '1923-20', name: 'CP-XS, Powder Free, X-Small', group: '장갑', price: 142000, specs: [{ k: '모델명', v: '1923-20' }, { k: '포장 단위', v: '1 box = 10 pack = 1000 ea' }, { k: '사이즈', v: 'X-Small' }, { k: '유형', v: 'Latex Examination Gloves' }] },
  { id: 'AX.MCT-150-C-S', name: 'Axygen, Microtubes (1.5ml Clear, Sterile)', group: '튜브', price: 18000, specs: [{ k: '모델명', v: 'AX.MCT-150-C-S' }, { k: '포장 단위', v: '250 ea/pk' }, { k: '용량', v: '1.5ml' }, { k: '특징', v: 'Clear, Sterile' }] },
];

/** 기존 사이트 조회 결과 기준 (docs/PRD.md §5.6) */
export const sortOptions = [
  { key: 'popular', label: '인기상품순', ids: ['RGB01168', 'Q32856', 'EK0032', 'MEDI-1122B', 'Q32854', '3451PK', '50050', '1923-20', 'AX.MCT-150-C-S'] },
  { key: 'recent', label: '최근상품순', ids: ['50050', 'AX.MCT-150-C-S', '1923-20', 'MEDI-1122B', 'EK0032', 'Q32854', '3451PK', 'Q32856', 'RGB01168'] },
  { key: 'low', label: '낮은가격순', ids: ['AX.MCT-150-C-S', '3451PK', '50050', 'MEDI-1122B', 'Q32856', '1923-20', 'EK0032', 'Q32854', 'RGB01168'] },
  { key: 'high', label: '높은가격순', ids: ['RGB01168', 'Q32854', 'EK0032', '1923-20', 'Q32856', 'MEDI-1122B', '50050', '3451PK', 'AX.MCT-150-C-S'] },
];

export const priceText = (price: number): string => `${price.toLocaleString('ko-KR')}원`;
export const productImage = (id: string): string => `images/products/${id}.png`;
