"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const mainTextRef = useRef(null);
  const descTextRef = useRef(null);
  const bullet1Ref = useRef(null);
  const divider1Ref = useRef(null);
  const bullet2Ref = useRef(null);
  const divider2Ref = useRef(null);
  const bullet3Ref = useRef(null);
  const divider3Ref = useRef(null);
  const bullet4Ref = useRef(null);
  const carouselRef = useRef(null);

  // Carousel card data
  const cards = [
    { id: 1, image: "/assets/images/carousel/Form.png", alt: "Form" },
    { id: 2, image: "/assets/images/carousel/Fuel.png", alt: "Fuel" },
    { id: 3, image: "/assets/images/carousel/Insure.png", alt: "Insure" },
    { id: 4, image: "/assets/images/carousel/Labs.png", alt: "Labs" },
    { id: 5, image: "/assets/images/carousel/Stack.png", alt: "Stack" },
    { id: 6, image: "/assets/images/carousel/Studio.png", alt: "Studio" },
  ];

  // GSAP ScrollTrigger animations
  useEffect(() => {
    const section = sectionRef.current;
    const mainText = mainTextRef.current;
    const descText = descTextRef.current;
    const bullet1 = bullet1Ref.current;
    const divider1 = divider1Ref.current;
    const bullet2 = bullet2Ref.current;
    const divider2 = divider2Ref.current;
    const bullet3 = bullet3Ref.current;
    const divider3 = divider3Ref.current;
    const bullet4 = bullet4Ref.current;
    const carousel = carouselRef.current;

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

    // Animate carousel first
    if (carousel) {
      tl.fromTo(
        carousel,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.15 }
      );
    }

    // Animate each text element one by one
    if (mainText) {
      tl.fromTo(
        mainText,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.1 },
        "-=0.1"
      );
    }

    if (descText) {
      tl.fromTo(
        descText,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    if (bullet1) {
      tl.fromTo(
        bullet1,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    if (divider1) {
      tl.fromTo(
        divider1,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 0.08 },
        "-=0.05"
      );
    }

    if (bullet2) {
      tl.fromTo(
        bullet2,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    if (divider2) {
      tl.fromTo(
        divider2,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 0.08 },
        "-=0.05"
      );
    }

    if (bullet3) {
      tl.fromTo(
        bullet3,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    if (divider3) {
      tl.fromTo(
        divider3,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 0.08 },
        "-=0.05"
      );
    }

    if (bullet4) {
      tl.fromTo(
        bullet4,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % cards.length);
      }, 2000); // 3.5 seconds per card

      return () => clearInterval(interval);
    }
  }, [isHovered, cards.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      ref={sectionRef}
      className="w-full max-w-[1100px] mx-auto z-10 flex flex-col items-center px-4 py-20 mb-[5%]  gap-12"
    >
      {/* Content container */}
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Left carousel */}
        <div
          ref={carouselRef}
          className="flex-1 w-full opacity-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel container */}
          <div className="  relative w-full h-[400px] flex items-center justify-center overflow-visible">
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
                let blur = 0;

                if (isLeft) {
                  transform = "translateX(-70%)"; // Overlap 15% (100% - 85%)
                  scale = 0.85;
                  opacity = 0.8;
                  zIndex = 0;
                  blur = 2;
                } else if (isRight) {
                  transform = "translateX(70%)";
                  scale = 0.85;
                  opacity = 0.8;
                  zIndex = 0;
                  blur = 2;
                } else if (isCenter) {
                  transform = "translateX(0)";
                  scale = 1;
                  opacity = 1;
                  zIndex = 2;
                  blur = 0;
                } else {
                  opacity = 0;
                  zIndex = -1;
                  blur = 4;
                }

                return (
                  <div
                    key={card.id}
                    className="absolute w-[280px] h-[400px] transition-all duration-500 ease-in-out backdrop-blur-xl"
                    style={{
                      transform: `${transform} scale(${scale})`,
                      opacity: isVisible ? opacity : 0,
                      zIndex,
                      pointerEvents: isCenter ? "auto" : "none",
                      // filter: `blur(${blur}px)`,
                    }}
                  >
                    {/* Outer container with gradient border */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      {/* Gradient border effect */}
                      <div className=" flex justify-center items-center absolute inset-0 rounded-2xl border-white/10 bg-white/15 border">
                        {/* Inner container with blur and opacity */}
                        <img
                          src={card.image}
                          alt={card.alt}
                          className="w-[80%] my-auto object-cover object-center"
                        />
                      </div>
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

        {/* Right text content */}
        <div className="flex-1 flex flex-col gap-4 z-10 backdrop-blur-sm p-3 md:ml-10">
          <p
            ref={mainTextRef}
            className="font-helvetica text-lg md:text-xl text-white font-medium opacity-0"
          >
            a flywheel of data, behavior, and culture.
          </p>
          <p
            ref={descTextRef}
            className="font-helvetica font-light text-sm md:text-base text-white/70 opacity-0"
          >
            10 Lakh people spending above a 1 Lakh a year <br />
            on a connected network powered by the OS
          </p>

          <div className="flex flex-col gap-4 max-w-[450px] mt-10">
            <p
              ref={bullet1Ref}
              className="font-aoi text-xs uppercase opacity-0"
            >
              Preventive-health market in India → 4× by 2030
            </p>
            <div
              ref={divider1Ref}
              className="w-1/3 h-px bg-white/20 opacity-0 origin-left"
            />
            <p
              ref={bullet2Ref}
              className="font-aoi text-xs uppercase opacity-0"
            >
              Cultural shift → Illness → Performance
            </p>
            <div
              ref={divider2Ref}
              className="w-1/3 h-px bg-white/20 opacity-0 origin-left"
            />
            <p
              ref={bullet3Ref}
              className="font-aoi text-xs uppercase opacity-0"
            >
              India&apos;s health optimization compounding at an <br />
              average rate of ~35% YoY <br />
              (wearables, supplements, diagnostics)
            </p>
            <div
              ref={divider3Ref}
              className="w-1/3 h-px bg-white/20 opacity-0 origin-left"
            />
            <p
              ref={bullet4Ref}
              className="font-aoi text-xs uppercase opacity-0"
            >
              1.4 billion people → still using <br />
              Western-built systems for Eastern bodies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
