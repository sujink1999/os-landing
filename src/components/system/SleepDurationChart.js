import GridLines from "@/components/system/GridLines";

const SleepDurationChart = ({ animationDelay = 0 }) => {
  // Two lines: hours of sleep (blue) and sleep needed (cyan)
  const hoursOfSleep = [5.7, 5.8, 6.4, 7.2, 8.4, 8.0, 5.7];
  const sleepNeeded = [8.0, 9.3, 7.2, 8.3, 8.0, 7.9, 7.9];

  // Normalize data to center it vertically
  const allValues = [...hoursOfSleep, ...sleepNeeded];
  const maxValue = Math.max(...allValues);
  const minValue = Math.min(...allValues);
  const range = maxValue - minValue;

  const normalizeValue = (value) => {
    const normalized = ((value - minValue) / range) * 50 + 25; // Use 50% of height, centered
    return normalized;
  };

  return (
    <div className="flex flex-col gap-2 flex-1">
      <div className="relative w-full h-15 bg-black/20 ">
        {/* <GridLines verticalLines={15} horizontalLines={6} color="#2e2e2e50" /> */}

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Sleep Needed Line (Higher opacity) */}
          <path
            d={sleepNeeded
              .map((value, index) => {
                const x = (index / (sleepNeeded.length - 1)) * 100;
                const y = 100 - normalizeValue(value);
                return `${index === 0 ? "M" : "L"} ${x} ${y}`;
              })
              .join(" ")}
            fill="none"
            stroke="rgba(255, 255, 255, 0.7)"
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
          {/* Sleep Needed Points */}
          {/* {sleepNeeded.map((value, index) => {
            const x = (index / (sleepNeeded.length - 1)) * 100;
            const y = 100 - normalizeValue(value);
            return (
              <circle
                key={`needed-${index}`}
                cx={`${x}%`}
                cy={`${y}%`}
                r="1.5"
                fill="rgba(255, 255, 255, 0.7)"
              />
            );
          })} */}

          {/* Hours of Sleep Line (Lower opacity) */}
          <path
            d={hoursOfSleep
              .map((value, index) => {
                const x = (index / (hoursOfSleep.length - 1)) * 100;
                const y = 100 - normalizeValue(value);
                return `${index === 0 ? "M" : "L"} ${x} ${y}`;
              })
              .join(" ")}
            fill="none"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            style={{
              animation: `line-draw 2s ease-out forwards`,
              animationDelay: `${animationDelay + 100}ms`,
            }}
          />
          {/* Hours of Sleep Points */}
          {/* {hoursOfSleep.map((value, index) => {
            const x = (index / (hoursOfSleep.length - 1)) * 100;
            const y = 100 - normalizeValue(value);
            return (
              <circle
                key={`sleep-${index}`}
                cx={`${x}%`}
                cy={`${y}%`}
                r="1.5"
                fill="rgba(255, 255, 255, 0.4)"
              />
            );
          })} */}
        </svg>
      </div>
    </div>
  );
};

export default SleepDurationChart;
