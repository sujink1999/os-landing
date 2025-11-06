"use client";

import { useState } from "react";

const GlassButton = ({
  onClick,
  children,
  type = "button",
  disabled = false,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Glassmorphism button */}
      <div className="p-px bg-white/5 rounded-xl backdrop-blur-xl">
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full px-6 py-4 rounded-xl bg-black/70 backdrop-blur-2xl text-white font-tussilago font-light text-sm transition-all duration-300 z-10 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            boxShadow: isHovered
              ? "0 8px 32px rgba(255, 92, 42, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              : "0 4px 16px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          <span className="text-white/80">{children}</span>
          {/* Right arrow */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/80"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GlassButton;
