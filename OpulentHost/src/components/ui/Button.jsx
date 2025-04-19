import { motion, AnimatePresence } from 'framer-motion';

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  onClick,
  isLoading = false
}) => {
  const baseClasses = `px-6 py-3 rounded-md font-medium transition-all ${fullWidth ? 'w-full' : ''}`;
  const variants = {
    primary: 'bg-linear-90/oklch from-primary-gold via-light-gold to-dark-gold text-charcoal focus:ring-2 focus:ring-accent-color',
    ghost: 'text-primary-gold hover:bg-light-gold focus:ring-2 focus:ring-accent-color',
    outline: 'border border-muted-gold hover:bg-dark-navy/25 focus:ring-2 focus:ring-accent-color',
  };

  return (
    <motion.a
      whileHover={{ 
        scale: variant === 'primary' ? 1.05 : 1.02,
        y: -2
      }}
      whileTap={{ 
        scale: 0.98,
        y: 0
      }}
      href={href}
      onClick={onClick}
      className={`relative overflow-hidden ${baseClasses} ${variants[variant]} ${className}`}
      aria-busy={isLoading}
    >
      <AnimatePresence>
        {isLoading && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-primary-gold bg-opacity-50"
          >
            <LoadingSpinner size="sm" />
          </motion.span>
        )}
      </AnimatePresence>
      <motion.span
        animate={{ 
          opacity: isLoading ? 0 : 1,
          transition: { duration: 0.2 }
        }}
      >
        {children}
      </motion.span>
    </motion.a>
  );
};

export default Button;