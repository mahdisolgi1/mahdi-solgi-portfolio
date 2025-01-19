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
    },
    {
      Icon: SiNextdotjs,
      size: "100",
      color: "text-black/60 dark:text-white/60",
      link: "https://nextjs.org/",
    },
    {
      Icon: BiLogoTypescript,
      color: "text-blue-500",
      link: "https://www.typescriptlang.org/",
    },
    {
      Icon: BiLogoTailwindCss,
      color: "text-sky-500",
      link: "https://tailwindcss.com/",
    },
    {
      Icon: BiLogoSass,
      color: "text-pink-400",
      link: "https://sass-lang.com/",
    },
    {
      Icon: SiMui,
      size: "100",
      color: "text-black/60 dark:text-white/60",
      link: "https://mui.com/",
    },
    {
      Icon: BiLogoCss3,
      color: "text-blue-500",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      Icon: BiLogoJavascript,
      color: "text-yellow-500",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      Icon: BiLogoHtml5,
      color: "text-orange-500",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      Icon: BiLogoGit,
      color: "text-orange-700",
      link: "https://git-scm.com/",
    },
    {
      Icon: RxGithubLogo,
      size: "100",
      color: "text-black/60 dark:text-white/60",
      link: "https://github.com/",
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

      <div className="relative w-full overflow-hidden">
        <motion.ul
          className="flex items-center gap-10 p-5"
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
            .map(({ Icon, color, size, link }, index) => (
              <motion.li
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
                key={index}
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 cursor-pointer "
                >
                  <Icon
                    size={size}
                    className={`text-[80px] ${color} sm:text-[100px] md:text-[120px]  transition-all duration-300 hover:-translate-y-5`}
                  />
                </a>
              </motion.li>
            ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Tech;
