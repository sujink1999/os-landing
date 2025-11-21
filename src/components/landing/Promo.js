"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Promo = () => {
  const sectionRef = useRef(null);
  const pursuitTextRef = useRef(null);
  const higherTextRef = useRef(null);
  const leftText1Ref = useRef(null);
  const leftText2Ref = useRef(null);
  const leftImgRef = useRef(null);
  const videoRef = useRef(null);
  const rightText1Ref = useRef(null);
  const rightText2Ref = useRef(null);
  const rightBadge1Ref = useRef(null);
  const rightBadge2Ref = useRef(null);
  const rightBadge3Ref = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pursuitText = pursuitTextRef.current;
    const higherText = higherTextRef.current;
    const leftText1 = leftText1Ref.current;
    const leftText2 = leftText2Ref.current;
    const leftImg = leftImgRef.current;
    const video = videoRef.current;
    const rightText1 = rightText1Ref.current;
    const rightText2 = rightText2Ref.current;
    const rightBadge1 = rightBadge1Ref.current;
    const rightBadge2 = rightBadge2Ref.current;
    const rightBadge3 = rightBadge3Ref.current;

    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "center center",
        scrub: 1,
      },
    });

    const scrollTriggerInstance = tl.scrollTrigger;

    // Sequential animations - animate each element individually
    if (pursuitText) {
      tl.fromTo(
        pursuitText,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.1 }
      );
    }

    if (higherText) {
      tl.fromTo(
        higherText,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.1 },
        "-=0.05"
      );
    }

    if (leftText1) {
      tl.fromTo(
        leftText1,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    if (leftImg) {
      tl.fromTo(
        leftImg,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.1 },
        "-=0.05"
      );
    }

    if (leftText2) {
      tl.fromTo(
        leftText2,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    if (video) {
      tl.fromTo(
        video,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.15 },
        "-=0.05"
      );
    }

    if (rightText1) {
      tl.fromTo(
        rightText1,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    if (rightText2) {
      tl.fromTo(
        rightText2,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    if (rightBadge1) {
      tl.fromTo(
        rightBadge1,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.1 },
        "-=0.05"
      );
    }

    if (rightBadge2) {
      tl.fromTo(
        rightBadge2,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.1 },
        "-=0.05"
      );
    }

    if (rightBadge3) {
      tl.fromTo(
        rightBadge3,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.1 },
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
      className="w-full max-w-[1000px] mx-auto z-10 flex flex-col items-center px-4 my-[5%] pt-30 md:pt-0 gap-8"
    >
      {/* Title section */}
      <div className="flex flex-col items-center text-center mb-10 gap-1">
        <p
          ref={pursuitTextRef}
          className="font-helvetica font-medium text-sm sm:text-base text-white opacity-0"
        >
          in pursuit of
        </p>
        <h1
          ref={higherTextRef}
          className="font-tussilago font-bold text-xl md:text-3xl text-center opacity-0"
        >
          <span className="animated-gradient-shimmer">HIGHER</span>{" "}
          <span className="text-white">HUMAN POTENTIAL</span>
        </h1>
      </div>

      {/* Video section */}
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="flex flex-col items-end justify-center self-end">
          <p
            ref={leftText1Ref}
            className="font-aoi-compact text-[10px] md:text-xs opacity-0"
          >
            BUILT FOR THE
          </p>

          <div className="flex items-end gap-2">
            <img
              ref={leftImgRef}
              src="/assets/images/enhanced.png"
              alt="Promo Image"
              className="w-6 h-6 object-contain opacity-0"
            />
            <p
              ref={leftText2Ref}
              className="font-aoi-compact text-[10px] md:text-xs opacity-0"
            >
              AMBITIOUS
            </p>
          </div>
        </div>
        <div
          ref={videoRef}
          className="flex-1 border-2 border-white/20 rounded-2xl overflow-hidden opacity-0"
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dpvQqmX6SUI?rel=0&modestbranding=1&controls=1&showinfo=0&fs=1&iv_load_policy=3"
              title="YouTube video player"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div className="flex md:max-w-[200px] flex-col items-start justify-center self-start gap-3">
          <p
            ref={rightText1Ref}
            className="font-aoi-compact text-[10px] md:text-xs text-primary opacity-0"
          >
            VANTA OS (ALPHA)- 2026
          </p>

          <p
            ref={rightText2Ref}
            className="font-aoi-compact text-[8px] text-white/50 md:text-xs uppercase opacity-0"
          >
            Vanta OS (Alpha) combines real-time wearable, biomarker, and
            lifestyle data into precise direction - connecting digital insight
            to real-world action.
          </p>

          <div className="flex flex-row gap-2 mt-4 md:flex-col">
            <div
              ref={rightBadge1Ref}
              className="border-[0.5px] border-white rounded-full px-4 py-[6px] text-[10px] md:text-[7px] font-aoi flex items-center justify-center opacity-0"
            >
              <p className="-mb-1">IDENTITY</p>
            </div>
            <div
              ref={rightBadge2Ref}
              className="border-[0.5px] border-white rounded-full px-4 py-[6px] text-[10px] md:text-[7px] font-aoi flex items-center justify-center opacity-0"
            >
              <p className="-mb-1">INTUITION</p>
            </div>
            <div
              ref={rightBadge3Ref}
              className="border-[0.5px] border-white rounded-full px-4 py-[6px] text-[10px] md:text-[7px] font-aoi flex items-center justify-center opacity-0"
            >
              <p className="-mb-1">INFORMATION</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
