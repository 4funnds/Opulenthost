import { motion } from 'framer-motion';
import { FiQuote, FiMessageSquare } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import { IoMdQuote } from 'react-icons/io';
import { HiOutlineChatAlt2 } from 'react-icons/hi';

const TestimonialCard = ({ testimonial, isActive }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{
                opacity: isActive ? 1 : 0.5,
                x: isActive ? 0 : 50,
                scale: isActive ? 1 : 0.95
            }}
            transition={{ duration: 0.5 }}
            className={`bg-gray-50 p-8 rounded-xl ${isActive ? '' : 'pointer-events-none'}`}
        >
            <div className="flex items-start mb-6">
                <FiQuote className="text-blue-500 text-2xl mr-2 flex-shrink-0" />
                <blockquote className="text-xl italic">
                    {testimonial.quote}
                </blockquote>
            </div>
            <div>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.role}</div>
            </div>
        </motion.div>
    );
};

// Add default export
export default TestimonialCard;