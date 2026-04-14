'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Play, X, Star } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────
interface AppProject {
  id: number;
  title: string;
  category: string;
  tech: string;
  video: string;    // iframe-safe URL
  videoType: 'drive' | 'mp4';
  accent: string;   // tailwind bg class for header
  accentHex: string;
  icon: React.ReactNode;
  screenshots: { bg: string; content: React.ReactNode }[];
  points: string[];
}

interface WebProject {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  points: string[];
}

// ─────────────────────────────────────────────────────────────────
// Websites data
// ─────────────────────────────────────────────────────────────────
const WEBSITES: WebProject[] = [
  {
    id: 1,
    title: 'LeapSkill',
    category: 'AI Career Platform',
    image: '/leapskill.png',
    link: 'https://leapskill.vercel.app/',
    points: [
      'AI-powered career guidance personalised per user profile.',
      'Skill gap analysis with curated learning roadmaps.',
      'Real-time job matching engine integrated with top portals.',
      'Clean, accessible UI optimised for mobile-first usage.',
    ],
  },
  {
    id: 2,
    title: 'TEDx KIET',
    category: 'Club Website',
    image: '/TedxKiet.png',
    link: 'https://www.tedxkiet.com/',
    points: [
      'Premium event-brand website with immersive scroll design.',
      'Speaker & session showcase with dynamic content blocks.',
      'High-performance build — 95+ Lighthouse score achieved.',
      'Enhanced SEO driving 3× organic discovery growth.',
    ],
  },
  {
    id: 3,
    title: 'Nexyrium',
    category: 'B2B Data & Venture Intelligence',
    image: '/Nexyrium.png',
    link: 'https://www.nexyrium.in/',
    points: [
      'Designed and developed a high-conversion website for a VC database and venture intelligence agency.',
      'Structured data-heavy offerings into clear, scannable sections for founders and startup teams.',
      'Built trust-focused UI with strong positioning, credibility signals, and clean information hierarchy.',
      'Optimized user journey and CTA placement to drive lead generation and inquiry conversions.',
    ],
  }
];

// ─────────────────────────────────────────────────────────────────
// App SVG mockup screenshotlets  (inline, Play-Store-inspired)
// ─────────────────────────────────────────────────────────────────

// YumSnap screenshots
const yumScreenshots = [
  {
    bg: '#FFF7ED',
    content: (
      <svg viewBox="0 0 100 140" className="w-full h-full">
        <rect width="100" height="140" fill="#FFF7ED" rx="8" />
        <rect x="8" y="12" width="84" height="50" rx="6" fill="#FF6B35" opacity="0.15" />
        <text x="50" y="38" textAnchor="middle" fontSize="18" fill="#FF6B35">🍜</text>
        <text x="50" y="56" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#92400E">Pad Thai</text>
        <rect x="8" y="70" width="40" height="28" rx="4" fill="#FDBA74" opacity="0.5" />
        <rect x="52" y="70" width="40" height="28" rx="4" fill="#FCD34D" opacity="0.5" />
        <text x="28" y="88" textAnchor="middle" fontSize="12" fill="#9A3412">🥘</text>
        <text x="72" y="88" textAnchor="middle" fontSize="12" fill="#78350F">🍱</text>
        <rect x="8" y="104" width="84" height="4" rx="2" fill="#FF6B35" opacity="0.3" />
        <rect x="8" y="114" width="60" height="4" rx="2" fill="#E5E7EB" />
        <rect x="8" y="124" width="40" height="4" rx="2" fill="#E5E7EB" />
      </svg>
    ),
  },
  {
    bg: '#F0FDF4',
    content: (
      <svg viewBox="0 0 100 140" className="w-full h-full">
        <rect width="100" height="140" fill="#F0FDF4" rx="8" />
        <text x="50" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">Meal Plan</text>
        {[0, 1, 2, 3, 4, 5, 6].map(i => (
          <rect key={i} x={8 + i * 13} y="40" width="11" height="40" rx="3" fill={i < 4 ? '#22C55E' : '#D1FAE5'} />
        ))}
        <text x="50" y="94" textAnchor="middle" fontSize="7" fill="#4B5563">Mon-Sun</text>
        <rect x="8" y="104" width="84" height="12" rx="4" fill="#BBF7D0" />
        <text x="50" y="113" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#166534">1,840 kcal today</text>
        <rect x="8" y="122" width="84" height="10" rx="4" fill="#F3F4F6" />
        <text x="50" y="129" textAnchor="middle" fontSize="6" fill="#6B7280">AI Suggestion ✨</text>
      </svg>
    ),
  },
  {
    bg: '#FAF5FF',
    content: (
      <svg viewBox="0 0 100 140" className="w-full h-full">
        <rect width="100" height="140" fill="#FAF5FF" rx="8" />
        <rect x="8" y="8" width="84" height="28" rx="6" fill="#7C3AED" opacity="0.12" />
        <text x="50" y="28" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#6D28D9">✨ AI Chef</text>
        <text x="50" y="60" textAnchor="middle" fontSize="22" fill="#7C3AED">🤖</text>
        <rect x="14" y="80" width="72" height="8" rx="3" fill="#DDD6FE" />
        <rect x="14" y="94" width="55" height="8" rx="3" fill="#EDE9FE" />
        <rect x="14" y="108" width="64" height="8" rx="3" fill="#EDE9FE" />
        <rect x="8" y="124" width="84" height="10" rx="4" fill="#7C3AED" />
        <text x="50" y="131" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white">Generate Recipe</text>
      </svg>
    ),
  },
];

// LMS screenshots
const lmsScreenshots = [
  {
    bg: '#EFF6FF',
    content: (
      <svg viewBox="0 0 100 140" className="w-full h-full">
        <rect width="100" height="140" fill="#EFF6FF" rx="8" />
        <text x="50" y="20" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1E40AF">My Courses</text>
        {[0, 1, 2].map(i => (
          <g key={i} transform={`translate(0, ${i * 34})`}>
            <rect x="8" y="26" width="84" height="28" rx="5" fill={i === 0 ? '#3B82F6' : i === 1 ? '#6366F1' : '#8B5CF6'} opacity="0.12" />
            <rect x="14" y="30" width="20" height="20" rx="4" fill={i === 0 ? '#3B82F6' : i === 1 ? '#6366F1' : '#8B5CF6'} opacity="0.3" />
            <rect x="38" y="32" width="48" height="5" rx="2" fill={i === 0 ? '#1D4ED8' : i === 1 ? '#4338CA' : '#6D28D9'} opacity="0.4" />
            <rect x="38" y="41" width="30" height="5" rx="2" fill="#D1D5DB" />
          </g>
        ))}
      </svg>
    ),
  },
  {
    bg: '#F5F3FF',
    content: (
      <svg viewBox="0 0 100 140" className="w-full h-full">
        <rect width="100" height="140" fill="#F5F3FF" rx="8" />
        <rect x="8" y="8" width="84" height="52" rx="6" fill="#4F46E5" opacity="0.9" />
        <text x="50" y="38" textAnchor="middle" fontSize="20" fill="white">▶</text>
        <text x="50" y="52" textAnchor="middle" fontSize="7" fill="white" opacity="0.8">React Fundamentals</text>
        <text x="12" y="76" fontSize="8" fontWeight="bold" fill="#1E1B4B">Progress</text>
        <rect x="8" y="82" width="84" height="6" rx="3" fill="#E5E7EB" />
        <rect x="8" y="82" width="55" height="6" rx="3" fill="#6366F1" />
        <text x="50" y="104" textAnchor="middle" fontSize="7" fill="#4B5563">65% complete</text>
        <rect x="8" y="112" width="38" height="18" rx="5" fill="#4F46E5" />
        <rect x="50" y="112" width="42" height="18" rx="5" fill="#EDE9FE" />
        <text x="27" y="123" textAnchor="middle" fontSize="6" fill="white">Continue</text>
        <text x="71" y="123" textAnchor="middle" fontSize="6" fill="#4F46E5">Quiz</text>
      </svg>
    ),
  },
  {
    bg: '#FEF3C7',
    content: (
      <svg viewBox="0 0 100 140" className="w-full h-full">
        <rect width="100" height="140" fill="#FEF3C7" rx="8" />
        <text x="50" y="20" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#92400E">Certificate 🏆</text>
        <rect x="12" y="28" width="76" height="56" rx="6" fill="white" stroke="#F59E0B" strokeWidth="2" />
        <text x="50" y="52" textAnchor="middle" fontSize="16" fill="#F59E0B">🎓</text>
        <text x="50" y="66" textAnchor="middle" fontSize="6" fill="#78350F">This certifies that</text>
        <text x="50" y="75" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#1C1917">Aksha Bhalla</text>
        <rect x="20" y="92" width="60" height="4" rx="2" fill="#FCD34D" />
        <rect x="8" y="106" width="84" height="8" rx="3" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
        <text x="50" y="113" textAnchor="middle" fontSize="5.5" fill="#92400E">Pay via Razorpay ₹</text>
        <rect x="8" y="120" width="84" height="14" rx="4" fill="#F59E0B" />
        <text x="50" y="129" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white">Enroll Now</text>
      </svg>
    ),
  },
];

// FinPilot screenshots
const finScreenshots = [
  {
    bg: '#F0FDF4',
    content: (
      <svg viewBox="0 0 100 140" className="w-full h-full">
        <rect width="100" height="140" fill="#F0FDF4" rx="8" />
        <rect x="8" y="8" width="84" height="36" rx="6" fill="#059669" opacity="0.9" />
        <text x="50" y="24" textAnchor="middle" fontSize="7" fill="white" opacity="0.8">Total Balance</text>
        <text x="50" y="37" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">₹ 84,320</text>
        <text x="12" y="58" fontSize="8" fontWeight="bold" fill="#064E3B">Expenses</text>
        <circle cx="50" cy="86" r="22" fill="none" stroke="#D1FAE5" strokeWidth="8" />
        <circle cx="50" cy="86" r="22" fill="none" stroke="#059669" strokeWidth="8"
          strokeDasharray="84 54" strokeDashoffset="0" />
        <text x="50" y="90" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#065F46">68%</text>
        <text x="50" y="120" textAnchor="middle" fontSize="7" fill="#6B7280">Food • Travel • Bills</text>
        <rect x="8" y="128" width="84" height="8" rx="3" fill="#D1FAE5" />
      </svg>
    ),
  },
  {
    bg: '#ECFDF5',
    content: (
      <svg viewBox="0 0 100 140" className="w-full h-full">
        <rect width="100" height="140" fill="#ECFDF5" rx="8" />
        <text x="12" y="18" fontSize="8" fontWeight="bold" fill="#065F46">Transactions</text>
        {[
          { icon: '🛒', label: 'Grocery', amt: '-₹420', color: '#EF4444' },
          { icon: '💰', label: 'Salary', amt: '+₹52k', color: '#10B981' },
          { icon: '⚡', label: 'Electric', amt: '-₹890', color: '#F59E0B' },
          { icon: '🚕', label: 'Uber', amt: '-₹220', color: '#EF4444' },
        ].map((t, i) => (
          <g key={i} transform={`translate(0, ${i * 28})`}>
            <rect x="8" y="22" width="84" height="22" rx="5" fill="white" />
            <text x="14" y="36" fontSize="11" fill="black">{t.icon}</text>
            <text x="28" y="36" fontSize="7" fontWeight="bold" fill="#111827">{t.label}</text>
            <text x="90" y="36" textAnchor="end" fontSize="7" fontWeight="bold" fill={t.color}>{t.amt}</text>
          </g>
        ))}
      </svg>
    ),
  },
  {
    bg: '#F0FDFA',
    content: (
      <svg viewBox="0 0 100 140" className="w-full h-full">
        <rect width="100" height="140" fill="#F0FDFA" rx="8" />
        <text x="50" y="18" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0F766E">Gemini AI 🤖</text>
        <rect x="8" y="24" width="60" height="18" rx="4" fill="#CCFBF1" />
        <text x="38" y="36" textAnchor="middle" fontSize="6" fill="#0F766E">Spent 30% more on food</text>
        <rect x="32" y="48" width="60" height="18" rx="4" fill="#E0F2FE" />
        <text x="62" y="60" textAnchor="middle" fontSize="6" fill="#0369A1">Save ₹4k next month 💡</text>
        <rect x="8" y="72" width="55" height="18" rx="4" fill="#CCFBF1" />
        <text x="35" y="84" textAnchor="middle" fontSize="6" fill="#0F766E">Auto-categorised 98%</text>
        <rect x="8" y="104" width="84" height="24" rx="6" fill="#0D9488" />
        <text x="50" y="119" textAnchor="middle" fontSize="7" fontWeight="bold" fill="white">Ask AI for insights ✨</text>
      </svg>
    ),
  },
];

// AyurScan screenshots
const ayurScreenshots = [
  {
    bg: '#F0FDFA',
    content: (
      <svg viewBox="0 0 100 140" className="w-full h-full">
        <rect width="100" height="140" fill="#F0FDFA" rx="8" />
        <text x="50" y="18" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0F766E">Skin Scanner</text>
        <circle cx="50" cy="56" r="28" fill="none" stroke="#0D9488" strokeWidth="2.5" strokeDasharray="6 3" />
        <circle cx="50" cy="56" r="20" fill="#CCFBF1" />
        <text x="50" y="62" textAnchor="middle" fontSize="18" fill="#0D9488">👁</text>
        <text x="50" y="94" textAnchor="middle" fontSize="7" fill="#6B7280">Analysing skin texture...</text>
        <rect x="8" y="104" width="84" height="6" rx="3" fill="#E5E7EB" />
        <rect x="8" y="104" width="60" height="6" rx="3" fill="#0D9488" />
        <rect x="8" y="118" width="84" height="14" rx="4" fill="#0D9488" />
        <text x="50" y="127" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white">Scan Now • AI-Powered</text>
      </svg>
    ),
  },
  {
    bg: '#F5F3FF',
    content: (
      <svg viewBox="0 0 100 140" className="w-full h-full">
        <rect width="100" height="140" fill="#F5F3FF" rx="8" />
        <text x="50" y="16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#6D28D9">Health Report</text>
        <rect x="8" y="22" width="84" height="26" rx="6" fill="#7C3AED" opacity="0.1" />
        <text x="50" y="30" textAnchor="middle" fontSize="6" fill="#7C3AED">Skin Health Score</text>
        <text x="50" y="42" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#7C3AED">92/100</text>
        {['Hydration', 'UV Damage', 'Texture', 'Tone'].map((l, i) => (
          <g key={i} transform={`translate(0,${i * 22})`}>
            <text x="12" y="60" fontSize="7" fill="#4B5563">{l}</text>
            <rect x="12" y="64" width="76" height="5" rx="2" fill="#EDE9FE" />
            <rect x="12" y="64" width={[60, 30, 68, 50][i]} height="5" rx="2" fill="#8B5CF6" />
          </g>
        ))}
      </svg>
    ),
  },
  {
    bg: '#ECFDF5',
    content: (
      <svg viewBox="0 0 100 140" className="w-full h-full">
        <rect width="100" height="140" fill="#ECFDF5" rx="8" />
        <text x="50" y="16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#065F46">Ayur Chatbot</text>
        {[
          { msg: 'Skin feels dry 😟', left: true },
          { msg: 'Apply neem paste ✨', left: false },
          { msg: 'Any side effects?', left: true },
          { msg: 'None — 100% natural', left: false },
        ].map((c, i) => (
          <g key={i} transform={`translate(0,${i * 28})`}>
            <rect
              x={c.left ? 8 : 40} y={22} width={52} height={18} rx={5}
              fill={c.left ? '#D1FAE5' : '#059669'}
            />
            <text
              x={c.left ? 34 : 66} y={34} textAnchor="middle" fontSize={6}
              fill={c.left ? '#065F46' : 'white'}
            >
              {c.msg}
            </text>
          </g>
        ))}
      </svg>
    ),
  },
];

// ─────────────────────────────────────────────────────────────────
// Applications data
// ─────────────────────────────────────────────────────────────────
const APPLICATIONS: AppProject[] = [
  {
    id: 1,
    title: 'YumSnap',
    category: 'AI Recipe & Meal Planner',
    tech: 'Flutter · Firebase · Mistral API',
    video: 'https://drive.google.com/file/d/1XTLTDQknZpok_ETCCET6XqV4SlVp_i_h/preview',
    videoType: 'drive',
    accent: 'bg-orange-500',
    accentHex: '#F97316',
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <rect width="32" height="32" rx="8" fill="#FF6B35" />
        <text x="16" y="22" textAnchor="middle" fontSize="16" fill="white">🍜</text>
      </svg>
    ),
    screenshots: yumScreenshots,
    points: [
      'Snap any food — Mistral AI instantly identifies ingredients & macros.',
      'Personalised weekly meal plans built around your health goals.',
      "Zero-waste recipe suggestions using whatever's in your fridge.",
      '100k+ verified recipes with smart dietary-filter search.',
    ],
  },
  {
    id: 2,
    title: 'Learning Management System',
    category: 'Full-Scale Education Platform',
    tech: 'Flutter · Firebase · Razorpay',
    video: 'https://customer-assets.emergentagent.com/job_8099da2e-6a3b-45ed-9ee9-c23e1214c375/artifacts/7kx805nk_Lms_project_video.mp4',
    videoType: 'mp4',
    accent: 'bg-indigo-600',
    accentHex: '#4F46E5',
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <rect width="32" height="32" rx="8" fill="#4F46E5" />
        <text x="16" y="22" textAnchor="middle" fontSize="16" fill="white">🎓</text>
      </svg>
    ),
    screenshots: lmsScreenshots,
    points: [
      'Full-scale LMS — live classes, recorded videos, quizzes & exams.',
      'Razorpay-powered enrolment with auto-generated course certificates.',
      'Real-time progress tracking with teacher & student dashboards.',
      'Offline video caching for uninterrupted learning anywhere.',
    ],
  },
  {
    id: 3,
    title: 'FinPilot AI',
    category: 'Auto Expense Tracker',
    tech: 'Flutter · Firebase · Gemini AI',
    video: 'https://drive.google.com/file/d/1qI63MXatTPdeKhJORLouobfBOlUUYFIc/preview',
    videoType: 'drive',
    accent: 'bg-emerald-600',
    accentHex: '#059669',
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <rect width="32" height="32" rx="8" fill="#059669" />
        <text x="16" y="22" textAnchor="middle" fontSize="16" fill="white">📊</text>
      </svg>
    ),
    screenshots: finScreenshots,
    points: [
      'Auto-reads SMS transactions — zero manual entry required.',
      'Gemini AI detects spending patterns & flags budget overruns.',
      'Visual dashboards: pie charts, bar graphs, monthly trends.',
      'Smart savings goals with AI-driven personalised money tips.',
    ],
  },
  {
    id: 4,
    title: 'AyurScan',
    category: 'AI Skin Health Analysis',
    tech: 'Flutter · Mistral API · Gemini AI',
    video: 'https://customer-assets.emergentagent.com/job_8099da2e-6a3b-45ed-9ee9-c23e1214c375/artifacts/221wl67s_AyurScan_project_video.mp4',
    videoType: 'mp4',
    accent: 'bg-teal-600',
    accentHex: '#0D9488',
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <rect width="32" height="32" rx="8" fill="#0D9488" />
        <text x="16" y="22" textAnchor="middle" fontSize="16" fill="white">🌿</text>
      </svg>
    ),
    screenshots: ayurScreenshots,
    points: [
      'One-tap AI scan diagnoses 12+ common skin conditions instantly.',
      'Ayurvedic remedy engine suggests organic, side-effect-free treatments.',
      'Gemini AI chatbot answers skin health queries 24/7 in plain language.',
      'Progress photo tracker measures improvement over days & weeks.',
    ],
  },
];

// ─────────────────────────────────────────────────────────────────
// Play Store–style app mockup
// ─────────────────────────────────────────────────────────────────
function AppMockup({ app }: { app: AppProject }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white border border-brand-border shadow-xl shadow-black/10 group">
      {/* Header */}
      <div
        className="flex items-center gap-3 px-5 py-4"
        style={{ background: `linear-gradient(135deg, ${app.accentHex}ee, ${app.accentHex}99)` }}
      >
        <div className="shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shadow-sm">
          {app.icon}
        </div>
        <div>
          <p className="text-white font-black text-base leading-tight">{app.title}</p>
          <p className="text-white/70 text-[10px] font-medium">{app.category}</p>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center gap-6 px-5 py-3 border-b border-zinc-100">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-0.5">
            <Star size={10} className="fill-amber-400 text-amber-400" />
            <span className="text-[11px] font-bold text-zinc-800">4.8</span>
          </div>
          <span className="text-[9px] text-zinc-400">54 reviews</span>
        </div>
        <div className="h-6 w-px bg-zinc-100" />
        <div className="flex flex-col items-center">
          <span className="text-[11px] font-bold text-zinc-800">10K+</span>
          <span className="text-[9px] text-zinc-400">Downloads</span>
        </div>
        <div className="h-6 w-px bg-zinc-100" />
        <div className="flex flex-col items-center">
          <span className="text-[11px] font-bold text-zinc-800">3+</span>
          <span className="text-[9px] text-zinc-400">Age rating</span>
        </div>
      </div>

      {/* Action row */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-zinc-100">
        <button
          className="flex-1 text-[12px] font-bold text-white py-2 rounded-full transition-opacity duration-200 hover:opacity-90"
          style={{ background: app.accentHex }}
        >
          Install
        </button>
        <button className="text-[11px] font-medium text-zinc-400 hover:text-zinc-600 transition-colors">Share</button>
        <button className="text-[11px] font-medium text-zinc-400 hover:text-zinc-600 transition-colors">+ Wishlist</button>
      </div>

      {/* Screenshots */}
      <div className="flex gap-3 px-4 py-4 overflow-x-auto scrollbar-none">
        {app.screenshots.map((s, i) => (
          <div
            key={i}
            className="shrink-0 w-[100px] h-[140px] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
            style={{ background: s.bg }}
          >
            {s.content}
          </div>
        ))}
      </div>

      {/* Tech badge */}
      <div className="px-5 pb-4">
        <span className="inline-block text-[9px] font-bold tracking-widest text-zinc-400 uppercase bg-zinc-50 border border-zinc-100 rounded-full px-3 py-1">
          {app.tech}
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Video Modal
// ─────────────────────────────────────────────────────────────────
function VideoModal({ app, onClose }: { app: AppProject; onClose: () => void }) {
  // Close on Escape
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal card */}
        <motion.div
          className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10"
          initial={{ scale: 0.92, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: [0.34, 1.1, 0.64, 1] }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ background: `linear-gradient(135deg, ${app.accentHex}ee, ${app.accentHex}88)` }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/25 flex items-center justify-center">
                {app.icon}
              </div>
              <div>
                <p className="text-white font-black text-sm">{app.title}</p>
                <p className="text-white/70 text-[10px]">{app.tech}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center transition-colors duration-200"
            >
              <X size={16} className="text-white" />
            </button>
          </div>

          {/* Video player */}
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            {app.videoType === 'mp4' ? (
              <video
                className="absolute inset-0 w-full h-full bg-black"
                src={app.video}
                controls
                autoPlay
              />
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={app.video}
                allow="autoplay; fullscreen"
                allowFullScreen
                title={app.title}
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────────────────────────
// Bullet
// ─────────────────────────────────────────────────────────────────
function Bullet({ index, text }: { index: number; text: string }) {
  return (
    <motion.li
      className="flex items-start gap-3"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + index * 0.07, duration: 0.4 }}
    >
      <span className="mt-0.5 shrink-0 text-[11px] font-black text-brand-blue" style={{ minWidth: 24 }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="text-[15px] font-medium text-zinc-600 leading-relaxed">{text}</span>
    </motion.li>
  );
}

// ─────────────────────────────────────────────────────────────────
// Website project block (zig-zag)
// ─────────────────────────────────────────────────────────────────
function WebBlock({ project, index }: { project: WebProject; index: number }) {
  const rev = index % 2 !== 0;
  return (
    <motion.div
      className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${rev ? 'lg:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <div className="w-full lg:w-[52%] shrink-0">
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-xl shadow-black/10 border border-brand-border bg-zinc-50 group">
          <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width:1024px) 100vw, 52vw" />
          <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/12 transition-colors duration-400" />
          <div className="absolute top-4 left-4">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full bg-white/90 text-brand-black shadow-sm backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <p className="text-[11px] font-black text-brand-blue uppercase tracking-[0.22em] mb-2">Project {String(index + 1).padStart(2, '0')}</p>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-brand-black leading-[1.1]">{project.title}</h3>
        </div>
        <div className="h-px w-12 bg-brand-blue rounded-full" />
        <ul className="flex flex-col gap-3">
          {project.points.map((pt, i) => <Bullet key={i} index={i} text={pt} />)}
        </ul>
        <div className="pt-2">
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-black text-white text-sm font-bold hover:bg-neutral-700 transition-all duration-200 active:scale-95 shadow-sm group">
            View Website
            <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────
// App project block (zig-zag)
// ─────────────────────────────────────────────────────────────────
function AppBlock({ project, index, onPlay }: { project: AppProject; index: number; onPlay: () => void }) {
  const rev = index % 2 !== 0;
  return (
    <motion.div
      className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${rev ? 'lg:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      {/* Mockup side */}
      <div className="w-full lg:w-[52%] shrink-0">
        <AppMockup app={project} />
      </div>

      {/* Content side */}
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.22em] mb-2" style={{ color: project.accentHex }}>
            App {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-brand-black leading-[1.1]">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-zinc-500 mt-1">{project.category}</p>
        </div>

        <div className="h-px w-12 rounded-full" style={{ background: project.accentHex }} />

        <ul className="flex flex-col gap-3">
          {project.points.map((pt, i) => (
            <motion.li key={i} className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}>
              <span className="mt-0.5 shrink-0 text-[11px] font-black" style={{ color: project.accentHex, minWidth: 24 }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[15px] font-medium text-zinc-600 leading-relaxed">{pt}</span>
            </motion.li>
          ))}
        </ul>

        <div className="pt-2">
          <button
            onClick={onPlay}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-white text-sm font-bold transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg hover:brightness-110"
            style={{ background: project.accentHex }}
          >
            <Play size={14} fill="white" />
            View Demo
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Portfolio section (main export)
// ─────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [tab, setTab] = useState<'websites' | 'applications'>('websites');
  const [activeVideo, setActiveVideo] = useState<AppProject | null>(null);

  return (
    <section id="Portfolio" className="py-32 bg-brand-white relative">
      <div className="absolute inset-0 grid-background pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="inline-block rounded-full bg-brand-blue/5 border border-brand-blue/10 px-4 py-1.5 text-[10px] uppercase font-black tracking-widest text-brand-blue mb-6">
            Portfolio
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-brand-black mb-4">
            Our Top <span className="text-brand-blue">Projects</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-zinc-500 font-medium text-base max-w-xl mx-auto">
            Every project engineered to outperform and outlast the market.
          </motion.p>

          {/* Toggle */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 mt-8 p-1 rounded-full bg-zinc-100 border border-brand-border">
            {(['websites', 'applications'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-full text-sm font-bold capitalize transition-all duration-250 ${tab === t ? 'bg-brand-black text-white shadow-sm' : 'text-zinc-500 hover:text-brand-black'}`}>
                {t === 'websites' ? 'Websites' : 'Applications'}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex flex-col gap-24">
            {tab === 'websites'
              ? WEBSITES.map((p, i) => <WebBlock key={p.id} project={p} index={i} />)
              : APPLICATIONS.map((p, i) => (
                <AppBlock key={p.id} project={p} index={i} onPlay={() => setActiveVideo(p)} />
              ))
            }
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Video modal */}
      {activeVideo && (
        <VideoModal app={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
}
