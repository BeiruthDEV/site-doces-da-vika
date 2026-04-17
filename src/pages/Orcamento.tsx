export const Orcamento = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto text-on-surface">
      {/* Hero & Editorial Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Column: Title & Aesthetic Image */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <span className="font-label text-xs tracking-[0.2em] text-outline uppercase block">Viviane Beiruth</span>
            <h2 className="text-5xl md:text-7xl font-headline text-on-background leading-tight">
              Solicite um <span className="italic font-normal">Orçamento</span>
            </h2>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed max-w-md">
              Transformamos seus sonhos em delicadezas comestíveis. Cada detalhe é esculpido com a alma do artesanato francês.
            </p>
          </div>
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container shadow-sm transform lg:-rotate-2 transition-transform duration-700 hover:rotate-0">
              <img 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                alt="Bolo elegante" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMenVJQDcxy8wiIT-Wo-yChBVz8Gb-0wKxzxB9Ph8cE2PNpnNHU0vWRCjf6YX31cZ3K7_UqEkMET0ntEl6oJDyYoQiIZpHLOR3JrYNjFFrIr4LIbdiiLoj3OsiItewEIbTFeX9dBfeI3Gg4zLCk6TPjOHUb2a-10b0pEY7Qac1u5bWZCZr0m9zR-R05d4GS2R4TrIL7O7zsoj9eM4T48EXF0HHuuhLzPt0a11hQdRBIcHTyKdGp-XlgUvX_y4oXobiGCniL2p5yHfe" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-surface-container-lowest rounded-full p-4 flex items-center justify-center text-center shadow-lg hidden md:flex">
              <p className="font-headline italic text-primary text-sm">Artesanal &amp; Singular</p>
            </div>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 lg:p-16 rounded-xl shadow-md mt-12 lg:mt-24 border border-surface-container-high">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="group">
              <label className="font-label text-xs tracking-widest text-outline uppercase block mb-2 group-focus-within:text-primary transition-colors">
                Nome Completo
              </label>
              <input 
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body text-on-surface placeholder:text-outline-variant/50 focus:ring-0 focus:border-primary transition-all outline-none" 
                placeholder="Como deseja ser chamado(a)?" 
                type="text" 
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group">
                <label className="font-label text-xs tracking-widest text-outline uppercase block mb-2 group-focus-within:text-primary transition-colors">
                  Tipo de Evento
                </label>
                <select className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body text-on-surface focus:ring-0 focus:border-primary transition-all outline-none cursor-pointer">
                  <option disabled selected value="">Selecione a ocasião</option>
                  <option value="casamento">Casamento</option>
                  <option value="aniversario">Aniversário de Luxo</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="outro">Celebração Íntima</option>
                </select>
              </div>
              <div className="group">
                <label className="font-label text-xs tracking-widest text-outline uppercase block mb-2 group-focus-within:text-primary transition-colors">
                  Data
                </label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body text-on-surface focus:ring-0 focus:border-primary transition-all outline-none" 
                  type="date" 
                />
              </div>
            </div>
            <div className="group">
              <label className="font-label text-xs tracking-widest text-outline uppercase block mb-2 group-focus-within:text-primary transition-colors">
                Detalhes do Sonho
              </label>
              <textarea 
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body text-on-surface placeholder:text-outline-variant/50 focus:ring-0 focus:border-primary transition-all outline-none resize-none" 
                placeholder="Conte-nos sobre sabores, cores e a atmosfera do seu evento..." 
                rows={4}
              ></textarea>
            </div>
            <div className="pt-6">
              <button 
                className="w-full py-5 bg-primary text-on-primary font-label text-sm tracking-[0.2em] uppercase rounded-full hover:bg-primary-dim transition-all duration-500 shadow-md hover:shadow-xl transform hover:-translate-y-1" 
                type="submit"
              >
                Enviar Solicitação
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left border-t border-surface-container-high pt-20">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="material-symbols-outlined text-outline text-3xl">chat_bubble</span>
          <h3 className="font-label text-xs tracking-widest text-outline uppercase">WhatsApp</h3>
          <p className="font-body text-on-surface">+55 (21) 99999-0000</p>
          <a className="text-primary font-label text-xs tracking-widest uppercase hover:opacity-70 transition-opacity" href="#">
            Iniciar Conversa
          </a>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="material-symbols-outlined text-outline text-3xl">mail</span>
          <h3 className="font-label text-xs tracking-widest text-outline uppercase">Email</h3>
          <p className="font-body text-on-surface">atelier@vivianebeiruth.com</p>
          <a className="text-primary font-label text-xs tracking-widest uppercase hover:opacity-70 transition-opacity" href="#">
            Escrever Agora
          </a>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="material-symbols-outlined text-outline text-3xl">photo_camera</span>
          <h3 className="font-label text-xs tracking-widest text-outline uppercase">Instagram</h3>
          <p className="font-body text-on-surface">@docesdavika</p>
          <a className="text-primary font-label text-xs tracking-widest uppercase hover:opacity-70 transition-opacity" href="#">
            Seguir Galeria
          </a>
        </div>
      </section>
    </div>
  );
};
