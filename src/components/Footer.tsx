import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { CATEGORIES } from '../constants';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-md px-8 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-6 text-center md:text-left">
            <Link to="/" className="text-3xl font-serif font-bold tracking-tighter italic">
              VELOURA <span className="text-white/70 underline decoration-amber-500 font-light">CLOSET</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              The premier destination for timeless luxury and refined fashion aesthetics. Defining premium fashion since 2024.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-amber-500 hover:text-black transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-amber-500 hover:text-black transition-all"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-amber-500 hover:text-black transition-all"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Categories */}
          <div className="text-center md:text-left">
            <h4 className="text-[10px] uppercase font-bold text-amber-500 mb-8 tracking-widest">Collections</h4>
            <ul className="grid grid-cols-2 gap-4">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <Link to={`/shop?category=${cat}`} className="text-white/60 hover:text-amber-400 text-[11px] transition-colors uppercase tracking-tight">
                    {cat}
                  </Link>
                </li>
              ))}
              <li><Link to="/shop" className="text-white/60 hover:text-amber-400 text-[11px] transition-colors uppercase tracking-tight">All Products</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-amber-400 text-[11px] transition-colors uppercase tracking-tight">Our Story</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-[10px] uppercase font-bold text-amber-500 mb-8 tracking-widest">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start justify-center md:justify-start space-x-3 text-white/60 text-sm">
                <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <p className="text-[11px]">Gazipur, chowrasta<br />Bangladesh</p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-white/60 text-sm">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <p className="text-[11px]">+880 1838-054223</p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-white/60 text-sm">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <p className="text-[11px]">imran7500hasan@gmail.com</p>
              </div>
              
              {/* Mini Map Proxy */}
              <div className="mt-6 w-full h-32 bg-white/5 rounded-xl border border-white/10 overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-black/40 grayscale group-hover:grayscale-0 transition-all">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                    alt="Location Map"
                    className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-white/70">Location Gazipur</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/20">
          <p>&copy; 2024 Veloura Closet. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
