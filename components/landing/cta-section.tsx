"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Decorações de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground text-balance">
            Vamos Criar Algo Especial?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/90 max-w-xl mx-auto text-pretty">
            Entre em contato e transforme sua festa em um momento inesquecível com doces personalizados.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              variant="secondary"
              className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-shadow bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a
                href="https://wa.me/5500000000000?text=Olá! Gostaria de solicitar um orçamento de doces personalizados."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="tel:+5500000000000">
                <Phone className="mr-2 h-5 w-5" />
                (00) 00000-0000
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
