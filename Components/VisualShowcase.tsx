import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

// Helper to extract YouTube ID (kept just in case you want to mix types later)
const getYouTubeID = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

type VisualType = 'image' | 'video' | 'youtube';

interface VisualItem {
  id: string;
  type: VisualType;
  src: string;
  captionKey: 'coverMain' | 'clipAmari' | 'clipPunchin' | 'trailerPressure' | 'clipInterlude' | 'coverCD';
}

const visualsData: VisualItem[] = [
  {
    id: 'cover-main',
    type: 'image',
    src: 'https://www.thefalloff.com/_next/image?url=https%3A%2F%2Fdt7m7kl3brv3f.cloudfront.net%2Fimages%2Fkwniekqcnal2l2s9vz8v8g243rri&w=2048&q=75', 
    captionKey: 'coverMain',
  },
  {
    id: 'clip-amari',
    type: 'video', // Changed to local video
    src: '/amari.mp4', // File must be in public/amari.mp4
    captionKey: 'clipAmari',
  },
  {
    id: 'clip-punchin',
    type: 'video', // Changed to local video
    src: '/punchin.mp4', // File must be in public/punchin.mp4
    captionKey: 'clipPunchin',
  },
  {
    id: 'trailer-pressure',
    type: 'video', // Changed to local video
    src: '/pressure.mp4', // File must be in public/pressure.mp4
    captionKey: 'trailerPressure',
  },
  {
    id: 'clip-interlude',
    type: 'video', // Changed to local video
    src: '/interlude.mp4', // File must be in public/interlude.mp4
    captionKey: 'clipInterlude',
  },
  {
    id: 'cover-cd',
    type: 'image',
    src: 'https://www.thefalloff.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcd_background.db1855d0.jpg&w=1080&q=75&dpl=dpl_AwW3atdVQkZeUipKuB9oV46D5fnW',
    captionKey: 'coverCD',
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
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative flex-shrink-0 w-[85vw] md:w-[35vw] h-[50vh] md:h-[70vh] group overflow-hidden bg-black"
            >
              {item.type === 'youtube' ? (
                <div className="w-full h-full relative pointer-events-none overflow-hidden">
                    <iframe
                        src={`https://www.youtube.com/embed/${getYouTubeID(item.src)}?autoplay=1&mute=1&controls=0&loop=1&playlist=${getYouTubeID(item.src)}&playsinline=1&showinfo=0&rel=0&iv_load_policy=3`}
                        className="absolute top-1/2 left-1/2 w-[400%] h-[150%] -translate-x-1/2 -translate-y-1/2 opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        title={t.visuals.captions[item.captionKey]}
                    />
                </div>
              ) : item.type === 'video' ? (
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
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                <p className="font-anton text-white text-3xl uppercase">{t.visuals.captions[item.captionKey]}</p>
                <p className="font-mono text-red-500 text-xs uppercase tracking-wider mt-1">Figure {index + 1}</p>
              </div>
              
              {/* Center Interaction Text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-difference z-20">
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
