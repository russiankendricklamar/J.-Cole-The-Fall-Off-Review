import React, { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://picsum.photos/seed/cole1/800/1000",
  "https://picsum.photos/seed/cole2/800/1000",
  "https://picsum.photos/seed/cole3/800/1000",
];

const VisualShowcase: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-red-600 py-24 overflow-hidden">
      <div className="px-6 md:px-12 mb-12 flex justify-between items-end border-b border-black pb-4">
        <h2 className="font-anton text-6xl md:text-9xl text-black uppercase leading-[0.8]">
          Visuals
        </h2>
        <span className="font-mono text-black hidden md:block">003 — GALLERY</span>
      </div>

      <div className="flex flex-col md:flex-row gap-4 px-4 overflow-x-auto pb-8 snap-x">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="min-w-[85vw] md:min-w-[30vw] h-[60vh] relative group cursor-none snap-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image Container */}
            <div className="w-full h-full overflow-hidden bg-black relative">
               <motion.img 
                src={src} 
                alt={`Visual ${index}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                style={{
                    filter: hoveredIndex === index ? 'contrast(1.2) brightness(0.8)' : 'grayscale(100%) contrast(1.5)'
                }}
               />
               
               {/* Red Overlay Effect */}
               <div className="absolute inset-0 bg-red-600 mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
               
               {/* Glitch Text Overlay */}
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="font-anton text-6xl text-white uppercase tracking-tighter">
                        Concept {index + 1}
                    </span>
               </div>
            </div>

            {/* Caption */}
            <div className="mt-2 flex justify-between font-mono text-xs text-black uppercase">
                <span>Figure .0{index + 1}</span>
                <span>The Fall Off Era</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VisualShowcase;