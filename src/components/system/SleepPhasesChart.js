const SleepPhasesChart = ({ animationDelay = 0 }) => {
  // Sleep timeline data - each segment represents a period of sleep
  const sleepSegments = [
    { type: "deep", start: 0, width: 8, color: "rgba(255, 255, 255, 0.9)" },
    { type: "core", start: 8, width: 12, color: "rgba(255, 255, 255, 0.6)" },
    { type: "rem", start: 20, width: 8, color: "rgba(255, 255, 255, 0.5)" },
    { type: "awake", start: 28, width: 3, color: "rgba(255, 255, 255, 0.35)" },
    { type: "core", start: 31, width: 15, color: "rgba(255, 255, 255, 0.6)" },
    { type: "awake", start: 46, width: 4, color: "rgba(255, 255, 255, 0.35)" },
    { type: "rem", start: 50, width: 10, color: "rgba(255, 255, 255, 0.5)" },
    { type: "awake", start: 60, width: 3, color: "rgba(255, 255, 255, 0.35)" },
    { type: "core", start: 63, width: 12, color: "rgba(255, 255, 255, 0.6)" },
    { type: "rem", start: 75, width: 8, color: "rgba(255, 255, 255, 0.5)" },
    { type: "awake", start: 83, width: 2, color: "rgba(255, 255, 255, 0.35)" },
    { type: "core", start: 85, width: 15, color: "rgba(255, 255, 255, 0.6)" },
  ];

  const phases = ["Awake", "REM", "Core", "Deep"];

  return (
    <div className="flex flex-col gap-2 w-full h-full flex-1">
      {/* Timeline visualization */}
      <div
        style={{
          animation: "sleep-chart-reveal 2s ease-out forwards",
          animationDelay: `${animationDelay}ms`,
        }}
        className="relative h-15 overflow-hidden"
      >
        <div className="relative h-full w-[189px] min-w-[189px]">
          <div className="relative h-full w-full">
            {/* Vertical transition lines between different sleep stages */}
            {sleepSegments.map((segment, index) => {
              if (index === 0) return null;
              const prevSegment = sleepSegments[index - 1];

              // Only draw vertical line if transitioning between different sleep types
              if (segment.type === prevSegment.type) return null;

              const getYPosition = (type) => {
                if (type === "awake") return 0;
                if (type === "rem") return 33;
                if (type === "core") return 50;
                return 83; // deep
              };

              const prevY = getYPosition(prevSegment.type);
              const currentY = getYPosition(segment.type);
              const x = segment.start;

              return (
                <div
                  key={`transition-${index}`}
                  className="absolute w-px bg-white/20"
                  style={{
                    left: `${x}%`,
                    top: `${Math.min(prevY, currentY)}%`,
                    height: `${Math.abs(currentY - prevY)}%`,
                  }}
                />
              );
            })}

            {/* Sleep segments */}
            {sleepSegments.map((segment, index) => {
              const yPosition =
                segment.type === "awake"
                  ? "0%"
                  : segment.type === "rem"
                  ? "33%"
                  : segment.type === "core"
                  ? "50%"
                  : "83%";

              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${segment.start}%`,
                    width: `${segment.width}%`,
                    top: yPosition,
                    height: "16%",
                    backgroundColor: segment.color,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SleepPhasesChart;
