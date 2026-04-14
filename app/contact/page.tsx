'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Mail, Phone, ArrowUpRight, Instagram, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import emailjs from '@emailjs/browser';

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Address",
    content: "Shivam Vihar Phase 1,Near KIET Deemed to be University, Muradnagar, Ghaziabad, UP-201206",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Ghaziabad, Uttar Pradesh",
  },
  {
    icon: Mail,
    title: "Email",
    content: "fluxgenAi.in",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 9555541221 \n+91 7651842251",
  },
];

const MARQUEE_TEXT = "Develop it Once • Develop it from Best • Develop it Once • Develop it from Best • Develop it Once • Develop it from Best •";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    emailjs.sendForm(
      'service_u8km8ew',
      'template_gt9n5v9',
      form.current,
      { publicKey: '1KS3iDvYCxTkCPXNF' }
    )
    .then((result) => {
      console.log('SUCCESS!', result.text);
      setStatusMessage({ type: 'success', text: 'Message sent successfully!' });
      form.current?.reset();
    })
    .catch((error) => {
      console.log('FAILED...', error.text || error.message);
      setStatusMessage({ type: 'error', text: `Failed: ${error.text || 'Network Error'}. Please check template fields.` });
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setStatusMessage(null), 7000);
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-44 pb-32 overflow-hidden border-b border-brand-border">
        
        <div className="absolute inset-0 grid-background opacity-20 pointer-events-none" />

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[5%] top-[20%] w-64 h-64 hidden xl:block pointer-events-none"
        >
          <Image
            src="/contact_shape_1 (2).png"
            alt="Abstract Shape"
            width={256}
            height={256}
            className="object-contain mix-blend-multiply opacity-80"
          />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[5%] top-[15%] w-72 h-72 hidden xl:block pointer-events-none"
        >
          <Image
            src="/contact_shape_2 (2).png"
            alt="Abstract Shape"
            width={288}
            height={288}
            className="object-contain mix-blend-multiply opacity-80"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-brand-black mb-8">
              Contact Us
            </h1>
            <p className="text-zinc-500 font-medium text-lg md:text-xl max-w-2xl mx-auto">
              From idea to launch, we design and develop tailor-made websites & apps that scale with your business.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-8 bg-brand-black overflow-hidden flex whitespace-nowrap border-y border-brand-border">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 items-center"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-white text-2xl font-black uppercase tracking-widest px-4">
              {MARQUEE_TEXT}
            </span>
          ))}
        </motion.div>
      </div>

      <section className="py-32 relative bg-white" id="form">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <div className="inline-block rounded-full bg-brand-blue/5 border border-brand-blue/10 px-4 py-1.5 text-[10px] uppercase font-black tracking-widest text-brand-blue mb-6">
                Contact Form
              </div>
              <h2 className="text-5xl font-black tracking-tighter text-brand-black mb-6">
                Have a question?<br />
                <span className="text-brand-blue">Contact us now</span>
              </h2>
              <p className="text-zinc-500 font-medium text-lg italic">
                Have questions or need assistance? Our friendly team is ready to provide all the info you need — just get in touch.
              </p>
            </div>

            <div className="space-y-8">
              {CONTACT_INFO.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-brand-blue border border-brand-border flex-shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-black uppercase tracking-widest text-zinc-400 mb-1">{item.title}</h4>
                    <p className="text-brand-black font-black whitespace-pre-line tracking-tight text-md">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-premium h-fit relative"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your Name"
                    className="w-full bg-zinc-50 border border-brand-border rounded-xl px-4 py-4 text-sm font-medium focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="tel"
                    name="user_phone"
                    required
                    placeholder="Phone Number"
                    className="w-full bg-zinc-50 border border-brand-border rounded-xl px-4 py-4 text-sm font-medium focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Email Address"
                    className="w-full bg-zinc-50 border border-brand-border rounded-xl px-4 py-4 text-sm font-medium focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject"
                    className="w-full bg-zinc-50 border border-brand-border rounded-xl px-4 py-4 text-sm font-medium focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <textarea
                  name="message"
                  required
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-zinc-50 border border-brand-border rounded-xl px-4 py-4 text-sm font-medium focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all outline-none resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex-1">
                  {statusMessage && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-xs font-bold uppercase tracking-widest ${statusMessage.type === 'success' ? 'text-green-500' : 'text-red-500'}`}
                    >
                      {statusMessage.text}
                    </motion.p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-brand-black text-white font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-neutral-800 transition-all active:scale-95 flex items-center gap-2 disabled:opacity-50 disabled:pointer-events-none shrink-0"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowUpRight size={14} />}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </section>

      <section className="h-[600px] relative w-full border-t border-brand-border group cursor-pointer overflow-hidden">
        <a 
          href="https://www.google.com/maps/place/KIET+Group+of+Institutions/@28.7523955,77.4984252,17z" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full h-full relative"
        >
          
          <div className="absolute inset-0 z-0 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.02]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.6841121094033!2d77.4984252!3d28.7523955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf6136d40f3b9%3A0x8797b1029c1583d8!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1712952000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter contrast-125"
            />
          </div>

          <div className="absolute inset-0 z-10 bg-brand-black/0 group-hover:bg-brand-black/5 transition-all duration-500 flex items-center justify-center">
            <div className="px-10 py-5 bg-white/95 backdrop-blur-xl border border-brand-border rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <MapPin size={22} className="text-brand-blue" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-0.5">Contact Us</span>
                <span className="block text-xs font-black uppercase tracking-widest text-brand-black">KIET Deemed to be University</span>
              </div>
              <ArrowUpRight size={18} className="text-brand-blue ml-2" />
            </div>
          </div>
        </a>

        <div className="absolute bottom-12 left-12 flex gap-4 z-20">
          <a href="#" className="w-14 h-14 rounded-full bg-white shadow-2xl border border-brand-border flex items-center justify-center text-pink-600 hover:scale-110 transition-all">
            <Instagram size={24} />
          </a>
          <a href="https://wa.me/917651842251" className="w-14 h-14 rounded-full bg-white shadow-2xl border border-brand-border flex items-center justify-center text-green-600 hover:scale-110 transition-all">
            <MessageCircle size={24} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
