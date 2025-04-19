import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useApp } from '../../contexts/AppContext';
import { navLinks } from '../../data/navLinks';
import heroImage from '../../assets/images/opulent.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import GradientText from '../animation/GradientText';
import RotatingText from '../animation/RotatingText';

const Header = () => {
    const { isScrolled, isMenuOpen, setIsMenuOpen } = useApp();
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 my-auto py-auto flex justify-between items-center">
                <Logo />
                <DesktopNav links={navLinks} />
                <AuthButtons />
                <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>
            <MobileMenu isMenuOpen={isMenuOpen} links={navLinks} toggleMenu={toggleMenu} />
        </header>
    );
};

const Logo = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center"
    >        
        <span className="text-2xl font-semibold font-[inter] text-primary-gold">Opulent</span>
        <RotatingText
            texts={['Host', 'Sites', 'Blogs', 'Commerce', 'Stores', 'Folio']}
            mainClassName="px-auto ml-1.5 sm:px-2 md:px-3 bg-linear-90/oklch from-primary-gold via-light-gold to-dark-gold text-xl font-semibold font-[inter] text-charcoal overflow-hidden py-auto sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden py-auto px-auto sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
            />
        {/* <span className="text-2xl font-semibold text-white">Host</span> */}
        <LazyLoadImage
            src={heroImage}
            alt="Opulent Logo"
            className="h-16 w-16 ml-2 object-contain"
            effect="opacity"
        />
    </motion.div>
);

const DesktopNav = ({ links }) => (
    <nav className="hidden md:flex space-x-8 ml-16">
        {links.map((link) => (
            <a
                key={link.name}
                href={link.href}
                className="text-primary-gold hover:text-accent-color transition-colors font-medium font-[inter]"
            >
                {link.name}
            </a>
        ))}
    </nav>
);

const AuthButtons = () => (
    <div className="hidden md:flex items-center space-x-6">
        <GradientText 
            as="a"
            colors={["#fff9e6","#ffd41a","#998006","#ffe780","#ccaa10","#ffffff"]}
            animationSpeed={4}
            showBorder={true}
            className="px-4 py-2 rounded-md font-medium text-lg border-0 mr-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
        >
            Contact Us!
        </GradientText>
        <GradientText 
            as="a"
            colors={["#fff9e6","#ffd41a","#998006","#ffe780","#ccaa10","#ffffff"]}
            animationSpeed={6}
            showBorder={true}
            className="px-4 py-2 rounded-md font-medium text-lg border-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#pricing"
        >
            Order Now
        </GradientText>
    </div>
);

const MobileMenuButton = ({ isMenuOpen, toggleMenu }) => (
    <button
        className="md:hidden text-gold-700 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
    >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
    </button>
);

const MobileMenu = ({ isMenuOpen, links, toggleMenu }) => (
    <AnimatePresence>
        {isMenuOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white overflow-hidden"
            >
                <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gold-700 hover:text-gold-500 transition-colors font-medium py-2"
                            onClick={toggleMenu}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-col space-y-2 pt-2">
                        <GradientText 
                            as="a"
                            colors={["#fff9e6", "#ffd41a", "#998006", "#ffe780"]}
                            animationSpeed={8}
                            showBorder={true}
                            className="px-4 py-2 rounded-lg font-medium text-center"
                            href="#contact"
                            onClick={toggleMenu}
                        >
                            Contact Us
                        </GradientText>
                        <GradientText 
                            as="a"
                            colors={["#fff9e6", "#ffd41a", "#998006", "#ffe780"]}
                            animationSpeed={8}
                            showBorder={true}
                            className="px-4 py-2 rounded-lg font-medium text-center"
                            href="#pricing"
                            onClick={toggleMenu}
                        >
                            Order Now
                        </GradientText>
                    </div>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

export default Header;