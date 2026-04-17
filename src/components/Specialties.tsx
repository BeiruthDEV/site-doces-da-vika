import { motion } from 'framer-motion';
import { especialidades } from '../data/mockData';
import { fadeUp, parallaxImage, imageTiltHover } from '../utils/animations';

export const Specialties = () => {
  return (
    <section id="menu" className="py-32 bg-surface max-w-[1400px] mx-auto px-6 md:px-12 overflow-hidden">
      <div className="text-center mb-32">
        <motion.span 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-label text-xs tracking-[0.2em] text-primary uppercase block mb-6"
        >
          Nossas Criações
        </motion.span>
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-headline text-5xl md:text-6xl text-on-surface font-light"
        >
          O Menu <span className="italic text-primary">Exclusivo</span>
        </motion.h2>
      </div>

      <div className="flex flex-col gap-32">
        {especialidades.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
              {/* Image Side */}
              <motion.div 
                className={`md:col-span-7 h-[60vh] md:h-[80vh] overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                <motion.div 
                  className="w-full h-full relative overflow-hidden bg-surface-container-low"
                  whileHover={imageTiltHover}
                >
                  <motion.img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-[120%] object-cover"
                    variants={parallaxImage}
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: false, amount: 0.1 }}
                  />
                </motion.div>
              </motion.div>
              
              {/* Text Side */}
              <motion.div 
                className={`md:col-span-5 flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                <span className="font-label text-primary/50 text-6xl md:text-8xl mb-8 -ml-4 block opacity-20 pointer-events-none">
                  0{index + 1}
                </span>
                <h3 className="font-headline text-4xl mb-8 text-on-surface leading-tight">
                  {item.title}
                </h3>
                <p className="font-body text-on-surface-variant font-light mb-12 text-lg leading-relaxed max-w-sm">
                  {item.description}
                </p>
                <a 
                  href={item.link}
                  className="group inline-flex items-center gap-4 font-label text-primary uppercase tracking-widest text-xs hover:text-primary-dim transition-colors"
                >
                  <span>{item.linkText}</span>
                  <div className="w-8 h-px bg-primary group-hover:w-16 transition-all duration-500 ease-out"></div>
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

