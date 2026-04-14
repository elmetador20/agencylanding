'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, X, Code2, Cpu, Layers, Zap, Shield, GitBranch, ExternalLink, Mail, Github } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────
const FOUNDERS = [
  {
    name: 'Aksha Bhalla',
    role: 'Founder & Technical Director',
    image: '/Aksha.jpeg',
    linkedin: 'https://www.linkedin.com/in/aksha-bhalla-3b3a19328/',
    tagline: "The vision behind the build & design",
    accentWords: ["vision", "build"],
    badge: 'Full-Stack · AI Expert · Growth',
    bio: [
      "I'm Aksha, Technical Director & Founder. I lead the technical division at FluxGen. I don't just build applications — I build systems that survive production. I transform complex ideas into high-speed, scalable products.",
      "I'm a Full-Stack Mobile & Backend Developer specializing in Flutter-based architectures, real-time cloud systems, and AI-integrated mobile applications.",
      "From frontend interfaces to secure backend pipelines, I work across the entire stack to ensure performance, reliability, and long-term scalability. Strong foundations in Data Structures & Algorithms ensure every system is optimized — not patched. I operate across domains where failure isn't an option: education platforms, e-commerce, AI-powered healthcare apps, and financial systems.",
    ],
    domains: [
      { icon: <Code2 size={14} />, label: 'Flutter & Mobile' },
      { icon: <Cpu size={14} />, label: 'AI Integration' },
      { icon: <Layers size={14} />, label: 'Full-Stack' },
      { icon: <Zap size={14} />, label: 'UI/UX Design' },
      { icon: <Shield size={14} />, label: 'Secure Backends' },
      { icon: <GitBranch size={14} />, label: 'SQL Database' },
    ],
    stats: [
      { value: '10+', label: 'Projects built' },
      { value: '3x', label: 'Avg growth rate' },
      { value: '100%', label: 'Production uptime' },
    ],
    contact: [
      { icon: <Mail size={13} />, label: 'Email', href: 'mailto:akshabhalla27@gmail.com', style: 'email' },
      { icon: <Github size={13} />, label: 'Github', href: 'https://github.com/ROCKSTARAK12', style: 'github' },
      { icon: <Linkedin size={13} />, label: 'Aksha Bhalla', href: 'https://www.linkedin.com/in/aksha-bhalla-3b3a19328/', style: 'linkedin' },
    ],
  },
  {
    name: 'Sharique Ahmad',
    role: 'Founder & Product Strategy Lead',
    image: '/Sharique.jpeg',
    linkedin: 'https://www.linkedin.com/in/sharique-ahmed-118861241/',
    tagline: "Engineering scalable products aligned with business strategy",
    accentWords: ['strategy', 'scalable systems'],
    badge: 'Java · Full-Stack ·  Product Strategy',
    bio: [
    "I architect and deliver high-performance digital products, combining deep Java expertise with modern full-stack development.",
    "As a Strategic Product Consultant, I work directly with founders and businesses to translate ideas into structured, scalable, and revenue-focused solutions.",
    "I lead projects end-to-end — from requirement clarity and system design to development and final delivery — ensuring every decision aligns with business objectives.", 
    "My strength lies in bridging the gap between client vision and technical execution, with a strong focus on communication, clarity, and speed.",
    "Across industries, I build systems that are not just functional, but reliable, scalable, and built for long-term growth."
  ],
    domains: [
      { icon: <Layers size={14} />, label: 'Backend Development (Java)'},
      { icon: <Zap size={14} />, label: 'Product Strategy & Consulting' },
      { icon: <Code2 size={14} />, label: 'Full-Stack Development' },
      { icon: <Cpu size={14} />, label: 'System Design & Scalability' },
      { icon: <Shield size={14} />, label: 'Client Communication' },
      { icon: <GitBranch size={14} />, label: 'End-to-End Project Delivery' },
    ],
    stats: [
      { value: '10+', label: 'Projects Built' },
      { value: '3×', label: 'Avg growth rate' },
      { value: '5★', label: 'Client rating' },
    ],
    contact: [
      { icon: <Mail size={13} />, label: 'Email', href: 'mailto:ahmedsharique250@gmail.com', style: 'email' },
      { icon: <Github size={13} />, label: 'Github', href: 'https://github.com/elmetador20', style: 'github' },
      { icon: <Linkedin size={13} />, label: 'Sharique Ahmad', href: 'https://www.linkedin.com/in/sharique-ahmed-118861241/', style: 'linkedin' },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────
// Word-by-word animated heading
// ─────────────────────────────────────────────────────────────────
function AnimatedHeading({ text, accentWords }: { text: string; accentWords: string[] }) {
  const words = text.split(' ');
  return (
    <h2 className="text-4xl md:text-5xl xl:text-[3.5rem] font-black tracking-tight leading-[1.1] text-brand-black">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-[0.25em] ${accentWords.includes(word) ? 'text-brand-blue' : ''}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.06, ease: [0.33, 1, 0.68, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
}

// ─────────────────────────────────────────────────────────────────
// 3-D tilt photo card
// ─────────────────────────────────────────────────────────────────
function TiltPhoto({ founder, onClick }: { founder: typeof FOUNDERS[0]; onClick: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [12, -12]);
  const rotateY = useTransform(x, [-80, 80], [-12, 12]);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function resetTilt() { x.set(0); y.set(0); }

  return (
    <motion.div
      className="relative w-full max-w-[380px] mx-auto cursor-pointer"
      style={{ perspective: 1000, rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouse}
      onMouseLeave={resetTilt}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {/* Glow ring */}
      <motion.div
        className="absolute -inset-2 rounded-[2rem] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,102,255,0.18) 0%, transparent 70%)' }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Photo frame */}
      <div className="relative aspect-[3/4] w-full rounded-[1.75rem] overflow-hidden bg-zinc-100 border border-black/10 shadow-2xl shadow-black/20">
        <Image src={founder.image} alt={founder.name} fill className="object-cover" sizes="380px" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue mb-1">{founder.badge}</p>
          <p className="text-base font-black">{founder.name}</p>
          <p className="text-xs font-medium text-white/60">{founder.role}</p>
        </div>

        {/* Click ripple hint */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-white text-[9px] font-bold uppercase tracking-widest">Click me</span>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Cinematic profile modal — opens when photo is clicked
// ─────────────────────────────────────────────────────────────────
function ProfileModal({ founder, onClose }: { founder: typeof FOUNDERS[0]; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', fn);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
        initial={{ scale: 0.88, opacity: 0, y: 32 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 32 }}
        transition={{ duration: 0.5, ease: [0.34, 1.1, 0.64, 1] }}
        style={{ maxHeight: '90vh' }}
      >
        {/* LEFT — full photo panel */}
        <div className="relative md:w-[38%] shrink-0 min-h-[280px] md:min-h-0 bg-black">
          <Image
            src={founder.image}
            alt={founder.name}
            fill
            className="object-cover opacity-90"
            sizes="500px"
          />
          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/40" />

          {/* Name & role overlay */}
          <div className="absolute bottom-6 left-7 right-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-blue mb-1">About</p>
              <h3 className="text-2xl font-black text-white leading-tight">{founder.name}</h3>
              <p className="text-sm font-medium text-white/60 mt-0.5">{founder.role}</p>
              <div className="mt-3 flex gap-2">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold text-white bg-white/15 border border-white/20 rounded-full px-3 py-1.5 hover:bg-brand-blue hover:border-brand-blue transition-colors duration-200"
                >
                  <Linkedin size={10} />
                  LinkedIn
                  <ExternalLink size={8} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT — bio scroll panel */}
        <div className="flex-1 overflow-y-auto" style={{ maxHeight: '90vh' }}>
          {/* Header bar */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-5 bg-white border-b border-zinc-100">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">A little about me</p>
              <p className="text-sm font-black text-brand-black mt-0.5">{founder.tagline}</p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors duration-200"
            >
              <X size={16} className="text-zinc-600" />
            </button>
          </div>

          <div className="px-8 py-8 flex flex-col gap-8">
            {/* Bio paragraphs */}
            <div className="flex flex-col gap-4">
              {founder.bio.map((para, i) => (
                <motion.p
                  key={i}
                  className="text-[15px] font-medium text-zinc-600 leading-relaxed"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.45 }}
                  dangerouslySetInnerHTML={{
                    __html: para
                      .replace(/systems that survive production/g, '<strong class="text-brand-black">systems that survive production</strong>')
                      .replace(/high-speed, scalable products/g, '<strong class="text-brand-black">high-speed, scalable products</strong>')
                      .replace(/Flutter-based architectures/g, '<strong class="text-brand-black">Flutter-based architectures</strong>')
                      .replace(/secure backend pipelines/g, '<strong class="text-brand-black">secure backend pipelines</strong>')
                      .replace(/Data Structures & Algorithms/g, '<strong class="text-brand-black">Data Structures & Algorithms</strong>')
                      .replace(/enterprise web platforms/g, '<strong class="text-brand-black">enterprise web platforms</strong>')
                      .replace(/real-time cloud infrastructure/g, '<strong class="text-brand-black">real-time cloud infrastructure</strong>')
                      .replace(/AI-powered mobile experiences/g, '<strong class="text-brand-black">AI-powered mobile experiences</strong>')
                      .replace(/flawless technical execution/g, '<strong class="text-brand-black">flawless technical execution</strong>')
                      .replace(/fintech, healthcare, and e-commerce/g, '<strong class="text-brand-black">fintech, healthcare, and e-commerce</strong>')
                      .replace(/zero-compromise solutions/g, '<strong class="text-brand-black">zero-compromise solutions</strong>')
                      .replace(/UI\/UX design systems/g, '<strong class="text-brand-black">UI/UX design systems</strong>')
                      .replace(/client strategy/g, '<strong class="text-brand-black">client strategy</strong>')
                      .replace(/growth architecture/g, '<strong class="text-brand-black">growth architecture</strong>')
                  }}
                />
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              {founder.stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center justify-center py-5 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <span className="text-2xl font-black text-brand-black">{s.value}</span>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1 text-center">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Domain chips */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.4 }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-3">Expertise</p>
              <div className="flex flex-wrap gap-2">
                {founder.domains.map((d, i) => (
                  <motion.div
                    key={i}
                    className="inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-black bg-white border border-brand-border rounded-full px-3 py-1.5 shadow-sm hover:border-brand-blue hover:text-brand-blue transition-colors duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.05 }}
                  >
                    {d.icon}
                    {d.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Founder row — bio left, photo right (first); reversed for second
// ─────────────────────────────────────────────────────────────────
function FounderRow({ founder, index }: { founder: typeof FOUNDERS[0]; index: number }) {
  const [modalOpen, setModalOpen] = useState(false);
  const reversed = index % 2 !== 0;

  const accentWords = founder.accentWords;

  return (
    <>
      <motion.div
        className={`flex flex-col lg:flex-row items-center gap-14 lg:gap-20 ${reversed ? 'lg:flex-row-reverse' : ''}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* BIO SIDE */}
        <div className="flex-1 flex flex-col gap-7">
          {/* Animated role title */}
          <motion.div
            className="inline-flex items-center gap-2"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="flex items-center gap-2 rounded-full border border-brand-blue/25 bg-brand-blue/5 px-4 py-1.5">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-brand-blue"
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-brand-blue">
                {founder.role}
              </span>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            className="inline-flex w-fit items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-6 h-px bg-zinc-300" />
            A little about me
          </motion.div>

          {/* Heading */}
          <AnimatedHeading text={founder.tagline} accentWords={accentWords} />

          {/* Bio paras */}
          <div className="flex flex-col gap-4">
            {founder.bio.map((para, i) => (
              <motion.p
                key={i}
                className="text-[15px] font-medium text-zinc-500 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Domain chips */}
          <motion.div
            className="flex flex-wrap gap-2 pt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            {founder.domains.map((d, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-black bg-white border border-brand-border rounded-full px-3 py-1.5 shadow-sm"
              >
                {d.icon}
                {d.label}
              </span>
            ))}
          </motion.div>

          {/* Contact links */}
          <motion.div
            className="flex flex-wrap gap-2.5 pt-1"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {founder.contact.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[12.5px] font-bold transition-all duration-200 active:scale-95 border ${c.style === 'linkedin'
                  ? 'bg-[#0A66C2] text-white border-[#0A66C2] hover:bg-[#004182]'
                  : c.style === 'github'
                    ? 'bg-brand-black text-white border-brand-black hover:bg-neutral-700'
                    : 'bg-white text-brand-black border-brand-border hover:border-brand-blue hover:text-brand-blue shadow-sm'
                  }`}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65 + i * 0.08, duration: 0.35, ease: [0.34, 1.3, 0.64, 1] }}
                whileHover={{ y: -2 }}
              >
                {c.icon}
                {c.label}
                {(c.style === 'linkedin' || c.style === 'github') && <ExternalLink size={10} opacity={0.7} />}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* PHOTO SIDE */}
        <div className="w-full lg:w-[38%] shrink-0">
          <TiltPhoto founder={founder} onClick={() => setModalOpen(true)} />
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <ProfileModal founder={founder} onClose={() => setModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────
// Team section
// ─────────────────────────────────────────────────────────────────
export default function Team() {
  return (
    <section className="py-32 bg-brand-white relative overflow-hidden" id="Team">
      <div className="absolute inset-0 grid-background pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Section header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-brand-blue/5 border border-brand-blue/10 px-4 py-1.5 text-[10px] uppercase font-black tracking-widest text-brand-blue mb-6"
          >
            The Founders
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-brand-black"
          >
            Team Behind <span className="text-brand-blue">Wonders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 font-medium text-base max-w-xl mx-auto mt-4"
          >
            Elite engineers and designers working together to build the future.
          </motion.p>
        </div>

        {/* Founders */}
        <div className="flex flex-col gap-28">
          {FOUNDERS.map((founder, i) => (
            <FounderRow key={founder.name} founder={founder} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
