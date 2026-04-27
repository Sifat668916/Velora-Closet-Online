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
            <div className="w-full md:max-w-2xl lg:max-w-3xl px-8 md:px-20 lg:px-28 z-20 py-12 md:py-0 text-white flex flex-col items-center md:items-start text-center md:text-left">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-amber-500 text-black text-[10px] font-extrabold uppercase px-3 py-1 rounded tracking-widest mb-6 inline-block"
              >
                {HERO_ITEMS[activeIndex].subtitle}
              </motion.span>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tighter whitespace-pre-line max-w-2xl"
              >
                {HERO_ITEMS[activeIndex].title}
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
                  className="group inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-amber-500 transition-all transform hover:scale-105 whitespace-nowrap shadow-2xl"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 flex flex-col items-center space-y-8 z-30">
          <div className="flex flex-col space-y-3 items-center">
            {HERO_ITEMS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 ${idx === activeIndex ? 'h-8 w-1.5 bg-amber-500 rounded-full' : 'h-1.5 w-1.5 bg-white/20 rounded-full hover:bg-white/40'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            <button 
              onClick={prevSlide} 
              className="p-3 md:p-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md hover:bg-white/10 transition-all text-white/50 hover:text-white group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 group-active:scale-90 transition-transform" />
            </button>
            <button 
              onClick={nextSlide} 
              className="p-3 md:p-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md hover:bg-white/10 transition-all text-white/50 hover:text-white group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 group-active:scale-90 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
