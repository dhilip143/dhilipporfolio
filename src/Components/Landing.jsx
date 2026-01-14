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
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Dhilip_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Button press feedback
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
      const blueLines = gridRef.current?.querySelectorAll(".blue-line");

      if (!header || !wrapper) return;

      const hiText = header.querySelector(".hi-text");
      const dhilipText = header.querySelector(".dhilip-text");
      const frontendText = header.querySelector(".frontend-text");
      const developerText = header.querySelector(".developer-text");

      // Continuous blue line animations
      if (blueLines?.length) {
        blueLines.forEach((line, index) => {
          gsap.fromTo(line, 
            { y: "100vh" }, 
            {
              y: "-100vh",
              duration: 8 + index * 0.5,
              repeat: -1,
              ease: "none",
            }
          );
        });
      }

      // Responsive scroll animations
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          // Name section moves up
          gsap.to([hiText, dhilipText], {
            y: -300,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=100%",
              scrub: 1,
            },
          });

          // Frontend slides left
          gsap.to(frontendText, {
            xPercent: -100,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=100%",
              scrub: 1,
            },
          });

          // Developer slides right
          gsap.to(developerText, {
            xPercent: 100,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=100%",
              scrub: 1,
            },
          });
        },

        "(max-width: 1023px)": () => {
          // Mobile optimized animations
          gsap.to([hiText, dhilipText], {
            y: -150,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=80%",
              scrub: 1,
            },
          });

          gsap.to(frontendText, {
            xPercent: -80,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=80%",
              scrub: 1,
            },
          });

          gsap.to(developerText, {
            xPercent: 80,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=80%",
              scrub: 1,
            },
          });
        },
      });
    }, containerRef);

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Animated Grid Background */}
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
        
        {/* Animated Blue Lines */}
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

      {/* Resume Button - Fixed Top Right */}
      <div className="fixed top-6 right-6 md:top-8 md:right-20 z-50">
        <div className="w-[260px] md:w-[327px] h-[56px] md:h-[72px] bg-white rounded-3xl flex items-center justify-center gap-4 shadow-2xl hover:shadow-3xl transition-all duration-300">
          <img 
            src={bubble} 
            alt="Profile icon" 
            className="w-9 h-9 md:w-11 md:h-11 flex-shrink-0"
          />
          <button
            ref={resumeButtonRef}
            onClick={handleResumeDownload}
            className="flex-1 max-w-[130px] h-[44px] md:h-[52px] bg-transparent border-2 border-[#C6C6C6] rounded-xl text-black font-semibold text-base md:text-xl hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
            aria-label="Download Resume"
          >
            Resume
          </button>
        </div>
      </div>

      {/* Hero Text - Fixed Center */}
      <div
        ref={headerRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col lg:flex-col items-center justify-center w-full z-40 pointer-events-none px-4 md:px-8"
      >
        <div
          className="hi-text text-white text-center uppercase tracking-wider text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-normal leading-tight mb-2 md:mb-4"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          Hi There, I am
        </div>
        <div
          className="dhilip-text text-[#0037ff] text-center uppercase tracking-[0.1em] text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] font-black leading-tight"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          Dhilip
        </div>
        <div className="flex flex-wrap gap-4 md:gap-8 mt-6 md:mt-8 uppercase justify-center px-2">
          <div
            className="frontend-text text-white text-[2rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-normal tracking-wider leading-tight whitespace-nowrap"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Frontend
          </div>
          <div
            className="developer-text text-white text-[2rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-normal tracking-wider leading-tight whitespace-nowrap"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Developer
          </div>
        </div>
      </div>

      {/* Scroll Trigger Area */}
      <div ref={wrapperRef} className="w-full h-[220vh]"></div>
    </div>
  );
}

export default Landing;
