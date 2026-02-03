import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioCategories, PortfolioCategory, PortfolioItem } from '../data/portfolio'
import './Portfolio.css'

// Animation variants moved outside component - created once, not on every render
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
}

const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 }
  }
}

// Initialize currentImageIndex outside to avoid recreation
const getInitialImageIndex = (): Record<string, number> => {
  const initial: Record<string, number> = {}
  portfolioCategories.forEach(cat => { initial[cat.id] = 0 })
  return initial
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory | null>(null)
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [imageLoading, setImageLoading] = useState<Set<string>>(new Set())
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>(getInitialImageIndex)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [hoveredImageIndex, setHoveredImageIndex] = useState<Record<string, number | null>>({})

  // Cleanup body overflow on unmount to prevent memory leak
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Auto-rotate images every 5 seconds (only when not hovering)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newIndices: Record<string, number> = { ...prev }
        portfolioCategories.forEach(category => {
          // Only rotate if not hovering on this card
          if (hoveredCard !== category.id) {
            const currentIdx = prev[category.id] || 0
            newIndices[category.id] = (currentIdx + 1) % category.items.length
          }
        })
        return newIndices
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [hoveredCard])

  const getCurrentImage = useCallback((category: PortfolioCategory): string => {
    // If hovering on a thumbnail, show that image
    const hoveredIdx = hoveredImageIndex[category.id]
    if (hoveredIdx !== null && hoveredIdx !== undefined) {
      return category.items[hoveredIdx]?.image || category.coverImage
    }
    // Otherwise show the rotating image
    const index = currentImageIndex[category.id] || 0
    return category.items[index]?.image || category.coverImage
  }, [currentImageIndex, hoveredImageIndex])

  const getCurrentItem = useCallback((category: PortfolioCategory): PortfolioItem => {
    const hoveredIdx = hoveredImageIndex[category.id]
    if (hoveredIdx !== null && hoveredIdx !== undefined) {
      return category.items[hoveredIdx] || category.items[0]
    }
    const index = currentImageIndex[category.id] || 0
    return category.items[index] || category.items[0]
  }, [currentImageIndex, hoveredImageIndex])

  const handleThumbnailHover = (categoryId: string, index: number | null) => {
    setHoveredImageIndex(prev => ({
      ...prev,
      [categoryId]: index
    }))
  }

  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages(prev => new Set(prev).add(imageUrl))
    setImageLoading(prev => {
      const next = new Set(prev)
      next.delete(imageUrl)
      return next
    })
  }

  const handleImageLoadStart = (imageUrl: string) => {
    setImageLoading(prev => new Set(prev).add(imageUrl))
  }

  const openModal = (category: PortfolioCategory, item: PortfolioItem) => {
    setSelectedCategory(category)
    setSelectedItem(item)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedItem(null)
    setSelectedCategory(null)
    document.body.style.overflow = 'unset'
  }

  const navigateItem = (direction: 'next' | 'prev') => {
    if (!selectedCategory || !selectedItem) return
    
    const currentIndex = selectedCategory.items.findIndex(item => item.id === selectedItem.id)
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % selectedCategory.items.length
      : (currentIndex - 1 + selectedCategory.items.length) % selectedCategory.items.length
    
    setSelectedItem(selectedCategory.items[newIndex])
  }

  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <motion.div 
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-content">
            <h2 className="section-title">
              <span className="title-main">Portfólio</span>
              <span className="title-accent">Criativo</span>
            </h2>
            <p className="section-subtitle">
              Explore meus projetos em diferentes áreas do design e visualização 3D
            </p>
          </div>
        </motion.div>

        <div className="portfolio-grid">
          {portfolioCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="portfolio-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => {
                setHoveredCard(null)
                handleThumbnailHover(category.id, null)
              }}
            >
              <div 
                className="card-image-wrapper"
                onClick={() => openModal(category, getCurrentItem(category))}
                style={{ cursor: 'pointer' }}
              >
                <AnimatePresence initial={false}>
                  <motion.img 
                    key={`${category.id}-${hoveredImageIndex[category.id] ?? currentImageIndex[category.id] ?? 0}`}
                    src={getCurrentImage(category)} 
                    alt={category.title}
                    className="card-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  />
                </AnimatePresence>
              </div>
              
              <div className="card-content">
                <div className="card-meta">
                  <span className="card-year">{category.year}</span>
                  <span className="card-count">{category.items.length} projetos</span>
                </div>
                <h3 className="card-title">{category.title}</h3>
                <p className="card-description">{category.description}</p>
                
                <div className="card-items">
                  {category.items.slice(0, 5).map((item, itemIndex) => (
                    <motion.div 
                      key={item.id}
                      className="mini-item"
                      onClick={() => openModal(category, item)}
                      onMouseEnter={() => handleThumbnailHover(category.id, itemIndex)}
                      onMouseLeave={() => handleThumbnailHover(category.id, null)}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + itemIndex * 0.1 }}
                    >
                      {imageLoading.has(item.image) && (
                        <div className="mini-loader" />
                      )}
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        loading="lazy"
                        onLoadStart={() => handleImageLoadStart(item.image)}
                        onLoad={() => handleImageLoad(item.image)}
                        style={{ opacity: loadedImages.has(item.image) ? 1 : 0 }}
                      />
                      {item.isVideo && (
                        <div className="video-play-icon">▶</div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && selectedCategory && (
          <motion.div 
            className="modal-overlay" 
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="modal-content" 
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.button 
                className="modal-close" 
                onClick={closeModal}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
              
              <div className="modal-image-container">
                <AnimatePresence mode="wait">
                  {selectedItem.isVideo && selectedItem.videoUrl ? (
                    <motion.div
                      key={selectedItem.id}
                      className="modal-video"
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="video-wrapper">
                        <iframe
                          src={selectedItem.videoUrl}
                          title={selectedItem.title}
                          frameBorder="0"
                          allowFullScreen
                          className="video-iframe"
                        />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.img 
                      key={selectedItem.id}
                      src={selectedItem.image} 
                      alt={selectedItem.title}
                      className="modal-image"
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    />
                  )}
                </AnimatePresence>
                
                {selectedCategory.items.length > 1 && (
                  <>
                    <motion.button 
                      className="modal-nav prev" 
                      onClick={() => navigateItem('prev')}
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      ←
                    </motion.button>
                    <motion.button 
                      className="modal-nav next" 
                      onClick={() => navigateItem('next')}
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      →
                    </motion.button>
                  </>
                )}
              </div>
              
              <motion.div 
                className="modal-info"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <span className="modal-category">{selectedCategory.title}</span>
                <h3 className="modal-title">{selectedItem.title}</h3>
                <p className="modal-description">
                  {selectedItem.description.split('O que fiz:').map((part, index) => (
                    index === 0 ? part : (
                      <React.Fragment key={index}>
                        <br /><br />
                        O que fiz:{part}
                      </React.Fragment>
                    )
                  ))}
                </p>
                
                <div className="modal-thumbnails">
                  {selectedCategory.items.map((item, index) => (
                    <motion.button
                      key={item.id}
                      className={`thumbnail ${selectedItem.id === item.id ? 'active' : ''}`}
                      onClick={() => setSelectedItem(item)}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <img src={item.image} alt={item.title} />
                      {item.isVideo && (
                        <div className="video-play-icon">▶</div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio
