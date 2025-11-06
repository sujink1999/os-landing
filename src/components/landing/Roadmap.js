"use client";

import { useState, useEffect, useRef } from "react";

const Roadmap = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Roadmap milestones
  const milestones = [
    {
      year: "2025",
      title: "Proof",
      description:
        "Building the core infrastructure and initial product development. Assembling the founding team and establishing our vision.",
    },
    {
      year: "2026",
      title: "Culture",
      description:
        "Release Vanta OS Alpha to early adopters. Gather feedback and iterate on core features. Build initial community.",
    },
    {
      year: "2027",
      title: "Gravity",
      description:
        "Public beta with enhanced features. Expand wearable integrations and biomarker tracking. Scale user acquisition.",
    },
    {
      year: "2028",
      title: "Scale",
      description:
        "Launch premium features and enterprise solutions. Partner with health providers and expand ecosystem.",
    },
    {
      year: "2029",
      title: "Infra",
      description:
        "Building robust infrastructure to support massive scale and new product verticals.",
    },
    {
      year: "2030",
      title: "Infra 2",
      description:
        "Reach our mission of empowering 1 million users. Establish Vanta as the leading health optimization platform.",
    },
  ];

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
      { threshold: 0.2 }
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
      className="w-full max-w-[1400px] mx-auto z-10 flex flex-col items-center px-4"
    >
      {/* Timeline container */}
      <div className="w-full overflow-x-auto md:overflow-visible px-8 scrollbar-hide">
        <div className="min-w-[800px] md:min-w-0 relative py-12">
          {/* Milestones */}
          <div className="relative flex justify-between items-center min-h-[120px] ">
            {/* Horizontal line (positioned between first and last dot) */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/20 -translate-y-1/2">
              {/* Animated line fill */}
              <div
                className="h-full bg-white/60 transition-all duration-1500 ease-out"
                style={{
                  width: isVisible ? "100%" : "0%",
                }}
              />
            </div>
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex flex-col items-center relative cursor-pointer ${
                  index === 0
                    ? "items-start"
                    : index === milestones.length - 1
                    ? "items-end"
                    : ""
                }`}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                {/* Title (below line) */}
                <div
                  className="mb-4 transition-all duration-300 ease-out"
                  style={{
                    opacity: isVisible
                      ? selectedIndex === index
                        ? 1
                        : 0.6
                      : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <p
                    className={`font-tussilago uppercase font-medium text-center whitespace-nowrap transition-all duration-300 ${
                      selectedIndex === index
                        ? "text-lg md:text-xl text-white"
                        : "text-sm md:text-base text-white/80"
                    }`}
                  >
                    {milestone.title}
                  </p>
                </div>

                {/* Dot marker */}
                <div
                  className="relative z-10 transition-all duration-500 ease-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0,
                    transitionDelay: `${index * 150 + 200}ms`,
                  }}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      selectedIndex === index
                        ? "bg-white border-white scale-125"
                        : "bg-black border-white/60"
                    }`}
                  />
                  {/* Pulse effect on selected */}
                  {selectedIndex === index && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/40 animate-ping" />
                  )}
                </div>

                <div
                  className="mt-4 transition-all duration-300 ease-out"
                  style={{
                    opacity: isVisible
                      ? selectedIndex === index
                        ? 1
                        : 0.6
                      : 0,
                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(-20px)",
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <p
                    className={`font-tussilago font-bold transition-all duration-300 ${
                      selectedIndex === index
                        ? "text-lg md:text-xl text-white"
                        : "text-base md:text-lg text-white"
                    }`}
                  >
                    {milestone.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative min-h-[200px] w-full max-w-[800px] flex items-center justify-center overflow-hidden">
        {milestones.map((milestone, index) => (
          <p
            key={milestone.year}
            className={`font-aoi text-sm text-white text-center absolute top-0 left-0 w-full transition-all duration-500 ease-out ${
              selectedIndex === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90 pointer-events-none"
            }`}
          >
            {milestone.description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
