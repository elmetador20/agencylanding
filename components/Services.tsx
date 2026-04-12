'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Zap, 
  Smartphone, 
  BarChart3, 
  ShieldCheck, 
  Layout,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    title: 'Custom Web Apps',
    desc: 'Bespoke React and Next.js applications engineered for high-scale performance.',
    icon: Globe,
    color: 'bg-blue-50 text-brand-blue',
    link:"www.google.com"
  },
  {
    title: 'E-commerce Solutions',
    desc: 'High-converting storefronts that turn browsers into loyal brand advocates.',
    icon: Zap,
    color: 'bg-zinc-50 text-black'
  },
  {
    title: 'Mobile-First Design',
    desc: 'Thumb-friendly interfaces that look spectacular on every single device.',
    icon: Smartphone,
    color: 'bg-zinc-100 text-zinc-900'
  },
  {
    title: 'Growth Marketing',
    desc: 'Data-driven strategies that optimize your funnel and explode conversions.',
    icon: BarChart3,
    color: 'bg-blue-100/50 text-brand-blue'
  },
  {
    title: 'Brand Identity',
    desc: 'Futuristic visual systems that position your brand as a market leader.',
    icon: Layout,
    color: 'bg-zinc-50 text-black'
  },
  {
    title: 'Performance SEO',
    desc: 'Dominating search results with elite technical SEO and speed optimization.',
    icon: ShieldCheck,
    color: 'bg-zinc-100 text-zinc-600'
  }
];

export default function Services() {
  return (
    <section id="Services" className="py-32 relative bg-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-brand-blue/5 border border-brand-blue/10 px-4 py-1.5 text-[10px] uppercase font-black tracking-widest text-brand-blue mb-8"
          >
            Information
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter mb-6"
          >
            How We <span className="text-brand-blue">Scale</span> Your Business.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 max-w-2xl mx-auto font-medium"
          >
            We don't just build websites; we build growth engines. Every pixel is optimized for performance and conversion.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group card-premium p-10 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-8 transition-transform group-hover:scale-110 mb-8`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">{service.title}</h3>
              <p className="text-zinc-500 leading-relaxed font-medium mb-8">
                {service.desc}
              </p>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-black group-hover:text-brand-blue transition-colors">
                Learn More
                <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
