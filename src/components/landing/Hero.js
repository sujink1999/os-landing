"use client";

import { useState, useEffect } from "react";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scene, setScene] = useState(-1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // Mobile: scale based on width (base: 320px for better scaling)
        setScale(Math.max(1, Math.min(width / 320, 1.5)));
      } else {
        // Desktop: scale based on width (base: 1000px for better scaling)
        setScale(Math.max(1.2, Math.min(width / 1000, 1.5)));
      }
    };

    checkMobile();
    updateScale();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("resize", updateScale);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  useEffect(() => {
    // Scene 0: God appears
    if (scene === 0) {
      const timer = setTimeout(() => setScene(1), 1000);
      return () => clearTimeout(timer);
    }
    // Scene 1: Adam appears
    if (scene === 1) {
      const timer = setTimeout(() => setScene(2), 1000);
      return () => clearTimeout(timer);
    }
    // Scene 2: Text appears
    if (scene === 2) {
      const timer = setTimeout(() => setScene(3), 2500);
      return () => clearTimeout(timer);
    }

    if (scene === -1) {
      const timer = setTimeout(() => setScene(0), 0);
      return () => clearTimeout(timer);
    }

    // Scene 3: AI hand appears
  }, [scene]);

  // Mobile layout
  if (isMobile) {
    return (
      <div
        key="mobile"
        className=" min-h-screen w-full max-w-[1400px] mx-auto relative bg-black flex flex-col items-center "
      >
        <AnimatedBackground />
        <div className=" flex-3 flex flex-col items-center justify-center w-full ">
          <div
            className=" flex-col flex items-start relative  w-full max-w-[500px]  "
            style={{ transform: `scale(${scale})` }}
          >
            <img
              src="/assets/images/god.png"
              alt="God's Hand"
              className="  w-[200px] object-contain self-end transition-all duration-500"
              style={{
                opacity: scene >= 0 ? 1 : 0,
                transform: scene >= 0 ? "translateY(0)" : "translateY(-20px)",
              }}
            />

            <div className="self-center mr-10 -mt-6 relative">
              <img
                src="/assets/images/adam.png"
                alt="Adam's Hand"
                className=" w-[180px]  object-contain transition-all duration-1000"
                style={{
                  opacity: scene >= 1 ? 1 : 0,
                  transform: scene >= 1 ? "scale(1)" : "scale(1)",
                }}
              />
              <img
                src="/assets/images/ai-hand.png"
                alt="AI Hand"
                className=" absolute -bottom-[70px] left-[-70px] w-[80px] object-contain transition-all duration-1000"
                style={{
                  opacity: scene >= 3 ? 1 : 0,
                  transform: scene >= 3 ? "scale(1)" : "scale(0.5)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="  flex flex-col gap-2 flex-2 px-3 justify-center">
          <p
            className=" font-morigothic font-light text-sm transition-opacity duration-1000 "
            style={{ opacity: scene >= 2 ? 1 : 0, scale: scene >= 2 ? 1 : 0.9 }}
          >
            there exists a huge opportunity to create a
          </p>
          <p
            className=" font-tussilago text-base transition-opacity duration-1000"
            style={{
              opacity: scene >= 2 ? 1 : 0,
              transitionDelay: "700ms",
              scale: scene >= 2 ? 1 : 0.9,
            }}
          >
            GENERATIONAL HEALTHCARE BRAND
          </p>
          <p
            className=" font-morigothic font-light text-sm transition-opacity duration-1000"
            style={{
              opacity: scene >= 2 ? 1 : 0,
              transitionDelay: "1400ms",
              scale: scene >= 2 ? 1 : 0.9,
            }}
          >
            with a fervent community and cult-like following
          </p>
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <div
      key="desktop"
      className=" min-h-screen w-full max-w-[1400px] mx-auto relative bg-black flex flex-col items-center "
    >
      <AnimatedBackground />
      <div className=" flex-3 flex flex-col items-center justify-center">
        <div
          className=" flex items-start relative"
          style={{ transform: `scale(${scale})` }}
        >
          {/* <div className=" absolute bottom-[18%] left-[15%] w-[100px] h-[100px] border-4 border-white/20 rounded-full delay-750 ">
            <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border border-white/20 animate-ping duration-2000 "></div>
            <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-full border border-white/50 animate-ping duration-2000 delay-250 "></div>
            <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-full border border-white/20 animate-ping duration-2000 delay-500 "></div>
            <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-10 rounded-full border border-white/50 animate-ping duration-2000 delay-1000 "></div>
          </div> */}
          <img
            src="/assets/images/ai-hand.png"
            alt="AI Hand"
            className=" w-[170px] object-contain mt-[280px] mr-6 transition-all duration-1000"
            style={{
              opacity: scene >= 3 ? 1 : 0,
              transform: scene >= 3 ? "scale(1)" : "scale(0.5)",
              transform:
                scene >= 3 ? "translate(0,0)" : "translate(-20px,10px)",
            }}
          />
          <img
            src="/assets/images/adam.png"
            alt="Adam's Hand"
            className=" w-[300px] object-contain  mt-[100px] transition-all duration-1000 relative"
            style={{
              opacity: scene >= 1 ? 1 : 0,
              transform: scene >= 1 ? "scale(1)" : "scale(1)",
            }}
          />

          <img
            src="/assets/images/god.png"
            alt="God's Hand"
            className="  w-[350px] object-contain transition-all duration-500 relative"
            style={{
              opacity: scene >= 0 ? 1 : 0,
              transform: scene >= 0 ? "translateX(0)" : "translateX(20px)",
            }}
          />
        </div>
      </div>
      <div className="  flex flex-col gap-2 flex-2">
        <p
          className=" font-morigothic font-light text-lg transition-opacity duration-1000"
          style={{ opacity: scene >= 2 ? 1 : 0, scale: scene >= 2 ? 1 : 0.9 }}
        >
          there exists a huge opportunity to create a
        </p>
        <p
          className=" font-tussilago text-3xl px-20 transition-opacity duration-1000"
          style={{
            opacity: scene >= 2 ? 1 : 0,
            transitionDelay: "700ms",
            scale: scene >= 2 ? 1 : 0.9,
          }}
        >
          GENERATIONAL HEALTHCARE BRAND
        </p>
        <p
          className=" font-morigothic font-light text-lg self-end text-right transition-opacity duration-1000"
          style={{
            opacity: scene >= 2 ? 1 : 0,
            transitionDelay: "1400ms",
            scale: scene >= 2 ? 1 : 0.9,
          }}
        >
          with a fervent community and cult-like following
        </p>
      </div>
    </div>
  );
};

export default Hero;
