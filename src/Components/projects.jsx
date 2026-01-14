import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import mad from "/src/assets/project/ica2.png";
import soc from "/src/assets/project/ica3.png";
import third from "/src/assets/project/thirdvizion.png";
import ind from "/src/assets/project/ica 1.png";
import kan from "/src/assets/project/kanagavali.png";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionsRef = useRef([]);

  const projects = [
    { 
      title: "Scopik Learning Management System (LMS)", 
      text: "Developed a modern LMS platform with course management, user dashboards, assessments, and responsive UI.",
      link: "https://lms.scopik.in/",
      tools: "React.js",
      image: soc
    },
    { 
      title: "ThirdVizion Company Website", 
      text: "Built the official company website with a clean, modern UI and service details.",
      link: "https://thirdvizion.com/",
      tools: "React.js",
      image: third
    },
    { 
      title: "Indhra Construction Website", 
      text: "Developed a professional construction company website to showcase services and projects.",
      link: "https://indiraprojects.com",
      tools: "WordPress",
      image: ind
    },
    { 
      title: "Madras Kitchen Restaurant Website", 
      text: "Built a restaurant website with menu integration and online visibility.",
      link: "https://madraskitchen.ca",
      tools: "WordPress",
      image: mad
    },
    { 
      title: "Kanagavalli Traders Website", 
      text: "Designed and developed a trading business website for product showcase and client reach.",
      link: "https://kanagavallitraders.in",
      tools: "WordPress",
      image: kan
    }
  ];

  useEffect(() => {
    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(t => t.kill());

    sectionsRef.current.forEach((el, i) => {
      if (!el) return;

      const image = el.querySelector(".project-image");
      const content = el.querySelector(".project-text");

      // Set initial states
      gsap.set(image, {
        scale: 0.8,
        opacity: 0,
        x: i % 2 === 0 ? -200 : 200,
      });

      gsap.set(content, { 
        autoAlpha: 0, 
        x: i % 2 === 0 ? 100 : -100 
      });

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          markers: false,
        },
      });

      // Image animation
      tl.to(image, {
        scale: 1,
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Content animation - overlaps with image
      tl.to(content, {
        autoAlpha: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.5");
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="bg-black text-white py-20 px-6 overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h2>
        <p
          className="text-gray-300 text-lg md:text-xl leading-relaxed"
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 400,
          }}
        >
          Check out some of our recent web development projects and creative solutions.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-32">
        {projects.map((project, i) => (
          <div
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)}
            className="relative max-w-7xl mx-auto min-h-[600px] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16"
          >
            {/* Image Container */}
            <div 
              className={`project-image relative overflow-hidden rounded-2xl shadow-2xl w-full lg:w-[600px] h-[300px] lg:h-[400px] ${
                i % 2 === 0 ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full rounded-2xl transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Content Container */}
            <div
              className={`project-text relative w-full lg:w-[500px] text-center ${
                i % 2 === 0 ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <h3
                className="text-yellow-400 text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {project.title}
              </h3>
              <p
                className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed"
                style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
              >
                {project.text}
              </p>
              <div className="mb-8">
                <span className="text-gray-400 text-base md:text-lg">
                  <strong>Tools Used:</strong> {project.tools}
                </span>
              </div>
              <div className="flex justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
