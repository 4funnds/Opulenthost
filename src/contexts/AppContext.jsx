import { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // Testimonial rotation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial(prev => (prev + 1) % 3); // Assuming 3 testimonials
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <AppContext.Provider value={{
            isMenuOpen, setIsMenuOpen,
            activeTestimonial, setActiveTestimonial
        }}>
            {children}
        </AppContext.Provider>
    );
};

const useApp = () => useContext(AppContext);

export { AppProvider, useApp };
// export const useApp = () => useContext(AppContext);