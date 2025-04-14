import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { testimonials } from '../../data/testimonials';
import { FiMessageSquare, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';
import ShinyText from '../animation/ShinyText';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;
  const totalTestimonials = testimonials.length;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + cardsToShow >= totalTestimonials ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalTestimonials - cardsToShow : prevIndex - 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex, 
    currentIndex + cardsToShow
  );

  // Handle case where we're at the end and don't have enough testimonials to fill the view
  if (visibleTestimonials.length < cardsToShow) {
    const needed = cardsToShow - visibleTestimonials.length;
    visibleTestimonials.push(...testimonials.slice(0, needed));
  }

  return (
    <section id="testimonials" className="py-20 bg-obsidian-navy relative overflow-hidden mt-16">
      {/* Animated background */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-b from-gold-500 to-transparent"
      />
      
      <div className="container mx-auto my-auto px-4 relative z-10">
        <SectionHeader
          title= {<ShinyText text="Client's Stories" speed={2} className='text-gold-300'/>}
          subtitle="What our clients say about our services"
          subtitleClass='text-gold-500'
        />

        <div className="relative">
          <div className="relative h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                className="grid max-md:grid-cols-2 md:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <TestimonialCard 
                    key={`${currentIndex}-${index}`}
                    testimonial={testimonial} 
                    index={index}
                    isActive={true}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full border border-gold-500 text-gold-500 max-md:invisible"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={24} />
            </motion.button>
            
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full border border-gold-500 text-gold-500 max-md:invisible"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={24} />
            </motion.button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2 max-md:invisible">
            {Array.from({ length: Math.ceil(totalTestimonials / cardsToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * cardsToShow)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex >= index * cardsToShow && 
                  currentIndex < (index + 1) * cardsToShow 
                    ? 'bg-gold-500' 
                    : 'bg-gray-300'
                }`}
                aria-label={`View testimonials ${index * cardsToShow + 1} to ${Math.min((index + 1) * cardsToShow, totalTestimonials)}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.6, 
          delay: index * 0.15,
          type: 'spring',
          stiffness: 100
        } 
      }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all h-full${
        isActive ? 'ring-2 ring-gold-500' : ''
      }`}
    >
      {/* Hover effect */}
      <motion.div 
        className="absolute inset-0 bg-gold-500 bg-opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
      
      <FiMessageSquare className="text-gold-500 text-3xl mb-6" />
      
      <motion.p 
        className="text-gold-800 mb-6 italic text-lg relative z-10"
      >
        "{testimonial.quote}"
      </motion.p>
      
      <div className="flex items-center relative z-10">
        <div>
          <h4 className="font-bold text-gold-900">{testimonial.name}</h4>
          <p className="text-gold-700 text-sm">{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;