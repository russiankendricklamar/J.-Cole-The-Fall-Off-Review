import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

type VisualType = 'image' | 'video';

interface VisualItem {
  id: string;
  type: VisualType;
  src: string;
  captionKey: 'cover' | 'trailer' | 'concept1' | 'visualizer' | 'concept2';
}

const visualsData: VisualItem[] = [
  {
    id: 'cover',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop', 
    captionKey: 'cover',
  },
  {
    id: 'trailer',
    type: 'video',
    src: 'https://videos.pexels.com/video-files/5532772/5532772-uhd_2560_1440_25fps.mp4',
    captionKey: 'trailer',
  },
  {
    id: 'concept1',
    type: 'image',
    src: 'https://picsum.photos/seed/cole_art_1/800/1000',
    captionKey: 'concept1',
  },
  {
    id: 'studio',
    type: 'video',
    src: 'https://videos.pexels.com/video-files/3014168/3014168-uhd_2560_1440_25fps.mp4',
    captionKey: 'visualizer',
  },
  {
    id: 'concept2',
    type: 'image',
    src: 'https://picsum.photos/seed/cole_art_2/800/1000',
    captionKey: 'concept2',
  },
];

const VisualShowcase: React.FC = () => {
  const { t } = useLanguage();
  // Duplicate items for seamless marquee effect
  const marqueeItems = [...visualsData, ...visualsData];

  return (
    <section className="bg-red-600 py-24 overflow-hidden relative">
      <div className="px-6 md:px-12 mb-12 flex justify-between items-end border-b border-black pb-4 z-10 relative">
        <h2 className="font-anton text-6xl md:text-9xl text-black uppercase leading-[0.8]">
          {t.visuals.title}
        </h2>
        <span className="font-mono text-black hidden md:block">{t.visuals.gallery}</span>
      </div>

      <div className="relative w-full">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative flex-shrink-0 w-[85vw] md:w-[35vw] h-[50vh] md:h-[70vh] group overflow-hidden bg-black"
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                />
              ) : (
                <img
                  src={item.src}
                  alt={t.visuals.captions[item.captionKey]}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              )}

              {/* Red Overlay Effect */}
              <div className="absolute inset-0 bg-red-600 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <p className="font-anton text-white text-3xl uppercase">{t.visuals.captions[item.captionKey]}</p>
                <p className="font-mono text-red-500 text-xs uppercase tracking-wider mt-1">Figure {index + 1}</p>
              </div>
              
              {/* Center Interaction Text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-difference">
                 <span className="font-anton text-6xl text-white uppercase tracking-tighter text-stroke-white">
                    {t.visuals.view}
                 </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisualShowcase;
