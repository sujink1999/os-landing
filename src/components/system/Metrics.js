import CircularProgress from "@/components/system/CircularProgress";
import SleepPhasesChart from "@/components/system/SleepPhasesChart";
import HeartRateChart from "@/components/system/HeartRateChart";
import SleepDurationChart from "@/components/system/SleepDurationChart";
import SleepStressChart from "@/components/system/SleepStressChart";
import BorderAnimation from "./BorderAnimation";

const Metrics = ({ delay = 0 }) => {
  const contentDelay = delay + 500;

  return (
    <div className="absolute left-[358px] top-[242px] w-[450px] h-[275px] flex flex-col overflow-hidden">
      <BorderAnimation width={450} height={275} delay={delay} />

      {/* Chart labels - Sleep Phases */}
      <p
        className="absolute left-[10px] top-[150px] text-[7px] font-aoi text-white/60 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        REM
      </p>
      <p
        className="absolute left-[60px] top-[172px] text-[7px] font-aoi text-white/60 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        DEEP
      </p>
      <p
        className="absolute left-[10px] top-[140px] text-[7px] font-aoi text-white/60 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        LIGHT
      </p>
      <p
        className="absolute left-[10px] top-[118px] text-[7px] font-aoi text-white/60 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        AWAKE
      </p>

      {/* Chart labels - Heart Rate */}
      <p
        className="absolute right-[160px] top-[110px] text-[7px] font-aoi text-white/60 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        72 BPM
      </p>
      <p
        className="absolute right-[110px] top-[125px] text-[7px] font-aoi text-white/60 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        AVG
      </p>
      <p
        className="absolute right-[180px] top-[135px] text-[7px] font-aoi text-white/60 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        RESTING
      </p>

      {/* Chart labels - Sleep Duration */}
      <p
        className="absolute left-8 bottom-[25px] text-[7px] font-aoi text-white/60 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        7.2 HRS
      </p>
      <p
        className="absolute left-[70px] bottom-[35px] text-[7px] font-aoi text-white/60 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        ACTUAL
      </p>
      <p
        className="absolute left-[120px] bottom-[20px] text-[7px] font-aoi text-white/60 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        NEEDED
      </p>

      {/* Chart labels - Sleep Stress */}
      <p
        className="absolute right-[160px] bottom-[30px] text-[7px] font-aoi text-white/60 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        LOW
      </p>
      <p
        className="absolute right-[110px] bottom-[40px] text-[7px] font-aoi text-white/60 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        OPTIMAL
      </p>
      <p
        className="absolute right-[180px] bottom-[20px] text-[7px] font-aoi text-white/60 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        INDEX
      </p>

      {/* Top section: Circular progress charts */}
      <div
        className="flex justify-around items-center py-2 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        <CircularProgress label="SLEEP" percentage={85} color="#ffffff70" />
        <CircularProgress label="RECOVERY" percentage={72} color="#ffffff70" />
        <CircularProgress label="STRAIN" percentage={68} color="#ffffff70" />
      </div>
      <div
        className=" w-[110%] h-px bg-border animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      />

      {/* Bottom section: Four charts in 2x2 grid */}
      <div
        className="flex flex-col p-4 gap-4 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        <div className="flex gap-10">
          <SleepPhasesChart animationDelay={1200} />
          <HeartRateChart animationDelay={320} />
        </div>
        <div className="flex justify-between gap-10">
          <SleepDurationChart animationDelay={2800} />
          <SleepStressChart animationDelay={140} />
        </div>
      </div>
    </div>
  );
};

export default Metrics;
