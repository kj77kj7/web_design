import { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from './HeroSection'
import Footer from '../Footer/Footer'
import { initRipples } from '../../lib/initRipples'
import img01 from '../../assets/images/hero/01.jpg'
import img02 from '../../assets/images/hero/02.jpg'
import img03 from '../../assets/images/hero/03.jpg'
import img04 from '../../assets/images/hero/04.jpg'
import img05 from '../../assets/images/hero/05.jpg'
import img06 from '../../assets/images/hero/06.jpg'
import img07 from '../../assets/images/hero/07.jpg'
import '../../styles/main-page.css'

/**
 * 메인 페이지 - 01~06 배경 이미지를 세로로 나열하고
 * 이미지마다 개별 텍스트를 얹은 풀스크린 스크롤 구성.
 * (아래 문구는 임시 placeholder 이므로 실제 카피로 교체하면 됩니다.)
 */
const sections = [
  {
    image: img01,
    theme: 'dark',
    align: 'center',
    vAlign: 'bottom',
    eyebrow: '목걸이',
    titleFont: 'kr',
    title: (
      <>
        형태 없는 물결이 당신을 위해 빚어낸 단 하나의{' '}
        <span className="font-serif">NECKLACE</span>
      </>
    ),
    cta: '알아보기',
    ctaVariant: 'link',
  },
  {
    image: img02,
    theme: 'dark',
    align: 'center',
    vAlign: 'bottom',
    eyebrow: '귀걸이',
    titleFont: 'kr',
    title: (
      <>
        흐르는 대신 당신에게 머물기로 한{' '}
        <span className="font-serif">EARRING</span>
      </>
    ),
    cta: '알아보기',
    ctaVariant: 'link',
  },
  {
    image: img03,
    theme: 'dark',
    align: 'center',
    vAlign: 'bottom',
    eyebrow: '목걸이',
    titleFont: 'kr',
    title: (
      <>
        가장 맑은 순간을 빚어낸{' '}
        <span className="font-serif">NECKLACE</span>
      </>
    ),
    cta: '알아보기',
    ctaVariant: 'link',
  },
  {
    image: img04,
    theme: 'dark',
    align: 'center',
    vAlign: 'bottom',
    overlay: 'soft',
    eyebrow: '패션',
    titleFont: 'kr',
    title: (
      <>
        몸에 머무는 파도 <span className="font-serif">WEAR</span>
      </>
    ),
    cta: '알아보기',
    ctaVariant: 'link',
  },
  {
    image: img05,
    theme: 'dark',
    align: 'center',
    vAlign: 'bottom',
    eyebrow: 'PURE',
    titleFont: 'kr',
    title: '흐르는 시간을 둥글게 맺어',
    cta: '알아보기',
    ctaVariant: 'link',
  },
  {
    image: img06,
    theme: 'dark',
    align: 'center',
    vAlign: 'bottom',
    eyebrow: '반지',
    titleFont: 'kr',
    title: (
      <>
        <span className="font-serif">WATERFUL RING</span> 손끝에서 찰랑이는 투명한 약속
      </>
    ),
    cta: '알아보기',
    ctaVariant: 'link',
  },
  {
    image: img07,
    theme: 'dark',
    align: 'center',
    vAlign: 'bottom',
    eyebrow: '선물',
    titleFont: 'kr',
    title: <span className="font-serif">EXCLUSIVE SERVICE</span>,
    cta: '알아보기',
    ctaVariant: 'link',
  },
]

// 물결(ripples) 효과 on/off. 작업 편의를 위해 잠시 꺼둔 상태 — 다시 켜려면 true 로.
const RIPPLES_ENABLED = false

function MainPage() {
  useEffect(() => {
    if (!RIPPLES_ENABLED) return
    let cleanup
    // 배경 이미지 레이아웃이 잡힌 뒤 물결 초기화
    const timer = setTimeout(() => {
      initRipples().then((fn) => {
        cleanup = fn
      })
    }, 300)
    return () => {
      clearTimeout(timer)
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <main className="main-page">
      <Navbar />
      {sections.map((section, index) => (
        <HeroSection key={index} {...section} />
      ))}

      <Footer />
    </main>
  )
}

export default MainPage
