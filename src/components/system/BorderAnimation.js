"use client";

import { Colors } from "@/lib/colors";
import { useEffect, useRef, useState } from "react";

const BorderAnimation = ({ width, height, delay = 0, strokeWidth = 1 }) => {
  const svgRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (svgRef.current) {
      const bbox = svgRef.current.getBoundingClientRect();
      setDimensions({ width: bbox.width, height: bbox.height });
    }
  }, []);

  const perimeter = 2 * (dimensions.width + dimensions.height);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 pointer-events-none"
      width={width}
      height={height}
      style={{ animationDelay: `${delay}ms` }}
    >
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="none"
        stroke={Colors.border}
        strokeWidth={strokeWidth}
        strokeDasharray={perimeter || 0}
        strokeDashoffset={perimeter || 0}
        className="animate-border-draw-svg"
        style={{ animationDelay: `${delay}ms` }}
      />
    </svg>
  );
};

export default BorderAnimation;
