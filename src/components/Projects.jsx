const projects = [
  { title: "Job Portal", desc: "A full-stack job portal with authentication and job search." },
  { title: "Portfolio Website", desc: "My personal animated portfolio." },
  { title: "Weather App", desc: "Live weather updates with OpenWeather API." }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-center relative z-10">
      <h2 className="text-4xl font-bold text-purple-400">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-300">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
