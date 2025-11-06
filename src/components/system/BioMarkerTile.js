import GridLines from "@/components/system/GridLines";

const BioMarkerTile = ({ label, dataPoints, animationDelay = 0 }) => {
  // Sample data points for the graph (normalized to 0-100)

  return (
    <div className="flex gap-3 items-center">
      <p className="text-[10px] font-aoi text-white/60 w-14">{label}</p>

      {/* Graph container */}
      <div className="relative w-[60px] h-[30px] border border-border">
        {/* Grid lines */}
        <GridLines verticalLines={14} horizontalLines={8} color="#2e2e2e70" />

        {/* Center horizontal line */}
        <div className="absolute left-0 right-0 h-px bg-border top-1/2" />

        {/* Graph line chart */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d={dataPoints
              .map((value, index) => {
                const x = (index / (dataPoints.length - 1)) * 100;
                const y = 100 - value; // Invert Y axis so higher values are at top
                return `${index === 0 ? "M" : "L"} ${x} ${y}`;
              })
              .join(" ")}
            fill="none"
            stroke="white"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray="100"
            strokeDashoffset={animationDelay === 9999999 ? "0" : "100"}
            style={{
              animation:
                animationDelay === 9999999
                  ? "none"
                  : `line-draw-biomarker 1s ease-out forwards`,
              animationDelay: `${animationDelay}ms`,
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default BioMarkerTile;
