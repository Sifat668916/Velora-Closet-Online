/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center p-20 space-y-4">
      <div className="relative w-16 h-16">
        <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
           className="absolute inset-0 border-4 border-white/5 border-t-amber-500 rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
           <span className="text-[10px] font-black text-white/20 uppercase tracking-widest animate-pulse">VC</span>
        </div>
      </div>
      <p className="text-[10px] font-black text-amber-500 uppercase tracking-[0.5em] italic">Synchronizing Masterpieces...</p>
    </div>
  );
}
