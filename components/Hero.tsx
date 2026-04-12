'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Layout,
  MousePointer2,
  Smartphone,
  Globe,
  ShieldCheck,
  Zap,
  Briefcase
} from 'lucide-react';
import Image from 'next/image';
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: Globe,
    name: "Streamline Business",
    description: "Turning Visions Into Digital Reality with elite engineering and high-end design.",
    href: "/#Services",
    cta: "Learn more",
    className: "lg:col-span-3 lg:row-span-2",
    background: (
      <div className="absolute right-0 top-0 opacity-20 -z-10 group-hover:opacity-30 transition-opacity">
        <Globe size={400} strokeWidth={0.5} />
      </div>
    ),
  },
  {
    Icon: Sparkles,
    name: "50+ Projects",
    description: "Projects Delivered Successfully. High-performance meets rapid deployment.",
    href: "/#Portfolio",
    cta: "View Portfolio",
    className: "lg:col-span-1 lg:row-span-1 bg-brand-blue/5 border-brand-blue/20",
    background: <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent" />,
  },
  {
    Icon: Layout,
    name: "Custom Development",
    description: "Tailored for scaling enterprises. Monitor your finances live with clear, intuitive dashboards.",
    href: "/#Services",
    cta: "Get Started",
    className: "lg:col-span-2 lg:row-span-1",
    background: <div className="absolute inset-0 bg-zinc-50/50" />,
  },
  {
    Icon: Zap,
    name: "SaaS Prebuilt @ 50,000 /-",
    description: "Launch faster with our battle-tested SaaS infrastructure.",
    href: "/#Services",
    cta: "Explore Prebuilt",
    className: "lg:col-span-2 lg:row-span-1 bg-brand-black text-white",
    background: <div className="absolute inset-0 bg-brand-black/90" />,
  },
  {
    Icon: ShieldCheck,
    name: "Available for work",
    description: "Currently accepting new high-impact projects.",
    href: "/contact",
    cta: "Inquire Now",
    className: "lg:col-span-1 lg:row-span-1",
    background: (
      <div className="absolute top-4 right-4 animate-pulse">
        <div className="w-4 h-4 rounded-full bg-green-500 border-4 border-white shadow-lg" />
      </div>
    ),
  },
  {
    Icon: Briefcase,
    name: "Our Stack",
    description: "NEXT.JS • REACT • TAILWIND • FLUTTER",
    href: "/#Team",
    cta: "View Tech",
    className: "lg:col-span-3 lg:row-span-1",
    background: <div className="absolute inset-0 bg-zinc-50/30" />,
  }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center">

      <div className="absolute inset-0 grid-background pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-block rounded-full bg-brand-blue/5 border border-brand-blue/10 px-4 py-1.5 text-[10px] uppercase font-black tracking-widest text-brand-blue mb-8">
            Elite Solutions
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-brand-border bg-white shadow-sm mb-6">
              <div className="flex -space-x-2">
                {["Sharique.jpeg", "Aksha.jpeg", "fluxgen.jpeg"].map((img, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-100 overflow-hidden relative">
                    <Image src={`/${img}`} alt="User" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Trusted by 1.3L+ Audience</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
              Elite Engineering for <span className="text-brand-blue">Global Startups.</span>
            </h1>
          </div>
        </motion.div>

        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
