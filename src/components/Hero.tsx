import './Hero.css'

interface SocialLink {
  icon: string
  url: string
  label: string
}

// Static data moved outside component
const SOCIAL_LINKS: SocialLink[] = [
  { icon: '/icons/facebook.png', url: 'https://www.facebook.com/juliojcodesigner/', label: 'Facebook' },
  { icon: '/icons/youtube.png', url: 'https://www.youtube.com/channel/UC3fuj2tV0exs8ileyx31J6g', label: 'YouTube' },
  { icon: '/icons/instagram.png', url: 'https://www.instagram.com/j3designer_/', label: 'Instagram' }
]

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      {/* Background orbs use pure CSS animations */}
      <div className="hero-background">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>

      <div className="hero-content animate-in">
        <div className="hero-badge">
          <span className="badge-text">Portfólio 2021-2026</span>
        </div>

        <h1 className="hero-title">
          <span className="title-line">Júlio Oliveira</span>
          <span className="title-line gradient">J3Designer</span>
        </h1>

        <p className="hero-subtitle">
          Especialista em visualizações arquitetônicas, interiores, produtos 3D e ilustrações.
          <br />
          <span className="subtitle-en">Transformando ideias em realidade visual.</span>
        </p>

        <div className="hero-cta">
          <button 
            className="cta-primary" 
            onClick={scrollToPortfolio}
          >
            Ver Portfólio
          </button>
          <button 
            className="cta-secondary" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Entre em Contato
          </button>
        </div>

        <div className="hero-socials">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={social.label}
            >
              <img src={social.icon} alt={social.label} className="social-icon-img" />
            </a>
          ))}
        </div>
      </div>

      <div className="hero-scroll">
        <span className="scroll-icon">↓</span>
      </div>
    </section>
  )
}

export default Hero
