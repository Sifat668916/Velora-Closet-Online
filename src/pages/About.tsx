/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0c0c0e]">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
         <img 
           src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?auto=format&fit=crop&q=80&w=2000" 
           className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
           alt="Our Atelier"
           referrerPolicy="no-referrer"
         />
         <div className="relative z-10 text-center px-4">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter uppercase mb-4 italic"
            >
              Veloura <span className="text-amber-500">Story</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-[10px] font-black uppercase tracking-[0.5em] italic"
            >
              The Architecture of Timeless Fashion
            </motion.p>
         </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
            <div className="space-y-8">
               <h2 className="text-4xl font-serif font-bold text-white leading-tight italic">Defining the Modern Closet Since 2024.</h2>
               <div className="space-y-6 text-white/40 leading-relaxed italic text-sm">
                  <p>
                    Veloura Closet was founded on a singular premise: that high fashion should be an architectural expression of self. We don't just sell clothes; we curate masterpieces that define the transition between era and innovation.
                  </p>
                  <p>
                    Every piece in our collection, from the structured dropsholder hoodies to our signature "Old Money" silk shirts, undergoes a rigorous curation process. We source fabrics that speak to the skin and designs that challenge the norm.
                  </p>
               </div>
            </div>
            <div className="relative group">
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl opacity-60"></div>
               <img 
                 src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200" 
                 className="relative z-10 w-full rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                 alt="Process"
                 referrerPolicy="no-referrer"
               />
            </div>
         </div>

         {/* Values */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            {[
              { icon: ShieldCheck, title: 'Uncompromising Quality', desc: 'Sourced from the finest mills across Europe and Asia.' },
              { icon: Award, title: 'Artisan Curation', desc: 'Every piece is hand-selected by our creative direction team.' },
              { icon: HeartHandshake, title: 'Client Privilege', desc: 'Exclusive access for our community of fashion architects.' }
            ].map((v, i) => (
              <div key={i} className="text-center space-y-4 group p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all">
                 <div className="inline-flex p-5 bg-white/5 rounded-full group-hover:bg-amber-500 transition-colors border border-white/5">
                    <v.icon className="w-8 h-8 text-white/30 group-hover:text-black transition-colors" />
                 </div>
                 <h4 className="text-sm font-serif font-bold text-white uppercase tracking-tight italic">{v.title}</h4>
                 <p className="text-[10px] text-white/30 font-black uppercase tracking-widest italic leading-relaxed max-w-[160px] mx-auto">{v.desc}</p>
              </div>
            ))}
         </div>

         {/* Contact Section */}
         <div id="contact" className="bg-white/5 backdrop-blur-xl rounded-[4rem] p-12 md:p-20 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               <div className="space-y-10">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-2 uppercase tracking-tighter italic">Concierge Access</h3>
                    <p className="text-amber-500 text-[10px] font-extrabold uppercase tracking-widest italic">How can we assist your vision?</p>
                  </div>
                  
                  <div className="space-y-6">
                     <div className="flex items-center space-x-6 group">
                        <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-amber-500/10 border border-white/10 transition-all shadow-sm">
                           <Phone className="w-5 h-5 text-amber-500" />
                        </div>
                        <div>
                           <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Inquiry Line</p>
                           <p className="font-serif text-lg text-white">+880 1838-054223</p>
                        </div>
                     </div>
                     <div className="flex items-center space-x-6 group">
                        <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-amber-500/10 border border-white/10 transition-all shadow-sm">
                           <Mail className="w-5 h-5 text-amber-500" />
                        </div>
                        <div>
                           <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Direct Outreach</p>
                           <p className="font-serif text-lg text-white">imran7500hasan@gmail.com</p>
                        </div>
                     </div>
                     <div className="flex items-center space-x-6 group">
                        <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-amber-500/10 border border-white/10 transition-all shadow-sm">
                           <MapPin className="w-5 h-5 text-amber-500" />
                        </div>
                        <div>
                           <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">The Atelier</p>
                           <p className="font-serif text-lg text-white">Gazipur, chowrasta, Bangladesh</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Modern Map UI Proxy */}
               <div className="relative h-80 lg:h-full min-h-[400px] w-full bg-white/5 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
                  <div className="absolute inset-0 bg-gray-900">
                    <img 
                      src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 transition-transform duration-[3s]" 
                      alt="Map Location"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-4">
                     <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_50px_rgba(245,158,11,0.5)]">
                        <MapPin className="w-8 h-8 text-black" />
                     </div>
                     <div className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] italic text-white/70">Gazipur, Chowrasta</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
