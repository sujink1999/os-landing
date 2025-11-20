import React from "react";

const GlassCard = React.forwardRef(({ children, className = "" }, ref) => {
  return (
    <div
      ref={ref}
      className={`bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl ${className}`}
    >
      {children}
    </div>
  );
});

GlassCard.displayName = "GlassCard";

export default GlassCard;
