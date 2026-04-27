/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import { Search, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const featuredProduct = useMemo(() => PRODUCTS.find(p => p.featured) || PRODUCTS[0], []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = !selectedCategory || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedProducts = useMemo(() => {
    if (selectedCategory) {
      return filteredProducts.slice(0, 10);
    }
    return filteredProducts.slice(0, 20);
  }, [filteredProducts, selectedCategory]);

  return (
    <main className="min-h-screen">
      <Hero />

      {/* Featured Section */}
      <section className="py-24 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <div className="relative group">
                <div className="absolute -top-10 -left-10 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl opacity-60 group-hover:bg-amber-500/20 transition-all"></div>
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl opacity-60"></div>
                <img 
                  src={featuredProduct.image} 
                  alt={featuredProduct.name} 
                  className="relative z-10 w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl border border-white/5 scale-95 group-hover:scale-100 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex-1 space-y-10"
            >
              <div className="flex items-center space-x-3 text-amber-500">
                <Sparkles className="w-6 h-6" />
                <span className="uppercase tracking-[0.3em] text-[10px] font-black">Featured Arrival</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tighter leading-tight italic">
                {featuredProduct.name}
              </h2>
              <p className="text-xl text-white/50 leading-relaxed italic max-w-lg">
                {featuredProduct.description}
              </p>
              <div className="flex items-baseline space-x-6">
                <span className="text-5xl font-serif font-bold text-white underline decoration-amber-500 underline-offset-8">${featuredProduct.price}</span>
                <span className="text-white/20 line-through text-xl font-serif">${featuredProduct.price + 50}</span>
              </div>
              <div className="pt-6">
                <button className="bg-white text-black px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-amber-500 transition-all transform hover:scale-105 shadow-2xl">
                  Explore Collection
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Feed */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-10 md:space-y-0">
          <div className="flex flex-col space-y-3">
            <h3 className="text-4xl font-serif font-bold text-white tracking-tight italic">Curated <span className="text-white/40">For You</span></h3>
            <p className="text-[10px] font-black text-amber-500/50 uppercase tracking-[0.4em] italic">Archive Selection: {displayedProducts.length} Items</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            {/* Category Dropdown */}
            <div className="relative flex-1 md:flex-none">
              <button 
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center space-x-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:border-amber-500/50 transition-all min-w-[240px] justify-between group backdrop-blur-xl"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{selectedCategory || 'Category Library'}</span>
                <ChevronDown className={`w-4 h-4 text-white/30 transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isCategoryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-3 bg-[#0c0c0e]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden z-40"
                  >
                    <button 
                      onClick={() => { setSelectedCategory(null); setIsCategoryOpen(false); }}
                      className="w-full text-left px-8 py-4 text-[10px] font-black uppercase tracking-widest text-amber-500 hover:bg-white/5 transition-colors border-b border-white/5"
                    >
                      Clear Archives
                    </button>
                    {CATEGORIES.map(cat => (
                      <button 
                        key={cat}
                        onClick={() => { setSelectedCategory(cat); setIsCategoryOpen(false); }}
                        className="w-full text-left px-8 py-4 text-[11px] font-bold uppercase tracking-tight text-white/60 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 font-sans"
                      >
                        {cat}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mini Search */}
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
              <input 
                type="text" 
                placeholder="Query name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-1 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all text-sm font-sans text-white placeholder:text-white/20"
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="relative">
           {isLoading ? (
             <Loading />
           ) : displayedProducts.length > 0 ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
               {displayedProducts.map(product => (
                 <ProductCard key={product.id} product={product} />
               ))}
             </div>
           ) : (
             <div className="py-32 text-center">
               <p className="text-white/20 font-serif italic text-2xl tracking-widest">No archives matched your request.</p>
               <button onClick={() => { setSelectedCategory(null); setSearchQuery(''); }} className="mt-8 text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] hover:underline transition-all">Reset Filters</button>
             </div>
           )}
        </div>
      </section>
    </main>
  );
}
