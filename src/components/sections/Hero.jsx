import { motion, useMotionValue, useTransform, useScroll, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import ShinyText from '../animation/ShinyText';
import GradientText from '../animation/GradientText';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();

  // Wave animations
  const waveHeight = useTransform(scrollYProgress, [0, 1], ['20vh', '150vh']);
  const waveTilt = useTransform(scrollY, [0, 500], [0, 15]);
  const waveOpacity = useTransform(scrollY, [0, 300, 600, 900, 1200], [0.35, 0.3, 0.2, 0.15, 0.1]);
  const waveY = useTransform(scrollY, [0, 500], [0, -50]);
  const waveScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  // Mouse tracking for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    controls.start("visible");
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <section id="home" className="bg-dark-navy px-auto py-auto mx-auto md:pt-32 md:pb-24 relative overflow-hidden min-h-screen">
      {/* Fluid Wave Background */}
      <motion.div 
        className="wave-container wave-mask"
        style={{
          height: waveHeight,
          opacity: waveOpacity,
          rotateZ: waveTilt,
        }}
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          visible: { opacity: 0.2 }
        }}
      >
        {/* Primary Wave */}
        <motion.svg 
          className="wave-svg wave-fluid"
          style={{
            y: waveY,
            scale: waveScale
          }}
        >
          <motion.path
            d="M0,100 C150,80 300,120 450,100 C600,80 750,60 900,80 C1050,100 1200,160 1350,140 C1500,120 1650,20 1800,40 L1800,200 L0,200 Z"
            fill="url(#goldWave)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
          <defs>
          <linearGradient id="goldWave" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary-gold)" stopOpacity="0.25" />
            <stop offset="25%" stopColor="var(--color-light-gold)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="var(--color-accent-color)" stopOpacity="0.15" />
            <stop offset="75%" stopColor="var(--color-muted-gold)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--color-dark-gold)" stopOpacity="0.05" />
          </linearGradient>
          </defs>
        </motion.svg>

        {/* Secondary Wave (depth layer) */}
        <motion.svg 
          className="absolute bottom-0 w-full wave-svg wave-secondary-fluid "
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          style={{
            y: waveY,
            scale: waveScale
          }}
        >
          <motion.path 
            d="M0,80 C200,60 400,100 600,80 C800,60 1000,80 1200,100 L1440,80 L1440,150 L0,150 Z"
            fill="url(#goldWaveSecondary)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 2 }}
            transition={{ duration: 3 }}
          />
          <defs>
          <linearGradient id="goldWaveSecondary" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-muted-gold)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--color-dark-navy)" stopOpacity="0.05" />
          </linearGradient>
          </defs>
        </motion.svg>

        {/* Water Droplets */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="water-droplet"
            style={{
              '--rand': Math.random(),
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`
            }}
          />
        ))}
      </motion.div>

      {/* Mouse position tracker */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          width: 25,
          height: 25,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0) 70%)',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 my-16 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center"
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
              colors={["#f4c947", "#efb900", "#050b18", "#d7bb70", "#ebddb9"]}
              animationSpeed={8}
              className="text-4xl md:text-5xl font-[inter]"
            >
              Satu Langkah untuk Menaklukkan Digitalisasi
            </GradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-[inter] text-accent-color mb-8 max-w-2xl mx-auto"
          >
            Kami menghadirkan solusi web yang memahami bisnis dan pelanggan Anda secara mendalam dengan pendekatan yang professional
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-8"
          >
            <Button 
              variant="outline" 
              href="#work"
              className="px-6 py-3 text-lg bg-light-gold hover:bg-muted-gold transition-all border-2"
              whileHover={{ 
                scale: 1.2,
                backgroundColor: 'oklch(85% 0.15 90)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <ShinyText 
                text="Lihat Proyek Terbaru Kami" 
                speed={8} 
                className="font-medium font-[inter] text-dark-navy"
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Spill effect for next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 section-spill section-spill-connector">
        <div className="absolute bottom-0 left-0 w-full h-full water-surface bg-gradient-to-t from-accent-color to-transparent" />
      </div>
    </section>
  );
};

export default Hero;