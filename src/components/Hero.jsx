import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Spline from "@splinetool/react-spline"; // ✅ Add this

// Animation variants
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: delay },
  },
});

const Hero = () => {
  return (
    <div id="hero" className="border-b border-neutral-900 pb-24 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-0">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Jainil Prajapati
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-400"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-wrap gap-6"
            >
              {/* See My Work */}
              <motion.div
                whileHover={{ scale: 1.07, y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to="projects"
                  smooth="easeInOutQuart"
                  offset={-60}
                  duration={1400}
                  className="cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white font-semibold tracking-wide shadow-md hover:shadow-[0_8px_30px_rgba(0,255,255,0.3)] transition-all duration-300"
                >
                  See My Work
                </Link>
              </motion.div>

              {/* Get My CV */}
              <motion.div
                whileHover={{ scale: 1.07, y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="https://drive.google.com/file/d/1SDVrg6Ou-30Wd_1G7ww4nIXKF6y89vHL/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-cyan-400 px-6 py-3 text-cyan-400 font-semibold tracking-wide hover:bg-cyan-500 hover:text-white hover:shadow-[0_8px_30px_rgba(0,255,255,0.3)] transition-all duration-300"
                >
                  Get My CV
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Spline 3D */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-10 lg:mt-0">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-full h-[400px] sm:h-[500px] lg:h-[550px]"
          >
            <Spline scene="https://prod.spline.design/Jf0NnHjPKn7NIIv7/scene.splinecode" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
