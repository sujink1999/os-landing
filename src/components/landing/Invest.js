"use client";

import { useEffect, useRef, useState } from "react";

const Invest = () => {
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
      { threshold: 0.5 }
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
      className="w-full max-w-[1400px] mx-auto z-10 flex flex-col items-center px-4 mt-[10%]"
    >
      <div
        className=" flex items-center gap-4 self-start transition-all duration-700 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        <img
          src="/assets/images/vanta-logo.png"
          alt="Invest"
          className=" w-12 h-12 object-contain"
        />
        <p className=" font-aoi text-xs ">
          INVEST IN
          <br />
          THE ECOSYSTEM
        </p>
      </div>

      <div className=" flex flex-col">
        <div
          className=" flex items-center md:justify-start md:flex-row flex-col mt-[10%] gap-8 relative transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.95)",
            transitionDelay: "200ms",
          }}
        >
          <p className=" md:hidden block font-morigothic font-light text-base text-white/60 text-left self-start">
            To help us engineer the future of health infrastructure to build
            proof, ignite culture, and scale the ecosystem.
          </p>
          <p className=" hidden md:block font-morigothic font-light text-lg text-white/60 text-right self-start">
            To help us engineer the future <br />
            of health infrastructure
          </p>
          <div className=" w-[280px] h-[400px] bg-white/10 rounded-2xl" />
          <p className=" hidden md:block font-morigothic font-light text-lg text-white/60 text-left self-center">
            to build proof, ignite culture,
            <br /> and scale the ecosystem.
          </p>
        </div>
        <div
          className=" flex flex-col -mt-8 gap-2 transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "400ms",
          }}
        >
          <p className=" font-tussilago text-2xl md:text-3xl text-white  text-center">
            WE&apos;RE RAISING $1.5 MILLION
          </p>
          <p className=" font-morigothic font-light text-base text-white/50 text-center">
            from the right strategic investors — builders, believers, and
            operators who see what’s coming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invest;
