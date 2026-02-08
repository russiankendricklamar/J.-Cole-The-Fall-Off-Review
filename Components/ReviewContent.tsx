import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const ReviewContent: React.FC = () => {
  return (
    <section id="review" className="bg-neutral-950 text-neutral-200 py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Sticky Title */}
        <div className="md:col-span-4 relative">
          <div className="sticky top-24">
            <h2 className="font-anton text-6xl md:text-8xl text-red-600 mb-8 leading-none">
              A KING<br/>BOWS<br/>OUT
            </h2>
            <div className="w-full h-[1px] bg-neutral-800 mb-4" />
            <div className="font-mono text-sm text-neutral-500">
              <p>RATING: 9.8/10</p>
              <p>GENRE: HIP HOP</p>
              <p>RUNTIME: 64 MIN</p>
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
              "The Fall Off" isn't a decline; it's a controlled demolition of the throne he built, leaving nothing but dust and legacy.
            </p>
            <p className="font-mono text-neutral-400 text-sm md:text-base leading-relaxed">
              For years, Jermaine Cole teased this moment. The final act. The closing curtain. Where other rappers fade into obscurity or tarnish their discography with lackluster attempts to stay relevant, Cole has orchestrated his exit with the precision of a grandmaster. This album feels heavy—not in a burdensome way, but with the gravitational pull of a planet. It is dense, intricate, and brutally honest.
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
              It sounds like a man who has conquered the mountain and is now looking for a way to fly off it.
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
              <h3 className="font-oswald text-xl text-red-600 mb-4 uppercase">Production</h3>
              <p className="font-mono text-neutral-400 text-sm leading-relaxed">
                The beats are dusty, soulful, yet pierced with futuristic synths that create a sense of timelessness. Cole produces roughly 70% of the record himself, proving once again that his ear for sampling is unmatched in the modern era.
              </p>
            </div>
            <div>
              <h3 className="font-oswald text-xl text-red-600 mb-4 uppercase">Lyricism</h3>
              <p className="font-mono text-neutral-400 text-sm leading-relaxed">
                There are no wasted bars here. Every syllable serves a purpose. He tackles fatherhood, the industry, the fallacy of fame, and the hunger that initially drove him out of Fayetteville.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReviewContent;
