import React, { useEffect, useState } from 'react';
import Hero from './Components/Hero';
import MarqueeStrip from './Components/MarqueeStrip';
import ReviewContent from './Components/ReviewContent';
import TrackList from './Components/TrackList';
import VisualShowcase from './Components/VisualShowcase';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-neutral-950 min-h-screen relative selection:bg-red-600 selection:text-white">
      <div className="bg-noise" />
      
      <AnimatePresence>
        {loading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-red-600 flex items-center justify-center"
          >
            <h1 className="font-anton text-9xl text-black uppercase tracking-tighter animate-pulse">
              Loading
            </h1>
          </motion.div>
        ) : (
          <>
            <Navigation />
            <main className="relative z-10">
              <Hero />
              <MarqueeStrip text="THE FALL OFF — A MASTERPIECE — J. COLE — 2025 — DREAMVILLE —" direction="left" />
              <ReviewContent />
              <MarqueeStrip text="LEGENDARY STATUS — NORTH CAROLINA — THE CLIMB BACK —" direction="right" theme="dark" />
              <VisualShowcase />
              <TrackList />
              <Footer />
            </main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
