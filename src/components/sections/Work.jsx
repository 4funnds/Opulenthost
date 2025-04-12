import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../ui/SectionHeader';
import { FiExternalLink } from 'react-icons/fi';
import { FaReact, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

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
    react: <FaReact className="text-blue-500" />,
    next: <SiNextdotjs className="text-black" />,
    typescript: <SiTypescript className="text-blue-600" />,
    wordpress: <FaWordpress className="text-blue-500" />,
    tailwind: <SiTailwindcss className="text-cyan-500" />
};

const Work = () => {
    const [sectionRef, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section id="work" ref={sectionRef} className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Recent Projects"
                    subtitle="See examples of my work and the results achieved for clients"
                />

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            inView={inView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index, inView }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
        <div className="h-64 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white">
            <span className="text-xl font-medium">Project {project.id} Screenshot</span>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                    <span key={tech}>{techIcons[tech]}</span>
                ))}
            </div>
            <a href="#" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
                View Case Study <FiExternalLink className="ml-1" />
            </a>
        </div>
    </motion.div>
);

export default Work;