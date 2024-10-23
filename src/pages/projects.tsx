import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import Technologies from "../components/technologies";
import SocialIcons from "../components/social_icons";

export default function ProjectPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const imgs = ["1.jpg", "2.jpg", "3.jpg"] //, "4.jpg", "5.jpg"

  const projects = [
    {
      title: "Bing Bing",
      description: `An innovative fashion e-commerce platform that uses Web3 technology and Internet Computer Protocol (ICP) to enhance the online shopping experience. In Bing Bing, users are able to upload their image to the platform, where an advanced virtual try-on technology overlays the selected fashion items onto the uploaded photos, allowing them to see how the items would look on them before making a purchase. `,
      technologies: [
        "React",
        "TypeScript",
        "Motoko",
        "VITON-HD",
        "Flask",
        "Python",
      ],
      src: "projects/BingBing/",
      githubLink: "https://github.com/CharlieLf/Bingbing",
    },
    {
      title: "Artemis",
      description: `A web-based application used by SLC to schedule and book internal events, featuring automated email invitation blasting to help officers schedule meetings more easily.`,
      technologies: [
        "React",
        "TypeScript",
        "MySQL",
        "Nest",
        "Microsoft Graph API",
      ],
      src: "projects/Artemis/",
      githubLink: "https://github.com/jovitawaisakhi/Artemis",
    },
    {
      title: "DHCS",
      description: `A 2D side-scrolling game about a young office worker named Theodore. One day, an earthquake strikes his office, and now he must use his wits and clever thinking to escape safely.`,
      technologies: ["Unity", "C#"],
      src: "projects/DHCS/",
      githubLink: "https://github.com/NobelSS/DHCS",
    },
    {
      title: "Hand Sign Recognizer Trainer and Detector",
      description: `A desktop application that can be used to train and detect hand signs. User can input different hand sign images and choose the model of their choice to train the model.`,
      technologies: [
        "Svelte",
        "Rust",
        "Tauri",
        "Python",
        "Scikit-learn",
        "MediaPipe",
      ],
      src: "projects/Hand_Sign_Recognizer_Trainer_and_Detector/",
      githubLink: "https://github.com/robert-wl/AIGestureMind",
    },
    {
      title: "Gesture Mind",
      description: `An AI web-based application that lets people learn about Hand Sign Gesture. Users can use their camera to learn about the letters of the alphabet in American Sign Language.`,
      technologies: ["React", "Tensorflow", "MediaPipe"],
      src: "projects/Gesture_Mind/",
      githubLink: "https://github.com/robert-wl/AIGestureMind",
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
                } bg-white hover:bg-gray-50 transition-colors gap-6 shadow-md rounded-lg p-6`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.8 }}
              >
                <div className="lg:w-1/2">
                  <img
                    className="rounded-md object-cover shadow-lg w-full h-full mb-4"
                    src={project.src + imgs[0]}
                    alt={`Main Image of ${project.title}`}
                  />
                  <div className="grid grid-cols-3 gap-2">
                    {imgs.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        className="rounded-md object-cover shadow-lg w-full h-full"
                        src={project.src + image}
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
