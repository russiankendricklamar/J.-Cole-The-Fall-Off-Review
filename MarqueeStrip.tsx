import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeStripProps {
  text: string;
  direction?: 'left' | 'right';
  theme?: 'red' | 'dark';
}

const MarqueeStrip: React.FC<MarqueeStripProps> = ({ text, direction = 'left', theme = 'red' }) => {
  const bgClass = theme === 'red' ? 'bg-red-600' : 'bg-black border-y border-neutral-800';
  const textClass = theme === 'red' ? 'text-black' : 'text-white';

  return (
    <div className={`${bgClass} overflow-hidden py-4 md:py-8 flex relative z-20`}>
      <motion.div
        className={`whitespace-nowrap flex gap-4 ${textClass} font-anton text-4xl md:text-8xl uppercase tracking-tighter`}
        animate={{
          x: direction === 'left' ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
};

export default MarqueeStrip;