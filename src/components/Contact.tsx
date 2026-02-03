import { useState, ChangeEvent, FormEvent, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ContactInfo {
  icon: string
  label: string
  value: string
  href: string | null
}

// Static data moved outside component
const CONTACT_INFO: ContactInfo[] = [
  {
    icon: '✉',
    label: 'Email',
    value: 'julio.jco@hotmail.com',
    href: 'mailto:julio.jco@hotmail.com'
  },
  {
    icon: '⊙',
    label: 'Localização',
    value: 'Curitiba/PR - Brasil',
    href: null
  }
]

// Animation variants moved outside component
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const timeoutRef = useRef<number | null>(null)

  // Cleanup timeout on unmount to prevent memory leak
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true)
    timeoutRef.current = window.setTimeout(() => {
      setIsSubmitted(false)
      setFormData(INITIAL_FORM_DATA)
    }, 3000)
  }

  return (
    <section className="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-content">
            <h2 className="section-title">
              <span className="title-main">Vamos Trabalhar Juntos?</span>
              <span className="title-accent">Contato</span>
            </h2>
            <p className="section-subtitle">
              Tem um projeto em mente? Entre em contato e vamos transformar sua ideia em realidade
            </p>
          </div>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="info-cards">
              {CONTACT_INFO.map((info) => (
                <motion.div 
                  key={info.label} 
                  className="info-card"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="info-icon-wrapper">
                    <motion.div 
                      className="info-icon"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {info.icon}
                    </motion.div>
                  </div>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    {info.href ? (
                      <motion.a 
                        href={info.href} 
                        className="info-value"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {info.value}
                      </motion.a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div className="social-links" variants={itemVariants}>
              <h3 className="social-title">Siga-me</h3>
              <div className="social-buttons">
                <motion.a
                  href="https://www.facebook.com/juliojcodesigner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="social-icon">
                    <img src="/icons/facebook.png" alt="Facebook" className="social-icon-img" />
                  </span>
                  <span className="social-name">Facebook</span>
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/channel/UC3fuj2tV0exs8ileyx31J6g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="social-icon">
                    <img src="/icons/youtube.png" alt="YouTube" className="social-icon-img" />
                  </span>
                  <span className="social-name">YouTube</span>
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/j3designer_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="social-icon">
                    <img src="/icons/instagram.png" alt="Instagram" className="social-icon-img" />
                  </span>
                  <span className="social-name">Instagram</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-header">
              <h3 className="form-title">Envie uma mensagem</h3>
              <p className="form-description">Preencha o formulário abaixo e entrarei em contato em breve</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="name">Nome *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                  />
                </motion.div>
                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                  />
                </motion.div>
              </div>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="subject">Assunto *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Qual é o tema do projeto?"
                  required
                />
              </motion.div>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="message">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-me mais sobre seu projeto e suas necessidades..."
                  rows={6}
                  required
                />
              </motion.div>

              <motion.button 
                type="submit" 
                className={`submit-btn ${isSubmitted ? 'success' : ''}`} 
                disabled={isSubmitted}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitted ? (
                  <>
                    <span className="btn-icon">✓</span>
                    <span>Mensagem Enviada!</span>
                  </>
                ) : (
                  <span>Enviar Mensagem</span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
