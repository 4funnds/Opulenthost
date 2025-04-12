import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { testimonials } from '../../data/testimonials';
import { FiMessageSquare } from 'react-icons/fi'; // Changed from FiQuote

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Client Testimonials"
                    subtitle="What our clients say about our services"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ testimonial, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
        <FiMessageSquare className="text-blue-500 text-2xl mb-4" /> {/* Changed icon */}
        <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
        <div className="flex items-center">
            <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
            />
            <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
            </div>
        </div>
    </motion.div>
);

export default Testimonials;