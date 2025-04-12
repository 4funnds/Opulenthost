import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Button = ({
    children,
    href,
    variant = 'primary',
    fullWidth = false,
    className = '',
    onClick
}) => {
    const baseClasses = `px-6 py-2 rounded-md font-medium transition-colors ${fullWidth ? 'w-full' : ''}`;

    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        ghost: 'text-blue-600 hover:bg-blue-50',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
    };

    return (
        <motion.a
            whileHover={{ scale: variant === 'primary' ? 1.05 : 1.02 }}
            whileTap={{ scale: 0.95 }}
            href={href}
            onClick={onClick}
            className={`${baseClasses} ${variants[variant]} ${className}`}
        >
            {children}
        </motion.a>
    );
};

export default Button;