import { motion } from 'framer-motion';
import { themeGallery } from '../data/mockData';
import { fadeUp, parallaxImage } from '../utils/animations';

export const ThemesGallery = () => {
  return (
    <section className="py-32 md:py-48 bg-surface-container-low max-w-[1400px] mx-auto px-6 md:px-12 overflow-hidden">
      <div className="text-center mb-32 max-w-2xl mx-auto">
        <motion.h1 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-headline text-5xl md:text-7xl text-on-surface font-light mb-8"
        >
          Galeria de <span className="italic text-primary">Temas</span>
        </motion.h1>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-body text-on-surface-variant text-lg font-light leading-relaxed"
        >
          A doçura transformada em arte botânica e arquitetônica para seus momentos mais especiais
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        {themeGallery.map((item, index) => {
          // Create an irregular staggered masonry flow
          let columnClasses = "md:col-span-4";
          let marginClasses = "";
          
          if (index % 4 === 0) {
            columnClasses = "md:col-span-7"; // Large hero image left
          } else if (index % 4 === 1) {
            columnClasses = "md:col-span-5"; // Standard image right
            marginClasses = "md:mt-48";
          } else if (index % 4 === 2) {
            columnClasses = "md:col-span-5 md:col-start-2"; // Shifted standard image left
          } else if (index % 4 === 3) {
            columnClasses = "md:col-span-6"; // Medium image right
            marginClasses = "md:-mt-24";
          }

          return (
            <motion.div 
               key={item.id} 
               className={`group cursor-pointer ${columnClasses} ${marginClasses} flex flex-col`}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               variants={fadeUp}
            >
              <div className="w-full relative overflow-hidden bg-surface mb-8 aspect-[4/5]">
                 <motion.img 
                   src={item.image} 
                   alt={item.title} 
                   className="absolute inset-0 w-full h-[120%] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                   variants={parallaxImage}
                   whileInView="visible"
                   initial="hidden"
                   viewport={{ once: false, amount: 0.1 }}
                 />
              </div>
              <div className="flex items-center gap-6">
                <span className="font-label text-xs tracking-widest text-primary uppercase">0{index + 1}</span>
                <div className="h-px bg-on-surface-variant/30 flex-1"></div>
              </div>
              <h3 className="font-headline text-3xl md:text-4xl text-on-surface mt-6 mb-4 font-light">{item.title}</h3>
              <p className="font-body text-on-surface-variant italic font-light text-lg">{item.description}</p>
            </motion.div>
          )
        })}
      </div>
      
      <div className="mt-32 text-center">
        <a href="#more" className="inline-flex items-center gap-4 font-label text-primary uppercase tracking-widest text-xs hover:text-primary-dim transition-colors group">
            <span className="w-12 h-px bg-primary group-hover:w-24 transition-all duration-500 ease-out"></span>
            <span>Carregar Arquivo</span>
            <span className="w-12 h-px bg-primary group-hover:w-24 transition-all duration-500 ease-out"></span>
        </a>
      </div>
    </section>
  );
};
