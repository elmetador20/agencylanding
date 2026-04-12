'use client';

import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden h-[600px] flex items-center justify-center border-t border-brand-border" id="contact">
      
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <h2 className="text-[25vw] font-black text-brand-black/[0.03] tracking-tighter uppercase leading-none">
          FLUXGENAI
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-black mb-8">
            Contact us at
          </h3>
          <a 
            href="mailto:hello@fluxgen.ai" 
            className="text-2xl md:text-4xl font-black text-zinc-400 hover:text-brand-blue transition-colors duration-500 underline underline-offset-8 decoration-brand-border"
          >
            hello@fluxgen.ai
          </a>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="max-w-md mx-auto relative group"
        >
          <div className="flex bg-white border border-brand-border p-2 rounded-full focus-within:border-brand-blue transition-all shadow-sm focus-within:shadow-xl">
             <input 
               type="email" 
               placeholder="Enter your email address" 
               className="flex-1 bg-transparent px-6 py-3 text-sm font-medium focus:outline-none"
             />
             <button className="bg-brand-black text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-brand-blue transition-all active:scale-95">
               Subscribe
             </button>
          </div>
          <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">
             Stay updated with our latest masterpieces.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
