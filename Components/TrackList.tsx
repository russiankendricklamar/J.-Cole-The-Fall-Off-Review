import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Track } from '../types';

const tracks: Track[] = [
  { id: 1, title: "29 Intro", duration: "0:57" },
  { id: 2, title: "Two Six", duration: "3:16" },
  { id: 3, title: "SAFETY", duration: "5:18" },
  { id: 4, title: "Run a Train (with Future)", duration: "4:02", featured: "feat. Future" },
  { id: 5, title: "Poor Thang", duration: "4:50" },
  { id: 6, title: "Legacy (with PJ)", duration: "3:55", featured: "feat. PJ" },
  { id: 7, title: "Bunce Road Blues (with Future & Tems)", duration: "5:10", featured: "feat. Future, Tems" },
  { id: 8, title: "WHO TF IZ U", duration: "4:37" },
  { id: 9, title: "Drum n Bass", duration: "4:14" },
  { id: 10, title: "The Let Out", duration: "4:14" },
  { id: 11, title: "Bombs in the Ville/Hit the Gas", duration: "4:06" },
  { id: 12, title: "Lonely at the Top (Bonus)", duration: "3:24" },
];

const TrackList: React.FC = () => {
  return (
    <section id="tracks" className="bg-neutral-950 py-24 px-6 md:px-12 relative">
      {/* Background Typography Texture */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none select-none">
        <div className="font-anton text-[20vw] leading-[0.8] text-neutral-800 text-center break-words opacity-20">
            WWWWWWWW
            00000000
            RRRRRRRR
            KKKKKKKK
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 text-center">
            <h2 className="font-anton text-5xl md:text-8xl text-white uppercase">Tracklist</h2>
            <div className="w-24 h-2 bg-red-600 mx-auto mt-4" />
        </div>

        <div className="flex flex-col border-t border-neutral-800">
          {tracks.map((track) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: track.id * 0.05 }}
              className="group flex items-center justify-between py-6 border-b border-neutral-800 hover:bg-red-600 hover:text-black transition-colors duration-300 cursor-pointer px-4"
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-sm opacity-50 group-hover:opacity-100">
                  {track.id.toString().padStart(2, '0')}
                </span>
                <button className="w-8 h-8 rounded-full border border-current flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={12} fill="currentColor" />
                </button>
                <div className="flex flex-col">
                    <span className="font-oswald text-xl md:text-3xl uppercase tracking-wide">
                    {track.title}
                    </span>
                    {track.featured && (
                        <span className="font-mono text-xs opacity-60 group-hover:opacity-80">
                            {track.featured}
                        </span>
                    )}
                </div>
              </div>
              
              <span className="font-mono text-sm group-hover:font-bold">
                {track.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackList;
