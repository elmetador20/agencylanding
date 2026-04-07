'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 px-4 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <div className={`bg-white border border-brand-border rounded-full px-4 py-3 flex items-center justify-between transition-all duration-700 shadow-sm ${isScrolled ? 'scale-95 shadow-xl' : ''}`}>

          {/* Desktop Navigation */}
          <div className="hidden md:contents">
            {/* Left Links */}
            <div className="flex-1 flex justify-center gap-10">
              <Link href="#services" className="text-sm font-black text-brand-black hover:text-brand-blue transition-colors">
                Prebuilt
              </Link>
              <Link href="#portfolio" className="text-sm font-black text-brand-black hover:text-brand-blue transition-colors">
                Customized
              </Link>
            </div>

            {/* Center Logo */}
            <Link href="/" className="px-6 flex-shrink-0">
              <div className="relative w-50 h-10">
                <Image
                  src="/fluxgen.jpeg"
                  alt="FluxGen Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Right Links */}
            <div className="flex-1 flex justify-center gap-10">
              <Link href="#about" className="text-sm font-black text-brand-black hover:text-brand-blue transition-colors">
                About Us
              </Link>
              <Link href="mailto:hello@fluxgen.ai" className="text-sm font-black text-brand-black hover:text-brand-blue transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Layout (Logo + Toggle) */}
          <div className="md:hidden flex items-center justify-between w-full px-4">
            <Link href="/" className="relative w-24 h-8">
              <Image
                src="/fluxgen.jpeg"
                alt="FluxGen Logo"
                fill
                className="object-contain"
              />
            </Link>

            <button
              className="p-2 text-brand-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-24 left-6 right-6 bg-white border border-brand-border p-8 rounded-[2.5rem] pointer-events-auto shadow-2xl"
          >
            <div className="flex flex-col gap-6 text-center">
              <Link href="#services" className="text-lg font-black text-brand-black" onClick={() => setIsMobileMenuOpen(false)}>Prebuilt</Link>
              <Link href="#portfolio" className="text-lg font-black text-brand-black" onClick={() => setIsMobileMenuOpen(false)}>Customized</Link>
              <Link href="#about" className="text-lg font-black text-brand-black" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <Link href="mailto:hello@fluxgen.ai" className="text-lg font-black text-brand-blue" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
