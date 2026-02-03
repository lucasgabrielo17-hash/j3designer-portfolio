import { useState, useEffect } from 'react'
import './About.css'

interface Skill {
  name: string
  color: string
}

interface Service {
  title: string
  description: string
  images: string[]
}

// Static data moved outside component
const SKILLS: Skill[] = [
  { name: '3ds Max', color: '#00A88E' },
  { name: 'V-Ray', color: '#1E88E5' },
  { name: 'Photoshop', color: '#31A8FF' },
  { name: 'Corona Renderer', color: '#F77F00' },
  { name: 'Illustrator', color: '#FF9A00' },
  { name: 'After Effects', color: '#9999FF' }
]

const SERVICES: Service[] = [
  {
    title: 'Visualizações Arquitetônicas',
    description: 'Renderizações 3D fotorrealistas de projetos arquitetônicos externos e internos.',
    images: [
      'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/5595841d-4d4e-444a-a43f-b64b73e28fd0_rw_1920.jpg?h=6960c5245cd0ddf9c8838a0bb1b70548',
      'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/a395a694-a04b-4d3e-a72f-106646e4d9a3_rw_1920.jpg?h=4d8f0f656fa1d80697db1a6818475f31',
      'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/6422d9b2-7ba7-4814-ba33-6c2117a0a9b3_rw_1920.jpg?h=32f75cee24a8a88e87d26e430cf886d1',
      'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/6cb83dc4-be6b-420b-bf8f-809451d22dec_rw_1920.jpg?h=be645367754d1d572435d08cebf8ec4d'
    ]
  },
  {
    title: 'Design de Interiores',
    description: 'Projetos de interiores residenciais e comerciais com foco em conforto e estética.',
    images: [
      'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/f5e3dd24-6f44-4aac-869b-fcdf4a93a213_rw_1920.jpg?h=8aeb68303beb22446dfabbae96c51b48',
      'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/7244a459-1b49-4aed-a53c-48a971549586_rw_1920.jpg?h=9b4bd2ff1f6f8638114dff17563730b9',
      'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/9691b2f3-38ef-450f-8220-d7019d5344c1_rw_3840.jpg?h=e7e7a30a222acf7af1d92edbc273819a',
      'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/1a56f374-73b6-4e51-8be2-9e167e717f3d_rw_1920.jpg?h=6c9e34ee2211d631fda726b3710998e7'
    ]
  },
  {
    title: 'Modelagem 3D',
    description: 'Modelagem de produtos, móveis e objetos para e-commerce e catálogos.',
    images: [
      'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/dc322d8d-af6d-4473-b48d-140f078abd93_rw_3840.jpg?h=8ee0c30e9650d4298b3e971e37a61ea0',
      'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/1c0f8fa6-b35f-4c57-8595-0cdda7350a23_rw_1920.jpg?h=c0a6762e0bab31442eee6ebe55b2e9df',
      'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/7a8c598e-318f-4302-be71-7c319b211de5_rw_1920.jpg?h=9915d8208bd68f30f361aa17facd99dc',
      'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/01c306d7-8059-478a-9937-2a282227ece8_rw_1920.jpg?h=6fc4c589610b90007a76ba6c2e38e9a7'
    ]
  },
  {
    title: 'Pós-Produção',
    description: 'Fusão 3D com fotografia, tratamento de imagens e retoque profissional.',
    images: [
      'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/f8a1b887-be58-4040-a5c5-45fe8c487bcc_rw_1920.jpg?h=e14bde1bc6a48efebc4895ad30979b0c',
      'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/e679298f-cb48-400c-b2ba-37b6a303ab48_rw_1920.jpg?h=83534aab9e0753792baba84c7acd2a5f',
      'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/b587f65a-21b6-470e-bb53-6b225e0e49f2_rw_1920.jpg?h=2086fb927a24db6048f0e307de7dd865',
      'https://cdn.myportfolio.com/08b6ac3e-7d76-4395-bcba-f2712a9c8db3/8e820df4-8647-40b1-a5d3-d0417bf78fa7_rw_1920.jpg?h=54d32122f85267fe94e4d01f28f61c8d'
    ]
  }
]

// Image transition interval
const IMAGE_TRANSITION_INTERVAL = 8000

const About = () => {
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<number, number>>(() => {
    const initial: Record<number, number> = {}
    SERVICES.forEach((_, index) => { initial[index] = 0 })
    return initial
  })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndices(prev => {
        const newIndices: Record<number, number> = { ...prev }
        SERVICES.forEach((service, index) => {
          if (hoveredCard !== index) {
            const currentIdx = prev[index] || 0
            newIndices[index] = (currentIdx + 1) % service.images.length
          }
        })
        return newIndices
      })
    }, IMAGE_TRANSITION_INTERVAL)

    return () => clearInterval(interval)
  }, [hoveredCard])

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <div className="header-content">
            <h2 className="section-title">
              <span className="title-main">Quem Sou</span>
              <span className="title-accent">Designer</span>
            </h2>
            <p className="section-subtitle">
              Designer e visualizador 3D apaixonado por transformar conceitos em imagens impactantes
            </p>
          </div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <p className="intro-text">
                Olá! Sou <strong>Júlio Oliveira</strong>, designer especializado em visualização 3D 
                com mais de 30 anos de experiência no mercado. Minha missão é dar vida aos projetos 
                dos meus clientes através de imagens fotorrealistas e impactantes.
              </p>
              <p className="intro-text">
                Trabalho com arquitetos, designers de interiores, construtoras e empresas de diversos 
                segmentos, ajudando-os a apresentar seus projetos de forma profissional e envolvente.
              </p>
            </div>

            <div className="skills-section">
              <h3 className="skills-title">Habilidades & Ferramentas</h3>
              <div className="skills-grid">
                {SKILLS.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="skill-badge"
                  >
                    <div 
                      className="skill-color-bar" 
                      style={{ backgroundColor: skill.color }}
                    />
                    <div className="skill-content">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src="/julio2.png" 
                alt="Júlio Oliveira" 
                className="profile-image"
              />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>

        <div className="services-section">
          <h3 className="services-title">Serviços</h3>
          <div className="services-grid">
            {SERVICES.map((service, index) => (
              <div 
                key={service.title} 
                className="service-card"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="service-image-bg">
                  <img 
                    src={service.images[currentImageIndices[index] || 0]} 
                    alt={service.title}
                    className="service-bg-img"
                  />
                </div>
                <div className="service-content">
                  <h4 className="service-name">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
