import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Header.css'

interface HeaderProps {
  activeSection: string
}

interface NavItem {
  id: string
  label: string
}

// Static data moved outside component
const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Início' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'about', label: 'Sobre' },
  { id: 'contact', label: 'Contato' }
]

const INSTAGRAM_URL = 'https://www.instagram.com/j3designer_/'

const Header = ({ activeSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div 
            className="logo" 
            onClick={() => scrollToSection('home')}
          >
            <img src="/logo.png" alt="J3Designer Logo" className="logo-image" />
            <span className="logo-text">J3Designer</span>
          </div>

          <nav className="nav-desktop">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="nav-label">{item.label}</span>
                {activeSection === item.id && (
                  <motion.div 
                    className="nav-indicator"
                    layoutId="nav-indicator"
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="header-social"
              aria-label="Instagram"
            >
              <img src="/icons/instagram.png" alt="Instagram" className="header-social-icon" />
            </a>

            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav 
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`nav-mobile-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
