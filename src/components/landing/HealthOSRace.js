"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HealthOSRace = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const headingRef = useRef(null);
  const itemsRef = useRef([]);
  const finalLineRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    const heading = headingRef.current;
    const items = itemsRef.current;
    const finalLine = finalLineRef.current;

    if (!container || !card || !heading || !finalLine) return;

    const scrollTriggerInstances = [];

    // Width expansion animation
    const cardAnim = gsap.to(card, {
      width: "100vw",
      borderRadius: "0px",
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });
    scrollTriggerInstances.push(cardAnim.scrollTrigger);

    // Staggered fade-in for heading
    const headingAnim = gsap.fromTo(
      heading,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "top center-=100",
          scrub: 1,
        },
      }
    );
    scrollTriggerInstances.push(headingAnim.scrollTrigger);

    // Staggered fade-in for items
    items.forEach((item, index) => {
      if (item) {
        const itemAnim = gsap.fromTo(
          item,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: container,
              start: `top center-=${index * 50}`,
              end: `top center-=${index * 50 + 100}`,
              scrub: 1,
            },
          }
        );
        scrollTriggerInstances.push(itemAnim.scrollTrigger);
      }
    });

    // Final line fade-in after width expansion completes
    const finalLineAnim = gsap.fromTo(
      finalLine,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: container,
          start: "center center",
          end: "center center+=100",
          scrub: 1,
        },
      }
    );
    scrollTriggerInstances.push(finalLineAnim.scrollTrigger);

    return () => {
      scrollTriggerInstances.forEach((st) => {
        if (st) st.kill();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center bg-black py-12"
    >
      <div
        ref={cardRef}
        className="bg-white/10 rounded-[40px] px-6 py-10 md:px-12 md:py-12 md:w-[70%] w-[90%] max-w-full"
      >
        <div className=" max-w-[700px] mx-auto ">
          <h2
            ref={headingRef}
            className="font-helvetica font-medium text-lg md:text-2xl text-white text-center mb-10 opacity-0"
          >
            The race for a{" "}
            <span className="animated-gradient-shimmer">
              personal Health OS
            </span>{" "}
            is on
          </h2>

          <div className="space-y-4">
            <div
              ref={(el) => (itemsRef.current[0] = el)}
              className="flex items-start gap-3 opacity-0"
            >
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 shrink-0"
              >
                <path
                  d="M17.2082 1.86286L15.3537 0L5.58137 9.7693L1.85687 6.04698L0 7.90786L5.58188 13.4897L7.44255 11.6291L17.2082 1.86286Z"
                  fill="#FF5C2A"
                />
              </svg>
              <p className="font-aoi text-xs md:text-sm text-white tracking-wider">
                IN 5 YEARS, EVERY INDIAN WILL HAVE A HEALTH OS
              </p>
            </div>

            <div
              ref={(el) => (itemsRef.current[1] = el)}
              className="flex items-start gap-3 opacity-0"
            >
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 shrink-0"
              >
                <path
                  d="M17.2082 1.86286L15.3537 0L5.58137 9.7693L1.85687 6.04698L0 7.90786L5.58188 13.4897L7.44255 11.6291L17.2082 1.86286Z"
                  fill="#FF5C2A"
                />
              </svg>
              <p className="font-aoi text-xs md:text-sm text-white tracking-wider">
                AI KNOWS YOUR BIOMARKERS, RHYTHMS, HISTORY, EPIGENETICS
              </p>
            </div>

            <div
              ref={(el) => (itemsRef.current[2] = el)}
              className="flex items-start gap-3 opacity-0"
            >
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 shrink-0"
              >
                <path
                  d="M17.2082 1.86286L15.3537 0L5.58137 9.7693L1.85687 6.04698L0 7.90786L5.58188 13.4897L7.44255 11.6291L17.2082 1.86286Z"
                  fill="#FF5C2A"
                />
              </svg>
              <p className="font-aoi text-xs md:text-sm text-white tracking-wider">
                THE SYSTEM TELLS YOU WHAT TO EAT, WHEN TO SLEEP, HOW TO MOVE
              </p>
            </div>

            <div
              ref={(el) => (itemsRef.current[3] = el)}
              className="flex items-start gap-3 opacity-0"
            >
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 shrink-0"
              >
                <path
                  d="M17.2082 1.86286L15.3537 0L5.58137 9.7693L1.85687 6.04698L0 7.90786L5.58188 13.4897L7.44255 11.6291L17.2082 1.86286Z"
                  fill="#FF5C2A"
                />
              </svg>
              <p className="font-aoi text-xs md:text-sm text-white tracking-wider">
                INTERVENTIONS ARE PREDICTIVE, NOT REACTIVE
              </p>
            </div>

            <div
              ref={(el) => (itemsRef.current[4] = el)}
              className="flex items-start gap-3 opacity-0"
            >
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 shrink-0"
              >
                <path
                  d="M17.2082 1.86286L15.3537 0L5.58137 9.7693L1.85687 6.04698L0 7.90786L5.58188 13.4897L7.44255 11.6291L17.2082 1.86286Z"
                  fill="#FF5C2A"
                />
              </svg>
              <p className="font-aoi text-xs md:text-sm text-white tracking-wider">
                LABS, DIAGNOSTICS, MEDICINE = COMMODITIZED AND AUTOMATED
              </p>
            </div>

            <div
              ref={(el) => (itemsRef.current[5] = el)}
              className="flex items-start gap-3 opacity-0"
            >
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 shrink-0"
              >
                <path
                  d="M17.2082 1.86286L15.3537 0L5.58137 9.7693L1.85687 6.04698L0 7.90786L5.58188 13.4897L7.44255 11.6291L17.2082 1.86286Z"
                  fill="#FF5C2A"
                />
              </svg>
              <p className="font-aoi text-xs md:text-sm text-white tracking-wider">
                THE &apos;DIGITAL TWIN&apos; CONNECTS YOU TO REAL WORLD
                END-POINTS
              </p>
            </div>
          </div>

          <p
            ref={finalLineRef}
            className="font-helvetica font-medium text-lg md:text-xl text-white text-center mt-20 opacity-0"
          >
            healthcare would become an{" "}
            <span className="animated-gradient-shimmer">infrastructure</span>,
            not a service
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthOSRace;
