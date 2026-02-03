import { motion } from 'framer-motion'
import './Footer.css'

interface SocialLink {
  icon: string
  url: string
  label: string
}

// Static data moved outside component - created once, not on every render
const SOCIAL_LINKS: SocialLink[] = [
  { icon: '/icons/facebook.png', url: 'https://www.facebook.com/juliojcodesigner/', label: 'Facebook' },
  { icon: '/icons/youtube.png', url: 'https://www.youtube.com/channel/UC3fuj2tV0exs8ileyx31J6g', label: 'YouTube' },
  { icon: '/icons/instagram.png', url: 'https://www.instagram.com/j3designer_/', label: 'Instagram' }
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div 
          className="footer-top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="footer-brand"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/logo.jpg" alt="J3Designer Logo" className="footer-logo" />
            <span className="footer-brand-name">J3Designer</span>
          </motion.div>

          <div className="footer-nav">
            {['home', 'portfolio', 'about', 'contact'].map((section, index) => (
              <motion.button 
                key={section}
                onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -2, color: 'var(--primary-color)' }}
                whileTap={{ scale: 0.95 }}
              >
                {section === 'home' ? 'Início' : section === 'portfolio' ? 'Portfólio' : section === 'about' ? 'Sobre' : 'Contato'}
              </motion.button>
            ))}
          </div>

          <div className="footer-socials">
            {SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={social.icon} alt={social.label} className="social-icon-img" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="copyright">
            © {currentYear} J3Designer. Todos os direitos reservados.
          </p>
          <p className="made-with">
            Feito com ♥ por Júlio Oliveira
          </p>
        </motion.div>
      </div>

      <motion.button 
        className="scroll-top-btn" 
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.4 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </motion.button>
    </footer>
  )
}

export default Footer
