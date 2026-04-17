import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ThemesGallery } from './pages/ThemesGallery';
import { Sobre } from './pages/Sobre';
import { Menu } from './pages/Menu';
import { Orcamento } from './pages/Orcamento';
import { FAQ } from './pages/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
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
