import { productImage, formatPrice } from '../../lib/products'

/**
 * Store 그리드의 상품 카드.
 * 이미지 → 이름 + 가격 → (신상이면) NEW IN 태그 순서 (디자인 sub2 기준).
 */
function ProductCard({ product }) {
  const { no, name, price, currency, image, isNew } = product
  const src = productImage(image)

  return (
    <a className="product-card" href={`#product/${no}`}>
      <div className="product-card__media">
        {src ? (
          <img src={src} alt={name} loading="lazy" />
        ) : (
          <div className="product-card__media-fallback" aria-hidden="true" />
        )}
      </div>
      <div className="product-card__label">
        <span className="product-card__name">{name}</span>
        <span className="product-card__price">{formatPrice(price, currency)}</span>
      </div>
      {isNew && <p className="product-card__tag">NEW IN</p>}
    </a>
  )
}

export default ProductCard
