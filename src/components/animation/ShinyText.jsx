import { motion } from 'framer-motion';

const ShinyText = ({ 
  text, 
  disabled = false, 
  speed = 5, 
  className = '',
  as = 'span'
}) => {
  const animationDuration = `${speed}s`;
  const Component = motion[as];

  return (
    <Component
      className={`text-2xl-[#fff9e6] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255, 249, 230, 1) 70%, rgba(255, 212, 26, 1) 60%, rgba(153, 128, 6, 1) 40%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {text}
    </Component>
  );
};

export default ShinyText;