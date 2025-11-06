import { Colors } from "@/lib/colors";

const BorderAnimation = ({ width, height, delay = 0, strokeWidth = 1 }) => {
  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width={width}
      height={height}
      style={{ animationDelay: `${delay}ms` }}
    >
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill="none"
        stroke={Colors.border}
        strokeWidth={strokeWidth}
        strokeDasharray={2 * (width + height)}
        strokeDashoffset={2 * (width + height)}
        className="animate-border-draw-svg"
        style={{ animationDelay: `${delay}ms` }}
      />
    </svg>
  );
};

export default BorderAnimation;
