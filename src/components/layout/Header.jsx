import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import Button from '../ui/Button';
import { useApp } from '../../contexts/AppContext';
import { navLinks } from '../../data/navLinks';

const Header = () => {
    const { isScrolled, isMenuOpen, setIsMenuOpen } = useApp();
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
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
        <span className="text-2xl font-bold text-amber-400">Opulent</span>
        <span className="text-2xl font-bold text-slate-900">Host</span>
    </motion.div>
);

const DesktopNav = ({ links }) => (
    <nav className="hidden md:flex items-center space-x-8">
        {links.map((link) => (
            <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
                {link.name}
            </a>
        ))}
    </nav>
);

const AuthButtons = () => (
    <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" href="#contact">Contact</Button>
        <Button variant="primary" href="#pricing">
            Get Quote <FiArrowRight className="ml-2" />
        </Button>
    </div>
);

const MobileMenuButton = ({ isMenuOpen, toggleMenu }) => (
    <button
        className="md:hidden text-gray-600 focus:outline-none"
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
                            className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
                            onClick={toggleMenu}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-col space-y-2 pt-2">
                        <Button variant="ghost" fullWidth onClick={toggleMenu} href="#contact">
                            Contact
                        </Button>
                        <Button variant="primary" fullWidth onClick={toggleMenu} href="#pricing">
                            Get Quote
                        </Button>
                    </div>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

export default Header;