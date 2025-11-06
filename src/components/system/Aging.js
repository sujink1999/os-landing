"use client";

import { useState, useEffect } from "react";
import GridLines from "./GridLines";
import BorderAnimation from "./BorderAnimation";

const Aging = ({ delay = 0 }) => {
  const contentDelay = delay + 500;
  const chronologicalAge = 28;
  const biologicalAge = 24;

  const [paceValue, setPaceValue] = useState(0.84);

  useEffect(() => {
    const interval = setInterval(() => {
      setPaceValue((prev) => {
        const change = (Math.random() - 0.5) * 0.1; // Random change between -0.3 and +0.3
        const newValue = prev + change;
        // Keep value between 0 and 1.5
        return Math.max(0.5, Math.min(1.5, newValue));
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute left-[358px] -bottom-px w-[290px] h-[170px] p-3 overflow-hidden">
      <BorderAnimation width={290} height={170} delay={delay} />
      <div
        className="flex justify-center mb-4 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        <p className="text-xs font-aoi text-white/60">PACE OF AGING</p>
      </div>
      <div
        className="flex justify-between items-center pr-10 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        <p className="text-[7px] font-aoi text-white/60">CHRONOLOGICAL AGE</p>
        <p className="text-[7px] font-aoi text-white/60">BIOLOGICAL AGE</p>
      </div>
      <div
        className="flex justify-between items-center pr-10 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        <p className="text-[9px] font-aoi text-white/70">{chronologicalAge}</p>
        <p className="text-[9px] font-aoi text-white/70">{biologicalAge}</p>
      </div>

      {/* Pace meter - bottom left */}
      <div
        className="absolute bottom-3 left-3 w-1/2 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        <div className="relative w-full h-10 bg-black/30 border border-border">
          {/* Tick marks */}

          <GridLines verticalLines={30} horizontalLines={0} color="#3e3e3e50" />
          <div className="absolute inset-0 flex justify-between px-2 py-2">
            {[0, 0.5, 1, 1.5].map((tick) => (
              <div key={tick} className="flex flex-col items-center">
                <div className="w-px h-2 bg-white/40" />
                <span className="text-[8px] font-aoi text-white/40 mt-1">
                  {tick}
                </span>
              </div>
            ))}
          </div>
          {/* Pace indicator */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-[2px] h-12 bg-white transition-all duration-300"
            style={{ left: `${(paceValue / 1.5) * 100}%` }}
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-lg font-aoi text-white">
              {paceValue.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aging;
