'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Link } from 'lucide-react';

const projects = [
  {
    title: 'LeapSkill',
    category: 'AI Career Platform',
    description: 'AI-powered platform designed to help students and professionals advance their careers through personalized guidance, skill development, and job matching.',
    image: '/leapskill.png',
    link: 'https://www.leapskil.com/'
  },
  {
    title: 'TedxKiet Website',
    category: 'CLub Webiste',
    description: 'Premium Club website with enhanced SEO.',
    image: '/TedxKiet.png',
    link: 'https://www.tedxkiet.com/'
  },
  {
    title: 'Agrosync',
    category: 'Fintech / AI',
    description: 'Built a sleek journaling platform for tracking trades with AI-backed analytics.',
    image: '/TedxKiet.png',
    link: 'https://tradescribe.in/'
  },
  {
    title: 'Sprinthacks',
    category: 'Google Developer Club website ',
    description: 'Official website for Google Developer Club, KIET Group of Institutions, featuring events, workshops, and tech community initiatives.',
    image: '/leapskill.png',
    link: 'https://Sprinthacks.in/'
  },
  {
    title: 'Greenfeels: Sustainable Ecom',
    category: 'Sustainable Design',
    description: 'Curated eco-friendly essentials in a clean responsive design for conscious shoppers.',
    image: '/leapskill.png',
    link: 'https://greenfeels.in/'
  },
  {
    title: 'Momentz',
    category: 'Premium Storefront',
    description: 'Curated luxury gifts and premium home décor in a sleek online storefront.',
    image: '/TedxKiet.png',
    link: 'https://momentz.in/'
  }
];

export default function Portfolio() {
  return (
    <section id="Portfolio" className="py-32 bg-brand-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-brand-blue/5 border border-brand-blue/10 px-4 py-1.5 text-[10px] uppercase font-black tracking-widest text-brand-blue mb-8"
          >
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-8"
          >
            Turning Visions Into <span className="text-brand-blue">Digital Reality.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 font-medium text-lg max-w-2xl mx-auto italic"
          >
            "Every project we touch is engineered to outperform the market."
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer bg-white border border-brand-border rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-zinc-50 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover  transition-all duration-700"
                />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-brand-black flex items-center justify-center translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <Link >
                      <ArrowUpRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4 pb-4">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue mb-2">{project.category}</div>
                <h3 className="text-xl font-black mb-2 tracking-tight group-hover:text-brand-blue transition-colors">{project.title}</h3>
                <p className="text-xs text-zinc-500 font-medium leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
