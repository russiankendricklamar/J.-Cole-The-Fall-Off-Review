import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="credits" className="bg-black text-white py-12 px-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
          <h2 className="font-anton text-[15vw] md:text-[8vw] leading-[0.8] text-red-600 uppercase">
            J. Cole
          </h2>
          <p className="font-oswald text-xl uppercase mt-2">The Fall Off</p>
        </div>

        <div className="grid grid-cols-2 gap-12 font-mono text-xs text-neutral-500 uppercase">
          <div>
            <h4 className="text-white mb-4">{t.footer.labelTitle}</h4>
            <p>Dreamville Records</p>
            <p>Roc Nation</p>
            <p>Interscope</p>
          </div>
          <div>
            <h4 className="text-white mb-4">{t.footer.designTitle}</h4>
            <p>Ref: Studio</p>
            <p>Dev: React/Tailwind</p>
            <p>{t.footer.year}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-24 flex justify-between font-mono text-xs text-neutral-700 uppercase">
        <span>© 2025 Dreamville Inc.</span>
        <span>{t.footer.rights}</span>
      </div>
    </footer>
  );
};

export default Footer;
