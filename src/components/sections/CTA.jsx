import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button';
import { useState } from 'react';

const CTA = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="py-20 bg-dark-navy relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 0.1 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-gold mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-muted-gold mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <motion.h2 
            className="text-3xl font-[inter] font-bold mb-6 text-primary-gold"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Siap Mengubah Kehadiran Digital Anda menjadi Aset Bisnis?
          </motion.h2>
          
          <motion.p 
            className="text-xl font-[inter] mb-8 max-w-2xl mx-auto text-accent-color"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Mari diskusikan bagaimana kami dapat membantu Anda mencapai tujuan bisnis dengan solusi web premium yang dirancang khusus.
          </motion.p>

          <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <Button
              variant="primary"
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmljzwGvgJwHScQNVvXldtqdVThtgLLBmsDfkwRmvPHTxfVGTWGvmTGGvGbPGPrhZjmnnK"
              className='relative overflow-hidden transition-all hover:scale-102'
            >
              Hubungi Kami Sekarang
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;