import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out z-50 ${
        isScrolled
          ? "bg-white py-3 mt-4 shadow-md rounded-full w-fit"
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex justify-center items-center px-10">
        <div className="flex space-x-8">
          <a href="#about" className="text-gray-700 font-medium hover:text-blue-600">
            About Me
          </a>
          <a href="#projects" className="text-gray-700 font-medium hover:text-blue-600">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 font-medium hover:text-blue-600">
            Experience
          </a>
        </div>
      </div>
    </nav>
  );
}
