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
  SiGit,
  SiPostman,
  SiStrapi,
  SiGreensock,
} from "react-icons/si";

function Tools() {
  const containerRef = useRef(null);
  const starsRef = useRef(null);

  useEffect(() => {
    // Create stars
    const createStars = () => {
      const stars = [];
      const starCount = 200;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${2 + Math.random() * 3}s`;
        stars.push(star);
      }
      
      if (starsRef.current) {
        stars.forEach(star => starsRef.current.appendChild(star));
      }
    };

    createStars();

    // Animate icons
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

    return () => {
      gsap.killTweensOf(".floating-icon");
    };
  }, []);

  const icons = [
    { name: 'React', icon: <SiReact />, color: 'text-cyan-400' },
    { name: 'HTML', icon: <SiHtml5 />, color: 'text-orange-500' },
    { name: 'CSS', icon: <SiCss3 />, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
    { name: 'Django', icon: <SiDjango />, color: 'text-green-500' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-teal-400' },
    { name: 'WordPress', icon: <SiWordpress />, color: 'text-blue-400' },
    { name: 'Git', icon: <SiGit />, color: 'text-orange-600' },
    { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500' },
    { name: 'Strapi', icon: <SiStrapi />, color: 'text-purple-500' },
    { name: 'GSAP', icon: <SiGreensock />, color: 'text-green-400' }
  ];

  const positions = [
    { top: '15%', left: '15%' },
    { top: '12%', left: '40%' },
    { top: '10%', left: '65%' },
    { top: '15%', left: '88%' },
    { top: '40%', left: '92%' },
    { top: '65%', left: '90%' },
    { top: '88%', left: '75%' },
    { top: '90%', left: '50%' },
    { top: '88%', left: '25%' },
    { top: '65%', left: '10%' },
    { top: '40%', left: '8%' }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Animated Stars Background */}
      <div ref={starsRef} className="stars-container absolute inset-0 z-0"></div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-transparent via-black/50 to-black"></div>

      {/* Center Title */}
      <div className="text-center z-10">
        <h1
          className="text-6xl md:text-8xl font-light text-white mb-8"
          style={{ fontFamily: "'Platypi', serif" }}
        >
         Technology Known 
        </h1>
      </div>

      {/* Floating Tech Icons */}
      {icons.map((tool, index) => (
        <div
          key={tool.name}
          className={`floating-icon absolute text-7xl md:text-8xl ${tool.color} opacity-90 hover:opacity-100 hover:scale-125 transition duration-300 flex flex-col items-center z-20 cursor-pointer`}
          style={{
            top: positions[index]?.top || '50%',
            left: positions[index]?.left || '50%',
            transform: 'translate(-50%, -50%)'
          }}
          title={tool.name}
        >
          {tool.icon}
          <span className="text-white text-base md:text-lg mt-2 font-semibold tracking-wide opacity-90">
            {tool.name}
          </span>
        </div>
      ))}

      {/* Decorative Static Particles */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-teal-400 rounded-full opacity-40 animate-pulse"></div>
      </div>

      <style jsx>{`
        .stars-container {
          overflow: hidden;
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0;
          animation: twinkle linear infinite;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.5) 50%, black 100%);
        }
      `}</style>
    </div>
  );
}

export default Tools;
