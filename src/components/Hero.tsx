import { motion } from 'framer-motion';
import { fadeUp, slowZoom, staggerContainer, textReveal, floatContinuous } from '../utils/animations';

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
              className="font-headline text-5xl md:text-7xl lg:text-[5.5rem] text-on-primary-fixed leading-[1.1] tracking-tight"
            >
              Adoçando <br />
              <span className="italic text-secondary font-normal drop-shadow-sm">cenas</span> inesquecíveis.
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
        
        <motion.div 
          className="md:col-span-6 relative h-[50vh] md:h-[75vh] mt-8 md:mt-0 flex items-center justify-center p-4 md:p-8"
          variants={floatContinuous}
          initial="hidden"
          animate="visible"
        >
          {/* Bento Box / Quadro de Luxo */}
          <div className="w-full h-full relative rounded-[2.5rem] border-[1px] border-secondary p-2 md:p-3 bg-surface-container-low shadow-2xl shadow-primary/10">
            <motion.div 
              className="absolute inset-0 w-full h-full p-2 md:p-3"
              variants={slowZoom}
              initial="hidden"
              animate="visible"
            >
              <div className="w-full h-full relative overflow-hidden rounded-[2rem]">
                <img 
                  src="/images/flores-casamento.jpg" 
                  alt="Mesa de Doces Casamento Doces da Vika" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-50"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
