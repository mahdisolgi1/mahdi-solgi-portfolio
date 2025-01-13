import { motion } from "motion/react";
import neoBlogImg from "../../public/projects/neo-blog.png";
import shopCoImg from "../../public/projects/shop-co.png";
import portfolioImg from "../../public/projects/portfolio.png";

const projectsData = [
  {
    image: neoBlogImg,
    title: "Neo Blog",
    description:
      "This app is a simple blog platform where users can create and view their blogs, create new blog posts, and display them to others. The app provides an intuitive interface to manage posts and share content seamlessly.",
    technologies: ["React", "TypeScript", "Strapi"],
    link: "https://neo-blog-phi.vercel.app/",
  },
  {
    image: shopCoImg,
    title: "Shop.CO",
    description:
      "I'm currently creating a e-commerce project for selling clothes, and users can view clothes and filter them based on their preference",
    technologies: ["Next.js", "Tailwind", "Typescript"],
    link: "https://github.com/mahdisolgi1/shop.co/",
  },

  {
    image: portfolioImg,
    title: "Portfolio",
    description:
      "The previous portfolio site I designed and developed by my own.",
    technologies: ["React.js", "Modular CSS", "JS"],
    link: "https://mahdi-solgi-portfolio-page.vercel.app/",
  },
];

const ScrollReveal = ({ children, index }) => {
  const animation =
    index % 2 === 0
      ? { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 } }
      : { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 } };
  const mdAnimation = {
    ...animation,
    initial: { ...animation.initial, x: 50 },
  };

  const appliedAnimation = window.innerWidth >= 768 ? mdAnimation : animation;

  return (
    <motion.div
      {...appliedAnimation}
      initial={animation.initial}
      whileInView={animation.whileInView}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24 ">
      <a href={project.link} target="_blank" className=" min-w-[300px]">
        <img
          src={project.image}
          alt="project image"
          className=" cursor-pointer w-full h-[200px]  rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px] "
        />
      </a>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-base font-semibold md:text-xl">
            {project.title}
          </div>
          <p className="text-base md:text-xl"> {project.description} </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="p-3 bg-black bg-gray-400 rounded-lg text-gray-950 dark:bg-gray-950 dark:text-gray-400 "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center w-full min-h-screen gap-16 p-4 md:px-14 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-light text-gray-950 dark:text-white md:text-6xl">
          My Projects
        </h1>
      </motion.div>

      <div className="flex flex-col w-[75%] md:w-full max-w-[1000px] gap-16 text-gray-950 dark:text-white md:text-xl">
        {projectsData.map((project, index) => (
          <ScrollReveal index={index} key={index}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
