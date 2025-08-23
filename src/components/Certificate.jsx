// import React from "react";
// import { motion } from "framer-motion";

// const certificates = [
//   {
//     id: 1,
//     title: "Web Development Bootcamp",
//     issuer: "Cognifyz Technologies",
//     date: "July 2024",
//     image: "/certificates/webdev.png", // Place image inside public/certificates/
//   },
//   {
//     id: 2,
//     title: "Java Programming Certificate",
//     issuer: "Coding Ninjas",
//     date: "June 2024",
//     image: "/certificates/java.png",
//   },
//   {
//     id: 3,
//     title: "Data Structures & Algorithms",
//     issuer: "LeetCode",
//     date: "May 2024",
//     image: "/certificates/dsa.png",
//   },
// ];

// const Certificates = () => {
//   return (
//     <section id="certificates" className="relative py-16 bg-transparent text-white">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold mb-12"
//         >
//           📜 My Certificates
//         </motion.h2>

//         {/* Certificates Grid */}
//         <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
//           {certificates.map((cert) => (
//             <motion.div
//               key={cert.id}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg cursor-pointer hover:shadow-xl hover:shadow-cyan-400/50"
//             >
//               <img
//                 src={cert.image}
//                 alt={cert.title}
//                 className="w-full h-48 object-cover rounded-lg"
//               />
//               <h3 className="text-xl font-semibold mt-4">{cert.title}</h3>
//               <p className="text-gray-300 text-sm">{cert.issuer}</p>
//               <p className="text-gray-400 text-xs">{cert.date}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certificates;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "React Developer Certificate",
    img: "/certificates/react-certificate.jpg",
  },
  {
    id: 2,
    title: "JavaScript Mastery",
    img: "/certificates/js-certificate.jpg",
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    img: "/certificates/webdev-certificate.jpg",
  },
  {
    id: 4,
    title: "DSA & Problem Solving",
    img: "/certificates/dsa-certificate.jpg",
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative z-10 py-20 px-6 bg-transparent" id="certificates">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">
          🏆 My Certificates
        </h2>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative cursor-pointer group"
              onClick={() => setSelected(cert)}
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-56 object-cover rounded-xl shadow-lg border border-gray-700"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 rounded-xl flex items-center justify-center transition-all">
                <p className="text-lg font-semibold text-white">{cert.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative bg-gray-900 p-4 rounded-xl shadow-xl max-w-3xl w-full"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-white bg-red-500 hover:bg-red-600 p-2 rounded-full"
              >
                <X size={20} />
              </button>

              {/* Certificate Image */}
              <img
                src={selected.img}
                alt={selected.title}
                className="w-full h-auto rounded-lg border border-gray-700"
              />

              {/* Buttons */}
              <div className="mt-4 flex justify-between items-center">
                <h3 className="text-white text-xl">{selected.title}</h3>
                <a
                  href={selected.img}
                  download
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg transition"
                >
                  Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
