"use client";

import { useState, useEffect } from "react";

const CircularProgress = ({ label, percentage, color = "#10b981" }) => {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const [currentPercentage, setCurrentPercentage] = useState(percentage);

  useEffect(() => {
    let direction = -2; // Start by decreasing by 3
    const minValue = percentage - 10;
    const maxValue = percentage + 10;

    const interval = setInterval(() => {
      setCurrentPercentage((prev) => {
        const next = prev + direction;

        // Reverse direction at boundaries
        if (next <= minValue) {
          direction = 2;
          return minValue;
        } else if (next >= maxValue) {
          direction = -2;
          return maxValue;
        }

        return next;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [percentage]);

  const strokeDashoffset =
    circumference - (currentPercentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-16 h-16">
        <svg className="w-full h-full -rotate-90">
          {/* Background circle */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="#2e2e2e"
            strokeWidth="4"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke={color}
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.8s ease-in-out" }}
          />
        </svg>
        {/* Percentage text in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-aoi text-white mt-1">
            {currentPercentage}%
          </span>
        </div>
      </div>
      <p className="text-[10px] mt-[2px] font-aoi text-white/60 uppercase">
        {label}
      </p>
    </div>
  );
};

export default CircularProgress;
