export const Menu = () => {
  return (
    <div className="pt-24 pb-32 overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 mb-16 text-center">
        <div className="inline-block mb-4 overflow-hidden">
          <span className="font-label text-xs md:text-sm uppercase tracking-[0.2em] text-primary/60">Viviane Beiruth</span>
        </div>
        <h2 className="font-headline text-4xl md:text-6xl italic leading-tight text-on-surface mb-4">O Menu Exclusivo</h2>
        <p className="font-body text-lg md:text-xl text-tertiary-dim max-w-md mx-auto font-light leading-relaxed">
          Sabores que esculpem memórias
        </p>
      </section>

      {/* Flavors Section (Ingredient Chips) */}
      <section className="mb-20 max-w-[1400px] mx-auto">
        <div className="px-6 mb-6 flex justify-between items-end">
          <h3 className="font-headline text-2xl md:text-3xl text-center w-full">Nossas Assinaturas</h3>
        </div>
        <div className="flex overflow-x-auto justify-center gap-4 px-6 pb-4">
          <div className="flex-none bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap shadow-sm hover:shadow-md transition-shadow cursor-default">
            Baunilha de Madagascar
          </div>
          <div className="flex-none bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap shadow-sm hover:shadow-md transition-shadow cursor-default">
            Pistache Siciliano
          </div>
          <div className="flex-none bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap shadow-sm hover:shadow-md transition-shadow cursor-default">
            Chocolate Belga 70%
          </div>
          <div className="flex-none bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap shadow-sm hover:shadow-md transition-shadow cursor-default">
            Frutas Vermelhas Frescas
          </div>
        </div>
      </section>

      {/* Product Line Grid (Editorial Style) */}
      <section className="space-y-32 px-6 max-w-[1000px] mx-auto">
        {/* Category 1: Bolos de Casamento */}
        <div className="relative group cursor-pointer">
          <div className="w-full md:w-3/4 aspect-video md:aspect-[16/9] rounded-xl overflow-hidden ml-auto">
            <img 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              alt="Bolos de casamento" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5lg7_wl97_Yx-ZjRYLfu4MSpeI1w7XnqI0k0LKIfmYHl3pp_K_r9KD_MdkpI2V0g5HQB_Iw9gxnOsPo2JpxXag3sAzCvy8TjzioasAbwRZCV6imXZC1WQL3ghbMea88ShhtjZVvA_BlFB9b-U7PKSrwREWhNv5xry21Gc8rTSWh8fhmM9LYj1ROg3tX3xubKOYT6geNsQ7YRqFOnY840vbmIznV0_vn3g6EZX3Un81ASMc07QwI-XUfzh2O8c_Xh6tvwAaVRB5iv1" 
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-12 w-[85%] md:w-1/2 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-lg border border-surface-container-high">
            <span className="font-label text-xs uppercase tracking-widest text-primary mb-2 block">Premium</span>
            <h4 className="font-headline text-3xl md:text-4xl mb-4 text-on-surface">Bolos de Casamento</h4>
            <p className="text-base text-tertiary font-light mb-6 leading-relaxed">Massas leves e recheios sofisticados. Explore nossos sabores de assinatura projetados para o grande dia.</p>
            <button className="text-primary font-semibold text-sm tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
              Consulte Valores <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Category 2: Brigadeiros Gourmet */}
        <div className="relative group cursor-pointer pb-10 md:pb-0">
          <div className="w-full md:w-3/4 aspect-video md:aspect-[16/9] rounded-xl overflow-hidden mr-auto">
            <img 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              alt="Brigadeiros Gourmet" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCONyxV3ke74LeVV4TARKeffD2QzPoxhbbhWKnBt3rtkW7hvxYpPXnVuUhKHULS2ibNmaS2QdgLp5DRUUQ1v7tcFWkidjR160mG3jWsbLsV3EZgduqtXfDSlYxgHdG9M6TPaG7Q4nslYxCp7uN7Qrax2vNowTKE6fSBL1YKHGKMV6ehzHoX_z_rJ5YQKAS3XLjh-OoFwW5pPnRd8Vph18p28ZncQMlp3ZRLz_pV2_bdcHGL_aJ_KncG9e4TNZt_ywqG1LrXSmXa434m" 
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-12 w-[85%] md:w-1/2 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-lg border border-surface-container-high md:text-right">
            <span className="font-label text-xs uppercase tracking-widest text-primary mb-2 block">Tradition</span>
            <h4 className="font-headline text-3xl md:text-4xl mb-4 text-on-surface">Brigadeiros Gourmet</h4>
            <p className="text-base text-tertiary font-light mb-6 leading-relaxed">O clássico elevado à arte. Diversos sabores com ingredientes originários da Europa e do Brasil.</p>
            <button className="text-primary font-semibold text-sm tracking-widest uppercase flex items-center gap-2 md:justify-end md:w-full group-hover:gap-4 transition-all">
              Consulte Valores <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Category 3: Modelagens Infantis */}
        <div className="relative group cursor-pointer">
          <div className="w-full md:w-3/4 aspect-video md:aspect-[16/9] rounded-xl overflow-hidden ml-auto">
            <img 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              alt="Modelagens Infantis" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_pX4Ggs_GIB4XSCUZtXYwTn27D_4_dJ6F0b3hwgATOuCepTBz8i0HuS705S1lty-YEra1-FRnpevVKJcoO_dKw-kGpboZ2Z8f3wX_if7TQBlyUSOBe7NlyqIm7nGTRVL91Wh8JvOtSOSOeJ2k1gphYNQyFrQRBvHt3z6MCEvRSpwWCzfYOtbMIonyHBm79fy6ajVrZtrfnm4_mq5-LChgRdYbUc9Yus-ph2W-vrCU2Z2XngTIZIbPtt_A6iQZQJ5UMy0gBXP6nq6V" 
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-12 w-[85%] md:w-1/2 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-lg border border-surface-container-high">
            <span className="font-label text-xs uppercase tracking-widest text-primary mb-2 block">L'Artiste</span>
            <h4 className="font-headline text-3xl md:text-4xl mb-4 text-on-surface">Modelagens Infantis</h4>
            <p className="text-base text-tertiary font-light mb-6 leading-relaxed">Personagens esculpidos em açúcar. Transmita o encantamento do universo infantil em doces incrivelmente detalhados.</p>
            <button className="text-primary font-semibold text-sm tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
              Consulte Valores <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
