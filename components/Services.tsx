'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Globe, 
  Zap, 
  Smartphone, 
  BarChart3, 
  ShieldCheck, 
  Layout,
  ArrowRight,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

// --- VISUAL COMPONENTS FOR APP SERVICES ---
const MobileVisual = () => (
  <div className="w-full h-52 bg-zinc-50/80 rounded-t-2xl flex items-end justify-center pt-6 overflow-hidden relative group">
    <div className="absolute inset-0 opacity-[0.15] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwb2x5Z29uIHBvaW50cz0iOCwwIDgsOCAwLDggMCwwIiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjgiIHkxPSIwIiB4Mj0iOCIgeTI9IjgiIHN0cm9rZT0iIzljYTNhZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')]"></div>
    
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="w-[166px] h-[200px] bg-white rounded-t-[28px] border-x border-t border-zinc-200 shadow-[0_-4px_30px_rgb(0,0,0,0.06)] relative flex flex-col items-center z-10"
    >
      <div className="w-[50px] h-[10px] bg-zinc-100/80 rounded-b-lg absolute top-0 z-20"></div>
      
      <div className="w-full px-4 pt-5 pb-2 flex items-center justify-between">
         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-zinc-600"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
         <span className="text-[9px] font-black text-zinc-800 tracking-tight">Flight Details</span>
         <div className="w-3" />
      </div>

      <div className="w-[146px] bg-zinc-50 border border-zinc-100 rounded-[18px] p-3 flex flex-col mt-0.5 relative overflow-hidden transition-all duration-300 group-hover:border-zinc-200 group-hover:shadow-sm">
        <div className="flex justify-between items-end mb-1">
          <div className="flex flex-col">
            <span className="text-[8px] font-bold text-zinc-400 mb-0.5">DAC</span>
            <span className="text-[13px] font-black text-zinc-800 leading-none">10.30</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-bold text-zinc-400 mb-0.5">JFK</span>
            <span className="text-[13px] font-black text-zinc-800 leading-none">10.30</span>
          </div>
        </div>

        <div className="w-full flex items-center justify-center relative py-1.5 h-6">
          <div className="absolute w-[75%] border-t-[1.5px] border-dashed border-zinc-300"></div>
          <span className="absolute top-3 text-[6px] font-bold text-zinc-400">12h 45m</span>
          <motion.div 
            animate={{ x: [-40, 40] }} 
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bg-zinc-50 px-1 py-0.5 rounded-full z-10"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#A1A1AA" className="text-zinc-400 rotate-90" stroke="none"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
          </motion.div>
        </div>

        <div className="mt-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full bg-zinc-200 flex items-center justify-center overflow-hidden">
               <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#52525B" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <span className="text-[6.5px] font-semibold text-zinc-500 line-clamp-1">Fly Emirates</span>
          </div>
          <div className="flex items-center gap-1">
             <span className="text-[6.5px] font-medium text-zinc-500 whitespace-nowrap">QJ 453</span>
             <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
        </div>
      </div>

      <div className="w-[146px] mt-2 flex flex-col gap-2">
         {[0, 1].map((i) => (
            <div key={i} className="w-full flex justify-between items-center px-1">
               <div className="flex items-center gap-1.5">
                 <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2" className="opacity-70"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
                 <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }} className="w-6 h-1 bg-zinc-200 rounded-full" />
               </div>
               <div className="flex items-center gap-1.5">
                 <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2" className="opacity-70"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
                 <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 + 0.2 }} className="w-6 h-1 bg-zinc-200 rounded-full" />
               </div>
            </div>
         ))}
      </div>
    </motion.div>
  </div>
);

const FlowVisual = () => {
  const nodes = [
    { label: 'Planning', color: '#3B82F6', y: 130 },
    { label: 'Design', color: '#8B5CF6', y: 95 },
    { label: 'Develop', color: '#0066FF', y: 50 },
    { label: 'Test', color: '#F59E0B', y: 100 },
    { label: 'Deploy', color: '#10B981', y: 135 },
  ];

  const getPathD = () => {
    const xs = [40, 85, 130, 175, 220];
    return `M ${xs[0]} ${nodes[0].y} C ${xs[0]+15} ${nodes[0].y}, ${xs[1]-15} ${nodes[1].y}, ${xs[1]} ${nodes[1].y} C ${xs[1]+15} ${nodes[1].y}, ${xs[2]-15} ${nodes[2].y}, ${xs[2]} ${nodes[2].y} C ${xs[2]+15} ${nodes[2].y}, ${xs[3]-15} ${nodes[3].y}, ${xs[3]} ${nodes[3].y} C ${xs[3]+15} ${nodes[3].y}, ${xs[4]-15} ${nodes[4].y}, ${xs[4]} ${nodes[4].y}`;
  };

  return (
    <div className="w-full h-52 bg-zinc-50/80 rounded-t-2xl flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwb2x5Z29uIHBvaW50cz0iOCwwIDgsOCAwLDggMCwwIiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjgiIHkxPSIwIiB4Mj0iOCIgeTI9IjgiIHN0cm9rZT0iIzljYTNhZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')]"></div>

      <div className="relative z-10 w-[260px] h-[180px]">
        {/* SVG mountain path + fill */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 260 180" fill="none">
          {/* Mountain gradient fill */}
          <motion.path
            d={`${getPathD()} L 220 170 L 40 170 Z`}
            fill="url(#miniMountainFill)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          {/* Animated mountain line */}
          <motion.path
            d={getPathD()}
            stroke="url(#miniMountainLine)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id="miniMountainFill" x1="0" y1="0" x2="260" y2="0">
              <stop offset="0%" stopColor="rgba(59,130,246,0.06)" />
              <stop offset="30%" stopColor="rgba(139,92,246,0.08)" />
              <stop offset="50%" stopColor="rgba(0,102,255,0.1)" />
              <stop offset="70%" stopColor="rgba(245,158,11,0.06)" />
              <stop offset="100%" stopColor="rgba(16,185,129,0.05)" />
            </linearGradient>
            <linearGradient id="miniMountainLine" x1="0" y1="0" x2="260" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="30%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#0066FF" />
              <stop offset="70%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>

        {/* Nodes at mountain peaks */}
        {nodes.map((node, i) => {
          const x = 40 + i * 45;
          return (
            <div
              key={i}
              className="absolute flex flex-col items-center"
              style={{ left: `${x}px`, top: `${node.y}px`, transform: 'translate(-50%, -50%)' }}
            >
              {/* Pulse ring */}
              <motion.div
                className="absolute w-7 h-7 rounded-full"
                style={{ border: `1.5px solid ${node.color}30` }}
                animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5, ease: 'easeOut' }}
              />
              {/* Dot */}
              <motion.div
                className="w-4 h-4 rounded-full bg-white flex items-center justify-center z-10 shadow-sm"
                style={{ border: `2px solid ${node.color}` }}
                animate={{
                  boxShadow: [`0 0 0 0px ${node.color}00`, `0 0 0 4px ${node.color}25`, `0 0 0 0px ${node.color}00`],
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: node.color }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                />
              </motion.div>
              {/* Label */}
              <span
                className="absolute top-5 text-[7.5px] font-bold whitespace-nowrap"
                style={{ color: node.color }}
              >
                {node.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CodeVisual = () => (
  <div className="w-full h-52 bg-zinc-50/80 rounded-t-2xl flex items-center justify-center relative overflow-hidden">
    {/* Grid lines background */}
    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwb2x5Z29uIHBvaW50cz0iOCwwIDgsOCAwLDggMCwwIiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjgiIHkxPSIwIiB4Mj0iOCIgeTI9IjgiIHN0cm9rZT0iIzljYTNhZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')]"></div>

    <motion.div 
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="relative z-10 w-full max-w-[220px]"
    >
      <div className="bg-white border border-zinc-200 rounded-xl shadow-lg p-3">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span className="text-[10px] font-bold text-zinc-800 tracking-tight">deploy.trigger</span>
          </div>
          <span className="text-[9px] font-medium text-brand-blue bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">PROD</span>
        </div>
        <div className="bg-[#18181B] rounded-lg p-3 font-mono text-[9px] relative overflow-hidden">
          <span className="text-[#A1A1AA]">{'{'}</span><br/>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="whitespace-nowrap overflow-hidden border-r border-[#60A5FA]"
            style={{ display: "inline-block" }}
          >
            &nbsp;&nbsp;<span className="text-[#A1A1AA]">status:</span> <span className="text-[#3B82F6]">"building_app..."</span>
          </motion.div>
          <br/>
          <span className="text-[#A1A1AA]">{'}'}</span>
        </div>
      </div>
      
      <div className="flex justify-center w-full mt-2 relative">
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="1.5"><path d="M12 4v16m0 0l-4-4m4 4l4-4"/></svg>
        </motion.div>
      </div>
      
      <div className="flex justify-center mt-1">
        <div className="bg-white border border-zinc-200 px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
          <motion.svg animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="3"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></motion.svg>
          <span className="text-[9px] font-bold text-zinc-800">Compiling Build...</span>
        </div>
      </div>
    </motion.div>
  </div>
);

// --- VISUAL COMPONENTS FOR WEBSITE SERVICES ---
const WebVisual = () => (
  <div className="w-full h-52 bg-zinc-50/80 rounded-t-2xl flex items-end justify-center pt-8 overflow-hidden relative">
    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwb2x5Z29uIHBvaW50cz0iOCwwIDgsOCAwLDggMCwwIiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjgiIHkxPSIwIiB4Mj0iOCIgeTI9IjgiIHN0cm9rZT0iIzljYTNhZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')]"></div>
    <motion.div 
      whileHover={{ y: -4 }}
      className="w-[180px] h-[160px] bg-white border border-zinc-200 shadow-xl rounded-t-xl z-10 flex overflow-hidden"
    >
      {/* Sidebar */}
      <div className="w-12 h-full border-r border-zinc-100 p-2 flex flex-col gap-2 bg-zinc-50/50">
        <div className="w-full h-3 bg-brand-blue/20 rounded-sm mb-2"></div>
        <div className="w-full h-2 bg-zinc-200 rounded-sm"></div>
        <div className="w-full h-2 bg-zinc-200 rounded-sm"></div>
        <div className="w-full h-2 bg-zinc-200 rounded-sm"></div>
      </div>
      {/* Main content */}
      <div className="flex-1 p-3">
        <div className="flex justify-between items-center mb-3">
          <div className="w-16 h-3 bg-zinc-100 rounded-sm"></div>
          <div className="w-6 h-3 bg-brand-blue/10 rounded-full"></div>
        </div>
        <div className="flex gap-2 mb-3">
          <div className="flex-1 h-12 bg-white border border-zinc-100 rounded-md shadow-sm"></div>
          <div className="flex-1 h-12 bg-white border border-zinc-100 rounded-md shadow-sm"></div>
        </div>
        <div className="w-full h-16 bg-zinc-50 rounded-md border border-zinc-100"></div>
      </div>
    </motion.div>
  </div>
);

const EcommerceVisual = () => (
  <div className="w-full h-52 bg-zinc-50/80 rounded-t-2xl flex items-center justify-center overflow-hidden relative">
    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwb2x5Z29uIHBvaW50cz0iOCwwIDgsOCAwLDggMCwwIiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjgiIHkxPSIwIiB4Mj0iOCIgeTI9IjgiIHN0cm9rZT0iIzljYTNhZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')]"></div>

    <motion.div 
      whileHover={{ y: -4, scale: 1.02 }}
      className="w-[140px] px-3 pt-3 pb-4 bg-white border border-zinc-200 shadow-xl rounded-xl z-20 flex flex-col"
    >
      <div className="w-full h-20 bg-zinc-100 rounded-lg mb-3 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2"><path d="M20.2 7.8l-7.7 7.7-4-4-5.5 5.5"/></svg>
      </div>
      <div className="w-3/4 h-2.5 bg-zinc-800 rounded-full mb-1.5"></div>
      <div className="w-1/2 h-2 bg-zinc-300 rounded-full mb-3"></div>
      <div className="w-full h-6 bg-brand-blue rounded-md flex items-center justify-center gap-1">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <span className="text-[7px] font-bold text-white uppercase tracking-wider">Add to Cart</span>
      </div>
    </motion.div>
    
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="absolute top-12 right-12 bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-lg shadow-xl z-10 hidden sm:block"
    >
      <div className="flex items-center gap-2">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <span className="text-[8px] font-medium text-white">Added to Cart</span>
      </div>
    </motion.div>
  </div>
);

const SeoVisual = () => (
  <div className="w-full h-52 bg-zinc-50/80 rounded-t-2xl flex items-end justify-center pt-8 overflow-hidden relative">
    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwb2x5Z29uIHBvaW50cz0iOCwwIDgsOCAwLDggMCwwIiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjgiIHkxPSIwIiB4Mj0iOCIgeTI9IjgiIHN0cm9rZT0iIzljYTNhZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')]"></div>

    <motion.div 
      whileHover={{ y: -4 }}
      className="w-[200px] h-[130px] bg-white border border-zinc-200 shadow-xl rounded-t-xl z-10 p-4 flex flex-col justify-end gap-2"
    >
      {/* Header */}
      <div className="absolute top-3 left-4 flex items-center gap-1.5">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
        <span className="text-[8px] font-bold text-zinc-600 tracking-tight uppercase">Traffic Growth</span>
      </div>
      <div className="absolute top-3 right-4">
        <span className="text-[9px] font-black text-green-500">+142%</span>
      </div>

      {/* Bars */}
      <div className="flex items-end justify-between w-full h-16 gap-2">
        <motion.div initial={{ height: 0 }} whileInView={{ height: '30%' }} transition={{ duration: 1 }} className="flex-1 bg-zinc-100 rounded-t-sm"></motion.div>
        <motion.div initial={{ height: 0 }} whileInView={{ height: '45%' }} transition={{ duration: 1, delay: 0.1 }} className="flex-1 bg-zinc-200 rounded-t-sm"></motion.div>
        <motion.div initial={{ height: 0 }} whileInView={{ height: '60%' }} transition={{ duration: 1, delay: 0.2 }} className="flex-1 bg-zinc-300 rounded-t-sm"></motion.div>
        <motion.div initial={{ height: 0 }} whileInView={{ height: '80%' }} transition={{ duration: 1, delay: 0.3 }} className="flex-1 bg-brand-blue/60 rounded-t-sm"></motion.div>
        <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ duration: 1, delay: 0.4 }} className="flex-1 bg-brand-blue rounded-t-sm relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[7px] font-bold px-1.5 py-0.5 rounded shadow-sm">24K</div>
        </motion.div>
      </div>
    </motion.div>
  </div>
);


const APP_SERVICES = [
  {
    title: 'STARTUP & MVP DEVELOPMENT',
    desc: 'Quickly validate your concept with a market-ready MVP that captures your core idea.',
    visual: MobileVisual
  },
  {
    title: 'FULL-CYCLE DEVELOPMENT',
    desc: 'End-to-end app creation: design, development, testing, and store deployment.',
    visual: FlowVisual
  },
  {
    title: 'CUSTOM SOLUTION',
    desc: 'Bespoke applications tailored to your unique business challenges and goals.',
    visual: CodeVisual
  }
];

const WEB_SERVICES = [
  {
    title: 'WEB APP DEVELOPMENT',
    desc: 'High-performance React & Next.js platforms built for enterprise-scale traffic and speed.',
    visual: WebVisual
  },
  {
    title: 'E-COMMERCE SOLUTIONS',
    desc: 'Custom storefronts engineered to maximize conversions and turn users into loyal brand advocates.',
    visual: EcommerceVisual
  },
  {
    title: 'SEO OPTIMIZATION',
    desc: 'Data-driven technical SEO strategies to dominate search results and explode organic growth.',
    visual: SeoVisual
  }
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
  };

  return (
    <section id="Services" className="py-32 relative bg-brand-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* ============================================================== */}
        {/* SECTION 1: APPS */}
        {/* ============================================================== */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[40px] md:text-5xl font-black uppercase tracking-tight text-brand-black mb-4"
              style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '1px' }}
            >
              SERVICES WE PROVIDE FOR <span className="text-brand-blue">APPS</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-500 font-medium text-base md:text-lg max-w-2xl mx-auto"
            >
              We build robust apps through collaborative development that turns your vision into reality.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {APP_SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <service.visual />
                <div className="p-8">
                  <h3 className="text-lg font-black uppercase tracking-tight text-brand-black mb-3 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[13.5px] text-zinc-500 font-medium leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* SECTION 2: WEBSITES */}
        {/* ============================================================== */}
        <div>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[40px] md:text-5xl font-black uppercase tracking-tight text-brand-black mb-4"
              style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '1px' }}
            >
              SERVICES WE PROVIDE FOR WEBSITES
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-500 font-medium text-base md:text-lg max-w-2xl mx-auto"
            >
              End-to-end web solutions engineered to accelerate growth, maximize speed, and convert users.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {WEB_SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <service.visual />
                <div className="p-8">
                  <h3 className="text-lg font-black uppercase tracking-tight text-brand-black mb-3 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[13.5px] text-zinc-500 font-medium leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <a
              href="#process"
              className="inline-flex items-center gap-2 text-[13px] font-black uppercase tracking-widest text-brand-blue hover:text-brand-black transition-colors duration-200 group"
            >
              <span className="w-8 h-[2px] bg-brand-blue group-hover:w-12 transition-all duration-300 rounded-full" />
              View Our Process
              <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
