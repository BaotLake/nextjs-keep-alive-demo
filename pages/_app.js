import { useRef } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const keepAlive = useRef([
    {
      route: '/alive',
      PageComponent: undefined,
      active: false
    }
  ])

  let isKeepAlivePage = false
  keepAlive.current.forEach((item) => {
    if(item.route === router.route) {
      item.active = true
      item.PageComponent = Component
      isKeepAlivePage = true
      return
    }
    item.active = false
  })

  return (
    <>
      { keepAlive.current.map(({PageComponent, active, route})=>(
        PageComponent && <PageComponent key={route} active={active} />
      ))}
      {
        !isKeepAlivePage && <Component {...pageProps} />
      }
    </>
  )
}

export default MyApp
