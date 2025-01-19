import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaFolderOpen, FaMoon, FaSun, FaToolbox } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const [activeSection, setActiveSection] = useState("home");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const bodyClass = document.body.classList;
    if (darkMode) {
      bodyClass.add("dark");
    } else {
      bodyClass.remove("dark");
    }
    return () => {
      bodyClass.remove("dark");
    };
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.2 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        role="navigation"
        className="mt-5 md:rounded-full fixed z-10 top-0 flex w-full lg:w-[80%] items-center justify-between border-b border-b-gray-700 bg-black/80 dark:bg-white/80 px-8 md:px-16 lg:px-8 py-3 sm:py-6 text-gray-50 dark:text-gray-950 backdrop-blur-md"
      >
        <a
          href="#About"
          id="logo"
          className="text-3xl font-semibold text-transparent transition-all duration-300 bg-gradient-to-r from-green-500 to-yellow-500 dark:from-green-800 dark:to-yellow-700 bg-clip-text opacity-80 hover:opacity-100"
        >
          Mahdi Solgi
        </a>

        <ul className="hidden md:gap-5 lg:gap-10 md:flex">
          {["About", "Tech", "Projects", "Contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`font-extrabold transition-all duration-300 cursor-pointer ${
                  activeSection === section ? "text-green-500" : "opacity-70"
                }`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        <ul className="hidden gap-5 md:flex">
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
          </li>{" "}
          <li>
            <a
              href="mailto:mahdi.solgi.dev@gmail.com"
              className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
            >
              <BiLogoGmail />
            </a>
          </li>
          <li>
            <button
              className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
        {darkMode ? (
          <FaSun
            className="block text-3xl md:hidden"
            onClick={toggleDarkMode}
          />
        ) : (
          <FaMoon
            className="block text-3xl md:hidden"
            onClick={toggleDarkMode}
          />
        )}
      </motion.div>
      <nav className="fixed z-50 block w-full px-4 md:hidden bottom-6">
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-between items-center gap-8 h-[60px] px-4 rounded-[12px] shadow-lg bg-[rgba(24,24,29,0.3)] backdrop-blur-[4px]   dark:bg-[rgba(24,24,29,0.73)] dark:border-none"
        >
          {[
            { Icon: IoHome, section: "About" },
            { Icon: FaToolbox, section: "Tech" },
            { Icon: FaFolderOpen, section: "Projects" },
            { Icon: FaRegPenToSquare, section: "Contact" },
          ].map(({ Icon, section }, index) => (
            <a
              key={index}
              className={`w-full flex justify-center items-center rounded-[12px] py-2 ${
                activeSection === section
                  ? "bg-white-10 backdrop-blur-[4px] dark:bg-black-1"
                  : ""
              }`}
              href={`/#${section}`}
            >
              <Icon
                size={24}
                className="cursor-pointer opacity-70 fill-white"
              />
            </a>
          ))}
        </motion.nav>
      </nav>
    </>
  );
};

export default Navbar;
