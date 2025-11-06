"use client";

import { useState } from "react";

const GlowingInput = ({
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
  onKeyDown,
  disabled = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative  ${className}`}>
      {/* Dark glass container */}
      <div className="relative overflow-visible rounded-2xl">
        {/* Moving glow light that travels around the border */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <div
            className="absolute top-0 left-0 w-1/2 h-6 rounded-full "
            style={{
              backgroundColor: "#FF5C2A",
              animation:
                "border-light 20s ease-in-out infinite, glow-pulse 5s ease-in-out infinite",
            }}
          />
        </div>

        {/* Dark glassmorphism input */}
        <div className=" p-px bg-white/5 rounded-xl backdrop-blur-xl">
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={onKeyDown}
            className="  relative w-full px-6 py-4 rounded-xl bg-black/70 backdrop-blur-2xl font-regular text-white/80 font-tussilago font-light text-sm placeholder-white/40 focus:outline-none transition-all duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              boxShadow: isFocused
                ? "0 8px 32px rgba(255, 92, 42, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                : "0 4px 16px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GlowingInput;
