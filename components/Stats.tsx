'use client';

import { motion } from 'framer-motion';
import { Users, Code, TrendingUp, Handshake } from 'lucide-react';

const stats = [
  { label: 'Happy Clients', value: '50+', icon: Users, color: 'text-brand-blue' },
  { label: 'Projects Completed', value: '120+', icon: Code, color: 'text-zinc-400' },
  { label: 'Avg. Conversion Lift', value: '3x', icon: TrendingUp, color: 'text-brand-blue' },
  { label: 'Customer Satisfaction', value: '99%', icon: Handshake, color: 'text-zinc-600' }
];

export default function Stats() {
  return (
    <section className="py-20 bg-zinc-50/50 border-y border-brand-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                 <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-4xl md:text-5xl font-black tracking-tighter mb-2 text-brand-black">
                {stat.value}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
