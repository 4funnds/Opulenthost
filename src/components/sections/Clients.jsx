import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../ui/SectionHeader';

const clients = ['TechStart', 'GrowthMetrics', 'ServicePro', 'InnovateCo'];

const ClientLogo = ({ name, index, inView }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex justify-center"
    >
        <div className="text-gray-400 hover:text-gray-700 transition-colors text-2xl font-bold">
            {name}
        </div>
    </motion.div>
);

const Clients = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section ref={ref} className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Trusted by businesses worldwide"
                    center
                />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    {clients.map((client, index) => (
                        <ClientLogo
                            key={client}
                            name={client}
                            index={index}
                            inView={inView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;