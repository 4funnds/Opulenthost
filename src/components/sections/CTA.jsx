import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button';

const CTA = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section id="contact" className="py-20 bg-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Let's discuss how I can help you achieve your business goals with a custom web solution.
                    </p>
                    <Button
                        variant="secondary"
                        href="mailto:contact@yourfreelance.com"
                        className="mx-auto"
                    >
                        Get in Touch
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;