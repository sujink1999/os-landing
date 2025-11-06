import BorderAnimation from "./BorderAnimation";

const DoctorNotes = ({ delay = 0 }) => {
  const contentDelay = delay + 500;

  return (
    <div className=" absolute left-[358px] top-14 w-[360px] h-[170px] flex flex-col gap-2 p-4 overflow-hidden">
      <BorderAnimation width={360} height={170} delay={delay} />
      <h1
        className="text-sm font-aoi text-white/60 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        [DOCTOR NOTES]
      </h1>
      <div className=" flex flex-col gap-2">
        <div
          className="h-2 bg-border/70 animate-line-expand w-0"
          style={{
            "--target-width": "100%",
            animationDelay: `${contentDelay}ms`,
          }}
        />
        <div
          className="h-2 bg-border/70 animate-line-expand w-0"
          style={{
            "--target-width": "70%",
            animationDelay: `${contentDelay + 100}ms`,
          }}
        />
        <div
          className="h-2 bg-border/70 animate-line-expand w-0"
          style={{
            "--target-width": "90%",
            animationDelay: `${contentDelay + 200}ms`,
          }}
        />
        <div
          className="h-2 bg-border/70 animate-line-expand w-0"
          style={{
            "--target-width": "80%",
            animationDelay: `${contentDelay + 300}ms`,
          }}
        />
        <div
          className="h-2 bg-border/70 animate-line-expand w-0"
          style={{
            "--target-width": "30%",
            animationDelay: `${contentDelay + 400}ms`,
          }}
        />
      </div>

      <p
        className=" text-[9px] font-aoi text-white/50 absolute bottom-2 right-3 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        CREATINE
      </p>
      <p
        className=" text-[9px] font-aoi text-white/50 absolute bottom-2 left-3 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        EXERCISE
      </p>
      <p
        className=" text-[9px] font-aoi text-white/50 absolute top-2 right-3 animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      >
        CRYOTHERAPY
      </p>
    </div>
  );
};

export default DoctorNotes;
