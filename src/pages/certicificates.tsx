import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import SocialIcons from "../components/social_icons";

const certificates = [
  {
    id: 1,
    title: "Certificate 1",
    description: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellat amet nobis nam ab exercitationem vitae, saepe natus molestiae excepturi ad veniam obcaecati veritatis fuga aliquam voluptate, quae, fugiat ipsa!`,
    image:
      "/placeholder.jpg",
  },
  {
    id: 2,
    title: "Certificate 2",
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, enim beatae? Dignissimos, nesciunt delectus cum tenetur iusto ratione nemo odit maiores laudantium incidunt eius nam aperiam libero quas reprehenderit laboriosam.`,
    image:
      "/placeholder.jpg",
  },
  {
    id: 3,
    title: "Certificate 3",
    description: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quam ut quas eum voluptas assumenda, dolore maxime ducimus hic iusto cum in a, aliquam, animi id! Ad ut vitae quo.`,
    image:
      "/placeholder.jpg",
  },
  {
    id: 4,
    title: "Certificate 4",
    description: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione suscipit aliquam dicta, porro quos minima asperiores earum fuga. Iste ex eius, quaerat nihil voluptate magni dignissimos ea repellat fugiat voluptatum.`,
    image:
      "/placeholder.jpg",
  },
];

export default function CertificatePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

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
                key={cert.id}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } bg-white shadow-md rounded-lg p-6 gap-6`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.8 }}
              >
                <div className="lg:w-1/2">
                  <img
                    className="rounded-md object-cover shadow-lg w-full"
                    src={`https://raw.githubusercontent.com/NobelSS/nobelss.github.io/refs/heads/main/src/assets/placeholder.jpg`}
                    alt={cert.title}
                  />
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
