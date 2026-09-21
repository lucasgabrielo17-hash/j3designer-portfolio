import './Footer.css'

interface SocialLink {
  icon: string
  url: string
  label: string
}

// Static data moved outside component
const SOCIAL_LINKS: SocialLink[] = [
  { icon: '/icons/youtube.png', url: 'https://www.youtube.com/channel/UC3fuj2tV0exs8ileyx31J6g', label: 'YouTube' },
  { icon: '/icons/instagram.png', url: 'https://www.instagram.com/j3designer_/', label: 'Instagram' }
]

const NAV_SECTIONS = [
  { id: 'home', label: 'Início' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'about', label: 'Sobre' },
  { id: 'contact', label: 'Contato' }
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo.png" alt="J3Designer Logo" className="footer-logo" />
            <span className="footer-brand-name">J3Designer</span>
          </div>

          <div className="footer-nav">
            {NAV_SECTIONS.map((section) => (
              <button 
                key={section.id}
                onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {section.label}
              </button>
            ))}
          </div>

          <div className="footer-socials">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={social.label}
              >
                <img src={social.icon} alt={social.label} className="social-icon-img" />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} J3Designer. Todos os direitos reservados.
          </p>
          <p className="made-with">
            Feito com ♥ por Júlio Oliveira
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
