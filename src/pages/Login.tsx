/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Mail, User, ArrowRight, Github, Chrome } from 'lucide-react';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await login(email, password);
    setLoading(false);
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 bg-white/5 backdrop-blur-3xl rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden border border-white/10">
        
        {/* Visual Panel */}
        <div className="hidden md:block relative bg-[#0c0c0e] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-amber-500/10 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1544441893-675973e30605?auto=format&fit=crop&q=80&w=1200" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105"
            alt="Fashion"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-16 text-white">
            <h2 className="text-5xl font-serif font-bold mb-6 tracking-tighter italic">Veloura <span className="text-amber-500">Privilege</span></h2>
            <p className="text-white/40 text-sm italic leading-relaxed font-light">
              "Join our exclusive community of high-fashion enthusiasts and gain early access to seasonal collections."
            </p>
            <div className="mt-10 h-1 w-20 bg-amber-500 rounded-full"></div>
          </div>
        </div>

        {/* Form Panel */}
        <div className="p-10 md:p-20 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? 'login' : 'signup'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-4xl font-serif font-bold text-white mb-3 tracking-tighter uppercase italic">
                {isLogin ? 'Welcome Back' : 'Access Vault'}
              </h1>
              <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-12 italic">
                {isLogin ? 'Authenticating Identity...' : 'Initiate Fashion Strategic Profile'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {!isLogin && (
                  <div className="relative group">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-amber-500 transition-colors" />
                    <input 
                      placeholder="Full Name" 
                      className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-amber-500/50 transition-all text-sm text-white placeholder:text-white/10 font-sans"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                  </div>
                )}
                
                <div className="relative group">
                   <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-amber-500 transition-colors" />
                   <input 
                     type="email"
                     placeholder="Email Address" 
                     className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-amber-500/50 transition-all text-sm text-white placeholder:text-white/10 font-sans"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     required
                   />
                </div>

                <div className="relative group">
                   <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-amber-500 transition-colors" />
                   <input 
                     type="password"
                     placeholder="Secure Password" 
                     className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-amber-500/50 transition-all text-sm text-white placeholder:text-white/10 font-sans"
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                     required
                   />
                </div>

                {isLogin && (
                  <div className="flex justify-end">
                    <button type="button" className="text-[9px] font-black text-white/20 hover:text-amber-500 uppercase tracking-widest transition-all mb-2">Forgot Credentials?</button>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full h-16 flex items-center justify-center space-x-4 bg-white text-black rounded-[2rem] font-black uppercase text-xs tracking-widest hover:bg-amber-500 transition-all transform hover:scale-[1.02] shadow-2xl disabled:bg-white/10 disabled:text-white/20"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>{isLogin ? 'VALIDATE IDENTITY' : 'CREATE PROTOCOL'}</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-16">
                 <div className="relative mb-10">
                    <div className="absolute inset-0 flex items-center text-center"><div className="w-full border-t border-white/5"></div></div>
                    <div className="relative flex justify-center text-[9px] font-black uppercase tracking-[0.4em] text-white/10"><span className="bg-transparent px-4 italic">Social Sync</span></div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-6">
                    <button className="flex items-center justify-center space-x-4 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
                       <Chrome className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Google</span>
                    </button>
                    <button className="flex items-center justify-center space-x-4 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
                       <Github className="w-5 h-5 text-white/40 group-hover:text-white group-hover:scale-110 transition-transform" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">GitHub</span>
                    </button>
                 </div>
              </div>

              <div className="mt-12 text-center">
                 <button 
                   onClick={() => setIsLogin(!isLogin)}
                   className="text-[10px] font-black text-amber-500/50 hover:text-amber-500 transition-all uppercase tracking-[0.4em] decoration-2 underline-offset-8"
                 >
                   {isLogin ? "No strategic profile? Register Archives" : "Already verified? Enter Vault"}
                 </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
