import { FaDownload } from "react-icons/fa";
import profile from "../../public/profilePic1.jpg";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center w-full min-h-screen px-5 mt-32 pb-22 md:px-24 "
    >
      <div className="flex flex-col-reverse items-center justify-center gap-10 text-white md:flex-row ">
        <div className="flex flex-col gap-5 md:gap-10">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex max-w-[600px] flex-col items-center justify-center text-center gap-3"
          >
            <h1 className="py-3 text-5xl font-semibold text-transparent bg-gradient-to-r dark:from-green-400 dark:to-yellow-500 from-green-900 to-yellow-600 bg-clip-text opacity-80 md:text-7xl">
              Mahdi Solgi
            </h1>
            <h3 className="text-2xl font-semibold text-transparent bg-gradient-to-r dark:from-green-400 dark:to-yellow-500 from-green-900 to-yellow-600 bg-clip-text opacity-80 md:text-3xl ">
              Frontend Developer
            </h3>
          </motion.div>

          <motion.p
            initial={{ x: -70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-wrap text-base text-gray-900 text-start text-a tex md:text-xl text-pretty dark:text-gray-300 "
          >
            I’m a frontend developer skilled in React.js, Next.js, and Tailwind,
            focused on building dynamic, clean and user-friendly experiences. I
            also enjoy working with Figma to create designs and bring other
            people’s designs to life. Let’s create something awesome together!
          </motion.p>

          <div className="flex justify-center md:justify-start">
            <motion.a
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              href="/Mahdi-Solgi-Resume.pdf"
              download="Mahdi_Solgi_Resume.pdf"
              className="flex justify-center  items-center px-3 py-2 mt-5  flex-wrap text-white transition duration-300 bg-green-700 rounded-lg dark:bg-green-600 dark:hover:bg-green-800 hover:bg-green-600 max-w-[13rem] text-center"
            >
              Download Resume <FaDownload className="mb-[0.4rem] ml-2" />
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
          >
            <img
              src={profile}
              alt="Melissa Costa profile picture"
              className=" p-5 border-4 border-black dark:border-white rounded-full w-[80rem] md:w-[100rem] md:min-h-48 cursor-pointer  shadow-xl shadow-green-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-green-600 ms:w-[35rem] "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
