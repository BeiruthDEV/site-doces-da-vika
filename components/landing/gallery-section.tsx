"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const portfolioItems = [
  {
    id: 1,
    title: "Hello Kitty",
    description: "Detalhes em dourado e laços perfeitos",
    category: "Temático",
    image: "/images/gallery-1.jpg",
  },
  {
    id: 2,
    title: "Vasco da Gama",
    description: "Logo em pasta americana com precisão",
    category: "Esportivo",
    image: "/images/gallery-2.jpg",
  },
  {
    id: 3,
    title: "Jardim Encantado",
    description: "Flores e borboletas delicadas",
    category: "Temático",
    image: "/images/gallery-3.jpg",
  },
  {
    id: 4,
    title: "Safari Baby",
    description: "Animais fofos para chá de bebê",
    category: "Infantil",
    image: "/images/gallery-4.jpg",
  },
  {
    id: 5,
    title: "Princesas Disney",
    description: "Cada princesa em miniatura",
    category: "Temático",
    image: "/images/gallery-5.jpg",
  },
  {
    id: 6,
    title: "Circo Vintage",
    description: "Detalhes retrô e coloridos",
    category: "Temático",
    image: "/images/gallery-6.jpg",
  },
]

// Animação de container para stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Animação de cada item
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function GallerySection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="galeria" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        {/* Header da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary mb-3 tracking-wider uppercase">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            Nossos Trabalhos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cada doce é uma obra de arte única, feita com carinho e atenção aos mínimos detalhes
          </p>
        </motion.div>

        {/* Grid de trabalhos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-card shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Imagem do trabalho */}
              <img 
                src={item.image} 
                alt={`Doces personalizados - ${item.title}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay com informações - aparece no hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent flex items-end p-6"
              >
                <div className="text-card">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary-foreground/70">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-1 text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
