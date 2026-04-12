'use client';

import { motion } from 'framer-motion';

const words = [
  "Develop it Once",
  "Develop it from Best",
  "Engineering Digital Excellence",
  "Designed to Convert",
  "Built for Real Users",
  "From Concept to Launch",
  "We Don’t Just Code — We Create",
];

export default function Marquee() {
  return (
    <div className="py-12 border-y border-brand-border bg-white overflow-hidden flex whitespace-nowrap relative">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 items-center pr-20"
      >
        {words.map((word, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="text-3xl md:text-5xl font-black italic tracking-tighter text-brand-black uppercase">
              {word}
            </span>
            <div className="w-4 h-4 rounded-full bg-brand-black shadow-lg shadow-brand-blue/30"></div>
          </div>
        ))}
      </motion.div>
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 items-center pr-20"
      >
        {words.map((word, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="text-3xl md:text-5xl font-black italic tracking-tighter text-brand-black uppercase">
              {word}
            </span>
            <div className="w-4 h-4 rounded-full bg-brand-black shadow-lg shadow-brand-blue/30"></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
