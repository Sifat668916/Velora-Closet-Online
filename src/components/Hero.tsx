import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_ITEMS = [
  {
    id: 'h1',
    title: 'Autumn Collection 2024',
    subtitle: 'Limited Time Offer: 30% OFF',
    description: 'Experience the pinnacle of luxury with our new autumn collection. Hand-selected fabrics meets timeless design for the modern individual.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000',
    link: '/shop?collection=autumn'
  },
  {
    id: 'h2',
    title: 'Equestrian Elegance',
    subtitle: 'New Arrival',
    description: 'Our most requested "Old Money" aesthetic is finally here. Discover shirts and trousers that defined an era of sophistication.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=2000',
    link: '/shop?category=old%20money%20shirts'
  },
  {
    id: 'h3',
    title: 'Urban Comfort',
    subtitle: 'Essentials',
    description: 'From dropsholder hoodies to baggy trousers, master the art of streetwear without sacrificing quality.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000',
    link: '/shop?category=Dropsholder'
  }
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % HERO_ITEMS.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + HERO_ITEMS.length) % HERO_ITEMS.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] sm:h-[75vh] w-full overflow-hidden pt-20 px-4 sm:px-8 mt-4">
      <div className="max-w-7xl mx-auto h-full rounded-[3rem] overflow-hidden bg-gradient-to-r from-indigo-950/80 to-transparent border border-white/10 backdrop-blur-xl relative group">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col md:flex-row items-center"
          >
            {/* Content (Left) */}
            <div className="flex-1 px-8 md:px-16 lg:px-24 z-20 py-12 md:py-0 text-white">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-amber-500 text-black text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-widest mb-4 inline-block"
              >
                {HERO_ITEMS[activeIndex].subtitle}
              </motion.span>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 tracking-tighter"
              >
                {HERO_ITEMS[activeIndex].title.split('Collection').join('\nCollection')}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white/60 text-sm mb-10 max-w-sm leading-relaxed italic"
              >
                {HERO_ITEMS[activeIndex].description}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to={HERO_ITEMS[activeIndex].link}
                  className="group inline-flex items-center space-x-3 bg-white text-black px-8 py-3.5 rounded-full text-sm font-bold hover:bg-amber-500 transition-all transform hover:scale-105"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Image (Right) */}
            <div className="absolute right-0 top-0 h-full w-full md:w-[50%] bg-zinc-900/40 border-l border-white/5 overflow-hidden z-10 md:block hidden">
               <motion.div 
                 initial={{ scale: 1.1 }}
                 animate={{ scale: 1 }}
                 transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
                 className="w-full h-full"
               >
                  <img
                    src={HERO_ITEMS[activeIndex].image}
                    alt={HERO_ITEMS[activeIndex].title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
               </motion.div>
               <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-10 left-8 md:left-24 flex items-center space-x-6 z-30">
          <div className="flex space-x-2">
            {HERO_ITEMS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-8 h-1 rounded-full transition-all ${idx === activeIndex ? 'bg-amber-500 w-16' : 'bg-white/20'}`}
              />
            ))}
          </div>
          <div className="flex space-x-3 ml-8">
            <button onClick={prevSlide} className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white/50 hover:text-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white/50 hover:text-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
