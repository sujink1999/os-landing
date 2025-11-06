import GridLines from "@/components/system/GridLines";

const SleepStressChart = ({ animationDelay = 0 }) => {
  // Sleep stress data with gradient colors (green -> cyan -> yellow)
  const dataPoints = [
    { value: 20, color: "#10b981" },
    { value: 25, color: "#10b981" },
    { value: 18, color: "#10b981" },
    { value: 15, color: "#10b981" },
    { value: 12, color: "#06b6d4" },
    { value: 8, color: "#06b6d4" },
    { value: 6, color: "#06b6d4" },
    { value: 5, color: "#06b6d4" },
    { value: 18, color: "#06b6d4" },
    { value: 10, color: "#06b6d4" },
    { value: 8, color: "#06b6d4" },
    { value: 6, color: "#06b6d4" },
    { value: 5, color: "#06b6d4" },
    { value: 22, color: "#10b981" },
    { value: 28, color: "#10b981" },
    { value: 35, color: "#eab308" },
  ];

  const maxValue = Math.max(...dataPoints.map((d) => d.value));
  const minValue = Math.min(...dataPoints.map((d) => d.value));
  const range = maxValue - minValue;

  // Normalize to center the data vertically
  const normalizeValue = (value) => {
    const normalized = ((value - minValue) / range) * 50 + 25; // Use 50% of height, centered at 50%
    return normalized;
  };

  return (
    <div className="flex flex-col gap-2 flex-1">
      <div className="relative w-full h-15 bg-black/20 ">
        {/* <GridLines verticalLines={15} horizontalLines={6} color="#2e2e2e50" /> */}
        {/* Horizontal reference line */}
        <div className="absolute left-0 right-0 h-px bg-[#ffffff60] top-[30%]" />

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Create gradient from green to cyan to yellow */}
          <defs>
            <linearGradient
              id="stressGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#ffffff90" />
              <stop offset="50%" stopColor="#ffffff90" />
              <stop offset="90%" stopColor="#ffffff90" />
              <stop offset="100%" stopColor="#ffffff90" />
            </linearGradient>
          </defs>

          {/* Main line path */}
          <path
            d={dataPoints
              .map((point, index) => {
                const x = (index / (dataPoints.length - 1)) * 100;
                const y = 100 - normalizeValue(point.value);
                return `${index === 0 ? "M" : "L"} ${x} ${y}`;
              })
              .join(" ")}
            fill="none"
            stroke="url(#stressGradient)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            style={{
              animation: `line-draw 2s ease-out forwards`,
              animationDelay: `${animationDelay}ms`,
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default SleepStressChart;
