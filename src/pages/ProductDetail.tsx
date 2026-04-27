/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ShoppingBag, ArrowLeft, Heart, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = PRODUCTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 text-white">Product Not Found</h2>
          <button onClick={() => navigate('/shop')} className="text-amber-500 font-black uppercase tracking-widest hover:underline italic">Return to Galleries</button>
        </div>
      </div>
    );
  }

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)} 
          className="mb-10 flex items-center space-x-3 text-white/30 hover:text-amber-500 transition-all uppercase text-[10px] font-black tracking-[0.4em] italic"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Collection Vault</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] bg-white/5 border border-white/10 group relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            {/* Thumbs Proxy */}
            <div className="grid grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square rounded-[1.5rem] overflow-hidden border border-white/5 bg-white/5 opacity-40 hover:opacity-100 transition-all cursor-pointer hover:border-amber-500/50">
                  <img src={product.image} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center space-y-10"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] italic">{product.category} Archive</span>
              <h1 className="text-6xl font-serif font-bold text-white leading-tight uppercase tracking-tighter italic">{product.name}</h1>
              <p className="text-5xl font-serif text-white border-b border-white/5 pb-10 pt-6 font-light underline decoration-amber-500 decoration-4 underline-offset-12">${product.price}</p>
            </div>

            <div className="space-y-10 mb-6">
              <p className="text-xl text-white/50 leading-relaxed italic font-light max-w-lg">
                "{product.description}"
              </p>
              
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 italic">Strategic Protocols</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex items-center space-x-4 text-[9px] text-white/40 uppercase tracking-widest font-black group">
                    <ShieldCheck className="w-6 h-6 text-amber-500 group-hover:scale-110 transition-transform" />
                    <span>Certified Quality</span>
                  </div>
                  <div className="flex items-center space-x-4 text-[9px] text-white/40 uppercase tracking-widest font-black group">
                    <Truck className="w-6 h-6 text-amber-500 group-hover:scale-110 transition-transform" />
                    <span>Global Express</span>
                  </div>
                  <div className="flex items-center space-x-4 text-[9px] text-white/40 uppercase tracking-widest font-black group">
                    <RotateCcw className="w-6 h-6 text-amber-500 group-hover:scale-110 transition-transform" />
                    <span>30 Day Refund</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-10">
              <button 
                onClick={() => addToCart(product)}
                className="flex-1 flex items-center justify-center space-x-4 bg-white/5 border border-white/10 text-white py-6 rounded-3xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white/10 transition-all hover:border-amber-500/50"
              >
                <ShoppingCart className="w-5 h-5 text-amber-500" />
                <span>Add to Cart</span>
              </button>
              <button 
                onClick={handleBuyNow}
                className="flex-1 flex items-center justify-center space-x-4 bg-white text-black py-6 rounded-3xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-amber-500 transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Buy Now</span>
              </button>
              <button className="p-6 border border-white/10 rounded-3xl hover:border-amber-500/50 hover:text-amber-500 transition-all bg-white/5 backdrop-blur-xl">
                <Heart className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
