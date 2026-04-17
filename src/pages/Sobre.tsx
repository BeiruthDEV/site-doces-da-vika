import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, slowZoom } from '../utils/animations';

export const Sobre = () => {
  return (
    <div className="pt-24 bg-surface">
      {/* Hero Section: Split-screen Asymmetric */}
      <section className="max-w-[1400px] mx-auto px-6 mb-32 md:mb-56">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="md:col-span-5 z-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="font-headline text-5xl md:text-7xl lg:text-[5.5rem] text-primary leading-[1.1] mb-8"
              variants={fadeUp}
            >
              Por trás da marca: <br />
              <span className="italic font-normal">Viviane Beiruth</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-on-surface-variant font-light max-w-md leading-relaxed font-body"
              variants={fadeUp}
            >
              A união entre a precisão técnica e a delicadeza artística, transformando açúcar e afeto em esculturas comestíveis.
            </motion.p>
          </motion.div>
          <div className="md:col-span-7 relative h-[70vh] w-full mt-12 md:mt-0">
            <motion.div 
              className="absolute right-0 top-0 w-full md:w-[85%] h-full overflow-hidden"
              variants={slowZoom}
              initial="hidden"
              animate="visible"
            >
              <img 
                className="w-full h-full object-cover" 
                alt="Viviane Beiruth banner de apresentação" 
                src="/images/sobre-viviane.png" 
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-16 left-0 md:-left-12 w-48 md:w-64 h-64 md:h-80 overflow-hidden shadow-2xl border-4 border-surface z-20"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <img 
                className="w-full h-full object-cover" 
                alt="Doces finos em fita rosa" 
                src="/images/brownie-2.jpg" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biography: Spacious Text on Muted Surface */}
      <section className="bg-surface-container-low py-32 md:py-48">
        <motion.div 
          className="max-w-4xl mx-auto px-6 h-full flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex flex-col gap-16">
            <motion.div className="flex items-center gap-4" variants={fadeUp}>
              <div className="h-[1px] w-16 bg-primary"></div>
              <span className="font-label text-xs tracking-[0.3em] uppercase text-primary">A Trajetória</span>
            </motion.div>
            
            <div className="space-y-12 font-headline text-3xl md:text-5xl leading-[1.3] text-on-surface font-light">
              <motion.p variants={fadeUp}>
                A confeitaria nunca foi apenas sobre receitas. Para Viviane, começou como um diálogo entre o olhar atento aos detalhes e a busca incessante pela perfeição estética. 
              </motion.p>
              
              <motion.p className="text-primary italic" variants={fadeUp}>
                "Acredito que o doce é o ponto alto de qualquer celebração; ele deve ser tão belo quanto o momento que ele representa."
              </motion.p>
              
              <motion.p variants={fadeUp} className="text-xl md:text-2xl text-on-surface-variant font-body leading-relaxed max-w-2xl">
                Com formação técnica sólida e uma alma inquieta por inovação, ela construiu o Atelier Viviane Beiruth sobre os pilares da exclusividade e do design autoral. Cada criação é tratada como uma peça única, onde o sabor equilibrado encontra a modelagem artística.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Philosophy: Cinematic List replacing 3-col Grid */}
      <section className="py-32 md:py-48 max-w-[1200px] mx-auto px-6 overflow-hidden">
        <motion.div 
          className="mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h3 className="font-headline text-5xl md:text-7xl text-on-surface mb-6 font-light">Nossa <span className="italic text-primary">Essência</span></h3>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-40">
          {[
            {
              id: '01',
              title: 'Ingredientes Premium',
              desc: 'Chocolates belgas, favas de baunilha de Madagascar e frutas frescas selecionadas formam a base absoluta de nossa alquimia criativa.',
              tag: 'Qualidade'
            },
            {
              id: '02',
              title: 'Modelagem Artística',
              desc: 'A maestria na escultura manual permite criar elementos decorativos com realismo e sofisticação sem precedentes, sem o uso de moldes rígidos.',
              tag: 'Técnica'
            },
            {
              id: '03',
              title: 'Amor & Detalhe',
              desc: 'Cada pedido é um sonho materializado. Dedicamos tempo exclusivo para que cada textura conte a história de quem está celebrando.',
              tag: 'Propósito'
            }
          ].map((item) => (
            <motion.div 
              key={item.id}
              className="flex flex-col md:flex-row gap-8 md:gap-24 items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <div className="font-headline text-7xl md:text-9xl text-surface-container-high leading-none -mt-4 opacity-50 pointer-events-none">
                {item.id}
              </div>
              <div className="flex-1 max-w-xl">
                <span className="font-label text-xs tracking-[0.2em] text-primary uppercase block mb-6">{item.tag}</span>
                <h4 className="font-headline text-4xl md:text-5xl text-on-surface mb-8 font-light">{item.title}</h4>
                <p className="text-xl text-on-surface-variant leading-relaxed font-body font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cinematic CTA */}
      <section className="bg-surface-container-lowest">
        <motion.div 
          className="max-w-[1400px] mx-auto px-6 py-32 md:py-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h3 className="font-headline text-5xl md:text-7xl mb-8 leading-tight text-on-surface font-light">
              Pronto para uma experiência inesquecível?
            </h3>
            <p className="text-on-surface-variant font-body text-xl mb-16 font-light">
              Agende uma degustação ou solicite um projeto personalizado de alta confeitaria para o seu evento.
            </p>
            <a href="/orcamento" className="group inline-flex items-center gap-6 font-label text-on-surface uppercase tracking-widest text-sm hover:text-primary transition-colors">
              <span>Iniciar Projeto</span>
              <div className="w-12 h-px bg-on-surface group-hover:bg-primary transition-colors duration-500"></div>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
