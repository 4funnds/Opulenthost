import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  animate = true,
  hoverEffect = true,
  ...props
}) => {
  return (
    <motion.div
      {...(animate && {
        initial: { opacity: 0, y: 20, rotateX: 5 },
        whileInView: { opacity: 1, y: 0, rotateX: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5, type: 'spring' }
      })}
      {...(hoverEffect && {
        whileHover: { 
          y: -8,
          rotateZ: 0.5,
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
          transition: { 
            type: 'spring',
            stiffness: 300
          }
        }
      })}
      style={{ transformStyle: 'preserve-3d' }}
      className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;