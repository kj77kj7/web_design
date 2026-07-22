import { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ProductCard from './ProductCard'
import { fetchProducts } from '../../lib/products'
import '../../styles/store-page.css'

/**
 * Store 페이지 (디자인 sub2).
 * - 밝은(흰) 배경, 라이트 GNB
 * - 헤더(컬렉션 타이틀 + 설명)
 * - 툴바(Collections / N Products / Sort By)
 * - 상품 3열 그리드 (백엔드 GET /api/products)
 * - 공용 Footer 재사용
 */
function StorePage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    fetchProducts().then((list) => {
      if (active) {
        setProducts(list)
        setLoading(false)
      }
    })
    return () => {
      active = false
    }
  }, [])

  return (
    <div className="store-page">
      <Navbar variant="light" />

      <header className="store-header">
        <h1 className="store-header__title">Nihilism pendant couture</h1>
        <p className="store-header__desc">
          &apos;형태&apos;라는 저속한 굴레를 완벽하게 벗어던졌습니다. 어떠한 물리적 질량도 니힐리즘의
          영원성을 담아낼 수 없습니다. 오염되지 않은 &apos;절대적인 무(無)&apos;입니다.
        </p>
      </header>

      <div className="store-toolbar">
        <span className="store-toolbar__collections">Collections</span>
        <span className="store-toolbar__count">{products.length} Products</span>
        <span className="store-toolbar__sort">Sort By</span>
      </div>

      <section className="store-grid" aria-busy={loading}>
        {products.map((product) => (
          <ProductCard key={product.no} product={product} />
        ))}
      </section>

      <Footer />
    </div>
  )
}

export default StorePage
