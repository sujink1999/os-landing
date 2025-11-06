"use client";

import { useState, useEffect } from "react";
import GridLines from "./GridLines";
import BorderAnimation from "./BorderAnimation";

const HumanModel = ({ delay = 0 }) => {
  const contentDelay = delay + 500;
  const labels = [
    { text: "DELTOID ANTERIOR", position: "top-[100px] right-10" },
    { text: "RECTUS ABDOMINIS", position: "top-[200px] left-8" },
    { text: "VASTUS LATERALIS", position: "top-[280px] right-4" },
    { text: "TIBIALIS ANTERIOR", position: "bottom-[80px] left-12" },
    { text: "PECTORALIS MAJOR", position: "top-[120px] left-6" },
    { text: "EXTERNAL OBLIQUE", position: "top-[200px] right-6" },
    { text: "QUADRICEPS FEMORIS", position: "top-[280px] left-4" },
    { text: "GASTROCNEMIUS", position: "bottom-[80px] right-10" },
  ];
  const [visibleLabels, setVisibleLabels] = useState([]);

  useEffect(() => {
    const getRandomIndex = (exclude) => {
      let index;
      do {
        index = Math.floor(Math.random() * labels.length);
      } while (exclude.includes(index));
      return index;
    };

    const interval = setInterval(() => {
      setVisibleLabels((prev) => {
        if (prev.length < 3) {
          // Add a random label
          const newIndex = getRandomIndex(prev);
          return [...prev, newIndex];
        } else {
          // Remove a random label
          const randomRemoveIndex = Math.floor(Math.random() * prev.length);
          return prev.filter((_, i) => i !== randomRemoveIndex);
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, [labels.length]);

  return (
    <div className=" absolute top-14 left-4 w-[330px] h-[460px] pb-7 overflow-hidden">
      <BorderAnimation width={330} height={460} delay={delay} />
      <div
        className=" w-full h-full relative flex items-center justify-center animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        <GridLines verticalLines={20} horizontalLines={30} color="#3e3e3e50" />
        <img
          src="/assets/images/human-model.png"
          alt="Human Model"
          className=" object-contain w-[300px] h-[400px] relative "
        />
      </div>

      {labels.map(
        (label, index) =>
          visibleLabels.includes(index) && (
            <p
              key={index}
              className={`text-[9px] font-aoi text-[#999] absolute ${label.position}`}
            >
              {label.text}
            </p>
          )
      )}
    </div>
  );
};

export default HumanModel;
