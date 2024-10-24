import Technologies from "../components/technologies";
import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  src: string;
  githubLink: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const imgs = ["1.jpg", "2.jpg", "3.jpg"];
  const [hoverIndex, setHoverIndex] = useState(0);

  const handleMouseEnter = (idx: number) => {
    setHoverIndex(idx);
  };

  const handleMouseLeave = () => {
    setHoverIndex(0);
  };

  return (
    <motion.div
      className={`flex flex-col lg:flex-row items-center ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } bg-white hover:bg-gray-50 transition-colors gap-6 shadow-md rounded-lg p-6`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8 }}
    >
      <div className="lg:w-1/2">
        <div className="w-full h-64 lg:h-80 overflow-hidden rounded-md mb-4">
          <img
            className="object-cover w-full h-full"
            src={project.src + imgs[hoverIndex]}
            alt={`Main Image of ${project.title}`}
            onMouseEnter={() => handleMouseEnter(hoverIndex)}
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {imgs.map((image, imgIndex) => (
            <img
              key={imgIndex}
              className="rounded-md object-cover shadow-lg w-full h-full cursor-pointer"
              src={project.src + image}
              alt={`Project ${index + 1} Image ${imgIndex + 1}`}
              onMouseEnter={() => handleMouseEnter(imgIndex)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>

      <div className="lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
        <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>
        <Technologies techList={project.technologies} />
        <a
          href={project.githubLink}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow-md mt-4 hover:bg-blue-700"
        >
          View on GitHub
        </a>
      </div>
    </motion.div>
  );
}
