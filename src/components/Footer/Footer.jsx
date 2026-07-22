import '../../styles/footer.css'

/**
 * 메인 페이지 하단 footer.
 * - 상단: 고객센터 문의 / 매장 검색
 * - 중단: 서비스 · 니힐리즘 소개 · 연결 링크 컬럼
 * - 하단: 소셜 링크 · 브랜드 로고 · 국가/언어 선택
 * - 최하단: 사업자 정보 및 고지 문구
 */

const serviceLinks = ['수리', 'FAQ', '니힐리즘 기프트', '커스터마이징', '교환 & 환불']
const aboutLinks = [
  '패션쇼',
  '예술 문화',
  '지속가능성',
  '최근 뉴스',
  '윤리 및 준법경영',
  '채용정보',
]
const socialLinks = ['Kakao', 'Tiktok', 'Instagram', 'X', 'Facebook', 'E-mail']

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        {/* 상단: 문의 / 매장 검색 */}
        <div className="site-footer__top">
          <div className="site-footer__help">
            <h3 className="site-footer__heading">궁금한 점이 있으신가요?</h3>
            <p className="site-footer__help-body">
              고객 센터로 문의 주시면 상담을 도와 드리겠습니다.
              <br />
              패션 080-023-0223
              <br />
              주얼리 080-223-0223
            </p>
          </div>

          <div className="site-footer__store">
            <h3 className="site-footer__heading">원하시는 지역의 가까운 매장을 검색해 보세요.</h3>
            <form className="site-footer__search" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                className="site-footer__search-input"
                placeholder="도시 또는 우편 번호"
                aria-label="도시 또는 우편 번호"
              />
              <button type="submit" className="site-footer__search-btn" aria-label="검색">
                <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                  <circle cx="8.5" cy="8.5" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
                  <line x1="13" y1="13" x2="18" y2="18" stroke="currentColor" strokeWidth="1" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* 중단: 링크 컬럼 */}
        <div className="site-footer__links">
          <nav className="site-footer__col" aria-label="서비스">
            <h4 className="site-footer__col-title">서비스</h4>
            <ul className="site-footer__list">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#" className="site-footer__link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer__col" aria-label="니힐리즘 소개">
            <h4 className="site-footer__col-title">니힐리즘 소개</h4>
            <ul className="site-footer__list">
              {aboutLinks.map((label) => (
                <li key={label}>
                  <a href="#" className="site-footer__link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__col site-footer__col--connect">
            <h4 className="site-footer__col-title">연결</h4>
            <p className="site-footer__connect-text">
              최신 컬렉션, 캠페인을 가장 먼저 받아보고 싶다면,{' '}
              <a href="#" className="site-footer__connect-link">
                구독
              </a>
              하세요
            </p>
          </div>
        </div>

        {/* 하단: 소셜 / 브랜드 / 국가·언어 */}
        <div className="site-footer__bar">
          <ul className="site-footer__social">
            {socialLinks.map((label) => (
              <li key={label}>
                <a href="#" className="site-footer__social-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <p className="site-footer__brand">Nihilism</p>

          <button type="button" className="site-footer__locale">
            <span className="site-footer__locale-label">국가 또는 지역 및 언어 선택</span>
            <span className="site-footer__locale-value">한국 (한국어)</span>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        {/* 최하단: 사업자 정보 / 고지 */}
        <div className="site-footer__legal">
          <p className="site-footer__legal-line">
            NIHILISM(유) | 00000, (어둠의 중심, 흐름) | 사업자등록번호: 999-99-99999 | 대표자: 손석영
            | 통신판매업 신고번호: 2026-223-0001 | 사업자정보확인 | 개인정보관리책임자: NULL |
            고객센터: 000-0000-0000 contact@void.co.kr
          </p>
          <p className="site-footer__legal-line">
            &apos;NIHILISM(유)&apos;는 본 무의미의 차원과 연결된 통로 내에서 &apos;먼지와 메아리(주)&apos;가
            진열하는 &apos;존재하지 않는 가치&apos;의 거래당사자가 아닙니다. 따라서,
            &apos;NIHILISM(유)&apos;가 빚어낸 허구의 상품 정보 및 그 부질없는 거래 행위에 대하여
            &apos;NIHILISM(유)&apos;는 어떠한 책임의 형상도 지니지 않음을 명시합니다. 모든 것은 결국
            무로 돌아갑니다.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
