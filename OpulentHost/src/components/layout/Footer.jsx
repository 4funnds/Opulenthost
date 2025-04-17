import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const services = ['Company Landing Page', 'Web Development', 'Web Portfolio', 'Web Design', 'Web Stores', 'Blogs'];

const Footer = () => {
    return (
        <footer className="bg-gold-900 text-gold-200 py-8">
            <div className="container mx-auto px-4 text-center">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <FooterBrand />
                    <FooterLinks title="Services" items={services} />
                    <FooterLinks title="Company" items={['Testimonials', 'Process', 'About']} />
                    <FooterContact />
                </div>
                <FooterBottom />
            </div>
        </footer>
    );
};

const FooterBrand = () => (
    <div>
        <div className="flex items-center mb-4 justify-center">
            <span className="text-2xl font-bold text-gold-500">Opulent</span>
            <span className="text-2xl font-bold text-gray-100">Host</span>
        </div>
        <p className="mb-4">
            Professional web design and development services to help your business grow online.
        </p>
        <div className="flex space-x-4 justify-center">
            <a href="https://www.facebook.com/denisalviano372" className="text-gold-200 hover:text-gold-100 transition-colors" aria-label="Facebook">
                <FaFacebook size={20} />
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
                    <a className="text-gold-200 hover:text-gold-100 transition-colors">
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
            <li>hostopulent@gmail.com</li>
            <li>+62 851-4357-0076</li>
            <li>Cikarang, Bekasi</li>
        </ul>
    </div>
);

const FooterBottom = () => (
    <div className="pt-8 border-t border-gray-800 text-sm text-gold-300">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                © {new Date().getFullYear()} OpulentHost. All rights reserved.
            </div>
            <div className="flex space-x-6">
                <a href="#" className="hover:text-gold-100 transition-colors">
                    Privacy Policy
                </a>
                <a href="#" className="hover:text-gold-100 transition-colors">
                    Terms of Service
                </a>
                <a href="#" className="hover:text-gold-100 transition-colors">
                    Cookies
                </a>
            </div>
        </div>
    </div>
);

export default Footer;