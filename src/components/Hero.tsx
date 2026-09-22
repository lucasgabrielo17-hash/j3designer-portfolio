import { useEffect, useState } from 'react'
import { portfolioCategories } from '../data/portfolio'
import './Hero.css'

interface CollageImage {
  src: string
  alt: string
}

// Rounded-triangle clip shapes (rotated to match the reference layout)
const COLLAGE_IMAGES: CollageImage[] = [
  {
    src: '/Triangulo%2001.png',
    alt: 'Ilustração digital',
  },
  {
    src: '/Triangulo%2002.png',
    alt: 'Modelagem 3D de produto',
  },
  {
    src: '/Triangulo%2003.png',
    alt: 'Visualização de interiores',
  }
]

const FEATURED_IMAGES = portfolioCategories.flatMap((category) => [
  category.coverImage,
  ...category.items.map((item) => item.image)
]).filter((image, index, images) => images.indexOf(image) === index).slice(0, 12)

const TriangleFrame = ({ src, alt }: { src: string; alt: string }) => (
  <img className="tri-image" src={src} alt={alt} />
)

const Hero = () => {
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState<number | null>(null)
  const [isInitial, setIsInitial] = useState(true)

  // Preload and decode all featured images in the background sequentially on mount
  useEffect(() => {
    let isCancelled = false

    const preloadAll = async () => {
      for (let i = 0; i < FEATURED_IMAGES.length; i++) {
        if (isCancelled) break
        const img = new Image()
        img.src = FEATURED_IMAGES[i]
        try {
          if ('decode' in img) {
            await img.decode()
          }
        } catch {
          // Ignore decode errors and continue
        }
      }
    }

    preloadAll()

    return () => {
      isCancelled = true
    }
  }, [])

  // Transition to the next image only after it has been fully loaded and decoded in GPU memory
  useEffect(() => {
    let isCancelled = false

    // Immediately start loading and decoding the upcoming image
    const nextIndex = (featuredIndex + 1) % FEATURED_IMAGES.length
    const nextSrc = FEATURED_IMAGES[nextIndex]
    const nextImg = new Image()
    nextImg.src = nextSrc
    if ('decode' in nextImg) {
      nextImg.decode().catch(() => {})
    }

    const timer = window.setTimeout(async () => {
      // Ensure upcoming image is decoded before triggering transition
      try {
        if ('decode' in nextImg) {
          await nextImg.decode()
        }
      } catch {
        // Continue if decode fails
      }

      if (isCancelled) return

      setIsInitial(false)
      setPreviousIndex(featuredIndex)
      setFeaturedIndex(nextIndex)
    }, 5500)

    return () => {
      isCancelled = true
      window.clearTimeout(timer)
    }
  }, [featuredIndex])

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-inner animate-in">
        <div className="hero-showcase">
          <div className="hero-collage">
            {COLLAGE_IMAGES.map((image, index) => (
              <div key={image.alt} className={`collage-frame frame-${index + 1}`}>
                <TriangleFrame
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>

          <div className="hero-featured">
            {FEATURED_IMAGES.map((src, index) => {
              const isActive = index === featuredIndex
              const isPrevious = index === previousIndex
              const isNext = index === (featuredIndex + 1) % FEATURED_IMAGES.length

              // Only keep active, previous (solid behind), and next (pre-rendered) in DOM
              if (!isActive && !isPrevious && !isNext) {
                return null
              }

              return (
                <img
                  key={src}
                  src={src}
                  alt="Projeto do portfólio J3Designer"
                  className={`hero-featured-image ${isActive ? 'active' : ''} ${isPrevious ? 'previous' : ''} ${isInitial && isActive ? 'initial-load' : ''}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              )
            })}
          </div>
        </div>

        <div className="hero-info">
          <div className="hero-info-content">
            <div className="hero-identity">
              <h1 className="hero-name">Júlio Oliveira</h1>
              <p className="hero-role">
                <img src="/logo.png" alt="" className="role-logo" />
                <span className="role-title">ArchViz</span>
                <span className="role-desc">Tratamento de Imagens e Vídeos</span>
              </p>
            </div>

            <button className="hero-cta" onClick={scrollToPortfolio}>
              Ver Portfólio
            </button>
          </div>
        </div>
      </div>

      <button
        className="hero-scroll"
        onClick={scrollToPortfolio}
        aria-label="Rolar para o portfólio"
      >
        <span className="scroll-icon">↓</span>
      </button>
    </section>
  )
}

export default Hero
