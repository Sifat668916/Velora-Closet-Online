/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Eye, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuy = () => {
    addToCart(product);
    navigate('/checkout');
  };

  const handleDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all duration-500 border border-white/10 flex flex-col relative"
    >
      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute top-4 left-4 bg-indigo-500 text-[8px] font-black uppercase px-2 py-0.5 rounded z-20 shadow-lg">Featured</div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden p-4">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500"></div>
          
          {/* Quick Action Overlay */}
          <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <button 
              onClick={() => addToCart(product)}
              className="bg-amber-500 text-black p-4 rounded-full hover:brightness-110 transition-all shadow-xl"
              title="Add to Cart"
            >
              <ShoppingCart className="w-5 h-5 font-bold" />
            </button>
            <button 
              onClick={handleDetails}
              className="bg-white text-black p-4 rounded-full hover:bg-amber-500 transition-all shadow-xl"
              title="View Details"
            >
              <Eye className="w-5 h-5 font-bold" />
            </button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 pt-2 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{product.category}</span>
          <span className="text-lg font-serif font-bold text-amber-500">${product.price}</span>
        </div>
        <h3 className="text-sm font-bold text-white mb-2 truncate group-hover:text-amber-500 transition-colors uppercase tracking-tight font-sans">
          {product.name}
        </h3>
        <p className="text-[11px] text-white/50 line-clamp-2 mb-6 h-8 italic">
          {product.description}
        </p>

        {/* Buttons */}
        <div className="mt-auto grid grid-cols-2 gap-3">
          <button
            onClick={handleBuy}
            className="col-span-2 bg-white text-black py-2.5 rounded-xl text-[10px] font-black uppercase tracking-tighter hover:bg-amber-500 transition-all active:scale-95 shadow-md flex items-center justify-center space-x-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>BUY NOW</span>
          </button>
          <button
            onClick={() => addToCart(product)}
            className="bg-amber-500 text-black py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter hover:brightness-110 transition-all active:scale-95 shadow-md"
          >
            ADD TO CART
          </button>
          <button
            onClick={handleDetails}
            className="bg-white/10 text-white border border-white/10 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter hover:bg-white/20 transition-all active:scale-95"
          >
            DETAILS
          </button>
        </div>
      </div>
    </motion.div>
  );
}
