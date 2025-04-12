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
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: "-100px" },
                transition: { duration: 0.5 }
            })}
            {...(hoverEffect && {
                whileHover: { y: -5 }
            })}
            className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;