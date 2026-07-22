// 상품 시드 데이터 (단일 원본)
// 출처: API_CONTRACT.md > "시드 데이터 (디자인 sub2 기준 11개)"
// 이 배열을 수정하면 DB 재생성 시 그대로 반영됩니다. 계약서와 항상 일치시킬 것.

export const products = [
  { no: 22, name: 'Graceful bond', price: 4190000, image: '22-1.jpg', isNew: true },
  { no: 16, name: 'A waterful silhouette of blooming curves', price: 13490000, image: '16-1.jpg', isNew: true },
  { no: 2, name: 'Rippling floral arcs 4', price: 2390000, image: '02-2.jpg', isNew: true },
  { no: 23, name: 'Lucid lace', price: 8490000, image: '23-1.jpg', isNew: true },
  { no: 17, name: 'A dewy floral shape', price: 6490000, image: '17-1.jpg', isNew: true },
  { no: 25, name: 'Fluid vow', price: 7590000, image: '25-1.jpg', isNew: true },
  { no: 13, name: 'Waterful curving bloom', price: 7190000, image: '13-1.jpg', isNew: true },
  { no: 27, name: 'Floral fluidity', price: 12490000, image: '27-1.jpg', isNew: true },
  { no: 9, name: 'Rippling floral arcs 2', price: 2390000, image: '09-1.jpg', isNew: true },
  { no: 18, name: 'Full flora', price: 9890000, image: '18-1.jpg', isNew: true },
  { no: 4, name: 'Waterful botanical curve', price: 3490000, image: '04-2.jpg', isNew: true },
];

export const CURRENCY = 'KRW';
