import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bubble from "/src/assets/landing/bubble.png";
import resumePdf from "/src/assets/reume/workresume (3).pdf";

gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const gridRef = useRef(null);
  const containerRef = useRef(null);
  const resumeButtonRef = useRef(null);

  /* =====================================================
     RESUME DOWNLOAD FUNCTION
  ===================================================== */
  const handleResumeDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Dhilip_Resume.pdf";
    
    // Append to the body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Console log for debugging
    console.log("Resume download initiated");
    
    // GSAP animation feedback
    if (resumeButtonRef.current) {
      gsap.to(resumeButtonRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }
  };

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

      {/* Resume Section - Top Right */}
      <div className="fixed top-8 right-8 md:right-20 z-50 pointer-events-auto">
        <div className="w-[280px] md:w-[327px] h-[60px] md:h-[72px] bg-white rounded-3xl flex items-center justify-evenly gap-3 md:gap-4 shadow-lg">
          <img src={bubble} alt="Profile" className="w-8 h-8 md:w-10 md:h-10" />
          <button
            ref={resumeButtonRef}
            onClick={handleResumeDownload}
            className="w-[110px] md:w-[128px] h-[42px] md:h-[49px] rounded-lg text-black text-lg md:text-2xl font-medium flex items-center justify-center cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition-colors border-[#C6C6C6] border-2"
            aria-label="Download Resume"
          >
            Resume
          </button>
        </div>
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
          className="dhilip-text text-[#0037ff] text-center uppercase mt-4 text-[60px] md:text-[100px] font-bold"
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
