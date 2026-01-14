"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLocationArrow, FaReact, FaWordpress } from "react-icons/fa";

import mad from "/src/assets/project/ica2.png";
import soc from "/src/assets/project/ica3.png";
import third from "/src/assets/project/thirdvizion.png";
import ind from "/src/assets/project/ica 1.png";
import kan from "/src/assets/project/kanagavali.png";
import eti from "/src/assets/project/ethuti.png";

// PinContainer Component (Plain JavaScript)
const PinContainer = ({ children, title, href, className, containerClassName }) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={`relative group/pin z-50 cursor-pointer ${containerClassName || ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-6 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.6)] border border-white/[0.1] group-hover/pin:border-yellow-400/[0.5] transition duration-700 overflow-hidden bg-gradient-to-b from-black to-gray-900/90"
        >
          <div className={`relative z-50 w-full ${className || ""}`}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </div>
  );
};

// PinPerspective Component
const PinPerspective = ({ title, href }) => {
  return (
    <motion.div className="pointer-events-none w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex space-x-2 items-center z-10 rounded-full bg-black py-2 px-6 ring-1 ring-yellow-500/30 hover:ring-yellow-400/60 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="relative z-20 text-yellow-400 text-sm font-bold">
              {title}
            </span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay: 0 }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-yellow-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-yellow-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay: 4 }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-yellow-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-yellow-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-yellow-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-yellow-400 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-yellow-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};

// Main Live Component with 6 Projects (Icons Only - No Text)
function Live() {
  const projects = [
    { 
      id: 1,
      title: "Scopik Learning Management System (LMS)", 
      description: "Developed a modern LMS platform with course management, user dashboards, assessments, and responsive UI.",
      image: soc,
      technologies: ["React.js", "Tailwind", "Django", "PostgreSQL"],
      liveUrl: "https://lms.scopik.in/",
      githubUrl: "#"
    },
    { 
      id: 2,
      title: "ThirdVizion Company Website", 
      description: "Built the official company website with a clean, modern UI and service details.",
      image: third,
      technologies: ["React.js", "GSAP", "Stapy"],
      liveUrl: "https://thirdvizion.com/",
      githubUrl: "#"
    },
    { 
      id: 3,
      title: "Ethi - Marketing Website", 
      description: "Created a stunning marketing website with modern animations, responsive design, and conversion-focused UI.",
      image: eti,
      technologies: ["React.js", "GSAP", "Stapy"],
      liveUrl: "#",
      githubUrl: "#"
    },
    { 
      id: 4,
      title: "Indhra Construction Website", 
      description: "Developed a professional construction company website to showcase services and projects.",
      image: ind,
      technologies: ["WordPress"],
      liveUrl: "https://indiraprojects.com",
      githubUrl: "#"
    },
    { 
      id: 5,
      title: "Madras Kitchen Restaurant Website", 
      description: "Built a restaurant website with menu integration and online visibility.",
      image: mad,
      technologies: ["WordPress"],
      liveUrl: "https://madraskitchen.ca",
      githubUrl: "#"
    },
    { 
      id: 6,
      title: "Kanagavalli Traders Website", 
      description: "Designed and developed a trading business website for product showcase and client reach.",
      image: kan,
      technologies: ["WordPress"],
      liveUrl: "https://kanagavallitraders.in",
      githubUrl: "#"
    }
  ];

  // Icon mapping for technologies (ICONS ONLY - No text)
  const getTechIcon = (tech) => {
    switch(tech) {
      case 'React.js':
        return <FaReact className="w-5 h-5 text-blue-400" />;
      case 'WordPress':
        return <FaWordpress className="w-5 h-5 text-blue-500" />;
      case 'Tailwind':
        return <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.5H5.607a1 1 0 00-.994.89l-.813 4.31a1 1 0 00.994.89h.943a.75.75 0 01.748.711l-.182 1.347h-.218a.75.75 0 01-.744-.648l-.124-.756a.75.75 0 01.295-.648 1.454 1.454 0 00.179-.145c.046-.036.092-.072.137-.112l.129-.103a.75.75 0 01.663-.086l.774.435a.75.75 0 01.216.237l.686 1.446a.75.75 0 01-.1.848.75.75 0 01-.352.232l-.58.289a.75.75 0 00-.056.867l.398 1.28a.75.75 0 00.633.443h1.948a.75.75 0 00.633-.443l.398-1.28a.75.75 0 00-.056-.867l-.58-.289a.75.75 0 01-.352-.232.75.75 0 01-.1-.848l.686-1.446a.75.75 0 01.216-.237l.774-.435a.75.75 0 01.663.086l.129.103c.045.04.091.076.137.112a1.454 1.454 0 00.179.145.75.75 0 01.295.648l-.124.756a.75.75 0 01-.744.648h-.218l-.182-1.347a.75.75 0 01.748-.711h.943a1 1 0 00.994-.89l-.813-4.31a1 1 0 00-.994-.89z" clipRule="evenodd" />
        </svg>;
      case 'Django':
        return <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.94 4.338a1.769 1.769 0 00-.963 2.49C3.17 8.044 5.562 10 8.572 10c2.922 0 5.366-1.894 6.631-3.203a1.769 1.769 0 00.963-2.49A1.769 1.769 0 0015.406 2C13.92 2.916 11.78 4 8.571 4s-5.325-1.084-6.631-2.337a1.769 1.769 0 00-2.998.675zm11.846 7.324a1.769 1.769 0 00-.963-2.49C14.83 11.956 12.438 14 9.428 14c-2.922 0-5.366 1.894-6.631 3.203a1.769 1.769 0 00-.963 2.49 1.769 1.769 0 001.566 1.337C6.08 19.084 8.222 18 11.431 18s5.325 1.084 6.631 2.337a1.769 1.769 0 002.998-.675 1.769 1.769 0 00-1.569-1.672z"/>
        </svg>;
      case 'PostgreSQL':
        return <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7.667 2.667C6.733 2.667 6 3.4 6 4.333v1.334c0 .933.733 1.666 1.667 1.666h2.666c.933 0 1.667-.733 1.667-1.666V4.333c0-.933-.734-1.666-1.667-1.666h-2.666zM6 11.667c0-.933.733-1.666 1.667-1.666h6.666c.933 0 1.667.733 1.667 1.666v1.334c0 .933-.734 1.666-1.667 1.666h-6.666C6.733 14.667 6 13.934 6 13.001v-1.334z"/>
        </svg>;
      default:
        return <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>;
    }
  };

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Header Section - Black Theme */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
          <span>Our</span> Projects
        </h1>
        <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
          Check out some of our recent web development projects and creative solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            className="lg:min-h-[35rem] h-[28rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={project.id}
          >
            <PinContainer
              title={project.title}
              href={project.liveUrl}
            >
              {/* Project Image & Background */}
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[22vh] lg:h-[32vh] mb-8">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl shadow-2xl"
                  style={{ backgroundColor: "#0a0a0a" }}
                >
                  <img src="/bg.png" alt="bg" className="w-full h-full object-cover opacity-30" />
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="z-10 absolute bottom-0 w-full h-[75%] object-cover rounded-xl shadow-2xl"
                />
              </div>

              {/* Project Title */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-lg line-clamp-1 text-white mb-3 bg-gradient-to-r from-white to-gray-200 bg-clip-text">
                {project.title}
              </h1>

              {/* Project Description */}
              <p
                className="lg:text-lg md:text-base text-sm line-clamp-2 mb-6 text-gray-300"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {project.description}
              </p>

              {/* Technologies - ICONS ONLY */}
              <div className="flex items-center mb-8">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="border border-yellow-500/30 rounded-full bg-black/70 lg:w-14 lg:h-14 w-12 h-12 flex justify-center items-center mx-2 backdrop-blur-sm shadow-lg"
                    style={{
                      transform: `translateX(-${10 * index + 3}px)`,
                    }}
                  >
                    {getTechIcon(tech)}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 text-sm font-bold flex items-center gap-2 transition-all duration-300 hover:scale-105"
                  >
                    <FaGithub size={16} />
                    View Code
                  </a>
                </div>

                <div className="flex items-center justify-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex lg:text-lg md:text-base text-sm text-yellow-400 font-bold items-center gap-3 hover:text-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Visit Project
                    <FaLocationArrow size={18} color="#FBBF24" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Live;
