import { Link } from 'react-router-dom';
import { navigation } from '../data/mockData';

export const Header = () => {
  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent py-4">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6 max-w-[1400px] mx-auto">
        <Link to="/" className="font-headline text-2xl italic font-bold text-primary">Viviane Beiruth</Link>

        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="font-body text-sm font-medium tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex justify-center space-x-4">
          <Link to="/orcamento" className="flex items-center justify-center p-2 rounded-full hover:bg-surface-container transition-colors">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};