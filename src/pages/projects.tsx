import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import Technologies from "../components/technologies";
import SocialIcons from "../components/social_icons";

const imageSrc = "src/assets/placeholder.jpg";

export default function ProjectPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      title: "Project 1",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis minima recusandae at suscipit, sit quia accusamus dolorum quae molestias eligendi, repellendus officia mollitia? Nesciunt dolorem eum vitae dignissimos veniam voluptatum.`,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      images: [imageSrc, imageSrc, imageSrc, imageSrc, imageSrc],
      githubLink: "#",
    },
    {
      title: "Project 2",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis minima recusandae at suscipit, sit quia accusamus dolorum quae molestias eligendi, repellendus officia mollitia? Nesciunt dolorem eum vitae dignissimos veniam voluptatum.`,
      technologies: ["Python", "Flask", "PostgreSQL"],
      images: [imageSrc, imageSrc, imageSrc, imageSrc, imageSrc],
      githubLink: "#",
    },
  ];

  return (
    <div>
      <Navbar />
      <SocialIcons />
      <div className="bg-white py-16 pt-24">
        <motion.div
          className="max-w-6xl mx-auto px-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
            Projects
          </h2>
          <div className="space-y-8 ">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } bg-white gap-6 shadow-md rounded-lg p-6`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.8 }}
              >
                <div className="lg:w-1/2">
                  <img
                    className="rounded-md object-cover shadow-lg w-full mb-4"
                    src={project.images[0]}
                    alt={`Main Image of ${project.title}`}
                  />
                  <div className="grid grid-cols-5 gap-2">
                    {project.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        className="rounded-md object-cover shadow-lg w-full"
                        src={image}
                        alt={`Project ${index + 1} Image ${imgIndex + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {project.title}
                  </h3>
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
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
