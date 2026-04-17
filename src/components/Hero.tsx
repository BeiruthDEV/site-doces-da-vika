import { motion } from 'framer-motion';
import { fadeUp, slowZoom, staggerContainer, textReveal } from '../utils/animations';

export const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center bg-surface overflow-hidden pt-24 md:pt-0">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full z-10 relative">
        <motion.div 
          className="md:col-span-6 relative z-20 flex flex-col justify-center h-full md:pr-12 mt-20 md:mt-0"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="overflow-hidden mb-6">
            <motion.span 
              variants={textReveal}
              className="font-label text-xs tracking-[0.3em] text-primary uppercase block"
            >
              Confeitaria de Alta Costura
            </motion.span>
          </motion.div>
          
          <motion.div className="overflow-hidden mb-8">
            <motion.h1 
              variants={textReveal}
              className="font-headline text-5xl md:text-7xl lg:text-[5.5rem] text-on-surface leading-[1.1] tracking-tight"
            >
              Adoçando <br />
              <span className="italic text-primary font-normal">cenas</span> inesquecíveis.
            </motion.h1>
          </motion.div>
          
          <motion.p 
            variants={fadeUp}
            className="font-body text-lg text-on-surface-variant mb-12 max-w-md font-light leading-relaxed"
          >
            Design em açúcar cultivado com extrema precisão. Bolos artísticos sublimes e doces finos arquitetônicos em Maricá e região.
          </motion.p>
          
          <motion.div variants={fadeUp}>
            <a href="#menu" className="group inline-flex items-center gap-4 font-label text-primary uppercase tracking-widest text-xs hover:text-primary-dim transition-colors">
              <span>Descobrir o Menu</span>
              <div className="w-8 h-px bg-primary group-hover:w-16 transition-all duration-500 ease-out"></div>
            </a>
          </motion.div>
        </motion.div>
        
        <div className="md:col-span-6 relative h-[60vh] md:h-[85vh] mt-8 md:mt-0 overflow-hidden rounded-bl-none md:rounded-bl-[4rem]">
          <motion.div 
            className="absolute inset-0 w-full h-full"
            variants={slowZoom}
            initial="hidden"
            animate="visible"
          >
            <img 
              src="/images/flores-casamento.jpg" 
              alt="Mesa de Doces Casamento Doces da Vika" 
              className="w-full h-full object-cover"
            />
            {/* Soft gradient overlay for depth, avoiding complete dark chapado */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-40"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
