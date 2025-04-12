import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Button from '../ui/Button';
import { FiArrowRight } from 'react-icons/fi';
import heroImage from '../../assets/images/dazai.svg';
// import heroPlaceholder from '../../assets/images/hero-placeholder.jpg'; // Create this or use a small version of your image

const Hero = () => {
    return (
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                        >
                            Beautiful, Functional <span className="text-blue-600">Web Solutions</span> for Your Business
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-xl text-gray-600 mb-8"
                        >
                            Custom web design and development services to help your business stand out and convert visitors into customers.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button variant="primary" href="#pricing">
                                Get a Free Quote
                            </Button>
                            <Button variant="outline" href="#work">
                                View My Work <FiArrowRight className="ml-2" />
                            </Button>
                        </motion.div>
                    </div>

                    <HeroImage />
                </div>
            </div>
        </section>
    );
};

const HeroImage = () => (
    <div className="md:w-1/2">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
        >
            <div className="bg-white p-4 rounded-xl shadow-xl transform rotate-1">
                <LazyLoadImage
                    src={heroImage}
                    alt="Website Preview"
                    className="w-full h-64 rounded-lg object-cover"
                    effect="blur"
                    // placeholderSrc={heroPlaceholder}
                    placeholderSrc={`${heroImage}?w=20`}
                />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </motion.div>
    </div>
);

export default Hero;