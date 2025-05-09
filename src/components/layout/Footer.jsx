import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const services = ['Landing Page', 'Profil Perusahaan', 'Pengembangan Website', 'Portofolio Web Ekslusif', 'Desain Web Menawan', 'Toko Online', 'Blog'];

const Footer = () => {
    return (
        <footer className="bg-charcoal/40 text-gold-200 py-8">
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
            <span className="text-2xl font-[inter] font-bold text-primary-gold">Opulent</span>
            <span className="text-2xl font-[inter] font-bold text-ivory">Host</span>
        </div>
        <p className="mb-4 font-[inter] text-accent-color">
        Jasa desain dan pengembangan web profesional untuk akselerasi pertumbuhan bisnis online Anda.
        </p>
        <div className="flex space-x-4 justify-center">
            <a href="https://www.facebook.com/denisalviano372" className="text-ivory hover:text-accent-color transition-colors" aria-label="Facebook">
                <FaFacebook size={20}/>
            </a>
        </div>
    </div>
);

const FooterLinks = ({ title, items }) => (
    <div>
        <h4 className="text-ivory font-[inter] font-bold mb-4">{title}</h4>
        <ul className="space-y-2 font-[inter]">
            {items.map((item) => (
                <li key={item.title || item}>
                    <a className="text-accent-color font-[inter] hover:text-light-gold transition-colors">
                        {item.title || item}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const FooterContact = () => (
    <div>
        <h4 className="text-ivory font-[inter] font-bold mb-4">Kontak</h4>
        <ul className="space-y-2 font-[inter] text-accent-color">
            <li>hostopulent@gmail.com</li>
            <li>+62 851-4357-0076</li>
            <li>Cikarang, Bekasi</li>
        </ul>
    </div>
);

const FooterBottom = () => (
    <div className="pt-8 border-t border-ivory text-sm text-accent-color">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                © {new Date().getFullYear()} OpulentHost. Seluruh hak cipta dilindungi.
            </div>
            <div className="flex space-x-6">
                <a href="#" className="hover:text-light-gold transition-colors">
                    Kebijakan Privasi
                </a>
                <a href="#" className="hover:text-light-gold transition-colors">
                    Ketentuan Layanan
                </a>
                <a href="#" className="hover:text-light-gold transition-colors">
                    Cookies
                </a>
            </div>
        </div>
    </div>
);

export default Footer;