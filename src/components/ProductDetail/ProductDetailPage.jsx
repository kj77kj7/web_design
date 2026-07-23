import { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { fetchProduct, productImage, formatPrice } from '../../lib/products'
import '../../styles/product-detail.css'

/**
 * 상품 상세 페이지 (디자인 sub3).
 * - 메인 이미지 + 이름 + 가격은 GET /api/products/:no 에서 가져옴
 * - 상품 설명 / 제품번호 등은 아직 DB 필드가 없어 정적 placeholder (추후 DB 연동)
 * - 이미지 왼쪽 착용샷 썸네일은 요청에 따라 제외
 */
function ProductDetailPage({ no }) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)
    fetchProduct(no).then((p) => {
      if (active) {
        setProduct(p)
        setLoading(false)
      }
    })
    return () => {
      active = false
    }
  }, [no])

  return (
    <div className="product-detail">
      <Navbar variant="light" />

      {loading ? (
        <p className="product-detail__status">불러오는 중…</p>
      ) : !product ? (
        <p className="product-detail__status">
          상품을 찾을 수 없습니다. <a href="#store">스토어로 돌아가기</a>
        </p>
      ) : (
        <div className="product-detail__grid">
          {/* 왼쪽: 메인 이미지 + 스펙 */}
          <div className="product-detail__left">
            <div className="product-detail__media">
              {productImage(product.image) ? (
                <img src={productImage(product.image)} alt={product.name} />
              ) : (
                <div className="product-detail__media-fallback" aria-hidden="true" />
              )}
            </div>

            {/* 아래 설명/제품정보 — 추후 DB 연동 (현재 정적 placeholder) */}
            <div className="product-detail__spec">
              <p className="product-detail__spec-desc">
                순수한 물의 역동적인 찰나를 하이엔드 세공으로 정교하게 통제하여, 눈부신 빛의 투과와
                깊이 있는 입체감을 구현한 궁극의 피스입니다.
              </p>
              <p className="product-detail__spec-info">
                순수 물 : 100%
                <br />
                대한민국 제조
                <br />
                제품번호 : N29000023
              </p>
            </div>
          </div>

          {/* 오른쪽: 요약 설명 + 이름/가격 + 구매 */}
          <div className="product-detail__info">
            <p className="product-detail__desc">
              가장 순수한 형태의 물을 단일 소재로 사용하여, 물방울 고유의 표면 장력이 빚어내는
              매끄럽고 투명한 광택을 극대화한 피스입니다.
            </p>
            <button type="button" className="product-detail__more">
              더보기
            </button>

            <h1 className="product-detail__name">{product.name}</h1>
            <p className="product-detail__price">
              {formatPrice(product.price, product.currency)}
            </p>

            <button type="button" className="product-detail__buy">
              구매하기
            </button>

            <div className="product-detail__links">
              <a href="#" className="product-detail__link">
                선물하기
              </a>
              <a href="#" className="product-detail__link">
                배송 및 반품
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default ProductDetailPage
