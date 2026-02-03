import { useState, ChangeEvent, FormEvent, useEffect, useRef } from 'react'
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

const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      // Check if response has content before parsing JSON
      const text = await response.text()
      const data = text ? JSON.parse(text) : {}

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem')
      }

      setSubmitStatus('success')
      timeoutRef.current = window.setTimeout(() => {
        setSubmitStatus('idle')
        setFormData(INITIAL_FORM_DATA)
      }, 3000)
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Erro ao enviar mensagem')
      timeoutRef.current = window.setTimeout(() => {
        setSubmitStatus('idle')
        setErrorMessage('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-header scroll-reveal">
          <div className="header-content">
            <h2 className="section-title">
              <span className="title-main">Vamos Trabalhar Juntos?</span>
              <span className="title-accent">Contato</span>
            </h2>
            <p className="section-subtitle">
              Tem um projeto em mente? Entre em contato e vamos transformar sua ideia em realidade
            </p>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-info scroll-reveal from-left delay-1">
            <div className="info-cards">
              {CONTACT_INFO.map((info, index) => (
                <div 
                  key={info.label} 
                  className={`info-card scroll-reveal delay-${index + 1}`}
                >
                  <div className="info-icon-wrapper">
                    <div className="info-icon">
                      {info.icon}
                    </div>
                  </div>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="info-value"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links scroll-reveal delay-3">
              <h3 className="social-title">Siga-me</h3>
              <div className="social-buttons">
                <a
                  href="https://www.facebook.com/juliojcodesigner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <span className="social-icon">
                    <img src="/icons/facebook.png" alt="Facebook" className="social-icon-img" />
                  </span>
                  <span className="social-name">Facebook</span>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC3fuj2tV0exs8ileyx31J6g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <span className="social-icon">
                    <img src="/icons/youtube.png" alt="YouTube" className="social-icon-img" />
                  </span>
                  <span className="social-name">YouTube</span>
                </a>
                <a
                  href="https://www.instagram.com/j3designer_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <span className="social-icon">
                    <img src="/icons/instagram.png" alt="Instagram" className="social-icon-img" />
                  </span>
                  <span className="social-name">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper scroll-reveal from-right delay-2">
            <div className="form-header">
              <h3 className="form-title">Envie uma mensagem</h3>
              <p className="form-description">Preencha o formulário abaixo e entrarei em contato em breve</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
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
                </div>
                <div className="form-group">
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
                </div>
              </div>
              
              <div className="form-group">
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
              </div>
              
              <div className="form-group">
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
              </div>

              {submitStatus === 'error' && (
                <div className="form-error">
                  {errorMessage}
                </div>
              )}

              <button 
                type="submit" 
                className={`submit-btn ${submitStatus === 'success' ? 'success' : ''} ${submitStatus === 'error' ? 'error' : ''}`} 
                disabled={isSubmitting || submitStatus === 'success'}
              >
                {isSubmitting ? (
                  <>
                    <span className="btn-spinner"></span>
                    <span>Enviando...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <span className="btn-icon">✓</span>
                    <span>Mensagem Enviada!</span>
                  </>
                ) : (
                  <span>Enviar Mensagem</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
