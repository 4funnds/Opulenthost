import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const services = ['Web Design', 'Web Development', 'SEO Optimization', 'E-commerce Solutions'];

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <FooterBrand />
                    <FooterLinks title="Services" items={services} />
                    <FooterLinks title="Company" items={['About', 'Work', 'Process', 'Testimonials']} />
                    <FooterContact />
                </div>
                <FooterBottom />
            </div>
        </footer>
    );
};

const FooterBrand = () => (
    <div>
        <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-white">WD</span>
            <span className="text-2xl font-bold text-gray-300">Freelance</span>
        </div>
        <p className="mb-4">
            Professional web design and development services to help your business grow online.
        </p>
        <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <FaGithub size={20} />
            </a>
        </div>
    </div>
);

const FooterLinks = ({ title, items }) => (
    <div>
        <h4 className="text-white font-bold mb-4">{title}</h4>
        <ul className="space-y-2">
            {items.map((item) => (
                <li key={item.title || item}>
                    <a href="#" className="hover:text-white transition-colors">
                        {item.title || item}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const FooterContact = () => (
    <div>
        <h4 className="text-white font-bold mb-4">Contact</h4>
        <ul className="space-y-2">
            <li>dens.alviano@gmail.com</li>
            <li>+62 851-4357-0076</li>
            <li>Cikarang, Bekasi</li>
        </ul>
    </div>
);

const FooterBottom = () => (
    <div className="pt-8 border-t border-gray-800 text-sm text-gray-500">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                © {new Date().getFullYear()} WD Freelance. All rights reserved.
            </div>
            <div className="flex space-x-6">
                <a href="#" className="hover:text-gray-300 transition-colors">
                    Privacy Policy
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                    Terms of Service
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                    Cookies
                </a>
            </div>
        </div>
    </div>
);

export default Footer;