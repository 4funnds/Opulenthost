import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../ui/SectionHeader';
import { FiExternalLink, FiLoader } from 'react-icons/fi';
import { FaReact, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { useState } from 'react';
import ShinyText from '../animation/ShinyText';

const projects = [
  {
    id: 1,
    title: 'Client Project 1',
    description: 'A modern e-commerce platform with increased conversion rates',
    tech: ['react', 'next', 'typescript']
  },
  {
    id: 2,
    title: 'Client Project 2',
    description: 'A corporate website with improved user engagement',
    tech: ['wordpress', 'tailwind']
  }
];

const techIcons = {
  react: <FaReact className="text-obsidian-black" />,
  next: <SiNextdotjs className="text-obsidian-black" />,
  typescript: <SiTypescript className="text-obsidian-black" />,
  wordpress: <FaWordpress className="text-obsidian-black" />,
  tailwind: <SiTailwindcss className="text-obsidian-black" />
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
    <section id="work" ref={sectionRef} className="py-20 bg-obsidian-navy">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={<ShinyText text="Recent Projects" speed={8} />}
          subtitle="See examples of my work and the results achieved for clients"
          titleClass="text-gold-300"
          subtitleClass="text-gold-500"
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
        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full"
        whileHover={{ 
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div 
          className="h-64 bg-linear-to-r/oklch from-gold-500 via-gold-300 to-gold-900 flex items-center justify-center text-white relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black"
              />
            )}
          </AnimatePresence>
          <span className="text-xl text-obsidian-black font-medium z-10">Project {project.id} Screenshot</span>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isHovered ? { scale: 1, opacity: 1 } : {}}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <button 
              onClick={onViewCaseStudy}
              className="bg-linear-90/oklch from-gold-500 via-gold-300 to-gold-900 text-obsidian-black px-6 py-2 rounded-lg font-medium flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Quick Preview
            </button>
          </motion.div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-obsidian-black">{project.title}</h3>
          <p className="text-obsidian-black mb-4">{project.description}</p>
          
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
                className="text-gold-500 font-medium inline-flex items-center"
              >
                <FiLoader className="animate-spin mr-2" /> Loading Case Study...
              </motion.div>
            ) : (
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                href="#"
                className="text-obsidian-black font-medium inline-flex items-center hover:text-gold-700"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                View Case Study <FiExternalLink className="ml-1" />
              </motion.a>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Work;