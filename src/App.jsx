import GalaxyBackground from "./components/GalaxyBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificate";  // <-- Added this line
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen text-white">
      <GalaxyBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />   {/* <-- Added Certificates Section */}
      <Contact />
      <Footer />
    </div>
  );
}


