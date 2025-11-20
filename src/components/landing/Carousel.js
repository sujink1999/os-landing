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

  // Placeholder card data - user will update with actual images
  const cards = [
    { id: 1, image: "/assets/images/carousel-card.png", alt: "Card 1" },
    { id: 2, image: "/assets/images/carousel-card.png", alt: "Card 2" },
    { id: 3, image: "/assets/images/carousel-card.png", alt: "Card 3" },
    { id: 4, image: "/assets/images/carousel-card.png", alt: "Card 4" },
    { id: 5, image: "/assets/images/carousel-card.png", alt: "Card 5" },
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

    // Animate each text element one by one
    if (mainText) {
      tl.fromTo(
        mainText,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.1 }
      );
    }

    if (descText) {
      tl.fromTo(
        descText,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    if (bullet1) {
      tl.fromTo(
        bullet1,
        { opacity: 0, x: -20 },
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
        { opacity: 0, x: -20 },
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
        { opacity: 0, x: -20 },
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
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    // Animate carousel
    if (carousel) {
      tl.fromTo(
        carousel,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.15 },
        "-=0.1"
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
      className="w-full max-w-[1100px] mx-auto z-10 flex flex-col items-center px-4 py-20 mb-[5%]  gap-12"
    >
      {/* Content container */}
      <div className="w-full flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
        {/* Left text content */}
        <div className="flex-1 flex flex-col gap-4 z-10">
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

        {/* Right carousel */}
        <div
          ref={carouselRef}
          className="flex-1 w-full opacity-0"
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
