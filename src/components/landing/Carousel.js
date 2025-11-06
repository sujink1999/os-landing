"use client";

import { useState, useEffect, useRef } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Placeholder card data - user will update with actual images
  const cards = [
    { id: 1, image: "/assets/images/carousel-card.png", alt: "Card 1" },
    { id: 2, image: "/assets/images/carousel-card.png", alt: "Card 2" },
    { id: 3, image: "/assets/images/carousel-card.png", alt: "Card 3" },
    { id: 4, image: "/assets/images/carousel-card.png", alt: "Card 4" },
    { id: 5, image: "/assets/images/carousel-card.png", alt: "Card 5" },
  ];

  // Intersection Observer
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

  // Auto-advance carousel
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % cards.length);
      }, 3500); // 3.5 seconds per card

      return () => clearInterval(interval);
    }
  }, [isHovered, cards.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      ref={sectionRef}
      className="w-full max-w-[1100px] mx-auto z-10 flex flex-col items-center px-4 py-20 mb-[5%] mt-[10%] gap-12"
    >
      {/* Title */}
      <h2
        className="font-tussilago font-bold text-2xl md:text-4xl text-center mb-10 transition-all duration-700 ease-out "
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        <span className="gradient-vertical">MISSION</span>{" "}
        <span className="gradient-vertical">2030 :</span>{" "}
        <span className="gradient-vertical whitespace-nowrap primary-gradient-vertical">
          1 MILLION
        </span>{" "}
        <span className="gradient-vertical">USERS</span>
      </h2>

      {/* Content container */}
      <div className="w-full flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
        {/* Left text content */}
        <div
          className="flex-1 flex flex-col gap-4 z-10 transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-30px)",
            transitionDelay: "200ms",
          }}
        >
          <p className="font-morigothic text-lg md:text-xl text-white font-medium ">
            a connected network powered by the OS <br />
            creating a flywheel of data, behavior, and culture.
          </p>
          <p className="font-morigothic font-light text-sm md:text-base text-white/70">
            10 Lakh people spending above a 1 Lakh a year on health data,
            wearables, training, diagnostics & therapies, fuelled nutrition,
            supplements, athleisure, insurance inside a closed ecosystem
          </p>

          <div className=" flex flex-col gap-4 max-w-[450px] mt-10 ">
            <p className=" font-aoi text-xs uppercase">
              Preventive-health market in India → 4× by 2030
            </p>
            <div className=" w-1/3 h-px bg-white/20" />
            <p className=" font-aoi text-xs uppercase">
              Cultural shift → Illness → Performance
            </p>
            <div className=" w-1/3 h-px bg-white/20" />
            <p className=" font-aoi text-xs uppercase">
              India’s health optimization compounding at an average rate of ~35%
              YoY (wearables, supplements, diagnostics)
            </p>
            <div className=" w-1/3 h-px bg-white/20" />
            <p className=" font-aoi text-xs uppercase">
              1.4 billion people → still using Western-built systems for Eastern
              bodies
            </p>
          </div>
        </div>

        {/* Right carousel */}
        <div
          className="flex-1 w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel container */}
          <div className="relative w-full h-[300px] flex items-center justify-center overflow-visible">
            {/* Cards */}
            <div className="relative w-full h-full flex items-center justify-center">
              {cards.map((card, index) => {
                // Calculate position relative to active card
                const position = index - activeIndex;
                const isCenter = position === 0;
                const isLeft = position === -1 || position === cards.length - 1;
                const isRight =
                  position === 1 || position === -cards.length + 1;
                const isVisible = isCenter || isLeft || isRight;

                // Calculate transform based on position
                let transform = "translateX(0)";
                let scale = 1;
                let opacity = 1;
                let zIndex = 1;

                if (isLeft) {
                  transform = "translateX(-85%)"; // Overlap 15% (100% - 85%)
                  scale = 0.85;
                  opacity = 0.5;
                  zIndex = 0;
                } else if (isRight) {
                  transform = "translateX(85%)";
                  scale = 0.85;
                  opacity = 0.5;
                  zIndex = 0;
                } else if (isCenter) {
                  transform = "translateX(0)";
                  scale = 1;
                  opacity = 1;
                  zIndex = 2;
                } else {
                  opacity = 0;
                  zIndex = -1;
                }

                return (
                  <div
                    key={card.id}
                    className="absolute w-[260px] h-[300px] transition-all duration-500 ease-in-out"
                    style={{
                      transform: `${transform} scale(${scale})`,
                      opacity: isVisible ? opacity : 0,
                      zIndex,
                      pointerEvents: isCenter ? "auto" : "none",
                    }}
                  >
                    <div className="w-full h-full  backdrop-blur-sm  rounded-2xl overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-[6px] mt-8">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="transition-all duration-300"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 h-[6px] bg-white"
                      : "w-[6px] h-[6px] bg-white/30 hover:bg-white/50"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
