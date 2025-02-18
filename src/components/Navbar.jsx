import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const socialLinks = [
    { icon: FaLinkedin, color: "text-blue-700", url: "https://www.linkedin.com" },
    { icon: FaGithub, color: "text-white-900", url: "https://github.com" },
    { icon: FaInstagram, color: "text-pink-600", url: "https://www.instagram.com" }
  ];

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center"></div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {socialLinks.map(({ icon: Icon, color, url }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Icon className={`text-4xl ${color}`} />
            </a>
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
