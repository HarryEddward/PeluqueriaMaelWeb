'use client';

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "section1", color: "#FF5733" },
  { id: "section2", color: "#33FF57" },
  { id: "section3", color: "#3357FF" },
];

export function SpyScroll() {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = () => {
    sectionRefs.current.forEach((section) => {
      if (section) {
        const { top, bottom, id } = section.getBoundingClientRect();
        // Chequea si la sección está visible
        if (top < window.innerHeight && bottom > 0) {
          setActiveSection(id);
        }
      }
    });
  };

  useEffect(() => {
    // Escucha el evento de scroll
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navegación */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <ul className="flex justify-around p-4">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`text-lg font-bold cursor-pointer transition duration-300 ${activeSection === section.id ? 'text-blue-500' : 'text-gray-800'}`}
              onClick={() => {
                const sectionElement = sectionRefs.current.find(ref => ref && ref.id === section.id);
                if (sectionElement) {
                  sectionElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {section.id.toUpperCase()}
            </li>
          ))}
        </ul>
      </nav>

      {/* Secciones */}
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          id={section.id} // Agrega el ID para el scroll
          className="h-screen flex items-center justify-center text-white"
          style={{ backgroundColor: section.color }}
        >
          <h1 className="text-4xl">{section.id}</h1>
        </motion.div>
      ))}
    </div>
  );
}
