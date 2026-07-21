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
    align: 'left',
    eyebrow: 'COLLECTION 01',
    title: 'Clarity',
    desc: '가장 순수한 순간을 담아냅니다.',
  },
  {
    image: img03,
    theme: 'dark',
    align: 'center',
    eyebrow: 'SIGNATURE PIECE',
    title: 'Crystallized',
    desc: '물방울이 응결되어 하나의 목걸이가 되다.',
  },
  {
    image: img04,
    theme: 'light',
    align: 'left',
    eyebrow: 'SIGNATURE',
    title: 'Liquid Grace',
    desc: '흐르는 듯한 실루엣의 시그니처 라인.',
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
