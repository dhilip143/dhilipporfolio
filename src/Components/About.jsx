import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dhil from "/src/assets/landing/Dhilip.png";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    const leftContent = leftContentRef.current;
    const rightContent = rightContentRef.current;

    if (!leftContent || !rightContent) return;

    // Animate left content from left
    gsap.fromTo(
      leftContent,
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftContent,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate right content from right
    gsap.fromTo(
      rightContent,
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightContent,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full py-20 bg-black text-white">
      <h1
        className="font-medium text-[80px] text-center mb-16"
        style={{
          fontFamily: "'Inter Tight', sans-serif",
          color: "#ffffff",
        }}
      >
        About
      </h1>

      <div className="flex items-center justify-between gap-20 px-20">
        {/* LEFT CONTENT */}
        <div ref={leftContentRef} className="max-w-[500px]">
          <h2
            className="text-5xl font-bold mb-2"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              color: "#0037ff",
            }}
          >
            Dhilip
          </h2>

          <p
            className="text-lg text-gray-300 mt-4 leading-relaxed"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            I am a passionate Frontend Developer with 1 year of experience
            building responsive and user-friendly web applications. I have
            completed 6–7 live projects and 2–3 POC projects. Skilled in React,
            Tailwind, JavaScript, and REST APIs. I focus on writing clean,
            efficient, and scalable code.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE + HALF CIRCLE SVG */}
        <div
          ref={rightContentRef}
          className="relative w-[280px] h-[280px] flex items-center justify-center"
        >
          {/* Half SVG Circle */}
          <svg
            className="absolute inset-0 w-full h-full rotate-[-90deg]"
            viewBox="0 0 200 200"
          >
            <circle
              cx="100"
              cy="100"
              r="90"
              stroke="#0037ff"
              strokeWidth="8"
              fill="none"
              strokeDasharray="565"
              strokeDashoffset="282"
              strokeLinecap="round"
            />
          </svg>

          {/* IMAGE */}
          <img
            src={dhil}
            alt="Profile"
            className="w-[210px] h-[210px] rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
