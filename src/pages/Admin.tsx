/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { BarChart3, Users, Package, TrendingUp, DollarSign, ArrowUpRight } from 'lucide-react';

export default function Admin() {
  const { user } = useAuth();

  if (!user || !user.isAdmin) return <Navigate to="/" />;

  const stats = [
    { label: 'Total Revenue', value: '$84,230', icon: DollarSign, trend: '+12.5%' },
    { label: 'Active Users', value: '1,240', icon: Users, trend: '+3.2%' },
    { label: 'Orders (MoM)', value: '450', icon: Package, trend: '+8.4%' },
    { label: 'Growth Rate', value: '24%', icon: TrendingUp, trend: '+2.1%' },
  ];

  const recentSales = [
    { id: '#4592', customer: 'Alice Johnson', items: 3, total: '$420', status: 'delivered' },
    { id: '#4593', customer: 'Mark Smith', items: 1, total: '$120', status: 'shipped' },
    { id: '#4594', customer: 'Sarah Brown', items: 2, total: '$310', status: 'pending' },
    { id: '#4595', customer: 'Ivan Dobrev', items: 4, total: '$890', status: 'delivered' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white uppercase tracking-tighter italic">Strategic <span className="text-white/40">Oversight</span></h1>
            <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em] mt-4 italic">Authorities Central Command & Analytics</p>
          </div>
          <button className="flex items-center justify-center space-x-4 bg-white text-black px-10 py-5 rounded-[2.5rem] text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 transition-all transform hover:scale-[1.02] shadow-2xl">
            <BarChart3 className="w-5 h-5 text-black" />
            <span>Generate Strategic Intelligence</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-3xl p-10 rounded-[3rem] shadow-2xl border border-white/10 group hover:border-amber-500/50 transition-all"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-amber-500 transition-all border border-white/5">
                   <s.icon className="w-6 h-6 text-white/20 group-hover:text-black transition-colors" />
                </div>
                <span className="text-[10px] font-black text-white bg-amber-500 px-4 py-2 rounded-full uppercase tracking-widest italic">{s.trend}</span>
              </div>
              <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-2 italic">{s.label}</p>
              <p className="text-4xl font-serif font-bold text-white italic underline decoration-white/10 decoration-2 underline-offset-8 group-hover:decoration-amber-500/50 transition-all">{s.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
           {/* Recent Sales */}
           <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] shadow-2xl border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                   <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-tighter italic">Recent <span className="text-white/40">Strategic Transactions</span></h3>
                   <button className="text-[10px] font-black text-amber-500 uppercase tracking-widest hover:text-white transition-all underline underline-offset-8 italic">Full Archives</button>
                </div>
                <div className="overflow-x-auto custom-scrollbar">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/5 uppercase text-[9px] tracking-[0.4em] text-white/20 font-black italic">
                        <th className="pb-6">Protocol ID</th>
                        <th className="pb-6">Asset Holder</th>
                        <th className="pb-6">Allocation</th>
                        <th className="pb-6">Net Value</th>
                        <th className="pb-6">Status</th>
                        <th className="pb-6"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {recentSales.map(sale => (
                        <tr key={sale.id} className="group cursor-pointer hover:bg-white/5 transition-colors">
                          <td className="py-8 font-black text-white text-xs italic opacity-40 group-hover:opacity-100 group-hover:text-amber-500 transition-all">{sale.id}</td>
                          <td className="py-8 text-sm text-white/70 font-sans uppercase tracking-tight">{sale.customer}</td>
                          <td className="py-8 text-xs text-white/30 font-black italic uppercase tracking-widest">{sale.items} items</td>
                          <td className="py-8 font-serif font-bold text-white text-lg italic group-hover:text-amber-500 transition-colors">{sale.total}</td>
                          <td className="py-8">
                             <span className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] italic shadow-lg ${
                                sale.status === 'delivered' ? 'bg-white text-black' : 
                                sale.status === 'shipped' ? 'bg-amber-500 text-black' : 'bg-white/5 text-white/40 border border-white/10'
                             }`}>
                                {sale.status}
                             </span>
                          </td>
                          <td className="py-8 text-right">
                             <ArrowUpRight className="w-5 h-5 text-white/10 group-hover:text-amber-500 transition-all transform group-hover:rotate-45" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
           </div>

           {/* Sales Distribution Proxy */}
           <div className="lg:col-span-1 space-y-8">
              <div className="bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] shadow-2xl border border-white/10 flex flex-col items-center">
                 <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-tighter mb-12 w-full italic">Demand <span className="text-white/40">Concentration</span></h3>
                 <div className="relative w-56 h-56 mb-12">
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                       <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
                       <circle cx="50" cy="50" r="42" stroke="#f59e0b" strokeWidth="6" strokeDasharray="180 263.8" fill="transparent" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="text-5xl font-serif font-bold text-white italic">72%</span>
                       <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 italic mt-2">Loyalty Factor</span>
                    </div>
                 </div>
                 <div className="w-full space-y-6">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                       <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">Elite Casual</span>
                       </div>
                       <span className="text-[10px] font-black text-white uppercase tracking-widest">45%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                       <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">Global Formal</span>
                       </div>
                       <span className="text-[10px] font-black text-white uppercase tracking-widest">35%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                       <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">Strategic Accs</span>
                       </div>
                       <span className="text-[10px] font-black text-white uppercase tracking-widest">20%</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
