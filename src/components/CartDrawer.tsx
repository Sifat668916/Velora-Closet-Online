/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#0c0c0e]/95 backdrop-blur-3xl z-[70] shadow-[0_0_100px_rgba(0,0,0,0.8)] border-l border-white/10 flex flex-col"
          >
            <div className="p-10 flex justify-between items-center border-b border-white/5">
               <div>
                  <h2 className="text-3xl font-serif font-bold text-white uppercase tracking-tighter italic">Strategic <span className="text-white/40">Bag</span></h2>
                  <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest italic">{cart.length} Masterpieces selected</p>
               </div>
               <button onClick={onClose} className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/10">
                  <X className="w-5 h-5 text-white/50" />
               </button>
            </div>

            <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
               {cart.length > 0 ? (
                 cart.map(item => (
                   <div key={item.id} className="flex space-x-8 group">
                      <div className="w-24 h-32 bg-white/5 rounded-3xl overflow-hidden flex-shrink-0 border border-white/5 group-hover:border-amber-500/50 transition-all">
                         <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-2">
                         <div>
                            <div className="flex justify-between items-start mb-2">
                               <h3 className="text-xs font-black text-white group-hover:text-amber-500 transition-colors uppercase tracking-tight font-sans leading-tight">{item.name}</h3>
                               <button onClick={() => removeFromCart(item.id)} className="text-white/10 hover:text-amber-500 transition-all">
                                  <Trash2 className="w-4 h-4" />
                               </button>
                            </div>
                            <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 italic italic">{item.category}</p>
                         </div>
                         
                         <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-5 bg-white/5 border border-white/10 rounded-2xl px-4 py-2">
                               <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 text-white/40 hover:text-amber-500 transition-colors">
                                  <Minus className="w-3 h-3" />
                               </button>
                               <span className="text-xs font-black w-6 text-center text-white">{item.quantity}</span>
                               <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 text-white/40 hover:text-amber-500 transition-colors">
                                  <Plus className="w-3 h-3" />
                               </button>
                            </div>
                            <p className="font-serif font-bold text-amber-500 text-lg">${item.price * item.quantity}</p>
                         </div>
                      </div>
                   </div>
                 ))
               ) : (
                 <div className="h-full flex flex-col items-center justify-center space-y-8 text-center">
                    <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center border border-white/5">
                      <ShoppingBag className="w-10 h-10 text-white/10" />
                    </div>
                    <p className="text-white/20 font-serif italic text-2xl tracking-widest">Your archives are empty.</p>
                    <button onClick={onClose} className="text-amber-500 font-black uppercase underline underline-offset-8 transition-all text-[10px] tracking-widest hover:text-white">Begin Strategic Selection</button>
                 </div>
               )}
            </div>

            <div className="p-10 bg-white/5 backdrop-blur-xl border-t border-white/5">
               <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center space-x-2 text-white/20">
                     <span className="text-[10px] uppercase font-black tracking-[0.3em] italic">Strategic Value</span>
                  </div>
                  <span className="text-4xl font-serif font-bold text-white underline decoration-amber-500 underline-offset-8 decoration-4 italic">${totalPrice}</span>
               </div>
               
               <button 
                 onClick={handleCheckout}
                 disabled={cart.length === 0}
                 className="w-full bg-white text-black py-7 rounded-[2rem] font-black uppercase text-xs tracking-widest hover:bg-amber-500 transition-all transform hover:scale-[1.02] shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex items-center justify-center space-x-4 disabled:bg-white/10 disabled:text-white/20 disabled:transform-none disabled:shadow-none"
               >
                  <span>Proceed to Final Checkout</span>
                  <ArrowRight className="w-5 h-5" />
               </button>
               <p className="text-center text-[8px] text-white/20 uppercase tracking-[0.5em] font-black mt-8 italic">Encrypted Secure Transaction & Insured Shipping</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
