const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js"];

const Skills = () => {
  return (
    <section id="skills" className="py-20 text-center relative z-10">
      <h2 className="text-4xl font-bold text-purple-400">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-105 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
