"use client"

import { motion } from "framer-motion"
import { Lightbulb, ListChecks, Calculator, Gift } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Escolha o Tema",
    description: "Nos conte sobre a festa e o tema desejado",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Defina os Detalhes",
    description: "Especifique quantidade e personalizações",
  },
  {
    number: "03",
    icon: Calculator,
    title: "Receba o Orçamento",
    description: "Enviamos proposta com preço e prazo",
  },
  {
    number: "04",
    icon: Gift,
    title: "Receba seus Doces",
    description: "Entrega cuidadosa para sua festa",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
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
            Processo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            Como Funciona
          </h2>
        </motion.div>

        {/* Timeline de passos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Linha conectora (desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative text-center"
              >
                {/* Número e ícone */}
                <div className="relative z-10 inline-flex flex-col items-center">
                  {/* Círculo com ícone */}
                  <div className="w-20 h-20 rounded-full bg-card border-2 border-primary shadow-md flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Número */}
                  <span className="text-xs font-bold text-primary tracking-widest mb-2">
                    {step.number}
                  </span>
                </div>
                
                {/* Conteúdo */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground text-pretty">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
