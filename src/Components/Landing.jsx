import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const gridRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = headerRef.current;
      const wrapper = wrapperRef.current;
      const gridLines = gridRef.current?.querySelectorAll(".grid-line");
      const blueLines = gridRef.current?.querySelectorAll(".blue-line");

      if (!header || !wrapper) return;

      const hiText = header.querySelector(".hi-text");
      const dhilipText = header.querySelector(".dhilip-text");
      const frontendText = header.querySelector(".frontend-text");
      const developerText = header.querySelector(".developer-text");

      // Animate blue lines continuously
      if (blueLines) {
        blueLines.forEach((line, index) => {
          gsap.fromTo(
            line,
            {
              y: "100vh",
            },
            {
              y: "-100vh",
              duration: 8 + index * 0.5,
              repeat: -1,
              ease: "none",
            }
          );
        });
      }

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          // Hi There I am + Dhilip upward
          gsap.to([hiText, dhilipText], {
            y: -300,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=100%",
              scrub: true,
            },
          });

          // Frontend → left
          gsap.to(frontendText, {
            x: -window.innerWidth,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=100%",
              scrub: true,
            },
          });

          // Developer → right
          gsap.to(developerText, {
            x: window.innerWidth,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=100%",
              scrub: true,
            },
          });
        },

        "(max-width: 1023px)": () => {
          // Hi There I am + Dhilip upward
          gsap.to([hiText, dhilipText], {
            y: -200,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=80%",
              scrub: true,
            },
          });

          // Frontend → left
          gsap.to(frontendText, {
            x: -window.innerWidth,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=80%",
              scrub: true,
            },
          });

          // Developer → right
          gsap.to(developerText, {
            x: window.innerWidth,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=80%",
              scrub: true,
            },
          });
        },
      });
    }, containerRef);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-black font-contrail overflow-hidden"
    >
      {/* Animated Grid Background - Scoped to this component */}
      <div
        ref={gridRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden"
      >
        {/* Static White Grid Lines */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`white-${i}`}
            className="grid-line absolute h-full"
            style={{
              left: `${(i / 11) * 100}%`,
              width: "1px",
              background: "rgba(255, 255, 255, 0.15)",
            }}
          />
        ))}
        
        {/* Animated Blue Lines - Smaller/Shorter */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`blue-${i}`}
            className="blue-line absolute"
            style={{
              left: `${(i / 11) * 100}%`,
              width: "1px",
              height: "30vh",
              background: `linear-gradient(to bottom, transparent 0%, #001EDF 50%, transparent 100%)`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      {/* Header text */}
      <div
        ref={headerRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-full z-30 pointer-events-none"
        aria-hidden
      >
        <div
          className="hi-text text-white text-center uppercase text-[40px] md:text-[60px] font-regular"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          Hi There, I am
        </div>
        <div
          className="dhilip-text text-blue-400 text-center uppercase mt-4 text-[60px] md:text-[100px] font-bold"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          Dhilip
        </div>
        <div className="flex gap-4 md:gap-6 mt-4 md:mt-6 uppercase flex-wrap justify-center px-4">
          <div
            className="frontend-text text-white text-[40px] md:text-[80px] font-regular"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Frontend
          </div>
          <div
            className="developer-text text-white text-[40px] md:text-[80px] font-regular"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Developer
          </div>
        </div>
      </div>

      {/* Scroll wrapper - Reduced height since no image */}
      <div ref={wrapperRef} className="w-full relative min-h-[150vh]"></div>
    </div>
  );
}

export default Landing;
