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

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFeaturedIndex((currentIndex) => {
        setPreviousIndex(currentIndex)
        return (currentIndex + 1) % FEATURED_IMAGES.length
      })
    }, 6000)

    return () => window.clearInterval(interval)
  }, [])

  // Preload the next image in the sequence to ensure instant, stutter-free fade in
  useEffect(() => {
    const nextIndex = (featuredIndex + 1) % FEATURED_IMAGES.length
    const img = new Image()
    img.src = FEATURED_IMAGES[nextIndex]
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
            {previousIndex !== null && previousIndex !== featuredIndex && (
              <img
                key={`prev-${FEATURED_IMAGES[previousIndex]}`}
                src={FEATURED_IMAGES[previousIndex]}
                alt=""
                className="hero-featured-image-prev"
                aria-hidden="true"
              />
            )}
            <img
              key={`curr-${FEATURED_IMAGES[featuredIndex]}`}
              src={FEATURED_IMAGES[featuredIndex]}
              alt="Projeto do portfólio J3Designer"
              className="hero-featured-image"
              loading="eager"
            />
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
