import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from '../ui/CountUp';
import { useEffect, useState } from 'react';

const stats = [
  { value: 3, label: 'Months of Basic Support Included' },
  { value: 14, label: 'Day Delivery Timeline' },
  { value: 3, label: 'Rounds of Revision Included' },
  { value: 100, label: 'Website Features Available' },
];

const Stats = () => {
  const [sectionRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={sectionRef} className="py-20 bg-charcoal/20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          visible: { opacity: 0.2 }
        }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-transparent mix-blend-overlay filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-charcoal/20 mix-blend-overlay filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              stat={stat}
              index={index}
              controls={controls}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const StatItem = ({ stat, index, controls }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasCounted, setHasCounted] = useState(false);
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            type: 'spring',
            stiffness: 100
          }
        }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative p-6 rounded-lg overflow-hidden"
    >
      {/* Hover effect background */}
      <motion.div 
        className="absolute inset-0 bg-transparent bg-opacity-20 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          transition: { duration: 0.5 }
        }}
      />
      
      <motion.div
        className="text-5xl font-bold font-[inter] mb-2 text-ivory"
        animate={{
          scale: isHovered ? [1, 1.1, 1] : 1,
          transition: { duration: 0.6 }
        }}
      >
        <CountUp 
          start={0} 
          end={stat.value} 
          duration={2} 
          delay={index * 0.2}
          suffix={stat.suffix || ''}
          onComplete={() => setHasCounted(true)}
        />
        {/* Only show '+' if the value is >50 AND there's no suffix AND counting is complete */}
        {stat.value > 50 && !stat.suffix && '+'}
      </motion.div>
      <motion.div 
        className="text-accent-color font-[inter] font-semibold text-lg"
        animate={{
          color: isHovered ? 'oklch(80% 0.1 90)' : '',
          transition: { duration: 0.5 }
        }}
      >
        {stat.label}
      </motion.div>
    </motion.div>
  );
};

export default Stats;