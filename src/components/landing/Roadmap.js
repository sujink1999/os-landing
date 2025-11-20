"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Roadmap = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const horizontalLineRef = useRef(null);
  const verticalLineRef = useRef(null);
  const desktopDotsRef = useRef([]);
  const mobileDotsRef = useRef([]);
  const desktopTitlesRef = useRef([]);
  const desktopYearsRef = useRef([]);
  const missionTextRef = useRef(null);
  const mobileYearsRef = useRef([]);
  const mobileTitlesRef = useRef([]);
  const mobileDescsRef = useRef([]);
  const mobileMissionRef = useRef(null);

  // Roadmap milestones
  const milestones = [
    {
      year: "2025",
      title: "PROOF",
      description: "VANTA OS [ALPHA]",
    },
    {
      year: "2026",
      title: "CULTURE",
      description: "FIRST100 ENHANCED",
    },
    {
      year: "2027",
      title: "GRAVITY",
      description: "EARLY BELIEVERS TO ECOSYSTEM",
    },
    {
      year: "2028",
      title: "SCALE",
      description: "",
    },
    {
      year: "2029",
      title: "INFRASTRUCTURE",
      description: "",
    },
  ];

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
    const badge = badgeRef.current;
    const horizontalLine = horizontalLineRef.current;
    const verticalLine = verticalLineRef.current;
    const desktopDots = desktopDotsRef.current;
    const mobileDots = mobileDotsRef.current;
    const desktopTitles = desktopTitlesRef.current;
    const desktopYears = desktopYearsRef.current;
    const missionText = missionTextRef.current;

    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });

    const scrollTriggerInstance = tl.scrollTrigger;

    // Animate badge first
    if (badge) {
      tl.fromTo(
        badge,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.1 }
      );
    }

    // Animate line (horizontal for desktop, vertical for mobile)
    if (!isMobile && horizontalLine) {
      tl.fromTo(
        horizontalLine,
        { width: "0%" },
        { width: "100%", duration: 0.5 }
      );

      // Animate desktop elements sequentially
      desktopDots.forEach((dot, index) => {
        if (dot) {
          // Animate dot
          tl.fromTo(
            dot,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.1 },
            `-=${0.4 - index * 0.08}`
          );

          // Animate title
          if (desktopTitles[index]) {
            tl.fromTo(
              desktopTitles[index],
              { opacity: 0, y: -10 },
              { opacity: 1, y: 0, duration: 0.1 },
              "-=0.08"
            );
          }

          // Animate year
          if (desktopYears[index]) {
            tl.fromTo(
              desktopYears[index],
              { opacity: 0, y: 10 },
              { opacity: 1, y: 0, duration: 0.1 },
              "-=0.08"
            );
          }
        }
      });

      // Animate mission text at the end
      if (missionText) {
        tl.fromTo(
          missionText,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.1 },
          "-=0.05"
        );
      }
    } else if (isMobile && verticalLine) {
      tl.fromTo(
        verticalLine,
        { height: "0%" },
        { height: "100%", duration: 0.5 }
      );

      // Animate mobile elements sequentially
      mobileDots.forEach((dot, index) => {
        if (dot) {
          // Animate dot
          tl.fromTo(
            dot,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.1 },
            `-=${0.4 - index * 0.08}`
          );

          // Animate year
          if (mobileYearsRef.current[index]) {
            tl.fromTo(
              mobileYearsRef.current[index],
              { opacity: 0, x: -10 },
              { opacity: 1, x: 0, duration: 0.1 },
              "-=0.08"
            );
          }

          // Animate title
          if (mobileTitlesRef.current[index]) {
            tl.fromTo(
              mobileTitlesRef.current[index],
              { opacity: 0, x: 10 },
              { opacity: 1, x: 0, duration: 0.1 },
              "-=0.08"
            );
          }

          // Animate description
          if (mobileDescsRef.current[index]) {
            tl.fromTo(
              mobileDescsRef.current[index],
              { opacity: 0, x: 10 },
              { opacity: 1, x: 0, duration: 0.1 },
              "-=0.08"
            );
          }
        }
      });

      // Animate mission text at the end
      if (mobileMissionRef.current) {
        tl.fromTo(
          mobileMissionRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.1 },
          "-=0.05"
        );
      }
    }

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, [isMobile]);

  return (
    <div
      ref={sectionRef}
      className="w-full z-10 flex flex-col items-center py-20"
    >
      {/* Header badge */}
      <div className="w-full px-4 md:pr-8 mb-16 flex justify-end">
        <div
          ref={badgeRef}
          className="border-[0.5px] border-white rounded-full px-8 py-3 text-xs font-aoi flex items-center justify-center opacity-0"
        >
          <p className="-mb-[6px]">OWNING THE NARRATIVE</p>
        </div>
      </div>

      {/* Desktop: Horizontal Timeline */}
      <div className="hidden md:block w-full pr-8">
        <div className="relative py-12 flex items-center gap-8">
          {/* Timeline container */}
          <div className="flex-1">
            <div className="relative flex justify-between items-center">
              {/* Background line */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/20 -translate-y-1/2">
                {/* Animated line fill */}
                <div
                  ref={horizontalLineRef}
                  className="h-full bg-white/60"
                  style={{ width: "0%" }}
                />
              </div>

              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex flex-col items-center relative flex-1"
                >
                  {/* Title (above line) */}
                  <p
                    ref={(el) => (desktopTitlesRef.current[index] = el)}
                    className="font-aoi text-xs text-white mb-4 whitespace-nowrap opacity-0"
                  >
                    {milestone.title}
                  </p>

                  {/* Dot marker */}
                  <div
                    ref={(el) => (desktopDotsRef.current[index] = el)}
                    className="relative z-10 w-3 h-3 rounded-full bg-white opacity-0"
                  />

                  {/* Year (below line) */}
                  <p
                    ref={(el) => (desktopYearsRef.current[index] = el)}
                    className="font-aoi text-xs text-white mt-4 opacity-0"
                  >
                    {milestone.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission text - inline on the right */}
          <div
            ref={missionTextRef}
            className="text-right whitespace-nowrap opacity-0"
          >
            <p className="font-tussilago text-lg font-bold text-white">
              MISSION 2030 :
            </p>
            <p className="font-tussilago text-xl font-bold text-white animated-gradient-shimmer">
              1 MILLION USERS
            </p>
          </div>
        </div>
      </div>

      {/* Mobile: Vertical Timeline */}
      <div className="md:hidden w-full px-4">
        <div className="relative py-12">
          <div className="relative flex gap-4">
            {/* Years column */}
            <div className="flex flex-col justify-between">
              {milestones.map((milestone, index) => (
                <div key={`year-${milestone.year}`} className="mb-16 last:mb-0">
                  <p
                    ref={(el) => (mobileYearsRef.current[index] = el)}
                    className="font-aoi text-sm text-white min-w-[3rem] opacity-0"
                  >
                    {milestone.year}
                  </p>
                </div>
              ))}
            </div>

            {/* Vertical line container */}
            <div className="relative w-[2px]">
              {/* Background line - extends beyond first and last dot */}
              <div className="absolute -top-12 -bottom-12 left-0 w-full bg-white/20">
                {/* Animated line fill */}
                <div
                  ref={verticalLineRef}
                  className="w-full bg-white/60"
                  style={{ height: "0%" }}
                />
              </div>

              {/* Dots positioned on the line */}
              {milestones.map((milestone, index) => (
                <div
                  key={`dot-${milestone.year}`}
                  ref={(el) => (mobileDotsRef.current[index] = el)}
                  className="absolute w-3 h-3 rounded-full bg-white -translate-x-1/2 left-1/2 opacity-0"
                  style={{
                    top: `${(index / (milestones.length - 1)) * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* Titles column */}
            <div className="flex-1 flex flex-col justify-between">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="mb-16 last:mb-0">
                  <div>
                    <p
                      ref={(el) => (mobileTitlesRef.current[index] = el)}
                      className="font-aoi text-xs text-white uppercase opacity-0"
                    >
                      {milestone.title}
                    </p>
                    {milestone.description && (
                      <p
                        ref={(el) => (mobileDescsRef.current[index] = el)}
                        className="font-aoi text-[10px] text-white/50 mt-1 opacity-0"
                      >
                        {milestone.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission text */}
        <div ref={mobileMissionRef} className="mt-6 text-left opacity-0">
          <p className="font-tussilago font-bold text-lg text-white/70">
            MISSION 2030 :
          </p>
          <p className="font-tussilago font-bold text-xl text-white animated-gradient-shimmer">
            1 MILLION USERS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
