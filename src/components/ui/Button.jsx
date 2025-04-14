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
    primary: 'bg-gold-500 text-gray-900 hover:bg-gold-400 hover:shadow-lg focus:ring-2 focus:ring-gold-300',
    ghost: 'text-gold-500 hover:bg-gold-100 focus:ring-2 focus:ring-gold-300',
    outline: 'border border-gold-500 text-gold-500 hover:bg-gold-50 focus:ring-2 focus:ring-gold-300',
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
            className="absolute inset-0 flex items-center justify-center bg-gold-500 bg-opacity-50"
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