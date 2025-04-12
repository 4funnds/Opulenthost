import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import TestimonialDots from './TestimonialDots';

const TestimonialSlider = ({ testimonials = [], activeIndex, setActiveIndex }) => {
    if (!Array.isArray(testimonials) || testimonials.length === 0) {
        return <p>No testimonials available.</p>;
    }
    return (
        <div className="relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-64"
                >
                    <TestimonialCard
                        testimonial={testimonials[activeIndex]}
                        isActive={true}
                    />
                </motion.div>
            </AnimatePresence>

            <TestimonialDots
                count={testimonials.length}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />
        </div>
    );
};

export default TestimonialSlider;