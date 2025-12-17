import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import SocialIcons from "../components/social_icons";

export default function CertificatePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const certificates = [
    {
      title: "Cloud Technical Series: ADK Builder's Badge",
      description: `Participated in the Google Cloud Technical Series, gaining hands-on experience with Google Cloud Platform (GCP). Focused on cloud architecture best practices, infrastructure design, and building scalable cloud-native applications using modern development tools.`,
      image: "/certificates/Nobel_CloudTechnicalSeriesBadge.png",
    },
    {
      title: "Hackaton 5.0, 2nd Place Winner",
      description: `Organized by Codefest and sponsored by the DFinity Foundation, we won 2nd place at Hackathon 5.0 with BingBing. BingBing is a decentralized digital fashion store featuring a virtual try-on option, providing users with a secure and interactive shopping experience.`,
      image: "/certificates/Nobel_Hackaton.png",
    },
    {
      title: "Participant in the GammaFest IPB Data Science Competition",
      description: `Organized by Bogor Agricultural University, we developed a model to extract vote percentages from ballot paper images using OpenCV for image processing and a custom DCNN for the count recognition. We achieved 98% accuracy on the test dataset, reaching 27th place on the leaderboard with a 4.1353 MAPE score.`,
      image: "certificates/Nobel Shan Setiono_Peserta_DSC.png",
    },
    {
      title: "Machine Learning With Python",
      description: `Completed a course on the fundamentals of machine learning using Python, focusing on both supervised and unsupervised learning. Learning more in-depth about statistical modeling, popular algorithms like classification, regression, and clustering, as well as model evaluation techniques.`,
      image: "certificates/CognitiveClass_MachineLearningWithPython_Nobel.png",
    },
    {
      title: "Python For Data Science",
      description: `Completed a course on basic Python programming, data manipulation and numerical analysis.`,
      image: "certificates/CognitiveClass_PythonForDataScience_Nobel.png",
    },
  ];

  return (
    <div>
      <Navbar />
      <SocialIcons />
      <div className="bg-white py-16 pt-24">
        <motion.div
          className="max-w-4xl mx-auto px-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
            Certificates
          </h2>
          <div className="space-y-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } bg-white hover:bg-gray-50 shadow-md rounded-lg p-6 gap-6 transition-colors`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.8 }}
              >
                <div className="lg:w-1/2 w-full flex justify-center">
                  {/* --- FIX START: Changed object-cover to object-contain and added h-64 --- */}
                  <img
                    className="rounded-md object-contain shadow-sm w-full h-64"
                    src={cert.image}
                    alt={cert.title}
                  />
                  {/* --- FIX END --- */}
                </div>
                <div
                  className={`lg:w-1/2 mt-6 lg:mt-0 ${
                    index % 2 === 0 ? "lg:ml-6 text-right" : "lg:mr-6 text-left"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-gray-900">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
