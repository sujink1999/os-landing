"use client";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs - black and white with increased brightness */}

      <div className="absolute -bottom-[200px] left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-white/10 via-white/10 to-transparent rounded-full blur-3xl animate-glow-rotate" />
      <div
        className="absolute -bottom-[200px] right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-white/25 via-gray-300/15 to-transparent rounded-full blur-3xl animate-glow-rotate"
        style={{ animationDelay: "2s", animationDuration: "4s" }}
      />
      <div
        className="absolute -bottom-[150px] left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-gray-200/20 via-white/15 to-transparent rounded-full blur-3xl animate-glow-rotate"
        style={{ animationDelay: "1s", animationDuration: "5s" }}
      />

      {/* Gradient fade to black at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-black" />
    </div>
  );
};

export default AnimatedBackground;
