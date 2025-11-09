import ComplexSystem from "@/components/system/ComplexSystem";

const Complex = () => {
  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">
      <div
        style={{
          transform: `scale(calc(90vh / 900px))`,
          transformOrigin: "center",
        }}
      >
        <ComplexSystem />
      </div>
    </div>
  );
};

export default Complex;
