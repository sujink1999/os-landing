"use client";

import { useState, useEffect } from "react";
import BioMarkerTile from "./BioMarkerTile";
import BorderAnimation from "./BorderAnimation";

const BioMarkers = ({ delay = 0 }) => {
  const contentDelay = delay + 500;
  const [activeIndices, setActiveIndices] = useState([0, 1, 2]);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndices((prev) => {
        // Remove one random index and add a new random one
        const randomRemoveIndex = Math.floor(Math.random() * prev.length);
        const remaining = prev.filter((_, i) => i !== randomRemoveIndex);

        // Get a new random index that's not already active
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * 18); // Total 18 biomarkers
        } while (remaining.includes(newIndex));

        return [...remaining, newIndex];
      });
      setAnimationKey((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" absolute -bottom-px left-4 w-[330px] h-[410px] p-3 pt-12 flex-col flex gap-1.5 overflow-hidden">
      <BorderAnimation width={330} height={410} delay={delay} />
      <div
        className="flex flex-col gap-3 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        {/* First row */}
        <div className="flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <BioMarkerTile
              key={`hsCRP-${animationKey}-${activeIndices.includes(0)}`}
              label="HsCRP"
              dataPoints={[20, 50, 48, 55, 60, 58, 65, 62, 70, 68]}
              animationDelay={activeIndices.includes(0) ? 0 : 9999999}
            />
            <BioMarkerTile
              key={`hdl-${animationKey}-${activeIndices.includes(1)}`}
              label="HDL"
              dataPoints={[45, 60, 52, 65, 58, 70, 62, 68, 55, 75]}
              animationDelay={activeIndices.includes(1) ? 0 : 9999999}
            />
            <BioMarkerTile
              key={`ldl-${animationKey}-${activeIndices.includes(2)}`}
              label="LDL"
              dataPoints={[60, 55, 58, 45, 52, 40, 48, 35, 42, 38]}
              animationDelay={activeIndices.includes(2) ? 0 : 9999999}
            />
            <BioMarkerTile
              key={`tsh-${animationKey}-${activeIndices.includes(3)}`}
              label="TSH"
              dataPoints={[30, 40, 32, 45, 38, 50, 42, 48, 35, 52]}
              animationDelay={activeIndices.includes(3) ? 0 : 9999999}
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <BioMarkerTile
              key={`glucose-${animationKey}-${activeIndices.includes(4)}`}
              label="Glucose"
              dataPoints={[50, 48, 45, 42, 40, 38, 40, 42, 45, 48]}
              animationDelay={activeIndices.includes(4) ? 0 : 9999999}
            />
            <BioMarkerTile
              key={`hba1c-${animationKey}-${activeIndices.includes(5)}`}
              label="HbA1c"
              dataPoints={[35, 45, 38, 50, 42, 55, 48, 52, 40, 58]}
              animationDelay={activeIndices.includes(5) ? 0 : 9999999}
            />
            <BioMarkerTile
              key={`cortisol-${animationKey}-${activeIndices.includes(6)}`}
              label="Cortisol"
              dataPoints={[65, 55, 62, 48, 58, 52, 60, 45, 55, 42]}
              animationDelay={activeIndices.includes(6) ? 0 : 9999999}
            />
            <BioMarkerTile
              key={`vitaminD-${animationKey}-${activeIndices.includes(7)}`}
              label="Vitamin D"
              dataPoints={[40, 50, 45, 55, 48, 60, 52, 58, 50, 62]}
              animationDelay={activeIndices.includes(7) ? 0 : 9999999}
            />
          </div>
        </div>

        {/* Second row */}
        <div className="flex items-center gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <BioMarkerTile
              key={`iron-${animationKey}-${activeIndices.includes(8)}`}
              label="Iron"
              dataPoints={[55, 68, 60, 72, 62, 75, 65, 70, 58, 78]}
              animationDelay={activeIndices.includes(8) ? 0 : 9999999}
            />
            <BioMarkerTile
              key={`b12-${animationKey}-${activeIndices.includes(9)}`}
              label="B12"
              dataPoints={[48, 60, 52, 65, 55, 68, 58, 62, 50, 70]}
              animationDelay={activeIndices.includes(9) ? 0 : 9999999}
            />
            <BioMarkerTile
              key={`folate-${animationKey}-${activeIndices.includes(10)}`}
              label="Folate"
              dataPoints={[42, 55, 48, 60, 50, 62, 52, 58, 45, 65]}
              animationDelay={activeIndices.includes(10) ? 0 : 9999999}
            />
            <BioMarkerTile
              key={`omega3-${animationKey}-${activeIndices.includes(11)}`}
              label="Omega-3"
              dataPoints={[38, 50, 42, 55, 45, 58, 48, 52, 40, 60]}
              animationDelay={activeIndices.includes(11) ? 0 : 9999999}
            />
            <BioMarkerTile
              key={`calcium-${animationKey}-${activeIndices.includes(12)}`}
              label="Calcium"
              dataPoints={[55, 48, 52, 42, 50, 45, 48, 40, 52, 48]}
              animationDelay={activeIndices.includes(12) ? 0 : 9999999}
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <BioMarkerTile
              key={`t3-${animationKey}-${activeIndices.includes(13)}`}
              label="T3"
              dataPoints={[52, 45, 50, 40, 48, 42, 45, 38, 48, 45]}
              animationDelay={activeIndices.includes(13) ? 0 : 9999999}
            />
            <BioMarkerTile
              key={`t4-${animationKey}-${activeIndices.includes(14)}`}
              label="T4"
              dataPoints={[60, 70, 65, 75, 68, 78, 72, 80, 65, 82]}
              animationDelay={activeIndices.includes(14) ? 0 : 9999999}
            />
            <BioMarkerTile
              key={`magnesium-${animationKey}-${activeIndices.includes(15)}`}
              label="Magnesium"
              dataPoints={[45, 55, 50, 60, 52, 62, 55, 65, 50, 68]}
              animationDelay={activeIndices.includes(15) ? 0 : 9999999}
            />
            <BioMarkerTile
              key={`zinc-${animationKey}-${activeIndices.includes(16)}`}
              label="Zinc"
              dataPoints={[50, 60, 55, 65, 58, 68, 62, 70, 58, 72]}
              animationDelay={activeIndices.includes(16) ? 0 : 9999999}
            />
            <BioMarkerTile
              key={`selenium-${animationKey}-${activeIndices.includes(17)}`}
              label="Selenium"
              dataPoints={[42, 50, 46, 54, 48, 56, 52, 58, 48, 60]}
              animationDelay={activeIndices.includes(17) ? 0 : 9999999}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioMarkers;
