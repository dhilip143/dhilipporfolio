import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dhi from "/src/assets/landing/Dhilip.png";

gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const imgHolderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = headerRef.current;
      const wrapper = wrapperRef.current;
      const imgHolder = imgHolderRef.current;
      if (!header || !wrapper || !imgHolder) return;

      const hiText = header.querySelector(".hi-text");
      const dhilipText = header.querySelector(".dhilip-text");
      const frontendText = header.querySelector(".frontend-text");
      const developerText = header.querySelector(".developer-text");
      const innerImg = imgHolder.querySelector("img");

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          // Hi There I am + Dhilip upward
          gsap.to([hiText, dhilipText], {
            y: -200,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=150%",
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
              end: "+=150%",
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
              end: "+=150%",
              scrub: true,
            },
          });

          // Image holder expand
          gsap.fromTo(
            imgHolder,
            {
              scale: 0,
              rotate: 30,
              clipPath: "polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)",
            },
            {
              scale: 1,
              rotate: 0,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "+=200%",
                scrub: true,
                pin: imgHolder,
                anticipatePin: 1,
              },
            }
          );

          // Inner image effect
          if (innerImg) {
            gsap.to(innerImg, {
              scale: 0.8,
              y: 60,
              borderRadius: "5rem",
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: wrapper,
                start: "80% bottom",
                end: "bottom bottom",
                scrub: true,
              },
            });
          }
        },

        "(max-width: 1023px)": () => {
          // Hi There I am + Dhilip upward
          gsap.to([hiText, dhilipText], {
            y: -150,
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

          // Image holder expand
          gsap.fromTo(
            imgHolder,
            {
              scale: 0,
              rotate: 0,
              clipPath: "polygon(40% 30%, 60% 30%, 60% 70%, 40% 70%)",
            },
            {
              scale: 1,
              rotate: 0,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "bottom center",
                scrub: true,
                pin: imgHolder,
                pinSpacing: true,
                anticipatePin: 1,
              },
            }
          );

          // Inner image effect
          if (innerImg) {
            gsap.to(innerImg, {
              scale: 0.9,
              y: 30,
              borderRadius: "2rem",
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
              },
            });
          }
        },
      });
    }, wrapperRef);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black font-contrail overflow-hidden">
      {/* Header text */}
      <div
        ref={headerRef}
        className="fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col justify-center md:h-screen items-center w-full z-30 pointer-events-none"
        aria-hidden
      >
        <div
          className="hi-text text-white text-center uppercase"
          style={{ fontFamily: "Inria Sans, sans-serif", fontSize: "96px" }}
        >
          Hi There, I am
        </div>
        <div
          className="dhilip-text text-blue-400 text-center uppercase mt-4"
          style={{ fontFamily: "Inria Sans, sans-serif", fontSize: "160px" }}
        >
          Dhilip
        </div>
        <div className="flex gap-6 mt-6 uppercase">
          <div
            className="frontend-text text-white"
            style={{ fontFamily: "Inria Sans, sans-serif", fontSize: "140px" }}
          >
            Frontend
          </div>
          <div
            className="developer-text text-white"
            style={{ fontFamily: "Inria Sans, sans-serif", fontSize: "140px" }}
          >
            Developer
          </div>
        </div>
      </div>

      {/* Scroll wrapper */}
      <div ref={wrapperRef} className="w-full relative min-h-[300vh]">
        <div className="website-content sticky top-0 w-full min-h-screen z-10">
          <div
            ref={imgHolderRef}
            className="sticky top-0 w-full h-screen bg-black flex items-center justify-center 
            [clip-path:polygon(37.5%_20%,62.5%_20%,62.5%_80%,37.5%_80%)] md:rotate-[30deg]"
          >
            <img
              src={dhi}
              alt="Dhilip"
              className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh] xl:h-full object-cover scale-[2]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
