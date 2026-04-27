/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CreditCard, Truck, ShieldCheck, Tag, ArrowRight } from 'lucide-react';

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const { user, addOrder } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: user?.name.split(' ')[0] || '',
    lastName: user?.name.split(' ')[1] || '',
    email: user?.email || '',
    address: user?.address || '',
    city: '',
    zip: '',
    cardNum: '',
    expiry: '',
    cvv: ''
  });

  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bkash' | 'nagad' | 'rocket'>('cod');
  const [transactionId, setTransactionId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('Please login to place an order');
      navigate('/login');
      return;
    }

    if (paymentMethod !== 'cod' && !transactionId) {
       alert('Please provide the Transaction Identity (TrxID) for verification.');
       return;
    }
    
    setIsProcessing(true);
    // Simulate transaction sync
    await new Promise(r => setTimeout(r, 2500));
    
    const newOrder = {
      id: `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      date: new Date().toLocaleDateString(),
      items: [...cart],
      total: totalPrice + 15,
      status: 'pending' as const,
      paymentMethod: paymentMethod.toUpperCase(),
      transactionId: paymentMethod !== 'cod' ? transactionId : 'COD-MODE'
    };
    
    addOrder(newOrder);
    clearCart();
    setIsProcessing(false);
    navigate('/profile?order-success=true');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
         <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10">
            <CreditCard className="w-10 h-10 text-white/20" />
         </div>
         <h2 className="text-3xl font-serif font-bold text-white mb-6 italic tracking-widest opacity-40">The archives are empty</h2>
         <Link to="/shop" className="bg-white text-black px-12 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-amber-500 transition-all shadow-2xl">Return to Gallery</Link>
      </div>
    );
  }

  const paymentOptions = [
    { id: 'cod', name: 'Cash on Delivery', color: 'bg-white/5', textColor: 'text-white' },
    { id: 'bkash', name: 'bKash Transfer', color: 'bg-[#D12053]', textColor: 'text-white' },
    { id: 'nagad', name: 'Nagad Transfer', color: 'bg-[#F26422]', textColor: 'text-white' },
    { id: 'rocket', name: 'Rocket Transfer', color: 'bg-[#8B318E]', textColor: 'text-white' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-16 uppercase tracking-tighter italic">Strategic <span className="text-white/40">Checkout</span></h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-16 order-2 lg:order-1">
            <section className="space-y-10">
              <div className="flex items-center space-x-4 text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] italic">
                <Truck className="w-5 h-5" />
                <span>Shipping Logistics</span>
              </div>
              <div className="grid grid-cols-2 gap-8">
                 <input 
                   placeholder="First Name" 
                   required
                   className="col-span-1 p-5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-amber-500/50 transition-all text-sm text-white placeholder:text-white/10 font-sans"
                   value={formData.firstName}
                   onChange={e => setFormData({...formData, firstName: e.target.value})}
                 />
                 <input 
                   placeholder="Last Name" 
                   required
                   className="col-span-1 p-5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-amber-500/50 transition-all text-sm text-white placeholder:text-white/10 font-sans"
                   value={formData.lastName}
                   onChange={e => setFormData({...formData, lastName: e.target.value})}
                 />
                 <input 
                   placeholder="Email Registry" 
                   type="email"
                   required
                   className="col-span-2 p-5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-amber-500/50 transition-all text-sm text-white placeholder:text-white/10 font-sans"
                   value={formData.email}
                   onChange={e => setFormData({...formData, email: e.target.value})}
                 />
                 <input 
                   placeholder="Strategic Address" 
                   required
                   className="col-span-2 p-5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-amber-500/50 transition-all text-sm text-white placeholder:text-white/10 font-sans"
                   value={formData.address}
                   onChange={e => setFormData({...formData, address: e.target.value})}
                 />
                 <input 
                   placeholder="City Vault" 
                   required
                   className="col-span-1 p-5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-amber-500/50 transition-all text-sm text-white placeholder:text-white/10 font-sans"
                   value={formData.city}
                   onChange={e => setFormData({...formData, city: e.target.value})}
                 />
                 <input 
                   placeholder="ZIP Protocol" 
                   required
                   className="col-span-1 p-5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-amber-500/50 transition-all text-sm text-white placeholder:text-white/10 font-sans"
                   value={formData.zip}
                   onChange={e => setFormData({...formData, zip: e.target.value})}
                 />
              </div>
            </section>

            <section className="space-y-10">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4 text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] italic">
                  <CreditCard className="w-5 h-5" />
                  <span>Financial Protocol Selector</span>
                </div>
                <p className="text-[10px] text-white/20 font-black uppercase tracking-widest italic">Proceed with Pre-payment for faster logistics.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {paymentOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPaymentMethod(opt.id as any)}
                    className={`p-6 rounded-2xl border transition-all flex flex-col items-center justify-center space-y-3 relative overflow-hidden group ${
                      paymentMethod === opt.id 
                        ? `${opt.color} border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.2)]` 
                        : 'bg-white/5 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="absolute top-2 right-2">
                       <div className={`w-3 h-3 rounded-full border-2 border-white/20 ${paymentMethod === opt.id ? 'bg-amber-500 border-amber-500 animate-pulse' : ''}`}></div>
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${paymentMethod === opt.id ? 'text-white' : 'text-white/40'}`}>
                      {opt.name}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {paymentMethod !== 'cod' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6 pt-4"
                  >
                    <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest italic">Merchant Number</p>
                          <p className="text-2xl font-serif font-bold text-white tracking-widest">01XXX-XXXXXX</p>
                        </div>
                        <div className={`px-4 py-2 rounded-full uppercase text-[9px] font-black tracking-widest ${paymentOptions.find(o => o.id === paymentMethod)?.color}`}>
                          {paymentMethod.toUpperCase()}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                         <label className="text-[10px] font-black text-white/20 uppercase tracking-widest italic leading-relaxed">
                           Instructions: Please send money to the above merchant number and provide the 8-10 digit Transaction ID (TrxID) below for archive synchronization.
                         </label>
                         <input 
                           placeholder="Enter Transaction ID (TrxID)"
                           required
                           className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-amber-500/50 transition-all text-sm text-white placeholder:text-white/10 font-sans mt-4"
                           value={transactionId}
                           onChange={e => setTransactionId(e.target.value)}
                         />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full flex items-center justify-center space-x-4 bg-white text-black py-7 rounded-3xl font-black uppercase text-xs tracking-widest hover:bg-amber-500 transition-all transform hover:scale-[1.02] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {isProcessing ? (
                <div className="flex items-center space-x-4">
                  <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                  <span>Verifying Protocol...</span>
                </div>
              ) : (
                <>
                  <span>Finalize Procurement - ${totalPrice + 15}</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
            <p className="text-center text-[9px] text-white/20 uppercase tracking-[0.4em] flex items-center justify-center space-x-3 italic font-black">
              <ShieldCheck className="w-5 h-5" />
              <span>Identity Encrypted & Asset Insured</span>
            </p>
          </form>

          {/* Summary */}
          <aside className="order-1 lg:order-2">
            <div className="bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] shadow-2xl sticky top-32 border border-white/10">
               <h3 className="text-2xl font-serif font-bold text-white mb-10 border-b border-white/5 pb-6 italic">Strategic <span className="text-white/40">Archive</span></h3>
               <div className="space-y-8 mb-10 max-h-96 overflow-y-auto pr-6 custom-scrollbar">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between group">
                       <div className="flex items-center space-x-6">
                          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white truncate w-40 font-sans uppercase tracking-tight">{item.name}</p>
                            <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em] italic">Qty: {item.quantity}</p>
                          </div>
                       </div>
                       <p className="text-lg font-serif font-bold text-amber-500">${item.price * item.quantity}</p>
                    </div>
                  ))}
               </div>

               <div className="space-y-4 pt-8 border-t border-white/5">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 uppercase tracking-[0.2em] font-black text-[9px] italic">Archive Value</span>
                    <span className="font-serif font-bold text-white">${totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40 uppercase tracking-[0.2em] font-black text-[9px] italic">Logistics Allocation</span>
                    <span className="font-serif font-bold text-white">$15</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 p-6 rounded-[2rem] mt-6 border border-white/5">
                    <div className="flex items-center space-x-3 text-amber-500">
                      <Tag className="w-5 h-5" />
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] italic">Grand Asset</span>
                    </div>
                    <span className="text-3xl font-serif font-bold text-white underline decoration-amber-500 underline-offset-8 italic">${totalPrice + 15}</span>
                  </div>
               </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
