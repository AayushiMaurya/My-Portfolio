import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 text-center relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-purple-400"
      >
        About Me
      </motion.h2>
      <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
        I'm a passionate Web Developer with experience in building responsive, dynamic, and user-friendly applications using modern technologies.
      </p>
    </section>
  );
};

export default About;
