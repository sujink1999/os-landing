const Folders = ({ delay = 0 }) => {
  const contentDelay = delay;

  return (
    <div className=" absolute right-[270px] top-24 w-[100px] h-[100px]">
      <img
        src="/assets/images/folders.png"
        alt="Folders"
        className=" w-full h-full object-contain animate-scale-fade-in"
        style={{ animationDelay: `${contentDelay}ms` }}
      />
      <p className=" text-[9px] font-aoi text-white/60 absolute -bottom-5 right-3 animate-scale-fade-in" style={{ animationDelay: `${contentDelay}ms` }}>
        [NOTES]
      </p>
    </div>
  );
};

export default Folders;
