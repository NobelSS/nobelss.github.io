import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="fixed right-5 top-3/4 flex flex-col space-y-4 z-50">
      <a
        href="https://github.com/nobelss"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-black transition-colors"
      >
        <FaGithub size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/nobel-shan-setiono-42725a251/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-600 transition-colors"
      >
        <FaLinkedin size={28} />
      </a>
      <a
        href="mailto:nobelshans@gmail.com"
        className="text-gray-700 hover:text-blue-600 transition-colors"
      >
        <FaEnvelope size={28} />
      </a>
    </div>
  );
}
