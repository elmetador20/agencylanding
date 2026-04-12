'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to deliver a pre-built application or website?",
    answer: "We usually complete the entire pre-built application or website development within 25 days, including deployment, testing, and final handover."
  },
  {
    question: "Do you provide the complete source code after development?",
    answer: "Yes, absolutely. Once the development is complete and the final payment is processed, we hand over the entire source code, along with all project files and credentials. The complete authority of the code remains yours."
  },
  {
    question: "What’s the difference between a pre-built and a custom development project?",
    answer: "Our pre-built projects come with ready-made modules that can be quickly deployed and customized with your branding—perfect for fast launches. In contrast, custom development is built from scratch according to your unique requirements, giving you complete flexibility in design, functionality, and integrations."
  },
  {
    question: "Do you provide maintenance and support after delivery?",
    answer: "Yes, we provide 6 months of maintenance and support after project delivery. During this period, if there’s any glitch, bug, or technical issue, our team will resolve it promptly at no extra cost."
  },
  {
    question: "What technologies do you use for development?",
    answer: "We use modern technologies like React JS, React Native, Node JS, and Next JS for frontend and backend, along with Figma for UI/UX design and Hostinger/AWS for hosting. This ensures high performance, scalability, and long-term reliability."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white relative" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-brand-blue/5 border border-brand-blue/10 px-4 py-1.5 text-[10px] uppercase font-black tracking-widest text-brand-blue mb-8"
          >
            Resources
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-brand-black mb-6"
          >
            Frequently Asked <span className="text-brand-blue">Questions.</span>
          </motion.h2>
          <p className="text-zinc-500 font-medium text-lg italic">
            "Everything you need to know about working with us."
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`border rounded-[2rem] transition-all duration-300 ${
                openIndex === i ? 'border-brand-blue bg-blue-50/30' : 'border-brand-border bg-white hover:border-zinc-300 hover:bg-zinc-50/50'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-8 flex items-center justify-between text-left"
              >
                <span className="text-lg md:text-xl font-black tracking-tight text-brand-black">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full border border-brand-border flex items-center justify-center transition-all ${
                  openIndex === i ? 'bg-brand-blue border-brand-blue text-white rotate-180' : 'bg-white text-zinc-400'
                }`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-0 text-zinc-500 font-medium leading-relaxed text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
