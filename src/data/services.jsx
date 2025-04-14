import { FaReact, FaFigma, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export const services = [
  {
    icon: <FaReact className="text-4xl text-obsidian-black" />,
    title: "React Development",
    description:
      "Modern, performant web applications built with React and Javascript",
  },
  {
    icon: <FaFigma className="text-4xl text-obsidian-black"/>,
    title: "Design UI/UX with Figma",
    description: "Modern user interface and eye-catching user experience with Figma"
  },
  {
    icon: <SiTailwindcss className="text-4xl text-obsidian-black" />,
    title: 'Responsive Design',
    description: 'Pixel-perfect websites that look great on any device, built with Tailwind CSS.',
  },
  {
    icon: <FaWordpress className="text-4xl text-obsidian-black" />,
    title: "Website Design",
    description: "Powerfull website without the complexity"
  },
  {
    icon: <SiNextdotjs className="text-4xl text-obsidian-black" />,
    title: "Building Tomorrow's Web Today",
    description: "delivers lightning-fast page loads, exceptional SEO rankings, and seamless user experiences that keep your audience engaged."
  }
];
