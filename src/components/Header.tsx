import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Header.css'

interface HeaderProps {
  activeSection: string
}

interface NavItem {
  id: string
  label: string
  labelEn: string
}

// Static data moved outside component - created once, not on every render
const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Início', labelEn: 'Home' },
  { id: 'portfolio', label: 'Portfólio', labelEn: 'Portfolio' },
  { id: 'about', label: 'Sobre', labelEn: 'About' },
  { id: 'contact', label: 'Contato', labelEn: 'Contact' }
]

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
      <motion.header 
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="header-container">
          <motion.div 
            className="logo" 
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/logo.jpg" alt="J3Designer Logo" className="logo-image" />
            <span className="logo-text">J3Designer</span>
          </motion.div>

          <nav className="nav-desktop">
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="nav-label">{item.label}</span>
                {activeSection === item.id && (
                  <motion.div 
                    className="nav-indicator"
                    layoutId="nav-indicator"
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          <motion.button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav 
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.id}
                className={`nav-mobile-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
