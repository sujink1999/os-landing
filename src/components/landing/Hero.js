"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    const container = containerRef.current;
    if (!video1 || !video2 || !container) return;

    let scrollTriggerInstance = null;
    let video1Duration = 10; // Default durations
    let video2Duration = 5;

    // Shorter scroll on mobile
    const isMobile = window.innerWidth < 768;
    const scrollDistance = isMobile ? "+=150%" : "+=250%";

    // Create ScrollTrigger immediately (don't wait for video load)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: scrollDistance,
        pin: true,
        scrub: 1,
        pinSpacing: true,
        id: "hero-pin",
      },
    });

    scrollTriggerInstance = tl.scrollTrigger;

    // Phase 1: Play god-to-man video (0-20%)
    tl.to(
      {},
      {
        duration: 0.2,
        onUpdate: function () {
          const progress = this.progress();
          video1.currentTime = progress * video1Duration;
        },
      }
    );

    // Phase 2: Show all lines at once (20-35%)
    tl.fromTo(
      [line1Ref.current, line2Ref.current, line3Ref.current],
      { opacity: 0 },
      { opacity: 1, duration: 0.15 },
      0.2
    );

    // Add gradient class and switch video at midpoint
    tl.to(
      {},
      {
        duration: 0,
        onComplete: () => {
          line2Ref.current.classList.add("animated-gradient-shimmer");
        },
      },
      0.45
    );

    // Phase 4: Fade in line 2 with gradient and video 2 (45-50%)
    tl.to(line2Ref.current, { opacity: 1, duration: 0.05 }, 0.45);
    tl.to(video2, { opacity: 1, duration: 0.05 }, 0.45);

    // Play man-to-ai video (45-50%) - super quick
    tl.to(
      {},
      {
        duration: 0.05,
        onUpdate: function () {
          const progress = this.progress();
          video2.currentTime = progress * video2Duration;
        },
      },
      0.45
    );

    const onLoadedMetadata = () => {
      // Update durations when videos load
      video1Duration = video1.duration;
      video2Duration = video2.duration;
    };

    const loadBothVideos = () => {
      if (video1.readyState >= 1 && video2.readyState >= 1) {
        onLoadedMetadata();
      }
    };

    video1.addEventListener("loadedmetadata", loadBothVideos);
    video2.addEventListener("loadedmetadata", loadBothVideos);

    // Check if already loaded
    if (video1.readyState >= 1 && video2.readyState >= 1) {
      onLoadedMetadata();
    }

    return () => {
      video1.removeEventListener("loadedmetadata", loadBothVideos);
      video2.removeEventListener("loadedmetadata", loadBothVideos);
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, []);

  return (
    <div className="relative bg-black">
      <div ref={containerRef} className="w-full h-screen mx-auto flex flex-col">
        {/* Video Container - 50vh */}
        <div className="h-[50vh] overflow-hidden flex items-start justify-center relative">
          <video
            ref={video1Ref}
            className="h-full w-auto object-contain object-top absolute top-0 left-1/2 -translate-x-1/2"
            muted
            playsInline
            preload="auto"
          >
            <source src="/assets/videos/god-to-man.mp4" type="video/mp4" />
          </video>
          <video
            ref={video2Ref}
            className="h-full w-auto object-contain object-top absolute top-0 left-1/2 -translate-x-1/2 opacity-0"
            muted
            playsInline
            preload="auto"
          >
            <source src="/assets/videos/man-to-ai.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Text Content - Remaining 50vh */}
        <div className="min-h-[50vh] flex flex-col items-left justify-center self-center gap-3 px-8 text-left max-w-4xl">
          <p
            ref={line1Ref}
            className="text-base md:text-xl font-helvetica  text-white/70 opacity-0"
          >
            there exists a huge opportunity to create a
          </p>

          <h1
            ref={line2Ref}
            className="text-xl md:text-2xl font-tussilago font-bold text-white tracking-wider opacity-0"
          >
            GENERATIONAL HEALTHCARE COMPANY
          </h1>

          <p
            ref={line3Ref}
            className="text-base md:text-xl font-helvetica  text-white/70 opacity-0"
          >
            with a fervent community and cult-like following
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
