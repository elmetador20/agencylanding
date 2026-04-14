'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Website Plans (from Image 4)
const WEBSITE_PLANS = [
  {
    name: 'STARTER WEBSITE',
    sub: 'Ideal for personal brands or small businesses starting online',
    price: '₹19,999',
    desc: '',
    features: [
      'Up to 5-7 Pages',
      'Responsive (Mobile-Friendly) Design',
      'Basic UI/UX Layout',
      'Contact Form',
      'Basic SEO Setup',
      'Delivery: 7-10 working days',
    ],
    isPopular: false,
    cta: 'Get Started',
  },
  {
    name: 'BUSINESS WEBSITE',
    sub: 'Perfect for growing businesses that need a strong online presence\nBuilt using modern full-stack frameworks',
    price: '₹34,999',
    desc: '',
    features: [
      'Up to 7-12 Pages',
      'Custom UI/UX Design',
      'Fully Responsive (Mobile-Friendly)',
      'CMS Integration (WordPress or similar)',
      'On-page SEO Optimization',
      'Contact & Inquiry Forms',
      'Delivery: 14-18 working days',
    ],
    isPopular: true,
    cta: 'Get Started',
  },
  {
    name: 'CUSTOM WEBSITE',
    sub: 'Ideal for brands that require advanced features, e-commerce, and high performance',
    price: '₹59,999+',
    desc: '',
    features: [
      'High Performance Custom Design',
      'E-commerce Functionality',
      'Booking System Integration',
      'Advanced UI/UX Animations',
      'Speed & Performance Optimization',
      'SEO & Analytics Setup',
      'Priority Support',
      'Delivery Timelines According Project',
    ],
    isPopular: false,
    cta: 'Get Started',
  },
];

const APP_PLANS = [
  {
    name: 'FRONTEND DEVELOPMENT',
    sub: 'Basic App Package',
    price: '₹30K - ₹50K',
    desc: '',
    features: [
      'Mobile app for your users',
      'Converting your design into working app',
      'Connecting to external services',
      'Smooth animations and transitions',
      'Help when you need it',
      '10-30 Day Delivery',
    ],
    isPopular: false,
    cta: 'Start Your Project',
  },
  {
    name: 'MVP DEVELOPMENT',
    sub: 'Complete Starter Package',
    price: '₹60K - ₹1.2L',
    desc: '',
    features: [
      'Mobile app plus admin dashboard',
      'Custom design for your brand',
      'Converting designs into working app',
      'Building your apps brain (backend)',
      '1-3 Month Delivery',
      'Getting your app on App Store & Play Store',
      'Testing everything works perfectly',
    ],
    isPopular: true,
    cta: 'Start Your Project',
  },
  {
    name: 'FULL-CYCLE APP DEVELOPMENT',
    sub: 'Everything You Need',
    price: '₹1.5L - ₹2.5L',
    desc: '',
    features: [
      'User app, business app & admin dashboard',
      'Premium design customized for your brand',
      'Converting designs into working app',
      'Complete backend system built for growth',
      '2-4 Month Delivery',
      'Publishing on App Store & Play Store',
      'Thorough testing for flawless performance',
      'Full control with admin dashboard',
    ],
    isPopular: false,
    cta: 'Start Your Project',
  },
];

export default function Pricing() {
  const [tab, setTab] = useState<'websites' | 'applications'>('websites');

  const plans = tab === 'websites' ? WEBSITE_PLANS : APP_PLANS;

  return (
    <section id="pricing" className="py-32 bg-brand-white">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-brand-black uppercase"
            style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '1px' }} // Mimicking the impact font from screenshot
          >
            Choose Your Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 font-medium mt-4 max-w-xl mx-auto"
          >
            Clear options to bring your app idea to life, with everything included to launch successfully
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <span className={`text-sm font-bold ${tab === 'websites' ? 'text-brand-blue' : 'text-zinc-400'}`}>Websites</span>
            <button
              onClick={() => setTab(tab === 'websites' ? 'applications' : 'websites')}
              className="relative w-12 h-6 rounded-full bg-zinc-200 transition-colors duration-300"
            >
              <div
                className="absolute top-1 bottom-1 w-4 rounded-full bg-brand-blue transition-all duration-300 shadow-sm"
                style={{ left: tab === 'websites' ? '4px' : 'calc(100% - 20px)' }}
              />
            </button>
            <span className={`text-sm font-bold ${tab === 'applications' ? 'text-brand-blue' : 'text-zinc-400'}`}>Applications</span>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start"
          >
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`flex flex-col relative rounded-3xl border transition-all duration-300 ${plan.isPopular
                    ? 'border-brand-blue/30 shadow-[0_8px_30px_rgb(0,102,255,0.12)] -translate-y-4 bg-white z-10'
                    : 'border-zinc-200 bg-zinc-50/50 hover:border-zinc-300'
                  }`}
                style={{
                  minHeight: tab === 'applications' ? '780px' : '650px' // Apps have longer lists
                }}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                    • Recommended •
                  </div>
                )}

                {/* Card Content - Inner Padding */}
                <div className="p-8 lg:p-10 flex flex-col h-full">

                  {/* Plan Top Section */}
                  <div className="mb-8">
                    <h3 className="text-xl font-black uppercase tracking-tight text-brand-black mb-1">
                      {plan.name}
                    </h3>
                    {plan.sub && <p className="text-sm text-zinc-500 font-medium mb-6 whitespace-pre-line">{plan.sub}</p>}

                    <div className="flex items-baseline gap-1 mb-4 mt-6">
                      <span className="text-[32px] sm:text-4xl lg:text-[40px] xl:text-5xl font-black text-brand-blue tracking-tighter whitespace-nowrap">
                        {plan.price}
                      </span>
                      {!plan.price.includes('Custom') && !plan.price.includes('depends') && (
                        <span className="text-xs font-bold text-brand-black uppercase shrink-0">INR</span>
                      )}
                    </div>

                    {plan.desc && (
                      <p className="text-[13px] text-zinc-600 font-medium leading-relaxed mt-4 whitespace-pre-line">
                        {plan.desc}
                      </p>
                    )}
                  </div>

                  {/* Divider line before features for websites (to match design) */}
                  {tab === 'websites' && (
                    <div className="h-px bg-zinc-200 w-full mb-6"></div>
                  )}

                  {/* Features List */}
                  <ul className="flex flex-col gap-4 mb-10 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 shrink-0 w-4 h-4 rounded-full bg-brand-black flex items-center justify-center">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-[14px] text-zinc-600 font-medium leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-200 active:scale-95 ${plan.isPopular
                        ? 'bg-brand-blue text-white shadow-lg hover:bg-brand-blue/90'
                        : 'bg-transparent border border-brand-blue text-brand-blue hover:bg-brand-blue/5'
                      }`}
                  >
                    {plan.cta}
                  </button>

                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Maintenance Add-on Banner for Apps */}
        <AnimatePresence>
          {tab === 'applications' && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-12 max-w-4xl mx-auto rounded-2xl bg-brand-blue/5 border border-brand-blue/15 p-6 md:px-10 md:py-6 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-brand-black font-black text-sm uppercase tracking-wider mb-0.5">Post-Launch & Maintenance</h4>
                  <p className="text-zinc-500 font-medium text-xs">Optional add-ons to keep your application running flawlessly.</p>
                </div>
              </div>

              <div className="flex flex-wrap md:flex-nowrap gap-x-6 gap-y-3 justify-center text-sm font-bold text-brand-black">
                <div className="flex flex-col items-center">
                  <span className="text-[11px] text-zinc-400 uppercase tracking-widest font-black mb-1">Maintenance</span>
                  <span>₹3K - ₹10K<span className="text-zinc-400 font-medium text-xs">/mo</span></span>
                </div>
                <div className="hidden md:block w-px h-8 bg-zinc-200"></div>
                <div className="flex flex-col items-center">
                  <span className="text-[11px] text-zinc-400 uppercase tracking-widest font-black mb-1">App Updates</span>
                  <span>₹5K - ₹20K</span>
                </div>
                <div className="hidden md:block w-px h-8 bg-zinc-200"></div>
                <div className="flex flex-col items-center">
                  <span className="text-[11px] text-zinc-400 uppercase tracking-widest font-black mb-1">Play Store Publish</span>
                  <span>₹10K <span className="text-zinc-400 font-medium text-xs">One-time</span></span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
