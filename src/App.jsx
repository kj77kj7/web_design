import { useEffect, useState } from 'react'
import MainPage from './components/MainPage/MainPage'
import StorePage from './components/StorePage/StorePage'

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

  return route === 'store' ? <StorePage /> : <MainPage />
}

export default App
