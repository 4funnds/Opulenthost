import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { pricingPlans } from '../../data/pricing';
import { FiCheck } from 'react-icons/fi';
import Button from '../ui/Button'

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Pricing Plans"
                    subtitle="Flexible options to fit your budget and requirements"
                />

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={plan.name} plan={plan} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const PricingCard = ({ plan, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: plan.featured ? 1.03 : 1.01 }}
        className={`rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${plan.featured ? 'border-2 border-blue-500 relative' : 'border border-gray-200'
        }`}
>
    {plan.featured && (
        <div className="bg-blue-500 text-white text-sm font-bold py-1 px-4 text-center">
            Most Popular
        </div>
    )}

        <div className="p-8">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-4">{plan.price}</div>
            <p className="text-gray-600 mb-6">{plan.description}</p>

            <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                        <FiCheck className="text-green-500 mr-2" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <Button
                variant={plan.featured ? 'primary' : 'outline'}
                fullWidth
                href="#contact"
            >
                {plan.cta}
            </Button>
        </div>
    </motion.div>
);

export default Pricing;