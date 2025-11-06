"use client";

import { useState } from "react";

const GlowingButton = ({ onClick, disabled = false, isLoading = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {/* Moving glow light that travels around the border */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        <div
          className="absolute top-0 left-0 w-1/2 h-6 rounded-full"
          style={{
            backgroundColor: "#FF5C2A",
            filter: "blur(8px)",
            animation: isHovered
              ? "border-light 20s ease-in-out infinite, glow-pulse 5s ease-in-out infinite"
              : "none",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
      </div>

      {/* Glass border container */}
      <div className="p-px bg-white/10 rounded-xl backdrop-blur-xl">
        <div
          className="relative w-12 h-12 rounded-xl bg-black/70 backdrop-blur-2xl flex items-center justify-center transition-all duration-300"
          style={{
            boxShadow: isHovered
              ? "0 8px 32px rgba(255, 92, 42, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              : "0 4px 16px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          {isLoading ? (
            <div
              className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full"
              style={{
                animation: "spin 1s linear infinite",
              }}
            />
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white/80"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </button>
  );
};

export default GlowingButton;
