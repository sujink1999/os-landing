import Aging from "./Aging";
import BioMarkers from "./BioMarkers";
import BorderAnimation from "./BorderAnimation";
import Brain from "./Brain";
import DietProtcol from "./DietProtcol";
import DoctorNotes from "./DoctorNotes";
import Folders from "./Folders";
import HumanModel from "./HumanModel";
import Insurance from "./Insurance";
import Metrics from "./Metrics";
import Microbiome from "./Microbiome";
import Skeleton from "./Skeleton";
import Supplements from "./Supplements";
import WorkoutRegimen from "./WorkoutRegimen";

const ComplexSystem = () => {
  return (
    <div className=" w-[1200px] h-[900px] min-w-[1200px] min-h-[900px] flex items-center justify-center relative">
      <div
        className=" absolute top-10 left-0 w-full h-px bg-border animate-line-expand-once"
        style={{ "--target-width": "100%", animationDelay: "0ms" }}
      ></div>
      <div
        className=" absolute top-0 left-0 w-full h-px bg-border animate-line-expand-once"
        style={{ "--target-width": "100%", animationDelay: "200ms" }}
      ></div>
      <div
        className=" absolute top-0 left-[40px] max-w-px h-10 bg-border animate-line-expand-once"
        style={{ "--target-width": "100%", animationDelay: "200ms" }}
      ></div>

      <div className=" absolute top-0 left-10 right-10 bottom-0 overflow-hidden ">
        <BorderAnimation
          width="100%"
          height="100%"
          delay={400}
          strokeWidth={2}
        />

        {/* Group 1: Center - HumanModel */}
        <HumanModel delay={600} />

        {/* Group 2: Top right - Insurance, Folders */}
        <Insurance delay={1200} />
        <Folders delay={1200} />

        {/* Group 3: Bottom right - Brain, DietProtcol */}
        <Brain delay={1800} />
        <DietProtcol delay={1800} />

        {/* Group 4: Left side - BioMarkers, DoctorNotes */}
        <BioMarkers delay={2400} />
        <DoctorNotes delay={2400} />

        {/* Group 5: Center - Metrics, Skeleton */}
        <Metrics delay={3000} />
        <Skeleton delay={3000} />

        {/* Group 6: Bottom left - Microbiome, Aging */}
        <Microbiome delay={3600} />
        <Aging delay={3600} />

        {/* Group 7: Bottom right - WorkoutRegimen, Supplements */}
        <WorkoutRegimen delay={4200} />
        <Supplements delay={4200} />
      </div>
    </div>
  );
};

export default ComplexSystem;
