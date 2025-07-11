import { Link } from "react-scroll";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/jainil_logo.png";

const navItems = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contact Me", to: "contact" },
];

// Framer Motion animations
const menuContainer = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const mobileMenuAnim = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.2 },
  },
};

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="fixed w-full top-0 z-50 bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center ml-0">
          <img src={logo} alt="logo" className="w-10 ml-0" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm sm:text-base font-semibold text-neutral-400">
          {navItems.map((item, index) => (
            <motion.div
              key={item.to}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={menuContainer}
            >
              <Link
                to={item.to}
                smooth="easeInOutQuart"
                offset={-60}
                duration={1500}
                spy={true}
                onSetActive={() => setActive(item.name)}
                className={`cursor-pointer relative hover:text-cyan-400 transition duration-300 ${
                  active === item.name ? "text-white" : ""
                }`}
              >
                <span className="group relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-neutral-900/95 border-t border-neutral-800 flex flex-col items-center gap-6 py-6 md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuAnim}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={menuContainer}
              >
                <Link
                  to={item.to}
                  smooth="easeInOutQuart"
                  offset={-60}
                  duration={1500}
                  spy={true}
                  onClick={() => {
                    setActive(item.name);
                    setOpen(false);
                  }}
                  className={`text-lg font-semibold tracking-wide transition duration-300 ${
                    active === item.name ? "text-white" : "text-neutral-300"
                  } hover:text-cyan-400`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
