// 상품 데이터 계층 — 백엔드 GET /api/products 소비 (계약: API_CONTRACT.md)

/**
 * products/ 폴더의 이미지들을 번들에 포함시키고, 파일명 → URL 맵을 만든다.
 * 백엔드는 image 로 파일명(예: '16-1.jpg')만 내려주므로, 여기서 실제 에셋 URL 로 변환한다.
 */
const modules = import.meta.glob('../assets/images/products/*.{jpg,png}', {
  eager: true,
  import: 'default',
})

const imageByFile = {}
for (const [path, url] of Object.entries(modules)) {
  const file = path.split('/').pop()
  imageByFile[file] = url
}

/** 파일명(예: '16-1.jpg')으로 번들된 이미지 URL 을 얻는다. 없으면 undefined. */
export function productImage(file) {
  return imageByFile[file]
}

/** 가격(원, 정수) → "₩ 13,490,000" 표기 */
export function formatPrice(price, currency = 'KRW') {
  const num = Number(price).toLocaleString('ko-KR')
  return currency === 'KRW' ? `₩ ${num}` : `${num} ${currency}`
}

/** API 미가용(백엔드 미기동) 시 사용할 폴백 시드 — API_CONTRACT.md 기준 11건 */
const SEED_PRODUCTS = [
  { no: 22, name: 'Graceful bond', price: 4190000, currency: 'KRW', image: '22-1.jpg', isNew: true },
  { no: 16, name: 'A waterful silhouette of blooming curves', price: 13490000, currency: 'KRW', image: '16-1.jpg', isNew: true },
  { no: 2, name: 'Rippling floral arcs 4', price: 2390000, currency: 'KRW', image: '02-2.jpg', isNew: true },
  { no: 23, name: 'Lucid lace', price: 8490000, currency: 'KRW', image: '23-1.jpg', isNew: true },
  { no: 17, name: 'A dewy floral shape', price: 6490000, currency: 'KRW', image: '17-1.jpg', isNew: true },
  { no: 25, name: 'Fluid vow', price: 7590000, currency: 'KRW', image: '25-1.jpg', isNew: true },
  { no: 13, name: 'Waterful curving bloom', price: 7190000, currency: 'KRW', image: '13-1.jpg', isNew: true },
  { no: 27, name: 'Floral fluidity', price: 12490000, currency: 'KRW', image: '27-1.jpg', isNew: true },
  { no: 9, name: 'Rippling floral arcs 2', price: 2390000, currency: 'KRW', image: '09-1.jpg', isNew: true },
  { no: 18, name: 'Full flora', price: 9890000, currency: 'KRW', image: '18-1.jpg', isNew: true },
  { no: 4, name: 'Waterful botanical curve', price: 3490000, currency: 'KRW', image: '04-2.jpg', isNew: true },
]

/**
 * 상품 목록을 가져온다. 백엔드(/api/products)를 우선 사용하고,
 * 실패하면 번들 시드로 폴백해 화면이 비지 않도록 한다.
 */
export async function fetchProducts() {
  try {
    const res = await fetch('/api/products')
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.json()
  } catch (e) {
    console.warn('[products] API 호출 실패 — 시드 데이터로 폴백합니다.', e)
    return SEED_PRODUCTS
  }
}

/**
 * 단일 상품 조회 (상세 페이지). GET /api/products/:no 우선, 실패 시 시드 폴백.
 * @returns 상품 객체 또는 null(없음)
 */
export async function fetchProduct(no) {
  try {
    const res = await fetch(`/api/products/${no}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.json()
  } catch (e) {
    console.warn('[products] 상세 API 실패 — 시드 데이터로 폴백합니다.', e)
    return SEED_PRODUCTS.find((p) => String(p.no) === String(no)) || null
  }
}
