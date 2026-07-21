import { useEffect, useRef, useState } from 'react'

/**
 * 메인 페이지의 풀스크린 배경 섹션.
 * - image      : 배경 이미지 (import 된 url)
 * - theme      : 'dark' | 'light'  (배경 밝기에 맞춘 텍스트 색상)
 * - align      : 'left' | 'center' | 'right'  (텍스트 가로 정렬)
 * - vAlign     : 'center' | 'bottom'          (텍스트 세로 위치)
 * - eyebrow / title / desc : 이미지마다 개별로 들어가는 텍스트 (title 은 문자열/노드 모두 허용)
 * - titleFont  : 'display'(Baskerville) | 'kr'(윤고딕)
 * - cta        : (선택) 버튼/링크 문구
 * - ctaVariant : 'button' | 'link'
 * - overlay    : (선택) 'soft' - 밝은 배경에 흰 글씨를 얹을 때, 기본 어두운 오버레이 대신 하단에만 옅은 스크림을 깐다
 */
function HeroSection({
  image,
  theme = 'dark',
  align = 'left',
  vAlign = 'center',
  eyebrow,
  title,
  desc,
  titleFont = 'display',
  cta,
  ctaVariant = 'button',
  overlay,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const className = [
    'hero-section',
    `hero-section--${theme}`,
    `hero-section--${align}`,
    `hero-section--v${vAlign}`,
    titleFont === 'kr' ? 'hero-section--kr' : '',
    overlay ? `hero-section--overlay-${overlay}` : '',
    visible ? 'is-visible' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section ref={ref} className={className}>
      <div className="hero-section__bg" style={{ backgroundImage: `url(${image})` }} />
      <div className="hero-section__overlay" />
      <div className="hero-section__content">
        {eyebrow && <p className="hero-section__eyebrow">{eyebrow}</p>}
        {title && (
          <h2 className={`hero-section__title hero-section__title--${titleFont}`}>{title}</h2>
        )}
        {desc && <p className="hero-section__desc">{desc}</p>}
        {cta &&
          (ctaVariant === 'link' ? (
            <a href="#detail" className="hero-section__link">
              {cta}
            </a>
          ) : (
            <button type="button" className="hero-section__cta">
              {cta}
            </button>
          ))}
      </div>
    </section>
  )
}

export default HeroSection
