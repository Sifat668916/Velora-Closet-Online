/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useAuth } from '../context/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { User, Package, MapPin, LogOut, ChevronRight, Settings, Shield } from 'lucide-react';
import React, { useState } from 'react';

export default function Profile() {
  const { user, logout, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    address: user?.address || ''
  });

  if (!user) return <Navigate to="/login" />;

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profileData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
             <div className="bg-white/5 backdrop-blur-3xl p-10 rounded-[3rem] shadow-2xl border border-white/10 text-center flex flex-col items-center">
                <div className="w-28 h-28 bg-white/5 rounded-full flex items-center justify-center mb-8 relative group overflow-hidden border border-white/10">
                   <User className="w-12 h-12 text-amber-500 group-hover:scale-110 transition-transform" />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                      <Settings className="w-6 h-6 text-amber-500" />
                   </div>
                </div>
                <h2 className="text-2xl font-serif font-bold text-white uppercase tracking-tighter italic">{user.name}</h2>
                <p className="text-[10px] font-black text-amber-500/50 uppercase tracking-[0.3em] mb-10 italic">{user.email}</p>
                
                <div className="w-full space-y-3">
                  {user.isAdmin && (
                    <Link to="/admin" className="flex items-center space-x-4 w-full p-5 bg-amber-500 text-black rounded-2xl hover:bg-white transition-all text-[10px] font-black uppercase tracking-widest italic shadow-xl">
                       <Shield className="w-4 h-4 text-black" />
                       <span>Strategic Panel</span>
                    </Link>
                  )}
                  <button 
                    onClick={logout}
                    className="flex items-center space-x-4 w-full p-5 bg-white/5 text-white/40 hover:text-white hover:bg-white/10 rounded-2xl border border-white/5 transition-all text-[10px] font-black uppercase tracking-widest"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Secure Sign Out</span>
                  </button>
                </div>
             </div>

             <nav className="bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] shadow-2xl border border-white/10 space-y-3">
                <button className="flex items-center justify-between w-full p-5 bg-white/10 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/10">
                   <div className="flex items-center space-x-4">
                      <Package className="w-4 h-4 text-amber-500" />
                      <span>Archive History</span>
                   </div>
                   <ChevronRight className="w-4 h-4 opacity-30" />
                </button>
                <button 
                  onClick={() => setIsEditing(true)}
                  className="flex items-center justify-between w-full p-5 text-white/40 hover:text-white hover:bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"
                >
                   <div className="flex items-center space-x-4">
                      <MapPin className="w-4 h-4" />
                      <span>Identity Proxy</span>
                   </div>
                   <ChevronRight className="w-4 h-4 opacity-20" />
                </button>
             </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-12">
            {isEditing ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/5 backdrop-blur-3xl p-16 rounded-[4rem] shadow-2xl border border-white/10">
                <h3 className="text-3xl font-serif font-bold text-white mb-10 uppercase tracking-tighter italic">Edit <span className="text-white/40">Identity Profiling</span></h3>
                <form onSubmit={handleUpdate} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Validated Pseudonym</label>
                      <input 
                        className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500/20 transition-all font-sans text-white text-sm"
                        value={profileData.name}
                        onChange={e => setProfileData({...profileData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Archive Logistics Point</label>
                      <input 
                        className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500/20 transition-all font-sans text-white text-sm"
                        value={profileData.address}
                        onChange={e => setProfileData({...profileData, address: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="flex space-x-6 pt-8">
                    <button type="submit" className="bg-white text-black px-12 py-5 rounded-[2rem] font-black uppercase text-xs tracking-widest hover:bg-amber-500 transition-all transform hover:scale-[1.02] shadow-2xl">Confirm Logic Update</button>
                    <button type="button" onClick={() => setIsEditing(false)} className="px-12 py-5 rounded-[2rem] font-black text-white/20 hover:text-white transition-all uppercase text-[10px] tracking-widest border border-white/5">Abort Sequence</button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <div className="space-y-12">
                <div className="bg-white/5 backdrop-blur-3xl p-16 rounded-[4rem] shadow-2xl border border-white/10">
                  <h3 className="text-3xl font-serif font-bold text-white mb-12 pb-8 border-b border-white/5 uppercase tracking-tighter italic">Strategic <span className="text-white/40">Archives</span></h3>
                  {user.orders.length > 0 ? (
                    <div className="space-y-16">
                      {user.orders.map(order => (
                        <div key={order.id} className="group">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                            <div>
                               <p className="text-xs font-black text-amber-500 uppercase tracking-[0.4em] mb-2 italic">{order.id}</p>
                               <p className="text-[10px] text-white/20 font-black uppercase tracking-widest italic">Synchronized {order.date}</p>
                            </div>
                            <div className="flex items-center space-x-8">
                               <div className="text-right">
                                  <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-2 italic">Asset Value</p>
                                  <p className="text-2xl font-serif font-bold text-white italic underline decoration-amber-500 decoration-2 underline-offset-4">${order.total}</p>
                               </div>
                               <span className="px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-lg">{order.status}</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {order.items.map(item => (
                              <div key={item.id} className="aspect-[3/4] rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative group/item">
                                <img src={item.image} alt="" className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                                   <p className="text-[10px] text-white font-black uppercase tracking-widest leading-tight italic">{item.name}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-24 text-center">
                       <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center border border-white/5 mx-auto mb-10">
                          <Package className="w-8 h-8 text-white/10" />
                       </div>
                       <p className="text-white/20 font-serif italic text-2xl tracking-widest mb-10 max-w-sm mx-auto">Your collection is waiting for its first masterpiece.</p>
                       <Link to="/shop" className="text-amber-500 font-black uppercase underline underline-offset-8 decoration-2 tracking-[0.5em] text-[10px] hover:text-white transition-all italic">Initiate Procurement</Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
