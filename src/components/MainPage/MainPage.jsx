import Navbar from '../Navbar/Navbar'
import HeroSection from './HeroSection'
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
    title: 'Every Drop, A Detail',
    desc: '작은 물방울 하나까지, 완벽을 향한 집착.',
  },
  {
    image: img06,
    theme: 'dark',
    align: 'left',
    eyebrow: 'FOR YOU',
    title: 'In Her Light',
    desc: '당신의 빛을 완성하는 주얼리.',
  },
  {
    image: img07,
    theme: 'dark',
    align: 'center',
    eyebrow: 'NEW ARRIVAL',
    title: 'Nihilism',
    desc: '지금, 새로운 컬렉션을 만나보세요.',
    cta: '컬렉션 보기',
  },
]

function MainPage() {
  return (
    <main className="main-page">
      <Navbar />
      {sections.map((section, index) => (
        <HeroSection key={index} {...section} />
      ))}

      {/* TODO: footer 는 추후 별도로 전달받아 구성 */}
      <footer className="site-footer">
        <p className="site-footer__brand">NIHILISM</p>
        <p className="site-footer__note">footer 영역 (추후 구성 예정)</p>
      </footer>
    </main>
  )
}

export default MainPage
