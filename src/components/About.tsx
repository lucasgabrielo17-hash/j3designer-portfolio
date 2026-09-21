import './About.css'

interface Tool {
  name: string
  mark: string
  className: string
  image?: string
}

const TOOLS: Tool[] = [
  { name: '3ds Max', mark: '3', image: '/3ds-max.png', className: 'tool-max' },
  { name: 'Photoshop', mark: 'Ps', className: 'tool-photoshop' },
  { name: 'Illustrator', mark: 'Ai', className: 'tool-illustrator' },
  { name: 'After Effects', mark: 'Ae', className: 'tool-after-effects' }
]

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-heading scroll-reveal">
          <h2>Quem Sou</h2>
        </div>

        <div className="about-main">
          <div className="about-copy scroll-reveal">
            <p className="about-paragraph">
              Olá! Sou <strong>Júlio Oliveira</strong> e atuo na área de design visual, com foco em
              criação de imagens 3D, renders arquitetônicos, visualização de produtos e produção de
              materiais audiovisuais para campanhas e apresentações de alto padrão.
            </p>
            <p className="about-paragraph">
              Tenho experiência na criação de imagens fotorrealistas, animações, pós-produção e
              desenvolvimento de materiais visuais com atenção aos detalhes, qualidade técnica e
              apelo comercial.
            </p>
          </div>

          <div className="about-photo scroll-reveal">
            <img src="/julio2.png" alt="Júlio Oliveira" />
          </div>
        </div>

        <div className="skills-section scroll-reveal">
          <h2 className="skills-title">Habilidades &amp; Ferramentas</h2>
          <div className="skills-grid">
            {TOOLS.map((tool) => (
              <div className={`tool-badge ${tool.className}`} key={tool.name} title={tool.name} aria-label={tool.name}>
                {tool.image ? (
                  <img src={tool.image} alt="" className="tool-image" />
                ) : (
                  <span className="tool-mark">{tool.mark}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
