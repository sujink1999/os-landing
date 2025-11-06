"use client";

import { useState, useEffect } from "react";
import BorderAnimation from "./BorderAnimation";

const WorkoutRegimen = ({ delay = 0 }) => {
  const contentDelay = delay + 500;
  const workouts = [
    { name: "ABS", values: ["3x15", "4x12", "3x20", "5x10"] },
    { name: "QUADS", values: ["4x12", "3x15", "5x10", "4x8"] },
    { name: "HIIT", values: ["25min", "20min", "30min", "15min"] },
    { name: "CHEST", values: ["4x10", "3x12", "5x8", "4x15"] },
    { name: "BACK", values: ["4x8", "3x10", "5x6", "4x12"] },
    { name: "CARDIO", values: ["30min", "25min", "35min", "20min"] },
    { name: "ARMS", values: ["3x12", "4x10", "3x15", "5x8"] },
    { name: "LEGS", values: ["4x15", "3x20", "5x12", "4x10"] },
  ];

  const [currentIndices, setCurrentIndices] = useState(workouts.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndices((prev) =>
        prev.map((index, i) => (index + 1) % workouts[i].values.length)
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" absolute left-[618px] top-[530px] w-[250px] h-[180px] overflow-hidden">
      <BorderAnimation width={250} height={180} delay={delay} />
      <div
        className=" flex justify-center items-center animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        <p className="text-xs font-aoi text-white/60 pt-2">WORKOUT REGIMEN</p>
      </div>
      <div
        className=" w-[60%] h-[135px]  mt-3 border border-border -ml-px flex animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        <div className=" h-full flex-1 flex flex-col justify-around p-2">
          {workouts.slice(0, 4).map((workout, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-[8px] font-aoi text-white/70">
                {workout.name}
              </span>
              <span className="text-[7px] font-aoi text-white/50">
                {workout.values[currentIndices[index]]}
              </span>
            </div>
          ))}
        </div>
        {/* <div className="w-px h-full bg-border" /> */}
        <div className=" h-full flex-1 flex flex-col justify-around p-2">
          {workouts.slice(4).map((workout, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-[8px] font-aoi text-white/70">
                {workout.name}
              </span>
              <span className="text-[7px] font-aoi text-white/50">
                {workout.values[currentIndices[index + 4]]}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* <img
        src="/assets/images/dna.png"
        alt="Workout Regimen"
        className=" absolute bottom-0 right-0 h-[140px] object-contain animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      /> */}
    </div>
  );
};

export default WorkoutRegimen;
