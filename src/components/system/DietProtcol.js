"use client";

import { useState, useEffect } from "react";
import BorderAnimation from "./BorderAnimation";

const DietProtcol = ({ delay = 0 }) => {
  const contentDelay = delay + 500;
  const dietItems = [
    { name: "Cruciferous", amounts: ["200g", "250g", "180g", "220g"] },
    { name: "Polyphenols", amounts: ["150mg", "180mg", "120mg", "200mg"] },
    {
      name: "Phytonutrients",
      amounts: ["varied", "high", "moderate", "optimal"],
    },
    {
      name: "Antioxidants",
      amounts: ["5000 ORAC", "6000 ORAC", "4500 ORAC", "5500 ORAC"],
    },
    { name: "Prebiotics", amounts: ["10g", "12g", "8g", "15g"] },
    { name: "Fiber", amounts: ["35g", "40g", "30g", "38g"] },
  ];

  const [currentIndices, setCurrentIndices] = useState(dietItems.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndices((prev) =>
        prev.map((index, i) => (index + 1) % dietItems[i].amounts.length)
      );
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute left-[837px] -bottom-px w-[240px] h-[160px] p-3 overflow-hidden">
      <BorderAnimation width={240} height={160} delay={delay} />
      <div
        className="flex justify-center mb-3 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        <p className="text-xs font-aoi text-white/60">DIET PROTOCOL</p>
      </div>
      <div
        className="flex flex-col gap-2 items-center animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        {dietItems.map((item, index) => (
          <div key={index} className="flex gap-2 w-full px-2">
            <span className="text-[9px] font-aoi text-white/80 uppercase">
              {item.name}
            </span>
            <span className="text-[9px] font-aoi text-white/50 uppercase">
              {item.amounts[currentIndices[index]]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietProtcol;
