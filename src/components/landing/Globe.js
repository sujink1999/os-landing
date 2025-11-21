"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Dynamic import to prevent SSR issues with Three.js
const GlobeGL = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center">
      <div className="text-white/50 font-helvetica">Loading globe...</div>
    </div>
  ),
});

const Globe = () => {
  const [globeEl, setGlobeEl] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const topText1Ref = useRef(null);
  const headingRef = useRef(null);
  const topText2Ref = useRef(null);
  const simpleTextRef = useRef(null);
  const globeContainerRef = useRef(null);
  const bottomTextRef = useRef(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // GSAP ScrollTrigger animations
  useEffect(() => {
    const section = sectionRef.current;
    const topText1 = topText1Ref.current;
    const heading = headingRef.current;
    const topText2 = topText2Ref.current;
    const simpleText = simpleTextRef.current;
    const globeContainer = globeContainerRef.current;
    const bottomText = bottomTextRef.current;

    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "top top",
        scrub: 1,
      },
    });

    const scrollTriggerInstance = tl.scrollTrigger;

    // Sequential animations
    if (topText1) {
      tl.fromTo(
        topText1,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.1 }
      );
    }

    if (heading) {
      tl.fromTo(
        heading,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.1 },
        "-=0.05"
      );
    }

    if (topText2) {
      tl.fromTo(
        topText2,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    if (simpleText) {
      tl.fromTo(
        simpleText,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.1 },
        "-=0.05"
      );
    }

    if (globeContainer) {
      tl.fromTo(
        globeContainer,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.15 },
        "-=0.05"
      );
    }

    if (bottomText) {
      tl.fromTo(
        bottomText,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
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

      // Disable vertical rotation (lock polar angle)
      globeEl.controls().minPolarAngle = Math.PI / 2;
      globeEl.controls().maxPolarAngle = Math.PI / 2;
    }
  }, [globeEl]);

  return (
    <div
      ref={sectionRef}
      className="w-full mx-auto z-10 flex flex-col items-center px-4 pb-[5%] pt-[10%]  mt-30 md:mt-0 gap-8 overflow-hidden"
    >
      <div className=" w-full max-w-[1300px] flex-col items-center mx-auto flex">
        {/* Top heading section */}
        <div className="flex flex-col items-center text-center gap-[2px]">
          <p
            ref={topText1Ref}
            className="font-helvetica font-medium text-sm sm:text-base text-white opacity-0"
          >
            the future of
          </p>
          <h1
            ref={headingRef}
            className="font-tussilago font-bold text-xl md:text-3xl text-white opacity-0"
          >
            LIVING A HIGH RESOLUTION LIFE
          </h1>
          <p
            ref={topText2Ref}
            className="font-helvetica font-medium text-sm sm:text-base text-white opacity-0"
          >
            lies in belonging and making health choices
          </p>
          {/* SIMPLE, SOCIAL & INEVITABLE */}
          <p
            ref={simpleTextRef}
            className="font-tussilago animated-gradient-shimmer font-bold text-xl md:text-3xl text-center opacity-0"
          >
            SIMPLE, SOCIAL & INEVITABLE
          </p>
        </div>

        {/* Interactive 3D Globe */}
        <div
          ref={globeContainerRef}
          className="w-full my-20 max-w-[250px] md:max-w-[400px] h-[250px] md:h-[400px] overflow-hidden opacity-0"
        >
          <GlobeGL
            ref={setGlobeEl}
            globeImageUrl="/assets/images/globe.png"
            backgroundColor="rgba(0,0,0,0)"
            atmosphereColor="#3e3e3e"
            atmosphereAltitude={0.15}
            showAtmosphere={true}
            width={isMobile ? 250 : 400}
            height={isMobile ? 250 : 400}
            animateIn={true}
            pointAltitude={0.01}
            pointRadius={0.5}
            pointColor="color"
            pointLabel="label"
          />
        </div>

        {/* Text below globe */}
        <div
          ref={bottomTextRef}
          className="flex flex-col items-center text-center px-3 max-w-[600px] gap-6 opacity-0"
        >
          <p className="font-helvetica font-medium text-base text-white/70">
            There are more people living inside this circle than outside it.{" "}
            <span className="text-white">
              Yet the future of health is still being designed elsewhere.
            </span>
          </p>
          <div className="flex flex-col gap-1 mt-10">
            <p className="font-helvetica text-base font-medium text-white/90">
              NOT ONE GLOBAL HEALTH COMPANY IS BUILT
            </p>
            <p className="font-helvetica text-base font-medium text-white/90 animated-gradient-shimmer">
              AROUND OUR BIOLOGY, BEHAVIOUR OR CULTURE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Globe;
