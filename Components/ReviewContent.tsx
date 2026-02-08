import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ReviewContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="review" className="bg-neutral-950 text-neutral-200 py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Sticky Title */}
        <div className="md:col-span-4 relative">
          <div className="sticky top-24">
            <h2 className="font-anton text-6xl md:text-8xl text-red-600 mb-8 leading-none whitespace-pre-line">
              {t.review.title}
            </h2>
            <div className="w-full h-[1px] bg-neutral-800 mb-4" />
            <div className="font-mono text-sm text-neutral-500">
              <p>{t.review.rating}: 9.2/10</p>
              <p>{t.review.genre}: HIP HOP</p>
              <p>{t.review.runtime}: 101 MIN</p>
            </div>
          </div>
        </div>

        {/* Content Columns */}
        <div className="md:col-span-8 space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-oswald text-2xl md:text-4xl leading-snug uppercase mb-8">
              {t.review.mainText}
            </p>
            <p className="font-mono text-neutral-400 text-sm md:text-base leading-relaxed">
              {t.review.subText}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-l-4 border-red-600 pl-8 py-2"
          >
            <Quote className="text-red-600 w-8 h-8 mb-4 opacity-50" />
            <p className="font-anton text-3xl md:text-5xl uppercase leading-tight text-white">
              {t.review.highlight}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div>
              <h3 className="font-oswald text-xl text-red-600 mb-4 uppercase">{t.review.prodTitle}</h3>
              <p className="font-mono text-neutral-400 text-sm leading-relaxed">
                {t.review.prodText}
              </p>
            </div>
            <div>
              <h3 className="font-oswald text-xl text-red-600 mb-4 uppercase">{t.review.lyricTitle}</h3>
              <p className="font-mono text-neutral-400 text-sm leading-relaxed">
                {t.review.lyricText}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReviewContent;
