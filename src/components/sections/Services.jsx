import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { services } from '../../data/services';
import { useState } from 'react';
import ShinyText from '../animation/ShinyText';

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Subtle background animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title={<ShinyText text="Semua yang Kami Miliki untuk Membangun Website Impian Anda" speed={4} as="h1"/>}
          subtitle="Keahlian komprehensif kami untuk menghadirkan solusi web yang dirancang khusus sesuai kebutuhan bisnis Anda"
          titleClass="text-light-gold"
          subtitleClass="text-accent-color"
        />
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 15 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        transition: { 
          duration: 0.6, 
          delay: index * 0.15,
          type: 'spring',
          stiffness: 100
        } 
      }}
      viewport={{ once: false, margin: "-50px" }}
      whileHover={{ 
        y: -10,
        rotateZ: isHovered ? [0, -2, 2, -1, 1, 0] : 0,
        transition: { duration: 0.5 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ transformStyle: 'preserve-3d' }}
      className="bg-charcoal/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all h-full"
    >
      <motion.div 
        className="mb-6 text-ivory text-3xl"
        animate={{
          scale: isHovered ? [1, 1.1, 1] : 1,
          transition: { duration: 0.6 }
        }}
      >
        {service.icon}
      </motion.div>
      <motion.h3 
        className="text-xl font-bold font-[inter] mb-3 text-ivory"
        animate={{
          color: isHovered ? 'oklch(80% 0.1 90)' : '',
          transition: { duration: 0.3 }
        }}
      >
        {service.title}
      </motion.h3>
      <motion.p 
        className="text-accent-color"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: 1, 
          height: 'auto',
          transition: { delay: index * 0.15 + 0.2 }
        }}
      >
        {service.description}
      </motion.p>
      
      <motion.div 
        className="absolute inset-0 rounded-xl overflow-hidden z-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 0.1 : 0,
          background: 'radial-gradient(circle at center, rgba(212,175,55,0.3) 0%, rgba(0,0,0,0) 70%)',
          transition: { duration: 0.4 }
        }}
      />
    </motion.div>
  );
};

export default Services;