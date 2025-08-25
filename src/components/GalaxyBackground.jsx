import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadEmittersPlugin } from "tsparticles-plugin-emitters";

const GalaxyBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load tsparticles core + emitters plugin
    await loadFull(engine);
    await loadEmittersPlugin(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000000", // Black night sky
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 250,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 1,
            random: true,
            animation: {
              enable: true,
              speed: 1.5,
              minimumValue: 0.3,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "bottom",
            random: false,
            straight: true,
            outModes: {
              default: "out",
            },
          },
        },

        // Shooting stars emitter 🌠
        emitters: [
          {
            position: { x: 0, y: 20 }, // Start from top-left
            rate: {
              delay: 3, // New shooting star every 3 sec
              quantity: 1,
            },
            particles: {
              move: {
                direction: "top-right",
                speed: { min: 12, max: 18 },
                outModes: { default: "destroy" },
              },
              size: { value: 2 },
              opacity: { value: 1 },
              color: { value: "#fffacd" }, // Soft yellowish shooting star
              life: {
                duration: {
                  sync: true,
                  value: 1.5, // Visible for 1.5s
                },
              },
            },
          },
          {
            position: { x: 100, y: 30 }, // Second emitter from right
            rate: {
              delay: 5,
              quantity: 1,
            },
            particles: {
              move: {
                direction: "top-left",
                speed: { min: 12, max: 18 },
                outModes: { default: "destroy" },
              },
              size: { value: 2 },
              opacity: { value: 1 },
              color: { value: "#fffacd" },
              life: {
                duration: {
                  sync: true,
                  value: 1.5,
                },
              },
            },
          },
        ],

        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default GalaxyBackground;
