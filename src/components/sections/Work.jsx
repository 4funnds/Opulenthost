import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../ui/SectionHeader';
import { FiExternalLink, FiLoader } from 'react-icons/fi';
import { FaReact, FaWordpress } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiVite } from 'react-icons/si';
import { useState } from 'react';
import ShinyText from '../animation/ShinyText';

const projects = [
  {
    id: 1,
    title: 'Toko Baju Zora',
    description: 'Website toko online modern yang dikembangkan dengan ReactJS dan TailwindCSS untuk pengalaman belanja tanpa hambatan',
    tech: ['react', 'tailwindcss', 'javascript', 'vite', 'wordpress']
  },
];

const techIcons = {
  react: <FaReact className="text-ivory" />,
  javascript: <SiJavascript className="text-ivory" />,
  vite: <SiVite className="text-ivory" />,
  wordpress: <FaWordpress className="text-ivory" />,
  tailwind: <SiTailwindcss className="text-ivory" />
};

const Work = () => {
  const [sectionRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [loadingStates, setLoadingStates] = useState({});

  const simulateLoading = (projectId) => {
    setLoadingStates(prev => ({ ...prev, [projectId]: true }));
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [projectId]: false }));
    }, 1500);
  };

  return (
    <section id="work" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={<ShinyText text="Proyek Terbaru" speed={8} className='text-light-gold font-[inter] font-bold' />}
          subtitle="Lihat bukti nyata karya kami dan hasil luar biasa yang telah dicapai untuk klien"
          subtitleClass="text-accent-color font-[inter] font-semibold"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              inView={inView}
              isLoading={loadingStates[project.id]}
              onViewCaseStudy={() => simulateLoading(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, inView, isLoading, onViewCaseStudy }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateY: 15 }}
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
        y: -5,
        transition: { duration: 0.3 }
      }}
      style={{ transformStyle: 'preserve-3d' }}
      className="relative"
    >
      <motion.div
        className="bg-charcoal/25 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full"
        whileHover={{ 
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        }}
      > 
        <div 
          className="h-64 flex items-center justify-center bg-dark-navy text-ivory relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-dark-navy"
              />
            )}
          </AnimatePresence>

          <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="black"/>
              <text x="50%" y="55%" class="logo-text-zora">ZORA</text>
          </svg>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isHovered ? { scale: 1, opacity: 1 } : {}}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <button 
              onClick={onViewCaseStudy}
              className="bg-linear-90/oklch from-primary-gold via-light-gold to-dark-gold text-charcoal px-6 py-2 rounded-lg font-semibold font-[inter] flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="https://zora-store.vercel.app">
              Lihat Website
              </a>
            </button>
          </motion.div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold font-[inter] mb-2 text-ivory">{project.title}</h3>
          <p className="text-accent-color font-[inter] font-medium mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map(tech => (
              <motion.span 
                key={tech}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {techIcons[tech]}
              </motion.span>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-dark-gold font-medium inline-flex items-center"
              >
                <FiLoader className="animate-spin mr-2" /> Loading...
              </motion.div>
            ) : (
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                href="#pricing"
                className="text-light-gold font-semibold font-[inter] inline-flex items-center hover:text-accent-color"
                whileHover={{ x: 5 , scale: 1.02}}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Ingin Website Seperti Ini? Klik di Sini! <FiExternalLink className="ml-1" />
              </motion.a>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Work;