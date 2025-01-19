import { motion } from "motion/react";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bottom-0 flex items-center justify-between w-full px-10 pt-6 border-b sm:px-16 pb-28 md:pb-6 border-b-gray-700 bg-black/80 dark:bg-white/80 text-gray-50 dark:text-gray-950 backdrop-blur-md md:justify-between"
    >
      <ul className="hidden gap-5 md:flex md:gap-10">
        <a
          href="#About"
          className="font-extrabold transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
        >
          <li>About</li>
        </a>
        <a
          href="#Tech"
          className="font-extrabold transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
        >
          <li>Tech</li>
        </a>
        <a
          href="#Projects"
          className="font-extrabold transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
        >
          <li className="cursor-pointer">Projects</li>
        </a>
        <a
          href="#Contact"
          className="font-extrabold transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>
      <ul className="flex gap-5 md:hidden">
        <li>
          <a
            href="https://www.linkedin.com/in/mahdi-solgi/"
            className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mahdisolgi1"
            className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="mailto:mahdi.solgi.dev@gmail.com"
            className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
          >
            <BiLogoGmail />
          </a>
        </li>
      </ul>
      <p className="text-sm md:text-base">© 2025 Mahdi Solgi.</p>
    </motion.footer>
  );
};

export default Footer;
