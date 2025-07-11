import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import GitHubStats from "./GitHubStats";

// Animation variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <div className=" border-neutral-900 pb-24 px-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-20 text-center text-5xl font-extrabold tracking-wide text-white relative"
      >
        <span className="inline-block relative after:absolute after:left-1/2 after:bottom-[-10px] after:h-[3px] after:w-12 after:-translate-x-1/2 after:rounded-full after:bg-cyan-400 after:content-['']">
          About <span className="text-neutral-400">Me</span>
        </span>
      </motion.h1>

      {/* Image + Text */}
      <motion.div
        className="flex flex-wrap lg:flex-nowrap items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Image */}
        <motion.div
          variants={fadeLeft}
          className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 flex justify-center"
        >
          <img
            src={aboutImg}
            alt="about"
            className="w-80 sm:w-96 rounded-3xl object-cover shadow-[0_20px_60px_-15px_rgba(0,255,255,0.2)] hover:shadow-[0_30px_80px_-10px_rgba(0,255,255,0.4)] transition-all duration-500"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={fadeRight}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start px-2 lg:px-6"
        >
          <p className="text-base sm:text-lg leading-relaxed text-neutral-400 text-center lg:text-left max-w-2xl tracking-wide">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </motion.div>

      {/* Social Icons with Brand Colors */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-16 flex justify-center gap-6 text-3xl text-neutral-500"
      >
        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/jainil-prajapati-7282a6269/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.25, y: -4 }}
          transition={{ duration: 0.25 }}
          className="cursor-pointer hover:text-[#0077B5]"
        >
          <FaLinkedin />
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/JK-1205"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.25, y: -4 }}
          transition={{ duration: 0.25 }}
          className="cursor-pointer hover:text-[#6e5494]"
        >
          <FaGithub />
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://www.instagram.com/jainil_prajapati_12/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.25, y: -4 }}
          transition={{ duration: 0.25 }}
          className="cursor-pointer hover:text-[#E1306C]"
        >
          <FaInstagram />
        </motion.a>

        {/* Twitter / X */}
        <motion.a
          href="https://x.com/JainilP99225496/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.25, y: -4 }}
          transition={{ duration: 0.25 }}
          className="cursor-pointer hover:text-white"
        >
          <FaSquareXTwitter />
        </motion.a>
      </motion.div>

      <GitHubStats />
    </div>
  );
};

export default About;
