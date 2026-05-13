"use client"

import { Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-secondary/50 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Nome */}
          <div className="text-center md:text-left">
            <span className="font-semibold text-foreground">Viviane Beiruth</span>
            <p className="text-sm text-muted-foreground mt-1">
              Doces Personalizados em Pasta Americana
            </p>
          </div>

          {/* Redes sociais */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
