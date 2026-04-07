'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    desc: 'Deep diving into your business metrics to define a clear roadmap for elite growth.'
  },
  {
    number: '02',
    title: 'High-End Design',
    desc: 'Crafting futuristic visual systems that position your brand ahead of the competition.'
  },
  {
    number: '03',
    title: 'Precision Engineering',
    desc: 'Building with industry-leading technologies for maximum speed and rock-solid reliability.'
  },
  {
    number: '04',
    title: 'Launch & Optimization',
    desc: 'Deploying your product and continuously optimizing for maximum conversion and ROI.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-brand-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/5 blur-[120px] -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[50px] left-0 right-0 h-[2px] bg-zinc-100 -z-10"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white border border-brand-border flex items-center justify-center mx-auto mb-8 text-3xl font-black tracking-tighter text-brand-black shadow-lg shadow-black/5 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 relative z-10">
                {step.number}
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight">{step.title}</h3>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed px-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
