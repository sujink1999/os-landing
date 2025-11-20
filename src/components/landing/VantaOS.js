"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "../ui/GlassCard";

gsap.registerPlugin(ScrollTrigger);

const VantaOS = () => {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const desc1Ref = useRef(null);
  const desc2Ref = useRef(null);
  const videoRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const logo = logoRef.current;
    const heading1 = heading1Ref.current;
    const heading2 = heading2Ref.current;
    const desc1 = desc1Ref.current;
    const desc2 = desc2Ref.current;
    const video = videoRef.current;
    const cards = cardsRef.current;

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
    if (logo) {
      tl.fromTo(
        logo,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.1 }
      );
    }

    if (heading1) {
      tl.fromTo(
        heading1,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    if (heading2) {
      tl.fromTo(
        heading2,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    if (desc1) {
      tl.fromTo(desc1, { opacity: 0 }, { opacity: 1, duration: 0.1 }, "-=0.05");
    }

    if (desc2) {
      tl.fromTo(desc2, { opacity: 0 }, { opacity: 1, duration: 0.1 }, "-=0.05");
    }

    if (video) {
      tl.fromTo(
        video,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.15 },
        "-=0.05"
      );
    }

    // Cards pop up one by one
    cards.forEach((card, index) => {
      if (card) {
        tl.fromTo(
          card,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.1 },
          `-=${0.05 * (cards.length - index)}`
        );
      }
    });

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full max-w-[1400px] mx-auto px-4 py-20 flex flex-col items-center relative"
    >
      {/* Logo */}
      <img
        ref={logoRef}
        src="/assets/images/vanta-logo.png"
        alt="Vanta"
        className="w-24 h-24 object-contain mb-12 opacity-0"
      />

      {/* Main heading */}
      <h2
        ref={heading1Ref}
        className="font-helvetica font-medium text-base md:text-lg text-white text-center  opacity-0"
      >
        Vanta is the operating system for a
      </h2>
      <h1
        ref={heading2Ref}
        className=" animated-gradient-shimmer font-tussilago font-bold text-lg md:text-xl text-white text-center mb-12 opacity-0"
      >
        HIGH PERFORMANCE HUMAN LIFESPAN
      </h1>

      {/* Description paragraphs */}
      <p
        ref={desc1Ref}
        className=" mb-2 font-helvetica font-medium text-base md:text-lg text-white text-center max-w-[800px] opacity-0"
      >
        A{" "}
        <span className="animated-gradient-shimmer">multi-modal ecosystem</span>{" "}
        that connects how you train, fuel, recover, and grow.
      </p>
      <p
        ref={desc2Ref}
        className="font-helvetica font-medium text-base md:text-lg text-white text-center mb-30 max-w-[800px] opacity-0"
      >
        A health <span className="animated-gradient-shimmer">culture</span>{" "}
        where AI, behavior, and belonging close the knowing–doing gap.
      </p>

      {/* Video and cards container */}
      <div className="relative w-full max-w-[600px] mx-auto flex items-center justify-center min-h-[500px]">
        {/* Center video */}
        <video
          ref={videoRef}
          className="w-full max-w-[400px] h-auto object-contain opacity-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/walk-cut.mp4" type="video/mp4" />
        </video>

        {/* Cards */}

        {/* Top left */}
        <GlassCard
          ref={(el) => (cardsRef.current[0] = el)}
          className="absolute top-0 left-0 opacity-0 float-card-1"
        >
          <p className="font-aoi text-xs text-white/90 uppercase">
            Healthcare doesn&apos;t meet people
            <br />
            where they are.
          </p>
        </GlassCard>

        {/* Top right */}
        <GlassCard
          ref={(el) => (cardsRef.current[1] = el)}
          className="absolute top-10 right-0 opacity-0 float-card-2"
        >
          <p className="font-aoi text-xs text-white/90 uppercase">
            Experience is
            <br />
            dissatisfying and
            <br />
            frustrating.
          </p>
        </GlassCard>

        {/* Left middle */}
        <GlassCard
          ref={(el) => (cardsRef.current[2] = el)}
          className="absolute left-0 top-1/2 opacity-0 float-card-3"
        >
          <p className="font-aoi text-xs text-white/90 uppercase">
            Boring,
            <br />
            fragmented,
            <br />
            siloed
          </p>
        </GlassCard>

        {/* Right middle */}
        <GlassCard
          ref={(el) => (cardsRef.current[3] = el)}
          className="absolute right-0 top-1/2 opacity-0 float-card-4"
        >
          <p className="font-aoi text-xs text-white/90 uppercase">
            Hours of chase and
            <br />
            lakhs of money
            <br />
            spent
          </p>
        </GlassCard>

        {/* Bottom */}
        <GlassCard
          ref={(el) => (cardsRef.current[4] = el)}
          className="absolute bottom-0 left-1/2 opacity-0 float-card-5"
        >
          <p className="font-aoi text-xs text-white/90 uppercase">
            Never built for peak
            <br />
            performance.
          </p>
        </GlassCard>
      </div>
    </div>
  );
};

export default VantaOS;
