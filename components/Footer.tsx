import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-white pt-24 pb-12 border-t border-brand-border overflow-hidden relative">
      
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[15vw] font-black text-brand-black/5 whitespace-nowrap select-none pointer-events-none leading-none tracking-tighter uppercase">
        FluxGen Ai
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20 text-center md:text-left">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-black italic tracking-tighter flex justify-center md:justify-start items-center gap-2 mb-8 uppercase group">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl  group-hover:scale-110 transition-all duration-500">
                <Image
                  src="/fluxgen.png"
                  alt="FluxGen Logo"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              FluxGen
            </Link>
            <p className="text-zinc-500 font-medium max-w-xs leading-relaxed mb-6 italic">
              "Turning Visions Into Digital Reality with elite engineering and high-end design."
            </p>
            <div className="flex justify-center md:justify-start items-center gap-2 text-green-500 text-[10px] font-black uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Accepting new projects
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-black mb-8 opacity-70">Navigation</h4>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-zinc-400">
              <li><Link href="/" className="hover:text-brand-blue transition-colors">Home</Link></li>
              <li><Link href="/#Services" className="hover:text-brand-blue transition-colors">Services</Link></li>
              <li><Link href="/#Portfolio" className="hover:text-brand-blue transition-colors">Projects</Link></li>
              <li><Link href="/#Team" className="hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-brand-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-black mb-8 opacity-70">Resources</h4>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-zinc-400">
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Blogs</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-black mb-8 opacity-70">Contact us at</h4>
            <a href="mailto:hello@fluxgen.ai" className="group block mb-4">
              <div className="text-xl font-black tracking-tight text-brand-black flex items-center justify-center md:justify-start gap-2 group-hover:text-brand-blue transition-colors">
                hello@fluxgen.ai
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            </a>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
              Available for worldwide <br /> remote collaboration.
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
          <p>© 2026 FluxGen Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-zinc-600 transition-colors">INSTAGRAM</Link>
            <Link href="#" className="hover:text-zinc-600 transition-colors">LINKEDIN</Link>
            <Link href="#" className="hover:text-zinc-600 transition-colors">TWITTER</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
