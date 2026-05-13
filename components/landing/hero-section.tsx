import Image from "next/image";
import { ShoppingBag, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[750px] bg-[#C59BAB] overflow-hidden flex flex-col font-sans">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Glow radial atrás do produto */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] bg-[#DCAEC1] rounded-full blur-[100px] opacity-60 mix-blend-screen"></div>
        {/* Efeito vignette suave nas bordas */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_100%)]"></div>
      </div>
      
      {/* Header Premium */}
      <header className="relative z-50 w-full px-6 md:px-12 py-8 flex items-center justify-between pointer-events-auto">
        <div className="text-3xl md:text-4xl font-great-vibes text-white drop-shadow-md">
          Viviane Beiruth
        </div>
        
        <nav className="hidden md:flex items-center gap-12">
          {['ESPECIAIS', 'GALERIA', 'CONTATO'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white/90 text-[10px] font-bold tracking-[0.25em] hover:text-white transition-colors uppercase">
              {item}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20">
            <ShoppingBag size={16} />
          </button>
          <button className="px-7 py-3 rounded-full bg-white text-[#B3879B] text-[10px] font-bold tracking-[0.2em] hover:bg-gray-50 transition-all shadow-xl uppercase">
            Menu
          </button>
        </div>
      </header>

      {/* Conteúdo Principal Full-Screen */}
      <main className="flex-1 relative w-full flex items-center justify-center">
        
        {/* Tipografia Gigante de Fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-full text-center z-10 pointer-events-none flex justify-center items-center overflow-hidden">
          <h1 className="font-bebas text-[28vw] leading-[0.8] text-white font-bold tracking-tighter whitespace-nowrap opacity-95 drop-shadow-xl select-none">
            DOCES FINOS
          </h1>
        </div>

        {/* Produto Central como Protagonista */}
        <div className="relative z-30 flex flex-col items-center justify-center mt-[-8vh]">
          {/* Forma Orgânica Sutil (Círculo/Aura) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] max-w-[550px] aspect-square bg-gradient-to-tr from-[#EAA8C3] to-[#FADBE7] rounded-[45%_55%_60%_40%/40%_50%_60%_50%] blur-[2px] opacity-90 shadow-[0_0_80px_rgba(234,168,195,0.4)] mix-blend-overlay animate-[spin_60s_linear_infinite]"></div>
          
          {/* Imagem do Produto */}
          <div className="relative w-[40vw] max-w-[480px] min-w-[280px] aspect-[3/4] hover:scale-105 hover:-translate-y-2 transition-all duration-700 ease-out drop-shadow-[0_40px_50px_rgba(0,0,0,0.4)]">
            <Image
              src="/images/doce-destaque.png"
              alt="Doces Finos Personalizados"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Texto Auxiliar Lateral */}
        <div className="absolute right-12 top-[45%] z-20 hidden xl:block">
          <p className="text-white/80 text-[10px] font-bold tracking-[0.2em] uppercase">
            Qualidade, Sabor & Paixão
          </p>
        </div>

        {/* Linha Horizontal e Botão CTA */}
        <div className="absolute bottom-[22vh] w-full px-0 z-40 flex items-center justify-center">
          <div className="w-full max-w-[95vw] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent relative flex items-center justify-center">
            
            {/* CTA Button Premium */}
            <button className="absolute bg-[#111] text-white px-10 py-4 rounded-full text-[10px] font-bold tracking-[0.25em] uppercase hover:scale-105 hover:bg-black transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.5)] group overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Solicitar Orçamento
              </span>
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-white/10 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>
            
          </div>
        </div>

        {/* Base da Tela (Card, Texto Central e Profissional) */}
        <div className="absolute bottom-0 left-0 w-full h-[22vh] px-6 md:px-12 flex items-end justify-between pb-8 z-30 pointer-events-none">
          
          {/* Card Inferior Esquerdo (Mais Refinado) */}
          <div className="relative mb-2 pointer-events-auto hidden md:block group">
            <div className="absolute -top-3 left-6 w-8 h-8 rounded-full bg-white flex items-center justify-center z-20 shadow-lg group-hover:-translate-y-1 transition-transform">
              <Star className="w-4 h-4 text-[#C59BAB] fill-[#C59BAB]" />
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 pt-8 rounded-2xl shadow-2xl w-[190px] hover:bg-white/15 transition-all">
              <h3 className="font-bebas text-5xl text-white tracking-widest leading-none mb-1">100%</h3>
              <p className="text-white/80 text-[9px] font-bold tracking-[0.25em] uppercase">Doces Personalizados</p>
            </div>
          </div>

          {/* Texto Central Base */}
          <div className="text-center w-full max-w-md absolute left-1/2 -translate-x-1/2 bottom-8 mb-2 pointer-events-auto hidden sm:block">
            <h2 className="text-white font-medium text-lg mb-2 drop-shadow-md">Qualidade Excepcional!</h2>
            <p className="text-white/70 text-[11px] leading-relaxed max-w-xs mx-auto font-light">
              Cada detalhe conta. Cada festa merece magia. Viva momentos inesquecíveis com doces únicos, feitos sob medida para a sua comemoração.
            </p>
          </div>

          {/* Profissional (Canto Inferior Direito) */}
          <div className="absolute right-6 md:right-12 bottom-0 w-[200px] md:w-[280px] h-[280px] md:h-[380px] flex items-end justify-end pointer-events-auto">
            <div className="relative w-full h-full">
              {/* Máscara de gradiente para suavizar a base da imagem na linha de corte */}
              <Image
                src="/images/viviane.png"
                alt="Viviane Beiruth - Confeiteira"
                fill
                className="object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
              />
            </div>
          </div>

        </div>
      </main>
    </section>
  );
}
