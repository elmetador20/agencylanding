'use client';

import { motion } from 'framer-motion';
import { Search, Paintbrush, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    desc: 'Deep diving into your business metrics to define a clear roadmap for elite growth.',
    icon: Search,
    color: '#3B82F6',      // blue
    bgLight: 'rgba(59,130,246,0.08)',
    borderColor: 'rgba(59,130,246,0.25)',
    shadowColor: 'rgba(59,130,246,0.15)',
    peakOffset: 0,         // base level
  },
  {
    number: '02',
    title: 'High-End Design',
    desc: 'Crafting futuristic visual systems that position your brand ahead of the competition.',
    icon: Paintbrush,
    color: '#8B5CF6',      // violet
    bgLight: 'rgba(139,92,246,0.08)',
    borderColor: 'rgba(139,92,246,0.25)',
    shadowColor: 'rgba(139,92,246,0.15)',
    peakOffset: -40,       // rising
  },
  {
    number: '03',
    title: 'Precision Engineering',
    desc: 'Building with industry-leading technologies for maximum speed and rock-solid reliability.',
    icon: Code2,
    color: '#0066FF',      // brand blue — summit
    bgLight: 'rgba(0,102,255,0.08)',
    borderColor: 'rgba(0,102,255,0.25)',
    shadowColor: 'rgba(0,102,255,0.15)',
    peakOffset: -80,       // peak
  },
  {
    number: '04',
    title: 'Launch & Optimization',
    desc: 'Deploying your product and continuously optimizing for maximum conversion and ROI.',
    icon: Rocket,
    color: '#10B981',      // emerald
    bgLight: 'rgba(16,185,129,0.08)',
    borderColor: 'rgba(16,185,129,0.25)',
    shadowColor: 'rgba(16,185,129,0.15)',
    peakOffset: -30,       // descending
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-brand-white relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/5 blur-[120px] -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-brand-blue/5 border border-brand-blue/10 px-4 py-1.5 text-[10px] uppercase font-black tracking-widest text-brand-blue mb-8"
          >
            Workflow
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter mb-6"
          >
            The FluxGen <span className="text-brand-blue">Workflow.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 font-medium max-w-2xl mx-auto"
          >
            A high-velocity, milestone-driven process engineered for results. Transparent, fast, and elite.
          </motion.p>
        </div>

        {/* ─── Mountain structure ─── */}
        <div className="relative max-w-5xl mx-auto">

          {/* SVG mountain path behind cards */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block" 
            viewBox="0 0 1000 400" 
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Mountain fill */}
            <motion.path
              d="M 0 350 Q 125 350 175 310 Q 250 260 375 240 Q 500 120 500 120 Q 500 120 625 210 Q 750 280 825 290 Q 900 310 1000 350 L 1000 400 L 0 400 Z"
              fill="url(#mountainGrad)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
            {/* Mountain outline */}
            <motion.path
              d="M 0 350 Q 125 350 175 310 Q 250 260 375 240 Q 500 120 500 120 Q 500 120 625 210 Q 750 280 825 290 Q 900 310 1000 350"
              stroke="url(#lineGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.2, ease: 'easeOut' }}
            />
            {/* Animated glowing dot traveling along the path */}
            <motion.circle
              r="5"
              fill="#0066FF"
              filter="url(#glow)"
              initial={{ offsetDistance: '0%' }}
              animate={{ offsetDistance: ['0%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                offsetPath: 'path("M 0 350 Q 125 350 175 310 Q 250 260 375 240 Q 500 120 500 120 Q 500 120 625 210 Q 750 280 825 290 Q 900 310 1000 350")',
              }}
            />
            <defs>
              <linearGradient id="mountainGrad" x1="0" y1="0" x2="1000" y2="0">
                <stop offset="0%" stopColor="rgba(59,130,246,0.04)" />
                <stop offset="25%" stopColor="rgba(139,92,246,0.06)" />
                <stop offset="50%" stopColor="rgba(0,102,255,0.08)" />
                <stop offset="75%" stopColor="rgba(16,185,129,0.05)" />
                <stop offset="100%" stopColor="rgba(16,185,129,0.02)" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1000" y2="0">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="33%" stopColor="#8B5CF6" />
                <stop offset="55%" stopColor="#0066FF" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* Cards positioned as mountain peaks */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-end">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.18, duration: 0.7, ease: [0.34, 1, 0.64, 1] }}
                  className="group relative"
                  style={{ marginBottom: `${-step.peakOffset}px` }}
                >
                  <div 
                    className="relative bg-white rounded-[1.75rem] p-7 transition-all duration-500 hover:-translate-y-2 cursor-default"
                    style={{ 
                      border: `1.5px solid ${step.borderColor}`,
                      boxShadow: `0 4px 24px ${step.shadowColor}, 0 1px 3px rgba(0,0,0,0.04)`,
                    }}
                  >
                    {/* Glow overlay on hover */}
                    <div 
                      className="absolute inset-0 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at 50% 0%, ${step.bgLight}, transparent 70%)` }}
                    />

                    {/* Number badge */}
                    <div className="relative z-10 flex items-center justify-between mb-6">
                      <motion.div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg relative overflow-hidden"
                        style={{ 
                          backgroundColor: step.bgLight,
                          color: step.color,
                          border: `1.5px solid ${step.borderColor}`,
                        }}
                        whileHover={{ rotate: -8, scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      >
                        {step.number}
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 opacity-30"
                          style={{ 
                            background: `linear-gradient(105deg, transparent 40%, ${step.color}40 50%, transparent 60%)`,
                          }}
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5, ease: 'easeInOut' }}
                        />
                      </motion.div>

                      {/* Floating icon */}
                      <motion.div
                        style={{ color: step.color }}
                        className="opacity-40 group-hover:opacity-80 transition-opacity duration-500"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.25 }}
                      >
                        <Icon size={24} strokeWidth={1.5} />
                      </motion.div>
                    </div>

                    {/* Colored accent bar */}
                    <motion.div 
                      className="w-10 h-1 rounded-full mb-5 origin-left"
                      style={{ backgroundColor: step.color }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.15, duration: 0.5 }}
                    />

                    {/* Title */}
                    <h3 
                      className="relative z-10 text-[17px] font-black mb-3 tracking-tight text-brand-black transition-colors duration-300"
                      style={{ }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 text-zinc-500 text-[13px] font-medium leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Bottom colored line */}
                    <div 
                      className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
                    />
                  </div>

                  {/* Peak indicator dot below card */}
                  <div className="hidden lg:flex justify-center mt-4">
                    <motion.div
                      className="w-3 h-3 rounded-full"
                      style={{ 
                        backgroundColor: step.color,
                        boxShadow: `0 0 0 4px ${step.bgLight}, 0 0 12px ${step.shadowColor}`,
                      }}
                      animate={{ 
                        scale: [1, 1.4, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.4, ease: 'easeInOut' }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
