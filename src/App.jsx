import { useEffect, useState } from 'react'
import MainPage from './components/MainPage/MainPage'
import StorePage from './components/StorePage/StorePage'
import ProductDetailPage from './components/ProductDetail/ProductDetailPage'

const getRoute = () => window.location.hash.replace(/^#\/?/, '').split('?')[0]

function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const [page, param] = route.split('/')

  if (page === 'product' && param) return <ProductDetailPage no={param} />
  if (page === 'store') return <StorePage />
  return <MainPage />
}

export default App
