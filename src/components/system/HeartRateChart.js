import GridLines from "@/components/system/GridLines";

const HeartRateChart = ({ animationDelay = 0 }) => {
  // Simulated heart rate data points throughout the day (normalized 0-100)
  const dataPoints = [
    // Night/sleep (low, steady)
    35, 33, 32, 34, 33, 31, 30, 32, 33, 31, 30, 28, 30, 32, 30, 28, 27,
    // Wake up spike
    30, 35, 42, 50, 58, 65, 72, 80, 88, 92, 85, 78,
    // Morning activity
    70, 65, 60, 68, 75, 82, 90, 95, 88, 75, 68, 62, 58, 55,
    // Mid-morning rest
    52, 50, 48, 50, 52, 55, 58, 62, 68, 72,
    // Midday activity
    75, 80, 85, 90, 92, 88, 82, 75, 70, 65, 60, 58,
    // Afternoon spike
    60, 65, 72, 80, 88, 95, 98, 95, 88, 80, 72, 65,
    // Evening cooldown
    60, 55, 50, 48, 45, 42, 40, 38, 35, 33, 30,
  ];

  return (
    <div className="flex flex-col gap-2 flex-1">
      <div className="relative w-full h-15 bg-black/20 ">
        {/* <GridLines verticalLines={15} horizontalLines={6} color="#3e3e3e50" /> */}

        {/* <GridLines verticalLines={15} horizontalLines={6} color="#3e3e3e" /> */}

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d={dataPoints
              .map((value, index) => {
                const x = (index / (dataPoints.length - 1)) * 100;
                const y = 100 - value;
                return `${index === 0 ? "M" : "L"} ${x} ${y}`;
              })
              .join(" ")}
            fill="none"
            stroke="#ffffff90"
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

export default HeartRateChart;
