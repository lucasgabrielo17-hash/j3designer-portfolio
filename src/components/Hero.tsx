import { motion } from 'framer-motion'
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

// Animation variants moved outside component
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-background">
        <motion.div 
          className="gradient-orb orb-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div 
          className="gradient-orb orb-2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
        <motion.div 
          className="gradient-orb orb-3"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.45, 0.25]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
      </div>

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={itemVariants}>
          <span className="badge-text">Portfólio 2021-2026</span>
        </motion.div>

        <motion.h1 className="hero-title" variants={titleVariants}>
          <span className="title-line">Júlio Oliveira</span>
          <span className="title-line gradient">J3Designer</span>
        </motion.h1>

        <motion.p className="hero-subtitle" variants={itemVariants}>
          Especialista em visualizações arquitetônicas, interiores, produtos 3D e ilustrações.
          <br />
          <span className="subtitle-en">Transformando ideias em realidade visual.</span>
        </motion.p>

        <motion.div className="hero-cta" variants={itemVariants}>
          <motion.button 
            className="cta-primary" 
            onClick={scrollToPortfolio}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Portfólio
          </motion.button>
          <motion.button 
            className="cta-secondary" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entre em Contato
          </motion.button>
        </motion.div>

        <motion.div className="hero-socials" variants={itemVariants}>
          {SOCIAL_LINKS.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={social.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <img src={social.icon} alt={social.label} className="social-icon-img" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <span className="scroll-icon">↓</span>
      </motion.div>
    </section>
  )
}

export default Hero
