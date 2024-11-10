// components/HeroSection.tsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter,FaInstagram } from "react-icons/fa";

const SocialSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl  md:text-5xl lg:text-6xl font-bold font-mono  mb-2 sm:mb-4">
          Mahesh Kumar Jena
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
          <p className="font-bold text-gray-600">I'm a</p> Full Stack Developer
        </p>
      </div>
      <div className="flex space-x-4 sm:space-x-6 mt-4 sm:mt-6">
        <a
          href="https://github.com/Maheshkumarjena"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          <FaGithub size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/mahesh-kumar-jena-47a6b8253/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          <FaLinkedin size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </a>
        <a
          href="https://x.com/Maheshjena2004"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          <FaTwitter size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </a>
        <a
          href="https://www.instagram.com/mahesh__18_15/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          <FaInstagram size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </a>
      </div>
    </section>
  );
};

export default SocialSection;
