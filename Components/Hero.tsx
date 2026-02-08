import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-red-600 flex flex-col justify-center items-center">
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
        }}
      />

      <motion.div 
        style={{ y: y1, opacity }} 
        className="relative z-10 text-center px-4"
      >
        <motion.h2 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
          className="font-mono text-black text-sm md:text-xl mb-4 tracking-[0.5em] uppercase"
        >
          {t.hero.chapter}
        </motion.h2>

        <div className="relative">
            <motion.h1 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 1.6, ease: [0.76, 0, 0.24, 1] }}
            className="font-anton text-[22vw] leading-[0.8] text-black uppercase mix-blend-multiply origin-bottom"
            >
            THE
            </motion.h1>
            <motion.h1 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 1.8, ease: [0.76, 0, 0.24, 1] }}
            className="font-anton text-[22vw] leading-[0.8] text-black uppercase mix-blend-multiply origin-top"
            >
            FALL-OFF
            </motion.h1>
        </div>
      </motion.div>

      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-10 left-0 w-full flex justify-between px-6 md:px-12 font-oswald text-black uppercase text-lg"
      >
        <span>J. Cole</span>
        <span>2026</span>
        <span className="hidden md:inline">{t.hero.label}</span>
      </motion.div>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-black opacity-20 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-black opacity-20 hidden md:block" />
    </section>
  );
};

export default Hero;
