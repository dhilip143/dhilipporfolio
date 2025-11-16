import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDjango,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";

function Tools() {
  const containerRef = useRef(null);

  useEffect(() => {
    const icons = document.querySelectorAll('.floating-icon');

    icons.forEach((icon) => {
      const timeline = gsap.timeline({ repeat: -1, yoyo: true });
      const duration = 3 + Math.random() * 2;

      timeline
        .to(icon, {
          y: -20,
          rotation: 360,
          duration: duration,
          ease: "sine.inOut"
        })
        .to(icon, {
          y: 0,
          rotation: 0,
          duration: duration,
          ease: "sine.inOut"
        }, `-=${duration}`);
    });

    gsap.to('.floating-icon', {
      y: 'random(-30, 30)',
      x: 'random(-20, 20)',
      rotation: 'random(-45, 45)',
      duration: 'random(2, 4)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.1
    });
  }, []);

  const icons = [
    { name: 'React', icon: <SiReact />, color: 'text-cyan-400' },
    { name: 'HTML', icon: <SiHtml5 />, color: 'text-orange-500' },
    { name: 'CSS', icon: <SiCss3 />, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
    { name: 'Django', icon: <SiDjango />, color: 'text-green-500' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-teal-400' },
    { name: 'WordPress', icon: <SiWordpress />, color: 'text-blue-400' }
  ];

  const positions = [
    { top: '20%', left: '20%' },
    { top: '15%', left: '50%' },
    { top: '20%', left: '80%' },
    { top: '50%', left: '85%' },
    { top: '80%', left: '80%' },
    { top: '85%', left: '50%' },
    { top: '80%', left: '20%' },
    { top: '50%', left: '15%' }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="text-center z-10">
        <h1
          className="text-6xl md:text-8xl font-light text-white mb-8"
          style={{ fontFamily: "'Inria Sans', sans-serif" }}
        >
          Tools Know
        </h1>
      </div>

      {icons.map((tool, index) => (
        <div
          key={tool.name}
          className={`floating-icon absolute text-5xl ${tool.color} opacity-90 hover:opacity-100 hover:scale-110 transition duration-300 flex flex-col items-center`}
          style={{
            top: positions[index]?.top || '50%',
            left: positions[index]?.left || '50%',
            transform: 'translate(-50%, -50%)'
          }}
          title={tool.name}
        >
          {tool.icon}
          <span className="text-white text-sm mt-1 font-semibold tracking-wide opacity-80">
            {tool.name}
          </span>
        </div>
      ))}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-30"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-teal-400 rounded-full opacity-40"></div>
      </div>
    </div>
  );
}

export default Tools;