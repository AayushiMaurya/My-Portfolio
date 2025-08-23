import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-white"
      >
        Hi, I'm <span className="text-purple-400">Aayushi Maurya</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl"
      >
        A passionate Web Developer who loves crafting beautiful and functional experiences.
      </motion.p>
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        className="mt-8 px-6 py-3 bg-purple-500 rounded-lg shadow-lg hover:bg-purple-600 transition text-lg"
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
