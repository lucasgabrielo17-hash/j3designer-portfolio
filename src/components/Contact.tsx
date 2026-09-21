import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-header scroll-reveal">
        <h2>Vamos Trabalhar Juntos?</h2>
        <p>Tem um projeto em mente? Entre em contato e vamos transformar sua ideia em realidade</p>
      </div>
      <div className="contact-container">
        <a className="contact-card scroll-reveal delay-1" href="mailto:julio.jco@hotmail.com">
          <span className="contact-icon">✉</span>
          <span className="contact-copy">
            <span className="contact-label">Email</span>
            <span className="contact-value">julio.jco@hotmail.com</span>
          </span>
        </a>

        <a className="contact-card scroll-reveal delay-2" href="https://wa.me/5541991959056" target="_blank" rel="noopener noreferrer">
          <span className="contact-icon contact-whatsapp">◔</span>
          <span className="contact-value contact-phone">41 9 9195-9056</span>
        </a>

        <a className="contact-card scroll-reveal delay-3" href="https://www.instagram.com/j3designer_/" target="_blank" rel="noopener noreferrer">
          <span className="contact-icon">
            <img src="/icons/instagram.png" alt="" />
          </span>
          <span className="contact-value contact-instagram">Instagram</span>
        </a>
      </div>
    </section>
  )
}

export default Contact
