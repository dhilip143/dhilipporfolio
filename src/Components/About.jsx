import dhil from "/src/assets/landing/Dhilip.png";

function About() {
  return (
    <section className="w-full py-20 bg-black text-white">
      <h1 className="font-normal text-[80px] text-center mb-16">
        About
      </h1>

      <div className="flex items-center justify-between gap-20 px-20">
        {/* LEFT CONTENT */}
        <div className="max-w-[500px]">
          <h2 className="text-4xl font-semibold">Dhilip</h2>

          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            I am a passionate Frontend Developer with 1 year of experience
            building responsive and user-friendly web applications.
            I have completed 6–7 live projects and 2–3 POC projects.
            Skilled in React, Tailwind, JavaScript, and REST APIs.
            I focus on writing clean, efficient, and scalable code.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE + HALF CIRCLE SVG */}
        <div className="relative w-[280px] h-[280px] flex items-center justify-center">
          
          {/* Half SVG Circle */}
          <svg
            className="absolute inset-0 w-full h-full rotate-[-90deg]"
            viewBox="0 0 200 200"
          >
            <circle
              cx="100"
              cy="100"
              r="90"
              stroke="#FFFFFF"
              strokeWidth="8"
              fill="none"
              strokeDasharray="565"     /* Total circumference */
              strokeDashoffset="282"    /* Makes 50% stroke = half circle */
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
