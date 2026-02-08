import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Track } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const disc1: Track[] = [
  { id: 1, title: "29 Intro", duration: "0:57", spotifyUrl: "https://open.spotify.com/track/0EqH5Wz93cJtfUGv3vtQPY?si=471ad340b2aa4359" },
  { id: 2, title: "Two Six", duration: "3:16", spotifyUrl: "https://open.spotify.com/track/57ENogEkvFsU7Wmt3lvQMG?si=4dcdd8ef1e6a4f40" },
  { id: 3, title: "SAFETY", duration: "5:18", spotifyUrl: "https://open.spotify.com/track/3sJLoIc9y1b4gKAP8ZNsR9?si=529d1f2163594f5b" },
  { id: 4, title: "Run a Train (with Future)", duration: "4:02", featured: "feat. Future", spotifyUrl: "https://open.spotify.com/track/4pPJQ2p8jIsBuvxEIW2R99?si=56cab965a7934dfd" },
  { id: 5, title: "Poor Thang", duration: "4:50", spotifyUrl: "https://open.spotify.com/track/1nhNz1tWU8p5WvFAAgFW2h?si=a958f40027194779" },
  { id: 6, title: "Legacy (with PJ)", duration: "3:55", featured: "feat. PJ", spotifyUrl: "https://open.spotify.com/track/7oSdhQFfq5ScVjRkVcj4Ua?si=85e9ecc3756046ca" },
  { id: 7, title: "Bunce Road Blues (with Future & Tems)", duration: "5:10", featured: "feat. Future, Tems", spotifyUrl: "https://open.spotify.com/track/6jtqO14L18plBtpDTtUkFR?si=27ace798a1fe42dc" },
  { id: 8, title: "WHO TF IZ U", duration: "4:37", spotifyUrl: "https://open.spotify.com/track/5ZfOg71oANMaKmswvSEF2r?si=5948ef818c0a45aa" },
  { id: 9, title: "Drum n Bass", duration: "4:14", spotifyUrl: "https://open.spotify.com/track/290Vqn3zZX5QarUQra9LT2?si=d81fcb75fd4e4c71" },
  { id: 10, title: "The Let Out", duration: "4:14", spotifyUrl: "https://open.spotify.com/track/2aNaJLXE4SXbm9L23qpHTG?si=863eca2b2fca42f8" },
  { id: 11, title: "Bombs in the Ville/Hit the Gas", duration: "4:06", spotifyUrl: "https://open.spotify.com/track/0Awr3NZMkRHQFabkMxW1VT?si=35fc77da834d4115" },
  { id: 12, title: "Lonely at the Top (Bonus)", duration: "3:24", spotifyUrl: "https://open.spotify.com/track/3QQp1Y4zWok1YvzB4zutGy?si=63236e37c4e44a4e" },
];

const disc2: Track[] = [
  { id: 1, title: "39 Intro", duration: "6:06", spotifyUrl: "https://open.spotify.com/track/4DvoYgOZXnqmKuc2GzzFHz?si=3dd110ed243e49b2" },
  { id: 2, title: "The Fall-Off is Inevitable", duration: "2:56", featured: "with Bas", spotifyUrl: "https://open.spotify.com/track/3kUHIvjJ8p9UzeaeeqHkfg?si=5e1d9bad88184180" },
  { id: 3, title: "The Villiest (with Erykah Badu)", duration: "4:30", featured: "feat. Erykah Badu", spotifyUrl: "https://open.spotify.com/track/1lYM9PgB0QOk3pDo8h0UiN?si=1a1030a400584265" },
  { id: 4, title: "Old Dog (with Petey Pablo)", duration: "3:22", featured: "feat. Petey Pablo", spotifyUrl: "https://open.spotify.com/track/6WGJ7hPYHXu3aQ6x8GzigX?si=a611f4c13e054e75" },
  { id: 5, title: "Life Sentence'", duration: "4:12", spotifyUrl: "https://open.spotify.com/track/0pchHye1t8VA9gTHK3hAAZ?si=1fc7b8a9455b4ecf" },
  { id: 6, title: "Only You (with Burna Boy)", duration: "4:46", featured: "feat. Burna Boy", spotifyUrl: "https://open.spotify.com/track/0nn0Z1o1WI01pB7oEPiJeE?si=584998c5bacb4d3f" },
  { id: 7, title: "Man Up Above", duration: "4:58", spotifyUrl: "https://open.spotify.com/track/0C9B7SpULk3KlkOz3MhTEb?si=5a6d90abf2524eb5" },
  { id: 8, title: "I Love Her Again", duration: "5:32", spotifyUrl: "https://open.spotify.com/track/5pjf75G1zn9EEFa8iaCV5h?si=27790f66ecb64235" },
  { id: 9, title: "What If (with Morray)", duration: "5:19", featured: "feat. Morray", spotifyUrl: "https://open.spotify.com/track/2yb0MxSCkck68LhC6zGiiv?si=111b1e46036b48f6" },
  { id: 10, title: "Quik Stop", duration: "4:24", spotifyUrl: "https://open.spotify.com/track/050ECC7Yu78pTJP8PrMo8o?si=37f307ff14e44e0b" },
  { id: 11, title: "and the whole world is Ville", duration: "4:35", spotifyUrl: "https://open.spotify.com/track/1jEwnEPAUAPL5eLiMPt1Fd?si=84f7023725384f90" },
  { id: 12, title: "Ocean Way (Bonus)", duration: "2:34", spotifyUrl: "https://open.spotify.com/track/6tRoAQrFAnSccpbVPHDIHb?si=357d0ed242f8409e" },
];

const TrackItem: React.FC<{ track: Track; index: number }> = ({ track, index }) => (
  <motion.a
    href={track.spotifyUrl}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="group flex items-center justify-between py-6 border-b border-neutral-800 hover:bg-red-600 hover:text-black transition-colors duration-300 cursor-pointer px-4 block"
  >
    <div className="flex items-center gap-6">
      <span className="font-mono text-sm opacity-50 group-hover:opacity-100 w-6">
        {track.id.toString().padStart(2, '0')}
      </span>
      <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Play size={12} fill="currentColor" />
      </div>
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
  </motion.a>
);

const TrackList: React.FC = () => {
  const { t } = useLanguage();

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
            <h2 className="font-anton text-5xl md:text-8xl text-white uppercase">{t.tracks.title}</h2>
            <div className="w-24 h-2 bg-red-600 mx-auto mt-4" />
        </div>

        {/* Disc 1 */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-anton text-2xl md:text-4xl text-red-600 uppercase">{t.tracks.disc1}</span>
            <div className="h-[1px] bg-red-600 flex-grow opacity-50"></div>
          </motion.div>
          
          <div className="flex flex-col border-t border-neutral-800">
            {disc1.map((track, index) => (
              <TrackItem key={`d1-${track.id}`} track={track} index={index} />
            ))}
          </div>
        </div>

        {/* Disc 2 */}
        <div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-4 mb-6 mt-16"
          >
            <span className="font-anton text-2xl md:text-4xl text-red-600 uppercase">{t.tracks.disc2}</span>
            <div className="h-[1px] bg-red-600 flex-grow opacity-50"></div>
          </motion.div>

          <div className="flex flex-col border-t border-neutral-800">
            {disc2.map((track, index) => (
              <TrackItem key={`d2-${track.id}`} track={track} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrackList;
