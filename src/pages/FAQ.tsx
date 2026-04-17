export const FAQ = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-[1400px] mx-auto text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto text-center mb-24">
        <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
          Central de Apoio
        </span>
        <h2 className="font-headline text-5xl md:text-6xl text-on-surface mb-6 leading-tight">
          Dúvidas Frequentes
        </h2>
        <p className="font-headline italic text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto">
          Tudo sobre nossos processos e o cuidado artesanal em cada detalhe.
        </p>
      </header>

      {/* Asymmetric Decorative Element & FAQ List */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
        <div className="md:col-span-5 relative hidden md:block">
          <div className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden shadow-sm">
            <img 
              className="w-full h-full object-cover" 
              alt="Bolo elegante com flores de açúcar" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTAuyb04gZwpV8y6Oz0SGJCmjTEvXmxl4Ylhg2nVkbjvKhuegEbP9Dya150PcL2OpFCh1Ny9olgng0CkCdMfAz5eiUsP9Kz-KWNZlpaXcVXStVuT18K1ftGBS71_bWgI7-fH7ZqV-jlhHkJM3LGW3pZZ82a4z24ZXJkhW6mUn-c370Oa-Nca9XA3lfKVziz-Ueko053k-ZAA1_JTZ3Cwbi4n1g7GHbtXdx1KGYl9ly1zZZh09HZRCbWeue7cVi7FTfaJRbsxyR_yiL" 
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="md:col-span-7 md:pl-12">
          <div className="space-y-4">
            {/* FAQ Group 1 */}
            <div className="group border-none">
              <details className="bg-surface-container-low rounded-xl px-8 py-2 mb-4 transition-all duration-300 hover:bg-surface-container-highest cursor-pointer">
                <summary className="list-none outline-none py-6 flex justify-between items-center text-on-surface">
                  <span className="font-headline text-xl md:text-2xl">Qual a antecedência para pedidos?</span>
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">expand_more</span>
                </summary>
                <div className="pb-8 text-on-surface-variant font-body leading-relaxed max-w-2xl">
                  Sugerimos 6 meses para casamentos e 30 dias para festas menores. Nosso compromisso com a exclusividade limita o número de produções mensais para garantir que cada doce receba a atenção que merece.
                </div>
              </details>
            </div>
            
            {/* FAQ Group 2 */}
            <div className="group">
              <details className="bg-surface-container-low rounded-xl px-8 py-2 mb-4 transition-all duration-300 hover:bg-surface-container-highest cursor-pointer">
                <summary className="list-none outline-none py-6 flex justify-between items-center text-on-surface">
                  <span className="font-headline text-xl md:text-2xl">Vocês realizam entregas?</span>
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">expand_more</span>
                </summary>
                <div className="pb-8 text-on-surface-variant font-body leading-relaxed max-w-2xl">
                  Sim, nossa equipe especializada realiza o frete sob taxas. Contamos com veículos climatizados e embalagens estruturais para assegurar a integridade estética de nossos bolos e doces finos até o local do evento.
                </div>
              </details>
            </div>
            
            {/* FAQ Group 3 */}
            <div className="group">
              <details className="bg-surface-container-low rounded-xl px-8 py-2 transition-all duration-300 hover:bg-surface-container-highest cursor-pointer">
                <summary className="list-none outline-none py-6 flex justify-between items-center text-on-surface">
                  <span className="font-headline text-xl md:text-2xl">Como funciona a degustação?</span>
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">expand_more</span>
                </summary>
                <div className="pb-8 text-on-surface-variant font-body leading-relaxed max-w-2xl">
                  Agendamos degustações presenciais em nosso atelier para noivos. É um momento de consultoria sensorial, onde harmonizamos sabores e texturas enquanto desenhamos o projeto visual do seu evento.
                </div>
              </details>
            </div>
          </div>
          
          {/* Bento-style metadata chips */}
          <div className="mt-12 flex flex-wrap gap-3">
            <span className="px-5 py-2 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs uppercase tracking-wider">
              Atendimento Exclusivo
            </span>
            <span className="px-5 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-label text-xs uppercase tracking-wider">
              Design Autoral
            </span>
            <span className="px-5 py-2 rounded-full bg-primary-container/20 text-on-primary-container font-label text-xs uppercase tracking-wider">
              Ingredientes Premium
            </span>
          </div>
        </div>
      </section>

      {/* Aesthetic Quote Section */}
      <section className="max-w-5xl mx-auto py-24 text-center">
        <div className="h-px w-24 bg-primary/20 mx-auto mb-12"></div>
        <p className="font-headline italic text-3xl md:text-4xl text-on-surface leading-snug">
          "A confeitaria é a forma mais doce de arte. Cada criação em nosso atelier é pensada para se tornar uma memória eterna."
        </p>
        <div className="h-px w-24 bg-primary/20 mx-auto mt-12"></div>
      </section>

      {/* Help CTA */}
      <section className="max-w-3xl mx-auto bg-surface-container-low rounded-[2rem] p-12 text-center shadow-sm">
        <h3 className="font-headline text-3xl text-on-surface mb-4">Ainda tem dúvidas?</h3>
        <p className="font-body text-on-surface-variant mb-8">Nossa equipe está pronta para desenhar sua experiência personalizada via WhatsApp ou e-mail.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-primary text-on-primary rounded-xl font-label text-sm tracking-wide uppercase hover:bg-primary-dim transition-all duration-300 shadow-md">
            Falar no WhatsApp
          </button>
          <button className="px-8 py-4 bg-transparent text-primary border border-outline-variant/30 rounded-xl font-label text-sm tracking-wide uppercase hover:bg-surface-container-high transition-all duration-300">
            Enviar E-mail
          </button>
        </div>
      </section>
    </div>
  );
};
