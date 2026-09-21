import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

// Lazy load below-fold components for better initial load performance
const Portfolio = lazy(() => import('./components/Portfolio'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))

// Static data moved outside component
const SECTIONS = ['home', 'portfolio', 'about', 'contact'] as const

const SITE_WATERMARKS = [
  { top: '-8%', left: '2%', size: 260, rotate: -14 },
  { top: '6%', left: '38%', size: 420, rotate: 12 },
  { top: '28%', left: '78%', size: 300, rotate: -8 },
  { top: '44%', left: '-7%', size: 460, rotate: 20 },
  { top: '58%', left: '26%', size: 220, rotate: -18 },
  { top: '70%', left: '68%', size: 500, rotate: 10 },
  { top: '88%', left: '8%', size: 300, rotate: -6 },
  { top: '96%', left: '48%', size: 360, rotate: 18 }
]

// Loading fallback component
const SectionLoader = () => (
  <div className="section-loader">
    <div className="loader-spinner" />
  </div>
)

function App() {
  const [activeSection, setActiveSection] = useState<string>('home')
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Scroll reveal observer
  const scrollRevealRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Use IntersectionObserver instead of scroll listener for better performance
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '-100px 0px -100px 0px'
      }
    )

    // Observe all sections
    SECTIONS.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element && observerRef.current) {
        observerRef.current.observe(element)
      }
    })

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Scroll reveal animation observer
  useEffect(() => {
    scrollRevealRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px'
      }
    )

    // Function to observe scroll-reveal elements
    const observeElements = () => {
      document.querySelectorAll('.scroll-reveal:not(.observed)').forEach((el) => {
        if (scrollRevealRef.current) {
          el.classList.add('observed')
          scrollRevealRef.current.observe(el)
        }
      })
    }

    // Initial observation
    observeElements()

    // Use MutationObserver to watch for lazy-loaded components
    const mutationObserver = new MutationObserver(() => {
      observeElements()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      mutationObserver.disconnect()
      if (scrollRevealRef.current) {
        scrollRevealRef.current.disconnect()
      }
    }
  }, [])

  return (
    <div className="app">
      <div className="site-watermarks" aria-hidden="true">
        {SITE_WATERMARKS.map((mark, index) => (
          <img
            key={index}
            src="/logo.png"
            alt=""
            className="site-watermark"
            style={{
              top: mark.top,
              left: mark.left,
              width: mark.size,
              height: mark.size,
              transform: `rotate(${mark.rotate}deg)`
            }}
          />
        ))}
      </div>
      <Header activeSection={activeSection} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="portfolio">
          <Suspense fallback={<SectionLoader />}>
            <Portfolio />
          </Suspense>
        </section>
        <section id="about">
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
        </section>
        <section id="contact">
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
