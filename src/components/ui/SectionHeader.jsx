import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionHeader = ({ title, subtitle, center = false }) => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className={`${center ? 'text-center' : ''} mb-16`}
        >
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            {subtitle && (
                <p className={`text-xl text-gray-600 ${center ? 'mx-auto' : ''} ${subtitle.length > 50 ? 'max-w-2xl' : ''}`}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default SectionHeader;