import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const SocialLinks = () => {
  return (
    <section className="flex flex-col items-center h-[60vh] md:h-[70vh] m-auto pb-56 sm:pb-96 md:pb-52 z-50 justify-center py-10 ">
      <h2 className="text-2xl font-semibold mb-4  ">Connect with Me</h2>

      <div className="flex space-x-4 mb-6">
        <a
          href="https://www.linkedin.com/in/mahesh-kumar-jena-47a6b8253/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700"
        >
          <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
        </a>
        <a
          href="https://github.com/Maheshkumarjena"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
        </a>
        <a
          href="https://x.com/Maheshjena2004"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600"
        >
          <FontAwesomeIcon icon={faTwitter} className="h-8 w-8" />
        </a>
      </div>

      <a
        href="/MAHESH_resume.pdf" // Place your resume in the public folder as resume.pdf
        download
        className="flex items-center bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
      >
        <FontAwesomeIcon icon={faDownload} className="h-5 w-5 mr-2" />
        Download Resume
      </a>
    </section>
  );
};

export default SocialLinks;
