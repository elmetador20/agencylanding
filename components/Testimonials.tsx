'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Shubham Srivastava',
    role: 'Founder, SatyaSakshi',
    image: '/av1.png',
    text: 'FluxGen engineered our entire ecosystem-delivering a seamless mobile app and a powerful admin panel for total operational control. Truly elite execution.',
    stats: 'Full-Stack Delivery'
  },
  {
    name: 'Ayushi Srivastava',
    role: 'Co-founder, SatyaSakshi LLP',
    image: '/av2.png',
    text: 'The absolute best engineering team we’ve ever worked with. Their attention to detail and obsession with performance is unparalleled. Highly recommended.',
    stats: '2x Conversions'
  }
];

export default function Testimonials() {
  return (
    <section id="Testimonials" className="py-32 bg-zinc-50/50 relative overflow-hidden">
      
      <div className="absolute inset-0 grid-background opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-brand-blue/5 border border-brand-blue/10 px-4 py-1.5 text-[10px] uppercase font-black tracking-widest text-brand-blue mb-8"
          >
            Wall of Love
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter mb-6"
          >
            What Our <span className="text-brand-blue">Partners</span> Say.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 font-medium max-w-2xl mx-auto"
          >
            We don't have clients; we have partners. We’re obsessed with your success.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-premium relative"
            >
              <div className="absolute top-10 right-10 text-brand-blue opacity-20">
                <Quote size={60} />
              </div>
              <p className="text-xl font-medium text-brand-black mb-10 italic leading-relaxed relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-blue/20">
                    <Image src={t.image} alt={t.name} width={56} height={56} className="object-cover" />
                </div>
                <div>
                  <div className="text-lg font-black tracking-tight">{t.name}</div>
                  <div className="text-xs font-black uppercase tracking-widest text-zinc-400">{t.role}</div>
                </div>
                <div className="ml-auto bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {t.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
