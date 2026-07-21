import { useEffect, useRef, useState } from 'react'

/**
 * 메인 페이지의 풀스크린 배경 섹션.
 * - image  : 배경 이미지 (import 된 url)
 * - theme  : 'dark' | 'light'  (배경 밝기에 맞춘 텍스트 색상)
 * - align  : 'left' | 'center' | 'right'  (텍스트 가로 정렬)
 * - eyebrow / title / desc : 이미지마다 개별로 들어가는 텍스트
 * - cta    : (선택) 버튼 문구
 */
function HeroSection({ image, theme = 'dark', align = 'left', eyebrow, title, desc, cta }) {
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
        {title && <h2 className="hero-section__title">{title}</h2>}
        {desc && <p className="hero-section__desc">{desc}</p>}
        {cta && (
          <button type="button" className="hero-section__cta">
            {cta}
          </button>
        )}
      </div>
    </section>
  )
}

export default HeroSection
