import { FaDownload } from "react-icons/fa";
import profile from "../../public/profilePic1.webp";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      id="Home"
      className="flex flex-col-reverse items-center justify-center w-full min-h-screen px-5 mt-24 md:gap-12 sm:mt-16 md:mt-28 lg:mt-14 md:px-14 lg:px-20 md:flex-row lg:justify-between"
    >
      <div className="flex flex-col items-center justify-center w-full gap-8 sm:justify-start md:w-3/5">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-2 mb-2"
        >
          <h1 className="py-3 text-5xl md:text-[3.25rem] font-semibold text-transparent bg-gradient-to-r dark:from-green-400 dark:to-yellow-500 from-green-900 to-yellow-600 bg-clip-text opacity-80 lg:text-6xl">
            Mahdi Solgi
          </h1>
          <h3 className="text-2xl font-semibold text-transparent bg-gradient-to-r dark:from-green-400 dark:to-yellow-500 from-green-900 to-yellow-600 bg-clip-text opacity-80 md:text-3xl ">
            Frontend Developer
          </h3>
        </motion.div>

        <motion.div
          initial={{ x: -70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=""
        >
          <p className="flex-wrap w-full text-base leading-7 text-justify text-gray-900 sm:leading-8 md:text-xl text-pretty dark:text-gray-300">
            Hi!
            <span className="inline-block mx-1 text-xl md:text-2xl lg:text-3xl vibrateEffect">
              👋
            </span>
            I’m a frontend developer skilled in React.js, Next.js, and Tailwind,
            focused on building dynamic, clean and functionaly experiences. I
            also enjoy working with Figma to create designs and bring other
            people’s designs to life. Let’s create something awesome together!
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="/Mahdi-Solgi-Resume.pdf"
              download="Mahdi_Solgi_Resume.pdf"
              className="flex justify-center  items-center px-3 py-2 mt-5  flex-wrap text-white transition duration-300 bg-green-700 rounded-lg dark:bg-green-600 dark:hover:bg-green-800 hover:bg-green-600 max-w-[13rem] text-center"
            >
              Download Resume <FaDownload className="mb-[0.4rem] ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center w-full md:w-2/5"
      >
        <motion.div
          animate={{
            y: ["0%", "-5%", "0%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="flex items-center justify-center border-4 rounded-full lg:size-96 size-72 dark:border-white/90 border-black/90"
        >
          <img
            src={profile}
            alt="Melissa Costa profile picture"
            className="w-[90%] h-[90%] rounded-full bg-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
