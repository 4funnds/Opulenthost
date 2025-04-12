import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from '../ui/CountUp';

const stats = [
    { value: 50, label: 'Projects Completed' },
    { value: 100, label: 'Happy Clients' },
    { value: 40, label: 'Conversion Increase' },
    { value: 24, label: 'Hour Support' },
];

const Stats = () => {
    const [sectionRef, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section ref={sectionRef} className="py-16 bg-blue-600 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <StatItem
                            key={stat.label}
                            stat={stat}
                            index={index}
                            inView={inView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const StatItem = ({ stat, index, inView }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <div className="text-4xl font-bold mb-2">
            {inView ? (
                <>
                    <CountUp start={0} end={stat.value} duration={2} delay={index * 0.2} />
                    {stat.value > 50 && '+'}
                </>
            ) : (
                <span>0{stat.value > 50 && '+'}</span>
            )}
        </div>
        <div className="text-blue-100">{stat.label}</div>
    </motion.div>
);

export default Stats;