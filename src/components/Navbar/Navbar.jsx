import '../../styles/navbar.css'

/**
 * 상단 고정 메뉴바.
 * - variant 'overlay'(기본): 히어로 위 은빛 반투명 바 (흰 글씨)
 * - variant 'light'        : Store 등 밝은 페이지용 흰 배경 + 검정 글씨
 */
function Navbar({ variant = 'overlay' }) {
  return (
    <header className={`navbar navbar--${variant}`}>
      <nav className="navbar__inner">
        <ul className="navbar__menu navbar__menu--left">
          <li>
            <a href="#magazine">Magazine</a>
          </li>
          <li>
            <a href="#store">Store</a>
          </li>
        </ul>

        <a href="#" className="navbar__brand">
          Nihilism
        </a>

        <ul className="navbar__menu navbar__menu--right">
          <li>
            <button type="button" aria-label="검색">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </li>
          <li>
            <button type="button" aria-label="계정">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M4.5 20c0-3.6 3.4-6 7.5-6s7.5 2.4 7.5 6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </li>
          <li>
            <button type="button" aria-label="장바구니">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M6 8h12l-1 12H7L6 8z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M9 8V6.5a3 3 0 0 1 6 0V8" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
