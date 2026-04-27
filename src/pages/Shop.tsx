/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import { Filter, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [priceFilter, setPriceFilter] = useState<string[]>([]);
  
  const selectedCategory = searchParams.get('category');
  const searchQuery = searchParams.get('search') || '';

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = !selectedCategory || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesPrice = true;
      if (priceFilter.length > 0) {
        matchesPrice = priceFilter.some(range => {
          if (range === 'Under $50') return p.price < 50;
          if (range === '$50 - $100') return p.price >= 50 && p.price <= 100;
          if (range === '$100 - $200') return p.price >= 100 && p.price <= 200;
          if (range === '$200+') return p.price > 200;
          return true;
        });
      }

      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [selectedCategory, searchQuery, priceFilter]);

  const togglePriceFilter = (range: string) => {
    setPriceFilter(prev => 
      prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]
    );
  };

  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 uppercase tracking-tighter italic">
              {selectedCategory || 'Master Archives'}
            </h1>
            <p className="text-white/40 italic text-sm tracking-widest font-black uppercase underline decoration-amber-500 underline-offset-4">Vaulting {filteredProducts.length} Premium Strategic Pieces</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-72 space-y-12">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 mb-8 pb-3 border-b border-white/5">Categories</h3>
              <div className="space-y-6">
                <button 
                  onClick={() => setSearchParams({})}
                  className={`block text-xs uppercase tracking-widest transition-all ${!selectedCategory ? 'text-amber-500 font-black italic scale-110' : 'text-white/40 hover:text-white'}`}
                >
                  All Archives
                </button>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSearchParams({ category: cat })}
                    className={`block text-left text-xs uppercase tracking-widest transition-all ${selectedCategory === cat ? 'text-amber-500 font-black italic scale-110' : 'text-white/40 hover:text-white'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 mb-8 pb-3 border-b border-white/5">Strategic Filter</h3>
              <div className="space-y-5">
                {['Under $50', '$50 - $100', '$100 - $200', '$200+'].map(range => (
                  <label key={range} className="flex items-center space-x-4 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={priceFilter.includes(range)}
                      onChange={() => togglePriceFilter(range)}
                      className="w-5 h-5 rounded-xl border border-white/10 bg-white/5 text-amber-500 focus:ring-amber-500/50" 
                    />
                    <span className={`text-[11px] font-bold transition-colors uppercase tracking-tight ${priceFilter.includes(range) ? 'text-amber-500' : 'text-white/40 group-hover:text-white'}`}>{range}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden flex items-center justify-center space-x-3 w-full py-5 bg-white/5 rounded-2xl border border-white/10 mb-8 font-black text-[10px] tracking-[0.3em] text-amber-500"
          >
            <Filter className="w-4 h-4" />
            <span>ACCESS FILTERS</span>
          </button>

          {/* Mobile Sidebar */}
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                className="fixed inset-0 z-50 bg-[#0c0c0e]/95 backdrop-blur-3xl lg:hidden h-screen w-full flex flex-col pt-32 px-10 overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-16">
                  <h2 className="text-4xl font-serif font-bold text-white italic">Filter Vault</h2>
                  <button onClick={() => setIsSidebarOpen(false)} className="p-4 bg-white/5 rounded-full border border-white/10">
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
                
                <div className="space-y-16 pb-20">
                   <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500 mb-8 font-bold">Collections</h3>
                    <div className="flex flex-col space-y-8">
                      {CATEGORIES.map(cat => (
                        <button 
                          key={cat}
                          onClick={() => { setSearchParams({ category: cat }); setIsSidebarOpen(false); }}
                          className={`text-left text-2xl transition-all ${selectedCategory === cat ? 'text-amber-500 font-bold font-serif italic translate-x-4' : 'text-white/40'}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          <div className="flex-1 relative">
            {isLoading ? (
              <Loading />
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                {filteredProducts.map((p, idx) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <ProductCard product={p} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-40 space-y-8 border border-white/5 border-dashed rounded-[3rem]">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <Search className="w-10 h-10 text-white/10" />
                </div>
                <p className="text-white/20 font-serif italic text-2xl tracking-widest text-center max-w-sm">No archives matched your current strategic scope.</p>
                <button onClick={() => setSearchParams({})} className="text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] hover:underline decoration-2 underline-offset-8">Return to master collection</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
