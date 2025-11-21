"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OutliveOrdinary = () => {
  const sectionRef = useRef(null);
  const cultTextRef = useRef(null);
  const horizonRef = useRef(null);
  const outliveTextRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cultText = cultTextRef.current;
    const horizon = horizonRef.current;
    const outliveText = outliveTextRef.current;

    if (!section || !cultText || !horizon || !outliveText) return;

    // Create ScrollTrigger timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });

    const scrollTriggerInstance = tl.scrollTrigger;

    // Sequential animations
    // 1. Fade in cult text
    tl.fromTo(
      cultText,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.3 }
    );

    // 2. Fade in horizon
    tl.fromTo(
      horizon,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 0.4 },
      "-=0.1"
    );

    // 3. Fade in outlive text from behind horizon
    tl.fromTo(
      outliveText,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.3 },
      "-=0.2"
    );

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mt-20 w-full h-[50vh] flex flex-col justify-between items-center overflow-hidden relative"
    >
      {/* Top section with cult text */}
      <div className="w-full max-w-[1200px] mx-auto z-10 flex flex-col items-center px-4 pt-8">
        <div
          ref={cultTextRef}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 self-start opacity-0"
        >
          <p className="font-helvetica  text-sm text-white/70">
            what needs <br />
            to be built?
          </p>
          <p className="font-aoi text-base">A CULT OF SHARED BELIEF</p>
        </div>
      </div>

      {/* Horizon and overlapping text container at bottom */}
      <div className="w-full relative">
        {/* OUTLIVE ORDINARY text - positioned to touch horizon */}
        <p
          ref={outliveTextRef}
          className="font-tussilago font-bold text-2xl sm:text-4xl md:text-5xl text-center absolute left-0 right-0 z-0 opacity-0 -top-2 sm:-top-4 md:-top-4 lg:top-2"
        >
          OUTLIVE ORDINARY
        </p>

        {/* Planet horizon image */}
        <img
          ref={horizonRef}
          src="/assets/images/horizon.png"
          alt="Planet Horizon"
          className="w-full h-auto object-cover relative z-10 opacity-0"
        />
      </div>
    </div>
  );
};

export default OutliveOrdinary;
