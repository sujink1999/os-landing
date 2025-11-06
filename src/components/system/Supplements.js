"use client";

import { useState, useEffect } from "react";
import BorderAnimation from "./BorderAnimation";

const Supplements = ({ delay = 0 }) => {
  const contentDelay = delay + 500;
  const supplements = [
    { name: "Magnesium", amounts: ["100mg", "120mg", "80mg", "150mg"] },
    { name: "Vitamin D3", amounts: ["2000IU", "2500IU", "1500IU", "3000IU"] },
    { name: "Omega-3", amounts: ["1000mg", "1200mg", "800mg", "1500mg"] },
    { name: "Zinc", amounts: ["15mg", "20mg", "10mg", "25mg"] },
    { name: "Creatine", amounts: ["5g", "6g", "4g", "7g"] },
    { name: "Protein", amounts: ["30g", "35g", "25g", "40g"] },
  ];

  const [currentIndices, setCurrentIndices] = useState(
    supplements.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndices((prev) =>
        prev.map((index, i) => (index + 1) % supplements[i].amounts.length)
      );
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute left-[618px] bottom-[30px] w-[220px] h-[170px] p-3 ">
      <BorderAnimation width={220} height={170} delay={delay} />
      <div
        className="flex flex-col gap-2 items-center pt-4 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        {supplements.map((supplement, index) => (
          <div key={index} className="flex justify-between w-full px-2">
            <span className="text-[9px] font-aoi text-white/80 uppercase">
              {supplement.name}
            </span>
            <span className="text-[9px] font-aoi text-white/50 uppercase">
              {supplement.amounts[currentIndices[index]]}
            </span>
          </div>
        ))}
      </div>
      {/* <img
        src="/assets/images/pill.png"
        alt="Supplements"
        className=" absolute -bottom-[24px] -left-[35px] h-[80px] object-contain"
      /> */}
    </div>
  );
};

export default Supplements;
