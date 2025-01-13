import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoSass,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { motion } from "framer-motion";

const Tech = () => {
  const techIcons = [
    { Icon: BiLogoReact, color: "text-sky-500" },
    { Icon: BiLogoTailwindCss, color: "text-sky-500" },
    { Icon: BiLogoJavascript, color: "text-yellow-500" },
    { Icon: BiLogoHtml5, color: "text-orange-500" },
    { Icon: BiLogoCss3, color: "text-blue-500" },
    { Icon: BiLogoGit, color: "text-orange-700" },
    { Icon: BiLogoSass, color: "text-pink-400" },
    { Icon: BiLogoSass, color: "text-pink-400" },
    { Icon: BiLogoSass, color: "text-pink-400" },
  ];

  return (
    <section
      id="tech"
      className="px-5 md:px-24 flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-gray-950 dark:text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="relative w-full overflow-hidden">
        <motion.ul
          className="flex items-center gap-10 p-5"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 35,
          }}
        >
          {techIcons.concat(techIcons).map(({ Icon, color }, index) => (
            <li key={index} className="flex-shrink-0">
              <Icon
                className={`cursor-pointer text-[80px] ${color} transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]`}
              />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Tech;