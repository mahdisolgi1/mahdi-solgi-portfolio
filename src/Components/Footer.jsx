import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bottom-0 flex items-center justify-around w-full px-16 py-6 border-b border-b-gray-700 bg-black/80 dark:bg-white/80 text-gray-50 dark:text-gray-950 backdrop-blur-md md:justify-between"
    >
      <ul className="hidden gap-5 md:flex md:gap-10">
        <a
          href="#home"
          className="font-extrabold transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
        >
          <li>Home</li>
        </a>
        <a
          href="#tech"
          className="font-extrabold transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
        >
          <li>Tech</li>
        </a>
        <a
          href="#projects"
          className="font-extrabold transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
        >
          <li className="cursor-pointer">Projects</li>
        </a>
        <a
          href="#contact"
          className="font-extrabold transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>
      <p className="text-sm md:text-base">
        © 2025 Mahdi Solgi. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
