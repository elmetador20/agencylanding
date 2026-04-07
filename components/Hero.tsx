'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Layout, MousePointer2, Smartphone, Globe, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
        >
          {/* Main Headline - Span 3 Columns */}
          <motion.div 
            variants={item}
            className="lg:col-span-3 bg-white border border-brand-border rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-12 text-brand-blue/5">
                <Globe size={300} strokeWidth={0.5} />
             </div>
             <div className="relative z-10">
                <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-brand-border bg-white shadow-sm mb-10"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-100 overflow-hidden">
                        <Image src={`/testimonial_avatar_${i === 3 ? 1 : i}_1775505972958.png`} alt="User" width={32} height={32} />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Trusted by 1.3L+ Audience</span>
                </motion.div>
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-brand-black leading-[0.85] mb-8">
                  Streamline Business with <span className="text-brand-blue italic">Flexible Options.</span>
                </h1>
                <p className="text-xl text-zinc-500 font-medium max-w-2xl italic leading-relaxed">
                  "Turning Visions Into Digital Reality with elite engineering and high-end design."
                </p>
             </div>
          </motion.div>

          {/* Social Social Stats - Span 1 Column */}
          <motion.div 
            variants={item}
            className="lg:col-span-1 bg-brand-blue rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center text-white relative overflow-hidden group shadow-2xl shadow-brand-blue/20"
          >
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute -top-20 -right-20 text-white/10"
             >
                <Sparkles size={200} />
             </motion.div>
             <div className="text-6xl font-black tracking-tighter mb-4">50+</div>
             <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Projects Delivered Successfully</p>
          </motion.div>

          {/* Custom Development - Card */}
          <motion.div 
            variants={item}
            whileHover={{ y: -10 }}
            className="lg:col-span-2 bg-zinc-50 border border-brand-border rounded-[2.5rem] p-10 relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-8 text-brand-black/5 group-hover:text-brand-blue/10 transition-colors">
                <Layout size={180} strokeWidth={1} />
             </div>
             <div className="relative z-10">
               <h3 className="text-4xl font-black tracking-tighter mb-4">Custom Development</h3>
               <p className="text-zinc-500 font-medium mb-12 leading-relaxed max-w-sm">
                 Monitor your finances live with clear, intuitive dashboards. Tailored for scaling enterprises.
               </p>
               <button className="flex items-center gap-3 text-brand-blue font-black uppercase tracking-widest text-xs group/btn">
                 Get Started
                 <div className="w-10 h-10 rounded-full border border-brand-blue flex items-center justify-center group-hover/btn:bg-brand-blue group-hover/btn:text-white transition-all">
                    <ArrowRight size={16} />
                 </div>
               </button>
             </div>
          </motion.div>

          {/* SaaS Prebuilt - Card */}
          <motion.div 
            variants={item}
            whileHover={{ y: -10 }}
            className="lg:col-span-2 bg-brand-black text-white rounded-[2.5rem] p-10 relative overflow-hidden group shadow-2xl"
          >
             <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-brand-blue/20 transition-colors">
                <Sparkles size={180} strokeWidth={1} />
             </div>
             <div className="relative z-10">
               <div className="inline-block px-4 py-1.5 rounded-full bg-brand-blue text-[10px] font-black uppercase tracking-widest mb-6 shadow-lg shadow-brand-blue/30">
                  Best Value
               </div>
               <h3 className="text-4xl font-black tracking-tighter mb-4">SaaS Prebuilt <br/> @ 50,000 /-</h3>
               <p className="text-zinc-400 font-medium mb-12 leading-relaxed max-w-sm">
                 Launch faster with our battle-tested SaaS infrastructure. High performance meets rapid deployment.
               </p>
               <button className="flex items-center gap-3 text-brand-blue font-black uppercase tracking-widest text-xs group/btn">
                 Explore Prebuilt
                 <div className="w-10 h-10 rounded-full border border-brand-blue flex items-center justify-center group-hover/btn:bg-brand-blue group-hover/btn:text-white transition-all">
                    <ArrowRight size={16} />
                 </div>
               </button>
             </div>
          </motion.div>

          {/* Availability - Small Card */}
          <motion.div 
            variants={item}
            className="lg:col-span-1 bg-white border border-brand-border rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center group"
          >
             <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                   <ShieldCheck size={32} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white animate-pulse"></div>
             </div>
             <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-1">Status</p>
             <h4 className="text-xl font-black text-brand-black">Available for work</h4>
          </motion.div>

          {/* Tech Stack - Span 3 Column */}
          <motion.div 
            variants={item}
            className="lg:col-span-3 bg-white border border-brand-border rounded-[2.5rem] p-8 flex items-center justify-between"
          >
             <div className="px-6 border-r border-brand-border hidden md:block">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Our Stack</h4>
             </div>
             <div className="flex-1 px-8 flex justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <Smartphone size={24} />
                <Globe size={24} />
                <MousePointer2 size={24} />
                <Layout size={24} />
                <ShieldCheck size={24} />
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300">NEXT.JS • REACT • TAILWIND</div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
