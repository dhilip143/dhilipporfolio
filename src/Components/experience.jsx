import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".exp-item");

    gsap.from(items, {
      y: 40,
      duration: 0.8,
      stagger: 0.25,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-24"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-20">
        My Work Experience
      </h1>

      <div className="relative max-w-6xl mx-auto">

        {/* Center Timeline Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gray-600"></div>

        {/* 1️⃣ Shiash Info Solutions */}
        <div className="exp-item grid md:grid-cols-3 gap-10 mb-24 items-start">
          
          {/* LEFT */}
          <div className="text-right md:pr-10">
            <h2 className="text-2xl font-semibold">Shiash Info Solutions</h2>
            <p className="text-gray-400">Jun 2024 – Aug 2024</p>
          </div>

          {/* DOT */}
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-blue-600 border-4 border-white rounded-full"></div>
          </div>

          {/* RIGHT */}
          <div className="text-left md:pl-10">
            <h3 className="text-2xl font-semibold">Machine Learning Intern</h3>
            <p className="text-gray-400 mt-2">
              Worked on ML models, preprocessing pipelines, and real-time
              prediction systems during a 3-month internship.
            </p>
          </div>
        </div>

        {/* 2️⃣ ThirdVizion */}
        <div className="exp-item grid md:grid-cols-3 gap-10 mb-24 items-start">
          
          {/* LEFT */}
          <div className="text-right md:pr-10">
            <h2 className="text-2xl font-semibold">ThirdVizion</h2>
            <p className="text-gray-400">Oct 14, 2024 – Present</p>
          </div>

          {/* DOT */}
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-white border-4 border-blue-600 rounded-full"></div>
          </div>

          {/* RIGHT */}
          <div className="text-left md:pl-10">
            <h3 className="text-2xl font-semibold">Frontend Developer</h3>

            <p className="text-gray-400 mt-2">
              1 year of experience as a frontend developer. Completed{" "}
              <span className="font-semibold text-white">6–7 live projects</span>{" "}
              including:
            </p>

            <ul className="text-gray-400 mt-3 space-y-2 list-disc ml-6">
              <li>Dynamic websites with modern UI</li>
              <li>API integration (REST, realtime)</li>
              <li>Reusable component systems</li>
              <li>Responsive & mobile-first layouts</li>
              <li>Clean UI animations & performance optimization</li>
            </ul>

            <p className="text-gray-400 mt-3">
              Focused on smooth UX and scalable UI development.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}