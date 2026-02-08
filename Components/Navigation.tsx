import React from 'react';
import { Menu, Disc, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center mix-blend-difference text-white">
      <div className="flex items-center gap-2">
        <Disc className="w-6 h-6 animate-spin-slow" />
        <span className="font-mono text-xs uppercase tracking-widest hidden md:inline">{t.nav.vol}</span>
        <span className="font-mono text-xs uppercase tracking-widest md:hidden">T.F.O.</span>
      </div>
      
      <div className="hidden md:flex gap-8 font-oswald uppercase text-sm tracking-widest items-center">
        <a 
          href="#review" 
          onClick={(e) => scrollToSection(e, 'review')}
          className="hover:line-through decoration-red-600 decoration-2 cursor-pointer"
        >
          {t.nav.review}
        </a>
        <a 
          href="#tracks" 
          onClick={(e) => scrollToSection(e, 'tracks')}
          className="hover:line-through decoration-red-600 decoration-2 cursor-pointer"
        >
          {t.nav.tracks}
        </a>
        <a 
          href="#credits" 
          onClick={(e) => scrollToSection(e, 'credits')}
          className="hover:line-through decoration-red-600 decoration-2 cursor-pointer"
        >
          {t.nav.credits}
        </a>
        
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 border border-white/30 px-3 py-1 rounded-full hover:bg-white hover:text-black transition-colors"
        >
          <Globe size={12} />
          <span>{language === 'en' ? 'RU' : 'EN'}</span>
        </button>
      </div>

      <div className="flex items-center gap-4 md:hidden">
        <button 
            onClick={toggleLanguage}
            className="font-mono text-xs border border-white/30 px-2 py-1 rounded"
        >
            {language.toUpperCase()}
        </button>
        <button>
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
