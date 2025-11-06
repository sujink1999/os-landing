"use client";

import { useState, useEffect } from "react";
import BorderAnimation from "./BorderAnimation";

const MicrobeImage = ({ src, alt, animationName, delay = 0 }) => {
  return (
    <div className="relative w-1/3 h-full flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="w-10 h-10 object-contain p-1"
        style={{
          animation: `${animationName} 3s ease-in-out infinite`,
          animationDelay: `${delay}ms`,
        }}
      />
      {/* Corner borders - touching at corners */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left corner */}
        <div className="absolute top-0 left-0 w-4 h-px bg-border" />
        <div className="absolute top-0 left-0 w-px h-4 bg-border" />

        {/* Top right corner */}
        <div className="absolute top-0 right-0 w-4 h-px bg-border" />
        <div className="absolute top-0 right-0 w-px h-4 bg-border" />

        {/* Bottom left corner */}
        <div className="absolute bottom-0 left-0 w-4 h-px bg-border" />
        <div className="absolute bottom-0 left-0 w-px h-4 bg-border" />

        {/* Bottom right corner */}
        <div className="absolute bottom-0 right-0 w-4 h-px bg-border" />
        <div className="absolute bottom-0 right-0 w-px h-4 bg-border" />
      </div>
    </div>
  );
};

const Microbiome = ({ delay = 0 }) => {
  const contentDelay = delay + 500;

  const microbeNames = [
    ["BIFIDOBACTERIUM", "LACTOBACILLUS", "AKKERMANSIA"],
    ["BACTEROIDES", "PREVOTELLA", "RUMINOCOCCUS"],
    ["FAECALIBACTERIUM", "STREPTOCOCCUS", "CLOSTRIDIUM"],
    ["ENTEROCOCCUS", "EUBACTERIUM", "ROSEBURIA"],
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const [showNames, setShowNames] = useState(false);

  useEffect(() => {
    // Show names after delay
    const showTimer = setTimeout(() => {
      setShowNames(true);
    }, delay + 500);

    return () => clearTimeout(showTimer);
  }, [delay]);

  useEffect(() => {
    if (!showNames) return;

    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % microbeNames.length);
    }, 400);

    return () => clearInterval(interval);
  }, [showNames]);

  return (
    <>
      {showNames && (
        <>
          <p className=" absolute left-[358px] top-[540px] text-[9px] font-aoi text-white/60">
            {microbeNames[currentSet][0]}
          </p>
          <p className=" absolute top-[660px] left-[370px] text-[9px] font-aoi text-white/60">
            {microbeNames[currentSet][1]}
          </p>
          <p className=" absolute top-[660px] left-[520px] text-[9px] font-aoi text-white/60 ">
            {microbeNames[currentSet][2]}
          </p>
        </>
      )}
      <div className="absolute left-[358px] top-[560px] w-[250px] h-[90px] p-2 overflow-hidden">
        <BorderAnimation width={250} height={90} delay={delay} />

        <div
          className="flex gap-2 h-full animate-scale-fade-in"
          style={{ animationDelay: `${contentDelay}ms` }}
        >
          <MicrobeImage
            src="/assets/images/microbe-1.png"
            alt="Microbe 1"
            animationName="microbe-float-1"
            delay={0}
          />
          <MicrobeImage
            src="/assets/images/microbe-2.png"
            alt="Microbe 2"
            animationName="microbe-float-2"
            delay={1300}
          />
          <MicrobeImage
            src="/assets/images/microbe-3.png"
            alt="Microbe 3"
            animationName="microbe-float-3"
            delay={2600}
          />
        </div>
      </div>
    </>
  );
};

export default Microbiome;
