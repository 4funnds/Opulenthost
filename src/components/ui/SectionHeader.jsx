import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionHeader = ({ title, subtitle, center = false, titleClass = '', subtitleClass = '' }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : {}}
      transition={{ staggerChildren: 0.1 }}
      className={`${center ? 'text-center' : ''} mb-16`}
    >
      <motion.h2 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              type: 'spring'
            }
          }
        }}
        className={`text-3xl font-bold mb-4 ${titleClass}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                type: 'spring',
                delay: 0.1
              }
            }
          }}
          className={`text-xl ${subtitleClass} ${center ? 'mx-auto' : ''} ${subtitle.length > 50 ? 'max-w-2xl' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;