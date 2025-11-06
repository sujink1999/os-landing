"use client";

import { useEffect, useRef, useState } from "react";

const Promo = () => {
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
      className=" w-full max-w-[1000px] mx-auto z-10 flex flex-col items-center px-4 mt-[10%]"
    >
      <div className=" w-full flex flex-col md:flex-row gap-4">
        <div
          className=" flex flex-col items-end justify-center self-end transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
          }}
        >
          <p className=" font-aoi-compact text-[10px] md:text-xs">
            BUILT FOR THE
          </p>

          <div className=" flex items-end gap-2 ">
            <img
              src="/assets/images/enhanced.png"
              alt="Promo Image"
              className=" w-10 h-10 object-contain"
            />
            <p className=" font-aoi-compact text-[10px] md:text-xs">
              AMBITIOUS
            </p>
          </div>
        </div>
        <div
          className="flex-1 border-2 border-white/20 rounded-2xl overflow-hidden transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: "200ms",
          }}
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/q025lNfr9aU?rel=0&modestbranding=1&controls=1&showinfo=0&fs=1&iv_load_policy=3"
              title="YouTube video player"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div
          className=" flex  md:max-w-[200px] flex-col items-start justify-center self-start gap-3 transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: "400ms",
          }}
        >
          <p className=" font-aoi-compact text-[10px] md:text-xs ">
            VANTA OS (ALPHA)- 2026
          </p>

          <p className=" font-aoi-compact text-[10px] md:text-xs">
            Vanta OS (Alpha) combines real-time wearable, biomarker, and
            lifestyle data into precise direction - connecting digital insight
            to real-world action.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Promo;
