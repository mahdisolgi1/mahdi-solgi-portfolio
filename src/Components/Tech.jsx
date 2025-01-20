import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoSass,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { motion } from "framer-motion";
import { SiMui, SiNextdotjs } from "react-icons/si";
import { RxGithubLogo } from "react-icons/rx";

const Tech = () => {
  const techIcons = [
    {
      Icon: BiLogoReact,
      color: "text-sky-500",
      link: "https://reactjs.org/",
      name: "React",
    },
    {
      Icon: SiNextdotjs,
      color: "text-black/60 dark:text-white/60",
      link: "https://nextjs.org/",
      name: "Next.js",
    },
    {
      Icon: BiLogoTypescript,
      color: "text-blue-500",
      link: "https://www.typescriptlang.org/",
      name: "TypeScript",
    },
    {
      Icon: BiLogoTailwindCss,
      color: "text-sky-500",
      link: "https://tailwindcss.com/",
      name: "Tailwind",
    },
    {
      Icon: BiLogoSass,
      color: "text-pink-400",
      link: "https://sass-lang.com/",
      name: "Sass",
    },
    {
      Icon: SiMui,
      color: "text-black/60 dark:text-white/60",
      link: "https://mui.com/",
      name: "MUI",
    },
    {
      Icon: BiLogoCss3,
      color: "text-blue-500",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      name: "CSS3",
    },
    {
      Icon: BiLogoJavascript,
      color: "text-yellow-500",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      name: "JavaScript",
    },
    {
      Icon: BiLogoHtml5,
      color: "text-orange-500",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      name: "HTML5",
    },
    {
      Icon: BiLogoGit,
      color: "text-orange-700",
      link: "https://git-scm.com/",
      name: "Git",
    },
    {
      Icon: RxGithubLogo,
      color: "text-black/60 dark:text-white/60",
      link: "https://github.com/",
      name: "GitHub",
    },
  ];
  return (
    <section
      id="Tech"
      className="lg:px-20 md:px-14  px-5 flex min-h-[70vh] w-full  text-white/ flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-gray-950 dark:text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="relative w-full overflow-hidden overflow-x-auto scrollbar-hidden md:overflow-x-hidden">
        <motion.ul
          className="flex items-center gap-10 py-12 md:py-10 whitespace-nowrap"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
            duration: 25,
          }}
        >
          {techIcons
            .concat(techIcons)
            .map(({ Icon, color, link, name }, index) => (
              <motion.li
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex-shrink-0"
                key={index}
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative transition-all duration-300 cursor-pointer group"
                >
                  <motion.div
                    initial={{ y: 0 }}
                    whileHover={{ y: -20 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col items-center"
                  >
                    <Icon
                      className={`text-[80px] ${color} sm:text-[100px] md:text-[120px] transition-all`}
                    />
                    <span className="absolute px-2 py-1 text-xs text-black -translate-x-1/2 rounded-md dark:text-white lg:text-base md:text-sm left-1/2 top-full ">
                      {name}
                    </span>
                  </motion.div>
                </a>
              </motion.li>
            ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Tech;
