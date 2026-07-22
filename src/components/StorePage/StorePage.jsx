import { useEffect, useMemo, useState } from 'react'
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
  const [sort, setSort] = useState('default')
  const [query, setQuery] = useState('')

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

  // 검색(이름 부분일치) → 정렬(가격 오름/내림). 원본 순서는 백엔드 no 오름차순.
  const displayed = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = q ? products.filter((p) => p.name.toLowerCase().includes(q)) : products
    if (sort === 'price_asc') list = [...list].sort((a, b) => a.price - b.price)
    else if (sort === 'price_desc') list = [...list].sort((a, b) => b.price - a.price)
    return list
  }, [products, sort, query])

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
        <span className="store-toolbar__count">{displayed.length} Products</span>
        <div className="store-toolbar__controls">
          <div className="store-search">
            <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
              <circle cx="8.5" cy="8.5" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
              <line x1="13" y1="13" x2="18" y2="18" stroke="currentColor" strokeWidth="1" />
            </svg>
            <input
              type="search"
              className="store-search__input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="상품 검색"
              aria-label="상품 검색"
            />
          </div>
          <select
            className="store-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="정렬 기준"
          >
            <option value="default">Sort By</option>
            <option value="price_asc">가격 낮은순</option>
            <option value="price_desc">가격 높은순</option>
          </select>
        </div>
      </div>

      <section className="store-grid" aria-busy={loading}>
        {displayed.map((product) => (
          <ProductCard key={product.no} product={product} />
        ))}
      </section>

      {!loading && displayed.length === 0 && (
        <p className="store-empty">검색 결과가 없습니다.</p>
      )}

      <Footer />
    </div>
  )
}

export default StorePage
