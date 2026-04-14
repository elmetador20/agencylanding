'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


// ─────────────────────────────────────────────────────────────────
// Static pre-computed orbital positions — no runtime Math
// Ring radii: inner = 95 | mid = 165 | outer = 235
// Center of the 520×520 canvas = (260, 260)
// ─────────────────────────────────────────────────────────────────
const NODES = [
  // ── Inner ring R=95 ──────────────────────────────────────────
  { id: 1, x:  72.77, y:  61.07, img: '/av1.png',        label: 'Dev',      size: 50, delay: 0.0, isFounder: false },
  { id: 2, x: -72.77, y: -61.07, img: '/av2.png',        label: 'Designer', size: 50, delay: 1.0, isFounder: false },

  // ── Mid ring R=165 ───────────────────────────────────────────
  // node 3: angle=10° → right-midline → AKSHA (Founder)
  { id: 3, x: 162.49, y:  28.65,  img: '/Aksha.jpeg',    label: 'Founder',  size: 58, delay: 0.3, isFounder: true  },
  { id: 4, x:  -82.50, y: 142.89, img: '/av4.png',       label: 'UX',       size: 52, delay: 0.8, isFounder: false },
  { id: 5, x:  -82.50, y:-142.89, img: '/av5.png',       label: 'CEO',      size: 52, delay: 1.5, isFounder: false },
  { id: 6, x:  126.39, y:-105.99, img: '/av6.png',       label: 'PM',       size: 48, delay: 0.5, isFounder: false },

  // ── Outer ring R=235 ─────────────────────────────────────────
  // node 7: angle=150° → upper-left → SHARIQUE (Founder)
  { id: 7, x: -203.51, y:  117.50, img: '/Sharique.jpeg', label: 'Founder',    size: 58, delay: 0.2, isFounder: true  },
  { id: 8, x:  117.50, y:  203.51, img: '/av3.png',        label: 'Builder',   size: 46, delay: 1.1, isFounder: false },
  { id: 9, x:    0.00, y: -235.00, img: '/av7.png',        label: 'Partner',   size: 46, delay: 0.7, isFounder: false },
];

const RING_RADII = [95, 165, 235] as const;

// ─────────────────────────────────────────────────────────────────
// Orbiting shimmer dot — one per ring, travels around the ring
// ─────────────────────────────────────────────────────────────────
function OrbitShimmer({ r, duration, color, reverse = false }: {
  r: number; duration: number; color: string; reverse?: boolean;
}) {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{ width: r * 2, height: r * 2 }}
    >
      <motion.div
        className="w-full h-full"
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {/* Dot pinned at 12 o'clock (top-center) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: color,
            boxShadow: `0 0 10px 4px ${color}80`,
          }}
        />
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Orbital Avatar
// ─────────────────────────────────────────────────────────────────
function OrbitalAvatar({ node }: { node: typeof NODES[number] }) {
  return (
    <div
      className="absolute"
      style={{
        left:   `calc(50% + ${node.x}px)`,
        top:    `calc(50% + ${node.y}px)`,
        width:  node.size,
        height: node.size,
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
      }}
    >
      <motion.div
        className="group relative w-full h-full cursor-pointer"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: node.delay * 0.4 + 0.5,
          ease: [0.34, 1.56, 0.64, 1], // spring-like overshoot
        }}
        whileHover={{ scale: 1.25, zIndex: 50 }}
      >
        {/* ── Permanent founder ring pulse ── */}
        {node.isFounder && (
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ border: '2px solid #0066FF' }}
            animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        {/* ── Hover glow ring ── */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
          style={{ boxShadow: '0 0 0 3px #0066FF, 0 0 22px 6px rgba(0,102,255,0.4)' }}
        />

        {/* ── Float + avatar ── */}
        <motion.div
          className="w-full h-full rounded-full overflow-hidden shadow-xl bg-zinc-100"
          style={{
            border: node.isFounder
              ? '2.5px solid rgba(0,102,255,0.5)'
              : '2.5px solid rgba(0,0,0,0.12)',
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3 + node.delay * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: node.delay,
          }}
        >
          <Image
            src={node.img}
            alt={node.label}
            fill
            className="object-cover"
            sizes={`${node.size}px`}
          />
        </motion.div>

        {/* ── Founder badge chip (always visible, subtle) ── */}
        {node.isFounder && (
          <motion.div
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: node.delay * 0.4 + 1.2, duration: 0.4 }}
          >
            <span
              className="inline-block text-[8px] font-black uppercase tracking-[0.14em] px-2 py-0.5 rounded-full"
              style={{
                background: 'rgba(0,102,255,0.1)',
                color: '#0066FF',
                border: '1px solid rgba(0,102,255,0.25)',
              }}
            >
              Founder
            </span>
          </motion.div>
        )}

        {/* ── Regular role tooltip on hover ── */}
        {!node.isFounder && (
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-bold uppercase tracking-widest text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            {node.label}
          </div>
        )}
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// CircularNetwork
// ─────────────────────────────────────────────────────────────────
function CircularNetwork() {
  // Center of SVG canvas
  const CX = 260;
  const CY = 260;

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: 520, height: 520 }}
    >
      {/* ── 1. SVG layer: dashed connection beams + node dots ── */}
      <svg
        className="absolute inset-0 pointer-events-none"
        style={{ width: 520, height: 520, zIndex: 6 }}
      >
        {NODES.map((node) => (
          <g key={`beam-${node.id}`}>
            {/* Dashed beam from center → node */}
            <motion.line
              x1={CX} y1={CY}
              x2={CX + node.x} y2={CY + node.y}
              stroke={node.isFounder ? 'rgba(0,102,255,0.35)' : 'rgba(0,0,0,0.12)'}
              strokeWidth={node.isFounder ? 1.5 : 1}
              strokeDasharray="5 7"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.25, node.isFounder ? 0.7 : 0.4, 0.25],
                strokeDashoffset: [0, -24],
              }}
              transition={{
                opacity: {
                  duration: 2.8 + node.delay * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: node.delay * 0.3 + 0.8,
                },
                strokeDashoffset: {
                  duration: 1.6,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: node.delay * 0.2,
                },
              }}
            />
            {/* Small glowing dot at the node end of each beam */}
            <motion.circle
              cx={CX + node.x}
              cy={CY + node.y}
              r={node.isFounder ? 3.5 : 2.5}
              fill={node.isFounder ? '#0066FF' : 'rgba(0,0,0,0.3)'}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                opacity: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: node.delay * 0.3 + 1,
                },
              }}
            />
          </g>
        ))}

        {/* Center pulse ripple rings (SVG circles) */}
        {[1, 2, 3].map((i) => (
          <motion.circle
            key={`ripple-${i}`}
            cx={CX} cy={CY}
            r={20}
            fill="none"
            stroke="rgba(0,102,255,0.25)"
            strokeWidth={1}
            initial={{ r: 20, opacity: 0.6 }}
            animate={{ r: 80, opacity: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeOut',
              delay: i * 1,
            }}
          />
        ))}
      </svg>

      {/* ── 2. Outermost decorative dashed ring ── */}
      <div
        className="absolute rounded-full"
        style={{
          width: 492, height: 492,
          border: '1px dashed rgba(0,0,0,0.07)',
        }}
      />

      {/* ── 3. Three static orbital rings (black, glassy) ── */}
      {RING_RADII.map((r, i) => (
        <div
          key={r}
          className="absolute rounded-full"
          style={{
            width: r * 2,
            height: r * 2,
            border: `1.5px solid rgba(0,0,0,${0.18 + i * 0.07})`,
            boxShadow: `
              0 0 0 1px rgba(255,255,255,0.6) inset,
              0 0 ${10 + i * 9}px ${2 + i * 3}px rgba(0,102,255,${0.035 + i * 0.015})
            `,
          }}
        />
      ))}

      {/* ── 4. Orbiting shimmer dots (one per ring, different speeds & colors) ── */}
      <OrbitShimmer r={RING_RADII[0]} duration={18}  color="#0066FF"  reverse={false} />
      <OrbitShimmer r={RING_RADII[1]} duration={30}  color="#000000"  reverse={true}  />
      <OrbitShimmer r={RING_RADII[2]} duration={45}  color="#0066FF"  reverse={false} />

      {/* ── 5. Center Hub ── */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center rounded-full bg-white"
        style={{
          width: 110, height: 110,
          border: '2px solid rgba(0,0,0,0.10)',
          boxShadow:
            '0 0 0 8px rgba(0,102,255,0.05), 0 0 0 18px rgba(0,102,255,0.025), 0 10px 40px rgba(0,0,0,0.10)',
        }}
        animate={{ scale: [1, 1.035, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-black leading-none">
          Idea to
        </span>
        <span
          className="text-[20px] font-black text-brand-blue leading-tight"
          style={{ letterSpacing: '-0.02em' }}
        >
          Launch
        </span>
        <Link
          href="/#Services"
          className="mt-1 flex items-center gap-0.5 text-[8px] font-black uppercase tracking-widest text-brand-black hover:text-brand-blue transition-colors duration-200"
        >
          Start Now
          <ArrowRight size={7} strokeWidth={3} />
        </Link>
      </motion.div>

      {/* ── 6. Avatar nodes ── */}
      {NODES.map((node) => (
        <OrbitalAvatar key={node.id} node={node} />
      ))}

      {/* ── 7. Ambient radial glow ── */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(0,102,255,0.05) 0%, transparent 60%)',
        }}
      />
    </div>
  );
}



// ─────────────────────────────────────────────────────────────────
// Hero Section
// ─────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 grid-background pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 80% 38%, rgba(0,102,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        {/* Split hero */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6 mb-20">

          {/* LEFT */}
          <motion.div
            className="flex-1 max-w-xl"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight text-brand-black leading-[1.1] mb-5"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Stop Planning.{' '}
              <span className="relative">Start Launching.</span>
              <br />
              <span className="block group pt-1 cursor-default">
                <span className="text-3xl md:text-4xl xl:text-5xl font-black text-zinc-400 leading-snug transition-all duration-300">
                  We Build{' '}
                  <span className="transition-colors duration-500 ease-out group-hover:text-brand-blue">Apps</span>
                  {' '}&amp;{' '}
                  <span className="transition-colors duration-500 ease-out delay-[75ms] group-hover:text-brand-blue">Websites</span>
                </span>
                <br />
                <span className="text-3xl md:text-4xl xl:text-5xl font-black text-zinc-400 transition-all duration-300">
                  That Go{' '}
                  <span className="transition-colors duration-500 ease-out delay-[150ms] group-hover:text-brand-blue">Live</span>
                  {' '}
                  <span className="transition-colors duration-500 ease-out delay-[225ms] group-hover:text-brand-blue">Fast.</span>
                </span>
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mb-10"
            >
              <p className="text-lg font-bold text-brand-blue leading-snug">
                Build your Startups with FluxGenAI
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
            >
              <Link href="/#Services" className="btn-primary flex items-center gap-2 group">
                Let&apos;s Explore
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="flex-shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="circle-network-wrapper">
              <CircularNetwork />
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
