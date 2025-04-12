import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../ui/SectionHeader';

const processSteps = [
    { title: 'Discovery', description: 'Understand your goals and requirements' },
    { title: 'Design', description: 'Create wireframes and visual designs' },
    { title: 'Development', description: 'Build the website with clean, efficient code' },
    { title: 'Launch', description: 'Deploy and optimize for performance' },
];

const Process = () => {
    const [sectionRef, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section id="process" ref={sectionRef} className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="My Process"
                    subtitle="A streamlined approach to delivering exceptional results"
                />

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

                        {processSteps.map((step, index) => (
                            <ProcessStep
                                key={step.title}
                                step={step}
                                index={index}
                                inView={inView}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProcessStep = ({ step, index, inView }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: inView ? index * 0.1 : 0 }}
        className={`mb-12 md:mb-16 relative ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}
    >
        <div className="hidden md:block absolute top-0 left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2"></div>
        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
    </motion.div>
);

export default Process;