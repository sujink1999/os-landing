"use client";

const GlassLoader = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      {/* Glassmorphic loader container */}
      <div className="relative z-10">
        <div className="p-px bg-white/5 rounded-2xl backdrop-blur-xl">
          <div className="px-8 py-6 rounded-3xl bg-black/70 backdrop-blur-2xl border border-white/10">
            {/* Spinner */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-white/20 rounded-full" />
                <div
                  className="absolute inset-0 border-4 border-transparent border-t-white rounded-full"
                  style={{
                    animation: "spin 1s linear infinite",
                  }}
                />
              </div>
              <p className="font-aoi font-light text-sm text-white/70 mt-4">
                initializing...
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default GlassLoader;
