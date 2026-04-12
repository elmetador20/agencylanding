'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$2,999',
    desc: 'Perfect for startups and MVPs.',
    features: [
      'High-Performance Website',
      'Advanced SEO Optimization',
      'Mobile-First Layout',
      '1 Month Support'
    ],
    isPopular: false
  },
  {
    name: 'Growth',
    price: '$5,999',
    desc: 'Scaled solutions for established brands.',
    features: [
      'Everything in Starter',
      'Full Brand Identity',
      'High-Converting Funnels',
      'Advanced Analytics',
      'Priority Support'
    ],
    isPopular: true
  },
  {
    name: 'Elite',
    price: 'Custom',
    desc: 'Bespoke enterprise-grade systems.',
    features: [
      'Custom Web Applications',
      'Dedicated Design Team',
      'Performance Guarantee',
      'Infinite Scalability',
      '24/7 VIP Support'
    ],
    isPopular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-brand-blue/5 border border-brand-blue/10 px-4 py-1.5 text-[10px] uppercase font-black tracking-widest text-brand-blue mb-8"
          >
            Investment
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter mb-6"
          >
            Transparent <span className="text-brand-blue">Pricing.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 font-medium max-w-2xl mx-auto"
          >
            No hidden fees. Just elite results for brands that are ready to scale.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`card-premium relative overflow-hidden flex flex-col ${plan.isPopular ? 'border-brand-blue/50 ring-2 ring-brand-blue/5 scale-105 z-10' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-2xl font-black tracking-tight mb-2">{plan.name}</h3>
                <p className="text-zinc-500 text-sm font-medium">{plan.desc}</p>
              </div>

              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-5xl font-black tracking-tighter text-brand-black">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-zinc-400 font-medium">/project</span>}
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-zinc-600">
                    <Check className="w-5 h-5 text-brand-blue" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all active:scale-95 flex items-center justify-center gap-2 ${plan.isPopular ? 'bg-brand-blue text-white shadow-xl shadow-brand-blue/20' : 'bg-brand-black text-white'}`}>
                Scale Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
