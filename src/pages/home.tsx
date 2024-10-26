import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import SocialIcons from "../components/social_icons";

export default function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const experiences = [
    {
      position: "Junior Laboratory Assistant - BINUS University",
      period: "February 2023 - Present",
      description: `
      I successfully passed the selection processes, which included an aptitude test, programming assessments, interviews, and training, to earn the position of Software Laboratory Assistant for Generation 23-1.
      <br /><br />
      During my time as a Junior Laboratory Assistant, I completed a mandatory development program called Test Progressive Assistant (TPA), which includes subjects such as Game Programming, Business Analysis and Desktop Application Development, Web Design and Programming, Mobile Application Development, and Networking. I also created an internal web scheduler with automatic email invitations for my Research Interest Group (RIG).`,
    },
    {
      position: "Activist - Bina Nusantara Computer Club",
      period: "November 2022 - November 2023",
      description: `
      During my time as an activist, I participated in various activities aimed at enhancing my soft skills. Among these experiences, I served as a Publication and Registration Staff member for BNCC Techno Talk I, where I helped facilitate the event and engage with participants. Additionally, I took part in the Project Apprentice Program, which further contributed to my growth and development in leadership and teamwork.`,
    },
    {
      position: "Member - Bina Nusantara Computer Club",
      period: "September 2022 - September 2023",
      description: `
      As a member of Bina Nusantara Computer Club I participated in the Learning and Training (LnT) online course on Back-End Development using the Laravel Framework.`,
    },
  ];

  return (
    <div>
      <Navbar />
      <SocialIcons />
      <div>
        <motion.div
          className="flex items-center justify-center h-screen bg-white"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto p-8">
            <div className="flex flex-col lg:flex-row items-center gap">
              <div className="lg:w-1/3 mt-6 lg:mr-10">
                <img
                  className="rounded-md object-cover shadow-lg"
                  src="/profile.jpg"
                  alt="Nobel Shan Setiono"
                />
                <button className="bg-gray-800 hover:bg-gray-500 text-white py-2 size-full rounded-full mt-5">
                  Download CV
                </button>
              </div>
              <div className="lg:w-2/3 text-center lg:text-left">
                <p className="text-gray-500 text-2xl">Hello, I'm</p>
                <h1 className="text-5xl font-bold text-gray-900 mb-3">
                  Nobel Shan Setiono
                </h1>
                <p className="text-gray-500 text-lg mb-3">
                  an undergraduate computer science student at BINUS University,
                  passionate about software engineering, artificial
                  intelligence, and data analytics. I enjoy the journey of
                  continuous learning and growth in these fields, as well as
                  utilizing my skills to solve problems and make a meaningful
                  impact
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gray-100 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
              Work Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.position}
                  </h3>
                  <p className="text-gray-600">
                    <strong>{exp.period}</strong>
                  </p>
                  <p className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: exp.description }} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Let's Get In Touch
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Interested in collaborating or just want to say hi? Feel free to
              drop me a message!
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Email:</strong> nobelshans@gmail.com
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> +62 897-747-3913
              </p>
              <p className="text-gray-600">
                <strong>Location:</strong> Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
