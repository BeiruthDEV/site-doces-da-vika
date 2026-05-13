"use client"

import { motion } from "framer-motion"
import { Palette, Sparkles, Package } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Customização Total",
    description: "Qualquer tema, qualquer detalhe. Transformamos sua ideia em doces únicos e memoráveis.",
  },
  {
    icon: Sparkles,
    title: "Detalhes em Pasta Americana",
    description: "Técnica manual com perfeição em cada curva. Arte comestível que encanta.",
  },
  {
    icon: Package,
    title: "Entrega Segura",
    description: "Embalagem cuidadosa e entrega pontual para sua festa ser perfeita.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
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
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            Por Que Nos Escolher
          </h2>
        </motion.div>

        {/* Grid de features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group text-center p-8 rounded-2xl bg-card shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Ícone */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              
              {/* Título */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              {/* Descrição */}
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
