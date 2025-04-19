import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../ui/SectionHeader';
import { useState } from 'react';
import ShinyText from '../animation/ShinyText';

const processSteps = [
  { title: 'Discovery', description: 'Understand your goals and requirements' },
  { title: 'Design', description: 'Create wireframes and visual designs' },
  { title: 'Development', description: 'Build the website with clean, efficient code' },
  { title: 'Launch', description: 'Deploy and optimize for performance' },
];

const Process = () => {
  const [sectionRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section id="process" ref={sectionRef} className="py-20 bg-dark-navy relative">
      {/* Animated background line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-accent-color to-transparent origin-top transform -translate-x-1/2"
      />
      
      <div className="container mx-auto px-4">
        <SectionHeader
          title={<ShinyText text="Our Professional Approach" speed={4} className='text-light-gold'/>}
          subtitle= "A streamlined approach to delivering exceptional results"
          subtitleClass="text-accent-color"
        />
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.title}
                step={step}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ step, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, x: index % 2 === 0 ? -20 : 20 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0,
        x: 0,
        transition: { 
          duration: 0.6, 
          delay: index * 0.15,
          type: 'spring',
          stiffness: 100
        } 
      } : {}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`mb-12 md:mb-16 relative ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}
    >
      <motion.div
        className="hidden md:block absolute top-0 left-1/2 w-4 h-4 bg-light-gold rounded-full transform -translate-x-1/2 z-10"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.15 + 0.3 }}
        whileHover={{ scale: 1.5 }}
      />
      
      <motion.div
        className={`p-6 rounded-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
        initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
        animate={isHovered ? { 
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          transition: { duration: 0.3 }
        } : { 
          backgroundColor: 'rgba(255, 255, 255, 0)',
          transition: { duration: 0.5 }
        }}
      >
        <motion.h3 
          className="text-xl font-bold mb-2 text-light-gold"
          whileHover={{ color: 'muted-gold' }}
          transition={{ duration: 0.2 }}
        >
          {step.title}
        </motion.h3>
        <motion.p 
          className="text-accent-color"
          initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
          animate={inView ? { 
            opacity: 1, 
            x: 0,
            transition: { 
              delay: index * 0.15 + 0.2,
              duration: 0.5
            }
          } : {}}
        >
          {step.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Process;