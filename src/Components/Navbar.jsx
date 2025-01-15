import { useEffect, useState, useRef } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  const menuRef = useRef(null);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        className="mt-5 md:rounded-full fixed z-10 top-0 flex w-full lg:w-[80%] items-center justify-between border-b border-b-gray-700 bg-black/80 dark:bg-white/80 px-16 py-6 text-gray-50 dark:text-gray-950 backdrop-blur-md"
      >
        <a
          href="#home"
          id="logo"
          className="text-3xl font-semibold text-transparent transition-all duration-300 bg-gradient-to-r from-green-500 to-yellow-500 dark:from-green-800 dark:to-yellow-700 bg-clip-text opacity-80 hover:opacity-100"
        >
          Mahdi Solgi
        </a>

        <ul className="hidden gap-10 md:flex">
          {["Home", "Tech", "Projects", "Contact"].map((section) => (
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

        {isOpen ? (
          <BiX className="block text-4xl md:hidden" onClick={menuOpen} />
        ) : (
          <BiMenu className="block text-4xl md:hidden" onClick={menuOpen} />
        )}
      </motion.div>

      <div
        ref={menuRef}
        className={` fixed right-0 top-[103px] flex flex-col h-screen w-1/2 items-start justify-start gap-10 border-1 border-b border-b-gray-700 bg-black/80 dark:bg-white/80 px-16 py-6 text-gray-50 dark:text-gray-950 backdrop-blur-md z-50  duration-300 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-8">
          {["Home", "Tech", "Projects", "Contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`font-extrabold transition-all duration-300 cursor-pointer ${
                  activeSection === section ? "text-green-500" : "opacity-70"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {section}
              </a>
            </li>
          ))}
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
            <button
              className="text-xl transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100"
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
