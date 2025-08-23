import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md shadow-md z-50 flex justify-between items-center px-10 py-4"
    >
      <h1 className="text-2xl font-bold text-purple-400">Aayushi</h1>
      <ul className="flex gap-8 text-white font-medium">
        <li><a href="#home" className="hover:text-purple-400">Home</a></li>
        <li><a href="#about" className="hover:text-purple-400">About</a></li>
        <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
