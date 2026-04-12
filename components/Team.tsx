'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const team = [
  { 
    name: "Sharique Ahmad", 
    role: "Founder", 
    image: "/Sharique.jpeg",
    linkedin: "https://www.linkedin.com/in/sharique-ahmed-118861241/"
  },
  { 
    name: "Aksha Bhalla", 
    role: "Founder", 
    image: "/Aksha.jpeg",
    linkedin: "https://www.linkedin.com/in/aksha-bhalla-3b3a19328/"
  },
]

export default function Team() {
  const [clickedMembers, setClickedMembers] = useState<number[]>([]);

  const toggleMember = (id: number) => {
    setClickedMembers((prev: number[]) => 
      prev.includes(id) ? prev.filter((i: number) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-32 bg-white relative  items-center  justify-center overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 relative z-10  items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-block rounded-full bg-brand-blue/5 border border-brand-blue/10 px-4 py-1.5 text-[10px] uppercase font-black tracking-widest text-brand-blue mb-8">
            The Team
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-brand-black mb-6">
            Team Behind <span className="text-brand-blue">Wonders</span>
          </h2>
          <p className="text-zinc-500 font-medium text-lg max-w-2xl mx-auto italic">
            Elite engineers and designers working together to build the future.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              onClick={() => toggleMember(i)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-[2rem] overflow-hidden aspect-[4/5] w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-sm bg-zinc-100 border border-brand-border cursor-pointer transition-all duration-500 ${clickedMembers.includes(i) ? 'scale-[1.02] shadow-2xl skew-y-0 border-brand-blue' : ''}`}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className={`object-cover group-hover:scale-110 transition-transform duration-700 ${clickedMembers.includes(i) ? 'grayscale-0 active-color' : 'grayscale hover:grayscale-0'}`}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${clickedMembers.includes(i) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className={`glass-pill p-4 rounded-2xl block transition-transform duration-500 ${clickedMembers.includes(i) ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}>
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-brand-black font-black text-sm uppercase tracking-wider mb-1">{member.name}</p>
                      <p className="text-zinc-500 font-black text-[10px] uppercase tracking-widest">{member.role}</p>
                    </div>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-shadow-brand-gray hover:bg-brand-black hover:text-white transition-all duration-300"
                    >
                      <Linkedin size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
