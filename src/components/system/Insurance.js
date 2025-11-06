"use client";

import { useState, useEffect } from "react";
import BorderAnimation from "./BorderAnimation";

const Insurance = ({ delay = 0 }) => {
  const contentDelay = delay + 500;
  const words = ["IPD", "COVERAGE", "OPD", "COVERAGE", "CLAIMS", "HISTORY", "PANELS", "HOSPITALS"];
  const [displayedWords, setDisplayedWords] = useState([]);

  useEffect(() => {
    let currentIndex = 0;
    let isAdding = true;

    const interval = setInterval(() => {
      if (isAdding) {
        if (currentIndex < words.length) {
          setDisplayedWords((prev) => [...prev, words[currentIndex]]);
          currentIndex++;
        } else {
          isAdding = false;
          currentIndex = words.length;
        }
      } else {
        if (currentIndex > 0) {
          currentIndex--;
          setDisplayedWords((prev) => prev.slice(0, -1));
        } else {
          isAdding = true;
          currentIndex = 0;
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" absolute right-[120px] top-14 w-[120px] h-[170px] overflow-hidden">
      <BorderAnimation width={120} height={170} delay={delay} />
      <div className=" h-5 border-b border-border animate-scale-fade-in" style={{ animationDelay: `${contentDelay}ms` }} />

      <div className=" flex flex-col gap-2 animate-scale-fade-in" style={{ animationDelay: `${contentDelay}ms` }}>
        <h1 className="text-xs font-aoi text-white/60 py-2 pl-1">
          [INSURANCE]
        </h1>

        <div className=" flex flex-col gap-2 px-2">
          <div className="w-full h-1 bg-border/70" />
          <div className="w-[70%] h-1 bg-border/70" />
          <div className="w-[90%] h-1 bg-border/70" />
        </div>
        <div className=" flex flex-wrap gap-1 text-[8px] font-aoi text-white/60 pl-2 mt-2">
          <p>{displayedWords.join(" ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
