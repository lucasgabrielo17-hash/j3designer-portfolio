import { useState, useEffect } from 'react'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`scroll-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <span className="scroll-top-icon">↑</span>
    </button>
  )
}

export default ScrollToTop
