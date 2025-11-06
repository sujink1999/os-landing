import GridLines from "./GridLines";
import BorderAnimation from "./BorderAnimation";

const Skeleton = ({ delay = 0 }) => {
  const contentDelay = delay + 500;

  return (
    <div className=" absolute left-[807px] top-[242px] w-[200px] h-[275px] overflow-hidden">
      <BorderAnimation width={200} height={275} delay={delay} />
      <div
        className=" w-full h-[85%] relative p-1 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        <GridLines verticalLines={20} horizontalLines={20} color="#3e3e3e60" />
        <img
          src="/assets/images/skeleton.png"
          alt="Skeleton"
          className=" w-full h-full object-contain relative"
        />
      </div>
      <div
        className=" h-px bg-border animate-line-expand-once w-0"
        style={{
          "--target-width": "115%",
          animationDelay: `${contentDelay}ms`,
        }}
      />
    </div>
  );
};

export default Skeleton;
