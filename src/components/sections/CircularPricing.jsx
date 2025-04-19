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

  const activeCardGradient = {
    background: 'linear-gradient(230deg, oklch(34.09% 0.022 267.38) -20%, oklch(75% 0.22 90) 25%)',
    border: '3px solid oklch(81% 0.19 90)'
  };

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
    <section id="pricing" className="py-12 md:py-20 relative overflow-hidden">
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            <ShinyText text="Our Pricing" speed={6} className='text-light-gold font-[inter]'/>
          </h2>
          <p className="text-accent-color font-[inter] text-base md:text-lg">
            Flexible options to fit your budget and requirements
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div 
            ref={containerRef}
            className="relative h-[24rem] md:h-[32rem] flex items-center justify-center mb-8"
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
                const opacity = position === 0 ? 1 : 0.45;
                const xOffset = position * (window.innerWidth < 768 ? 280 : 320) + translateX * 0.5;

                return (
                  <motion.div
                    key={`${plan.name}-${currentIndex + index}`}
                    className={`absolute w-72 md:w-80 h-[20rem] md:h-[28rem] rounded-3xl p-6 md:p-8 flex flex-col items-center justify-between ${position === 0 ? 'cursor-default' : 'cursor-pointer'}`}
                    style={position === 0 ? activeCardGradient : {
                      zIndex,
                      background: 'oklch(80% 0.1 90)',
                      border: '2px solid oklch(80% 0.1 90)',
                      boxShadow: '0 10px 25px oklch(85% 0.15 90)',
                      opacity: 0.75
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
                      boxShadow: position === 0 ? '0 15px 40px oklch(90% 0.05 90)' : '0 5px 10px oklch(80% 0.1 90)'
                    }}
                  >
                    <div className="text-center w-full">
                      <h3 className="text-xl md:text-2xl font-[inter] font-bold mb-2 text-dark-navy">{plan.name}</h3>
                      <div className="text-3xl md:text-4xl font-[inter] font-bold my-3 md:my-4 text-dark-navy">{plan.price}</div>
                      <p className="text-dark-navy font-[inter] mb-4 md:mb-6 text-xs md:text-sm min-h-[2.5rem] md:min-h-[3rem]">{plan.description}</p>
                      
                      <ul className="mb-4 md:mb-6 space-y-2 text-dark-navy font-[inter] text-xs md:text-sm text-left pl-4">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <FiCheck className="text-dark-navy opacity-100 mr-2 mt-0.5 md:mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="w-full mt-0 md:mt-auto">
                      <Button
                        variant="outline"
                        fullWidth
                        href="#contact"
                        className="md:py-3 text-dark-navy font-[inter] bg-charcoal/25 border-2 border-ivory"
                      >
                        {plan.cta || "Order Now"}
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation arrows positioned below */}
          {plans.length > 1 && (
            <div className="flex justify-center items-center gap-8 mt-4">
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1, backgroundColor: 'oklch(90% 0.05 90)' }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full border border-primary-gold transition-colors shadow-lg"
                aria-label="Previous plans"
              >
                <FiChevronLeft size={24} className='text-dark-gold' />
              </motion.button>
              
              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1, backgroundColor: 'oklch(90% 0.05 90)' }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full border border-primary-gold transition-colors shadow-lg"
                aria-label="Next plans"
              >
                <FiChevronRight size={24} className='text-dark-gold' />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CircularPricing;