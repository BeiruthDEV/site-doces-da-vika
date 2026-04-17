import { motion } from 'framer-motion';
import { especialidades } from '../data/mockData';
import { fadeUp, parallaxImage, imageTiltHover } from '../utils/animations';

export const Specialties = () => {
  return (
    <section id="menu" className="py-32 bg-surface-alt w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-32">
          <motion.span 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-label text-xs tracking-[0.2em] text-gold uppercase block mb-6 font-semibold"
          >
            Nossas Criações
          </motion.span>
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-headline text-5xl md:text-6xl text-pink-dark font-light"
          >
            O Menu <span className="italic text-gold">Exclusivo</span>
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
                  {/* Lux Frame / Bento Box */}
                  <div className="w-full h-full relative p-3 md:p-4 rounded-4xl border-[1px] border-gold/40 bg-surface shadow-lux">
                    <motion.div 
                      className="w-full h-full relative overflow-hidden rounded-3xl"
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
                  </div>
                </motion.div>
                
                {/* Text Side */}
                <motion.div 
                  className={`md:col-span-5 flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUp}
                >
                  <span className="font-headline text-gold/30 text-6xl md:text-8xl mb-6 -ml-2 block opacity-40 pointer-events-none">
                    0{index + 1}
                  </span>
                  <h3 className="font-headline text-4xl mb-6 text-pink-dark leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-body text-on-surface-variant font-light mb-10 text-lg leading-relaxed max-w-md">
                    {item.description}
                  </p>
                  <a 
                    href={item.link}
                    className="group inline-flex items-center gap-4 font-label text-gold uppercase tracking-widest text-xs hover:text-pink-dark transition-colors font-semibold"
                  >
                    <span>{item.linkText}</span>
                    <div className="w-12 h-px bg-gold group-hover:bg-pink-dark group-hover:w-20 transition-all duration-500 ease-out"></div>
                  </a>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};