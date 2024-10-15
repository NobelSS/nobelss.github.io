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
          ? "bg-white py-2 mt-4 shadow-md rounded-full w-fit"
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex justify-center items-center px-3">
        <div className="flex space-x-3">
          <a className="text-gray-700 font-medium hover:bg-gray-300 px-3 py-1 rounded-full">
            About Me
          </a>
          <a className="text-gray-700 font-medium hover:bg-gray-300 px-3 py-1 rounded-full">
            Projects
          </a>
          <a className="text-gray-700 font-medium hover:bg-gray-300 px-3 py-1 rounded-full">
            Certificate
          </a>
        </div>
      </div>
    </nav>
  );
}
