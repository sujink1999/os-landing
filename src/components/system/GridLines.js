export default function GridLines({
  verticalLines = 10,
  horizontalLines = 10,
  color = "#3e3e3e",
}) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {/* Vertical lines */}
      {Array.from({ length: verticalLines }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px"
          style={{
            left: `${(i / (verticalLines - 1)) * 100}%`,
            backgroundColor: color,
          }}
        />
      ))}

      {/* Horizontal lines */}
      {Array.from({ length: horizontalLines }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px"
          style={{
            top: `${(i / (horizontalLines - 1)) * 100}%`,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
}
