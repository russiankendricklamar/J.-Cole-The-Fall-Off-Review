import React from 'react';
import { Menu, Disc } from 'lucide-react';

const Navigation: React.FC = () => {
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
        <span className="font-mono text-xs uppercase tracking-widest">"The Fall-Off" album</span>
      </div>
      
      <div className="hidden md:flex gap-8 font-oswald uppercase text-sm tracking-widest">
        <a 
          href="#review" 
          onClick={(e) => scrollToSection(e, 'review')}
          className="hover:line-through decoration-red-600 decoration-2 cursor-pointer"
        >
          Review
        </a>
        <a 
          href="#tracks" 
          onClick={(e) => scrollToSection(e, 'tracks')}
          className="hover:line-through decoration-red-600 decoration-2 cursor-pointer"
        >
          Tracks
        </a>
        <a 
          href="#credits" 
          onClick={(e) => scrollToSection(e, 'credits')}
          className="hover:line-through decoration-red-600 decoration-2 cursor-pointer"
        >
          Credits
        </a>
      </div>

      <button className="md:hidden">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
};

export default Navigation;
