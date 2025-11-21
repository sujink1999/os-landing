"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Invest = () => {
  const sectionRef = useRef(null);
  const logoTextRef = useRef(null);
  const leftTextRef = useRef(null);
  const cardRef = useRef(null);
  const rightTextRef = useRef(null);
  const mobileTextRef = useRef(null);
  const headingRef = useRef(null);
  const descTextRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const logoText = logoTextRef.current;
    const leftText = leftTextRef.current;
    const card = cardRef.current;
    const rightText = rightTextRef.current;
    const mobileText = mobileTextRef.current;
    const heading = headingRef.current;
    const descText = descTextRef.current;

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

    // Animate logo and text
    if (logoText) {
      tl.fromTo(
        logoText,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.1 }
      );
    }

    // Animate mobile text (appears on mobile only)
    if (mobileText) {
      tl.fromTo(
        mobileText,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    // Animate left text (desktop)
    if (leftText) {
      tl.fromTo(
        leftText,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    // Animate card
    if (card) {
      tl.fromTo(
        card,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.1 },
        "-=0.05"
      );
    }

    // Animate right text (desktop)
    if (rightText) {
      tl.fromTo(
        rightText,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    // Animate heading
    if (heading) {
      tl.fromTo(
        heading,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    // Animate description
    if (descText) {
      tl.fromTo(
        descText,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full max-w-[1200px] mx-auto z-10 flex flex-col items-center px-4 mt-[5%]"
    >
      <div
        ref={logoTextRef}
        className="flex items-center gap-4 self-start opacity-0"
      >
        <img
          src="/assets/images/vanta-logo.png"
          alt="Invest"
          className="w-12 h-12 object-contain"
        />
        <p className="font-aoi text-xs">
          INVEST IN
          <br />
          THE ECOSYSTEM
        </p>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center md:justify-start md:flex-row flex-col mt-[10%] gap-4 relative">
          <p
            ref={mobileTextRef}
            className="md:hidden block font-helvetica font-light text-base text-white/60 text-left self-start opacity-0"
          >
            To help us engineer the future of health infrastructure to build
            proof, ignite culture, and scale the ecosystem.
          </p>
          <p
            ref={leftTextRef}
            className="hidden md:block font-helvetica font-medium text-base text-white/60 text-right self-start opacity-0"
          >
            To help us engineer the future <br />
            of health infrastructure
          </p>
          <div
            ref={cardRef}
            className="w-[280px] h-[400px] bg-white/10 rounded-2xl opacity-0"
          />
          <p
            ref={rightTextRef}
            className="hidden md:block font-helvetica font-medium text-base text-white/60 text-left self-center opacity-0"
          >
            to build proof, ignite culture,
            <br /> and scale the ecosystem.
          </p>
        </div>
        <div className="flex flex-col -mt-8 gap-2">
          <p
            ref={headingRef}
            className="font-tussilago text-2xl md:text-3xl text-white font-bold text-center opacity-0"
          >
            WE&apos;RE RAISING{" "}
            <span className="font-aoi animated-gradient-shimmer">$</span>
            <span className="animated-gradient-shimmer">1.5 MILLION</span>
          </p>
          <p
            ref={descTextRef}
            className="font-helvetica font-medium text-base text-white/50 text-center opacity-0"
          >
            from the right strategic investors — builders, believers, and
            operators who see what's coming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invest;
