import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-28 px-6">
      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-16 text-center text-5xl font-extrabold tracking-wide text-white relative"
      >
        <span className="inline-block relative after:absolute after:left-1/2 after:bottom-[-10px] after:h-[3px] after:w-12 after:-translate-x-1/2 after:rounded-full after:bg-cyan-400 after:content-['']">
          My <span className="text-neutral-400">Projects</span>
        </span>
      </motion.h1>

      {/* Scrollable Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="overflow-x-auto py-6 px-4 scrollbar-thin scrollbar-track-neutral-900 scrollbar-thumb-cyan-600"
      >
        <div className="flex gap-8 pr-6 pb-2">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="group relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl shadow-lg p-6 w-80 h-[480px] flex-shrink-0 border border-neutral-800 hover:shadow-[0_10px_40px_rgba(0,255,255,0.25)] transition-all duration-300 ease-out flex flex-col overflow-hidden"
            >
              {/* Image Container with Overlay + Icon */}
              <div className="relative group/image">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-4 w-full h-40 object-cover shadow transition-transform duration-300 ease-out group-hover/image:scale-[1.01]"
                />

                {/* Dark Overlay */}
                <div className="absolute top-0 left-0 w-full h-full rounded-lg mb-4 bg-black/30 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>

                {/* Live Preview Icon */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 text-cyan-400 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.6)]"
                  title="Live Preview"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              </div>

              {/* Title + GitHub Icon */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-white break-words">
                  {project.title}
                </h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-400 transition text-lg hover:drop-shadow-[0_0_4px_rgba(0,255,255,0.4)]"
                    title="View GitHub Repo"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-400 mb-4 leading-relaxed tracking-wide break-words">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-500/10 text-cyan-300 border border-cyan-500 text-xs px-2 py-1 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
