import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { motion } from "framer-motion";

const fadeVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Layers */}
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="fixed top-0 -z-20 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Page Content */}
      <div className="relative container mx-auto px-1 pt-28 pb-24">
        {" "}
        {/* 👈 Added pb-24 to avoid overlap with fixed footer */}
        <Navbar />
        {/* Hero Section */}
        <motion.section
          id="hero"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Hero />
        </motion.section>
        {/* About Section */}
        <motion.section
          id="about"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <About />
        </motion.section>
        {/* Technologies Section */}
        <motion.section
          id="technologies"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Technologies />
        </motion.section>
        {/* Projects Section */}
        <motion.section
          id="projects"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Projects />
        </motion.section>
        {/* Contact Section */}
        <motion.section
          id="contact"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Contact />
        </motion.section>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
};

export default App;
