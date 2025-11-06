"use client";

import { useEffect, useRef, useState } from "react";

const OutliveOrdinary = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="  w-full   flex flex-col items-center overflow-hidden "
    >
      <div className=" w-full max-w-[1200px] mx-auto z-10 flex flex-col items-center px-4">
        <div
          className=" flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-[10%] self-start transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-20px)",
          }}
        >
          <p className=" font-morigothic font-light text-sm text-white/70">
            what needs <br />
            to be built?
          </p>
          <p className=" font-aoi text-base ">A CULT OF SHARED BELIEF</p>
        </div>
        <p
          className=" font-tussilago text-2xl sm:text-4xl md:text-5xl -mb-4 sm:-mb-8 md:-mb-12 text-center transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.95)",
            transitionDelay: "200ms",
          }}
        >
          OUTLIVE ORDINARY
        </p>
      </div>
      {/* Planet horizon image */}
      <img
        src="/assets/images/oblivion.png"
        alt="Planet Horizon"
        className=" w-full h-auto object-cover animate-pulse transition-all duration-1000 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(1.1)",
          transitionDelay: "400ms",
        }}
      />

      <div className=" w-full max-w-[1200px] mx-auto z-10 flex flex-col items-center px-4  relative  mt-[10%] ">
        <img
          src="/assets/images/vanta-logo.png"
          alt="Vanta"
          className=" w-full h-auto max-w-[500px] sm:max-w-[800px] opacity-15  absolute top-0 right-0 object-contain translate-x-[20%]"
        />
        <img
          src="/assets/images/models.png"
          alt="Vanta"
          className="max-h-[400px]  sm:max-h-[600px]  opacity-25  absolute bottom-0 left-0 object-contain translate-x-[-20%]"
        />
        <div
          className=" flex flex-col items-end self-end relative min-h-[300px] sm:min-h-[400px] justify-center transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(30px)",
            transitionDelay: "600ms",
          }}
        >
          <p className=" font-morigothic font-light text-base sm:text-xl  text-white/70 text-right">
            Vanta is the{" "}
            <span className=" font-bold text-white">operating system </span>
            for a
          </p>
          <p className=" font-tussilago text-base sm:text-xl text-right">
            HIGH PERFORMANCE HUMAN LIFESPAN
          </p>

          <p className=" font-morigothic font-light text-sm sm:text-base text-white/70 max-w-[500px] mt-[5%] text-right">
            A multi-modal ecosystem - from what you wear and eat, to how you
            train, recover, and evolve.
          </p>
        </div>

        <div
          className=" flex flex-col items-start self-start relative min-h-[300px] sm:min-h-[500px] justify-center transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-30px)",
            transitionDelay: "800ms",
          }}
        >
          <p className=" font-morigothic font-light text-base sm:text-lg text-white/70 max-w-[500px] mt-[5%] text-left">
            Not a health product, not a fitness brand
            <br />- a cultural operating system where
            <br />
            <span className=" font-bold text-white">
              AI, behavioral science, and belonging
            </span>{" "}
            converge to close the{" "}
            <span className=" font-bold text-white">
              knowing-doing gap in human potential
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OutliveOrdinary;
