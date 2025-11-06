"use client";

import { useState, useEffect, useRef } from "react";
import GridLines from "./GridLines";
import BorderAnimation from "./BorderAnimation";

const Brain = ({ delay = 0 }) => {
  const contentDelay = delay + 500;
  const [numbers, setNumbers] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNumber = `${Math.floor(Math.random() * 100)}.${Math.floor(
        Math.random() * 100
      )}`;
      setNumbers((prev) => {
        const updated = [...prev, newNumber];
        // Keep only the last 20 numbers
        return updated.length > 20 ? updated.slice(-20) : updated;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Scroll to bottom when numbers change
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [numbers]);

  return (
    <div className=" absolute left-[875px] top-[530px] w-[160px] h-[180px] flex-col overflow-hidden">
      <BorderAnimation width={160} height={180} delay={delay} />
      <div
        ref={containerRef}
        className=" w-full h-[60px] overflow-y-auto overflow-x-hidden animate-scale-fade-in scrollbar-hide"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        <div className=" flex flex-wrap font-aoi text-white/60 text-[8px] px-1">
          {numbers.join(" ")}
        </div>
      </div>
      <div
        className=" w-full relative flex-1 border-t border-border flex items-center justify-center h-[120px] animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        <GridLines verticalLines={15} horizontalLines={10} color="#2e2e2e50" />
        <img
          src="/assets/images/brain.png"
          alt="Brain"
          className=" w-full h-[110px] object-contain"
        />
      </div>
    </div>
  );
};

export default Brain;
