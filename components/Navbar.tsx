'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function NavLink({ href, children, onClick }: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    if (href === '/' && window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0 });
    } else if (href.startsWith('/#') && window.location.pathname === '/') {
      e.preventDefault();
      const id = href.replace('/#', '');
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView();
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="group relative text-[13.5px] font-semibold text-brand-black hover:text-brand-blue transition-colors duration-200 whitespace-nowrap"
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full bg-brand-blue origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out rounded-full" />
    </Link>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 select-none shrink-0">
      <div className="relative w-8 h-8 shrink-0">
        <Image
          src="/fluxgen.png"
          alt="FluxGen"
          fill
          className="object-contain"
          sizes="32px"
        />
      </div>
      <div className="flex flex-col items-start leading-none">
        <span className="text-[15px] font-bold tracking-tight text-brand-black uppercase leading-none">
          FLUX
        </span>
        <span className="text-[12px] font-bold tracking-tight text-brand-blue uppercase leading-none mt-[2px]">
          GEN AI
        </span>
      </div>
    </Link>
  );
}

// Thin vertical divider between nav groups and logo
function Divider() {
  return <div className="h-5 w-px bg-zinc-200 shrink-0" />;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const close = () => setIsMobileOpen(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none">

      {/* ── Desktop ── */}
      <div
        className={`
          hidden md:flex
          w-fit mx-auto pointer-events-auto
          items-center gap-6
          bg-white border border-brand-border rounded-full
          px-7 py-3
          transition-all duration-500
          ${isScrolled
            ? 'shadow-xl shadow-black/10 scale-[0.97] bg-white/95 backdrop-blur-md'
            : 'shadow-sm'}
        `}
      >
        {/* LEFT LINKS */}
        <NavLink href="/">Home</NavLink>
        <NavLink href="/#Services">Services</NavLink>
        <NavLink href="/#Team">About Us</NavLink>

        {/* Divider */}
        <Divider />

        {/* CENTER LOGO */}
        <Logo />

        {/* Divider */}
        <Divider />

        {/* RIGHT LINKS */}
        <NavLink href="/#Portfolio">Projects</NavLink>
        <NavLink href="/#Testimonials">Clients</NavLink>

        {/* Contact CTA */}
        <Link
          href="/contact"
          className="text-[13px] font-semibold rounded-full px-4 py-2 bg-brand-black text-white hover:bg-neutral-700 transition-all duration-200 active:scale-95 whitespace-nowrap"
        >
          Contact
        </Link>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden max-w-sm mx-auto pointer-events-auto">
        <div
          className={`
            flex items-center justify-between
            bg-white border border-brand-border rounded-full
            px-5 py-3
            transition-all duration-500
            ${isScrolled ? 'shadow-xl shadow-black/10' : 'shadow-sm'}
          `}
        >
          <Logo />
          <button
            aria-label="Toggle menu"
            className="p-2 rounded-full hover:bg-zinc-100 transition-colors duration-200 text-brand-black"
            onClick={() => setIsMobileOpen(v => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileOpen ? (
                <motion.span key="x"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span key="menu"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="mt-3 bg-white border border-brand-border rounded-[2rem] px-8 py-7 shadow-2xl shadow-black/10"
            >
              <div className="flex flex-col divide-y divide-brand-border">
                {[
                  { label: 'Home',     href: '/' },
                  { label: 'Services', href: '/#Services' },
                  { label: 'About Us', href: '/#Team' },
                  { label: 'Projects', href: '/#Portfolio' },
                  { label: 'Clients',  href: '/#Testimonials' },
                ].map(({ label, href }) => (
                  <Link key={label} href={href} onClick={(e) => {
                    close();
                    if (href === '/' && window.location.pathname === '/') {
                      e.preventDefault();
                      window.scrollTo({ top: 0 });
                    } else if (href.startsWith('/#') && window.location.pathname === '/') {
                      e.preventDefault();
                      const id = href.replace('/#', '');
                      const elem = document.getElementById(id);
                      if (elem) {
                        elem.scrollIntoView();
                        window.history.pushState(null, '', href);
                      }
                    }
                  }}
                    className="py-3 text-base font-semibold text-brand-black hover:text-brand-blue transition-colors duration-200">
                    {label}
                  </Link>
                ))}
              </div>
              <Link href="/contact" onClick={close}
                className="mt-5 block w-full text-center rounded-full py-3 bg-brand-black text-white text-sm font-bold hover:bg-neutral-700 transition-colors duration-200">
                Contact Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
