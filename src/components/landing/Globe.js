"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamic import to prevent SSR issues with Three.js
const GlobeGL = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center">
      <div className="text-white/50 font-morigothic">Loading globe...</div>
    </div>
  ),
});

const Globe = () => {
  const [globeEl, setGlobeEl] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer for scroll animation
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

  useEffect(() => {
    if (globeEl) {
      // Set initial camera position to India (lat: 20, lng: 78)
      globeEl.pointOfView({ lat: 20, lng: 78, altitude: 2 });

      // Enable auto-rotation
      globeEl.controls().autoRotate = true;
      globeEl.controls().autoRotateSpeed = 0.5;

      // Disable zoom
      globeEl.controls().enableZoom = false;
    }
  }, [globeEl]);

  return (
    <div
      ref={sectionRef}
      className=" w-full max-w-[1300px] mx-auto z-10 flex flex-col items-center px-4 mt-[10%] gap-12 overflow-hidden"
    >
      <div className=" gap-10 md:gap-6 flex-col md:flex-row flex items-center">
        <p
          className=" font-morigothic font-light text-sm text-white/70 flex-1 transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-30px)",
          }}
        >
          Born from sheer dissatisfaction - with healthcare that never met you
          halfway.
        </p>

        <p
          className=" font-morigothic font-light text-sm text-white/70 flex-2 text-left md:text-center transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.95)",
            transitionDelay: "200ms",
          }}
        >
          THE FUTURE OF{" "}
          <span className=" font-tussilago text-white text-xl ">
            LIVING A HIGH RESOLUTION LIFE
          </span>{" "}
          LIES IN BELONGING, MAKING HEALTH CHOICES & IMPLEMENTING THEM
          <br />
          <span className=" font-tussilago text-white text-xl ">
            SIMPLE, SOCIAL AND INEVITABLE
          </span>
        </p>
        <p
          className=" font-morigothic font-light text-sm text-white/70 flex-1 transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(30px)",
            transitionDelay: "400ms",
          }}
        >
          Healthcare is boring, fragmented, siloed - never built for peak
          performance.
        </p>
      </div>

      {/* Interactive 3D Globe */}
      <div
        className="w-full max-w-[250px] md:max-w-[600px] h-[250px] md:h-[600px] overflow-hidden transition-all duration-1000 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.8)",
          transitionDelay: "600ms",
        }}
      >
        <GlobeGL
          ref={setGlobeEl}
          globeImageUrl="/assets/images/globe.png"
          backgroundColor="rgba(0,0,0,0)"
          atmosphereColor="#3e3e3e"
          atmosphereAltitude={0.15}
          showAtmosphere={true}
          width={isMobile ? 250 : 600}
          height={isMobile ? 250 : 600}
          animateIn={true}
          pointAltitude={0.01}
          pointRadius={0.5}
          pointColor="color"
          pointLabel="label"
        />
      </div>

      <div className=" flex flex-col items-center px-3">
        <p className=" font-morigothic font-light text-sm text-white/70">
          There are more people living inside this circle than outside it. Yet
          the future of health is still being designed elsewhere.
        </p>
        <p className=" font-morigothic  text-base font-bold text-white/90 ">
          NOT ONE GLOBAL HEALTH COMPANY IS BUILT AROUND OUR BIOLOGY, BEHAVIOUR
          OR CULTURE
        </p>
      </div>

      <div className=" flex flex-col items-center gap-4 ">
        <p className=" font-morigothic font-light text-sm md:text-base text-center text-white/70 mt-[5%] ">
          We’re here to change that. To make high performance living a culture.
        </p>
        <p className=" font-tussilago font-bold gradient-vertical text-xl md:text-4xl text-center mt-[10%]  ">
          IN PURSUIT OF{" "}
          <span className="primary-gradient-vertical">HIGHER </span> HUMAN
          POTENTIAL
        </p>
      </div>
    </div>
  );
};

export default Globe;
