import { motion, useMotionValue } from 'framer-motion';
import Button from '../ui/Button';
import { FiArrowRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import GradientText from '../animation/GradientText';


const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Create motion values for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <section id="home" className="bg-obsidian-navy px-auto py-auto mx-auto md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-700 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-purple-500 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </motion.div>

      {/* Mouse position tracker */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          width: 50,
          height: 25,
          borderRadius: '50%',
          background: 'gradient(circle, rgba(212,175,55,0.2) 30%, rgba(212,175,55,0) 70%)',
          transition: 'transform 0.5s ease-out fade',
        }}
      >
      </motion.div>

      <div className="container mx-auto px-6 my-16">
        <motion.div 
          className="flex flex-col items-center text-center "
          onMouseMove={handleMouseMove}
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="text-4xl md:text-5xl leading-tight my-8"
            >
              <GradientText 
                colors={["#fff9e6","#ffd41a","#998006","#0c000a","#ffe780","#ccaa10","#ffffff"]}
                animationSpeed={6}
                className="text-4xl md:text-5xl"
              >
                Elevate Your Website, Accelerate Your Growth
              </GradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-linear-90/srgb from-gold-100 to-gold-900 mb-8 max-w-2xl mx-auto"
            >
              {/* <ShinyText 
                text="We provide" 
                speed={4} 
                className="font-bold text-gold-400"
              /> */} We provide a web solutions that understand your business and customers
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center space-x-8"
            >
              <Button 
                variant="outline" 
                href="#services"
                className="px-6 py-3 text-lg border-2"
                whileHover={{ 
                  scale: 1.2,
                  backgroundColor: 'rgba(212, 175, 55, 0.1)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                View My Skills
              </Button>
            </motion.div>
          </motion.div>
      </div>
    </section>
  );
};

export default Hero;