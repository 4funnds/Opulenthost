import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Button from '../ui/Button';
import ShinyText from '../animation/ShinyText';

const CircularPricing = ({ plans }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);

  const visiblePlans = [
    plans[(currentIndex - 1 + plans.length) % plans.length],
    plans[currentIndex],
    plans[(currentIndex + 1) % plans.length]
  ];

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % plans.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + plans.length) % plans.length);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX || e.touches[0].clientX;
    setTranslateX(x - startX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (translateX > 50) {
      prevSlide();
    } else if (translateX < -50) {
      nextSlide();
    }
    setTranslateX(0);
  };

  return (
    <section id="pricing" className="py-20 bg-obsidian-navy relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <ShinyText text="Our Pricing" speed={8} className='text-gold-500'/>
          </h2>
          <p className="text-gold-300 text-lg">
            Flexible options to fit your budget and requirements
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {plans.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-3 rounded-full bg-gold-500 text-obsidian-navy hover:bg-gold-400 transition-colors shadow-lg"
                aria-label="Previous plans"
              >
                <FiChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-3 rounded-full bg-gold-500 text-obsidian-navy hover:bg-gold-400 transition-colors shadow-lg"
                aria-label="Next plans"
              >
                <FiChevronRight size={24} />
              </button>
            </>
          )}

          <div 
            ref={containerRef}
            className="relative h-[32rem] flex items-center justify-center"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
          >
            <AnimatePresence>
              {visiblePlans.map((plan, index) => {
                const position = index - 1; // -1: left, 0: center, 1: right
                const scale = position === 0 ? 1 : 0.85;
                const zIndex = position === 0 ? 10 : 5 - Math.abs(position);
                const opacity = position === 0 ? 1 : 0.7;
                const xOffset = position * 320 + translateX * 0.5;

                return (
                  <motion.div
                    key={`${plan.name}-${currentIndex + index}`}
                    className={`absolute w-80 h-[28rem] rounded-3xl p-8 flex flex-col items-center justify-between ${position === 0 ? 'cursor-default' : 'cursor-pointer'}`}
                    style={{
                      zIndex,
                      background: 'linear-gradient(135deg, #040221 0%, #0a0a2e 100%)',
                      border: '2px solid rgba(255, 212, 26, 0.3)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                    }}
                    initial={{ 
                      x: xOffset,
                      y: position === 0 ? 0 : 20,
                      scale,
                      opacity,
                    }}
                    animate={{ 
                      x: xOffset,
                      y: position === 0 ? 0 : 20,
                      scale,
                      opacity,
                      transition: { type: 'spring', stiffness: 300, damping: 20 }
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => position !== 0 && (position < 0 ? prevSlide() : nextSlide())}
                    whileHover={{ 
                      scale: position === 0 ? 1.02 : 0.9,
                      boxShadow: position === 0 ? '0 15px 40px rgba(255, 212, 26, 0.2)' : '0 5px 20px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <div className="text-center w-full">
                      <h3 className="text-2xl font-bold mb-2 text-gold-300">{plan.name}</h3>
                      <div className="text-4xl font-bold my-4 text-gold-500">{plan.price}</div>
                      <p className="text-gold-400 mb-6 text-sm min-h-[3rem]">{plan.description}</p>
                      
                      <ul className="mb-6 space-y-2 text-gold-300 text-sm text-left pl-4">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <FiCheck className="text-gold-500 mr-2 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="w-full mt-auto">
                      <Button
                        variant="outline"
                        fullWidth
                        href="#contact"
                        className="bg-linear-90/oklch from-gold-500 via-gold-300 to-gold-900 text-obsidian-black hover:bg-gold-100 py-3"
                      >
                        {plan.cta || "Order Now"}
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularPricing;