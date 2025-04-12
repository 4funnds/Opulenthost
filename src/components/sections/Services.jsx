import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { services } from '../../data/services';

const Services = () => {
    return (
        <section id="services" className="py-20">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="My Services"
                    subtitle="Comprehensive web solutions tailored to your business needs"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
        <div className="mb-6">{service.icon}</div>
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
    </motion.div>
);

export default Services;