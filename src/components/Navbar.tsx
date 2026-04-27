import { Heart, Search, ShoppingBag, User as UserIcon, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-between px-8">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
             <div className="w-8 h-8 bg-white rounded-sm rotate-45 flex items-center justify-center">
                <span className="text-[#0c0c0e] font-bold -rotate-45">V</span>
             </div>
             <span className="text-xl font-bold tracking-tight italic text-white">
                Veloura<span className="font-light text-white/70 underline decoration-amber-500">Closet</span>
             </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex relative items-center">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search collections..."
                className="bg-white/10 border border-white/10 rounded-full py-2 px-4 pl-12 text-sm w-80 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-white/30 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            </form>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-wider">
          <Link to="/shop" className="text-white/70 hover:text-amber-400 transition-colors">Shop</Link>
          <Link to="/about" className="text-white/70 hover:text-amber-400 transition-colors">About</Link>
          
          <div className="flex items-center space-x-6">
            {user ? (
               <Link to="/profile" className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full border border-white/10 hover:bg-white/20 transition-all">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-[10px] text-black font-bold uppercase">{user.name.charAt(0)}</span>
                  </div>
                  <span className="text-xs text-white">Profile</span>
               </Link>
            ) : (
              <Link to="/login" className="text-white/70 hover:text-amber-400 transition-colors">Login</Link>
            )}
            
            <Link to="/cart" className="relative p-2 text-white/70 hover:text-amber-400 transition-colors group">
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-black text-[10px] font-bold flex items-center justify-center rounded-full"
                >
                  {totalItems}
                </motion.span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-6 text-white">
           <Link to="/cart" className="relative p-2">
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-black text-[10px] font-bold flex items-center justify-center rounded-full">{totalItems}</span>
              )}
           </Link>
           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-[#0c0c0e]/95 backdrop-blur-2xl border-b border-white/10 md:hidden z-50 overflow-hidden"
          >
            <div className="px-8 py-10 space-y-6">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 pl-14 text-sm outline-none text-white focus:ring-1 focus:ring-amber-500/50 transition-all font-sans"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              </form>
              <div className="flex flex-col space-y-6 text-lg font-bold uppercase tracking-widest italic">
                <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="text-white/60 hover:text-amber-500 transition-colors">Shop</Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-white/60 hover:text-amber-500 transition-colors">About</Link>
                {user ? (
                  <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="text-white/60 hover:text-amber-500 transition-colors">Profile</Link>
                ) : (
                  <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-white/60 hover:text-amber-500 transition-colors">Login</Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
