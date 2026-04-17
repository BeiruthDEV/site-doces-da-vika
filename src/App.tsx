import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Specialties } from './components/Specialties';
import { ThemesGallery } from './components/ThemesGallery';
import { Footer } from './components/Footer';
import { Sobre } from './components/Sobre';
import { Menu } from './components/Menu';
import { Orcamento } from './components/Orcamento';
import { FAQ } from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Specialties />
            </>
          } />
          <Route path="/galeria" element={<ThemesGallery />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orcamento" element={<Orcamento />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
