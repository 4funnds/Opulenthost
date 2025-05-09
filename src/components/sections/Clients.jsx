import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../ui/SectionHeader';
import ShinyText from '../animation/ShinyText';

const clients = ['Website Portofolio', 'Website Toko Online', 'Landing Page', 'Blog'];

const ClientLogo = ({ name, index, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, rotateY: 90 }}
    animate={inView ? { 
      opacity: 1, 
      y: 0, 
      rotateY: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.15,
        type: 'spring',
        stiffness: 100
      } 
    } : {}}
    whileHover={{
      scale: 1.1,
      color: 'muted-gold',
      textShadow: '0 0 8px oklch(90% 0.05 90)'
    }}
    transition={{ duration: 0.3 }}
    className="flex justify-center"
    style={{ transformStyle: 'preserve-3d' }}
  >
    <div className="text-accent-color transition-all text-2xl font-bold cursor-default">
      {name}
    </div>
  </motion.div>
);

const Clients = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">

      {/* Subtle background animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.02 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-muted-gold to-transparent"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Kami Siap Melayani Anda"
          center
          titleClass="text-light-gold hover:text-accent-color transition-colors"
          // subtitleClass="text-gold-700"
        />
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
          initial="hidden"
          animate={inView ? "visible" : {}}
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
          {clients.map((client, index) => (
            <ClientLogo
              key={client}
              name= {<ShinyText text={client} speed={2}/>}
              index={index}
              inView={inView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;