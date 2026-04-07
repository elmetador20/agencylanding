'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  { name: "Sharique Ahmad", role: "Founder", image: "/Sharique.jpeg" },
  { name: "Aksha Bhalla", role: "Founder", image: "/Aksha.jpeg" },
]

export default function Team() {
  return (
    <section className="py-32 bg-white relative  items-center  justify-center overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 relative z-10  items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-brand-black mb-6">
            Team Behind <span className="text-brand-blue">Wonders</span>
          </h2>
          <p className="text-zinc-500 font-medium text-lg max-w-2xl mx-auto italic">
            Elite engineers and designers working together to build the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-zinc-100 border border-brand-border"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass-pill p-4 rounded-2xl block translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-brand-black font-black text-sm uppercase tracking-wider mb-1">{member.name}</p>
                  <p className="text-zinc-500 font-black text-[10px] uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
