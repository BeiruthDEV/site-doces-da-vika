/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface": "#FFFFFF", 
        "surface-alt": "#FFF7F9", 
        "gold": {
          DEFAULT: "#D4AF37",
          light: "#F3E5AB",
          dark: "#AA8C2C"
        },
        "pink": {
          DEFAULT: "#D9728B",
          light: "#FADBE2",
          dark: "#4D1B28", 
        },
        "on-surface": "#3A2E31",
        "on-surface-variant": "#7A686C",
      },
      boxShadow: {
        'lux': '0 20px 40px -15px rgba(217, 114, 139, 0.15)',
        'gold-glow': '0 4px 20px -5px rgba(212, 175, 55, 0.3)',
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2.5rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Playfair Display", "Noto Serif", "serif"], 
        "body": ["Plus Jakarta Sans", "sans-serif"],
        "label": ["Plus Jakarta Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}