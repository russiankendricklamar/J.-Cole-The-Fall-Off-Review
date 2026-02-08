import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Helper to extract YouTube ID
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
  poster?: string;
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
    type: 'video',
    src: '/amari.mp4',
    poster: 'https://img.youtube.com/vi/6g6LErEaF-s/maxresdefault.jpg',
    captionKey: 'clipAmari',
  },
  {
    id: 'clip-punchin',
    type: 'video',
    src: '/punchin.mp4',
    poster: 'https://img.youtube.com/vi/SXX-YotJDVU/maxresdefault.jpg',
    captionKey: 'clipPunchin',
  },
  {
    id: 'trailer-pressure',
    type: 'video',
    src: '/pressure.mp4',
    poster: 'https://img.youtube.com/vi/sBu5TZ08dOs/maxresdefault.jpg',
    captionKey: 'trailerPressure',
  },
  {
    id: 'clip-interlude',
    type: 'video',
    src: '/interlude.mp4',
    poster: 'https://img.youtube.com/vi/pvf_Qv4rmLM/maxresdefault.jpg',
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
  const [selectedItem, setSelectedItem] = useState<VisualItem | null>(null);

  // Duplicate items for seamless marquee effect
  const marqueeItems = [...visualsData, ...visualsData];

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

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
          animate={{ x: selectedItem ? 0 : "-50%" }} // Pause animation when modal is open (optional, but good UX)
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ animationPlayState: selectedItem ? 'paused' : 'running' }}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => setSelectedItem(item)}
              className="relative flex-shrink-0 w-[85vw] md:w-[35vw] h-[50vh] md:h-[70vh] group overflow-hidden bg-black cursor-pointer"
            >
              {item.type === 'youtube' ? (
                <div className="w-full h-full relative pointer-events-none overflow-hidden">
                    <iframe
                        src={`https://www.youtube.com/embed/${getYouTubeID(item.src)}?autoplay=0&mute=1&controls=0&loop=1&playlist=${getYouTubeID(item.src)}&playsinline=1&showinfo=0&rel=0&iv_load_policy=3`}
                        className="absolute top-1/2 left-1/2 w-[400%] h-[150%] -translate-x-1/2 -translate-y-1/2 opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                        title={t.visuals.captions[item.captionKey]}
                    />
                </div>
              ) : item.type === 'video' ? (
                <video
                  src={item.src}
                  poster={item.poster}
                  loop
                  muted
                  playsInline
                  // We don't autoplay here if we want performance, but for the "alive" feel we keep it
                  // However, clicking it opens the full player
                  autoPlay 
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

              {/* Play Icon Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                 <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm">
                    {item.type !== 'image' ? <Play className="w-8 h-8 text-white fill-white ml-1" /> : <span className="font-anton text-white text-xl">VIEW</span>}
                 </div>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10 pointer-events-none">
                <p className="font-anton text-white text-3xl uppercase">{t.visuals.captions[item.captionKey]}</p>
                <p className="font-mono text-red-500 text-xs uppercase tracking-wider mt-1">Figure {index + 1}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Full Screen Player Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-12"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 md:top-12 md:right-12 text-white hover:text-red-600 transition-colors z-50 group flex items-center gap-2"
            >
              <span className="font-mono text-sm uppercase hidden md:block">Close</span>
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-7xl max-h-[85vh] aspect-video relative shadow-2xl bg-black border border-neutral-800"
            >
              {selectedItem.type === 'video' && (
                <video
                  src={selectedItem.src}
                  poster={selectedItem.poster}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              )}
              
              {selectedItem.type === 'youtube' && (
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeID(selectedItem.src)}?autoplay=1&rel=0&showinfo=0`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={t.visuals.captions[selectedItem.captionKey]}
                />
              )}

              {selectedItem.type === 'image' && (
                <img 
                  src={selectedItem.src}
                  alt={t.visuals.captions[selectedItem.captionKey]}
                  className="w-full h-full object-contain"
                />
              )}
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center"
            >
                <h3 className="font-anton text-2xl md:text-4xl text-white uppercase tracking-wide">
                    {t.visuals.captions[selectedItem.captionKey]}
                </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VisualShowcase;
