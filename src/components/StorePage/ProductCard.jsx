import { productImage, formatPrice } from '../../lib/products'

/**
 * Store 그리드의 상품 카드.
 * 이미지 → 이름 + 가격 → (신상이면) NEW IN 태그 순서 (디자인 sub2 기준).
 */
function ProductCard({ product }) {
  const { name, price, currency, image, isNew } = product
  const src = productImage(image)

  return (
    <article className="product-card">
      <div className="product-card__media">
        {src ? (
          <img src={src} alt={name} loading="lazy" />
        ) : (
          <div className="product-card__media-fallback" aria-hidden="true" />
        )}
      </div>
      <p className="product-card__label">
        {name} <span className="product-card__price">{formatPrice(price, currency)}</span>
      </p>
      {isNew && <p className="product-card__tag">NEW IN</p>}
    </article>
  )
}

export default ProductCard
