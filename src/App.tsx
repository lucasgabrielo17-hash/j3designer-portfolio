import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './App.css'

// Lazy load below-fold components for better initial load performance
const Portfolio = lazy(() => import('./components/Portfolio'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))

// Static data moved outside component
const SECTIONS = ['home', 'portfolio', 'about', 'contact'] as const

// Loading fallback component
const SectionLoader = () => (
  <div className="section-loader">
    <div className="loader-spinner" />
  </div>
)

function App() {
  const [activeSection, setActiveSection] = useState<string>('home')
  const observerRef = useRef<IntersectionObserver | null>(null)

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

  return (
    <div className="app">
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
    </div>
  )
}

export default App
