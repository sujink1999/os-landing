"use client";

import { useState, useEffect } from "react";
import ComplexSystem from "./ComplexSystem";
import GlowingInput from "./GlowingInput";
import GlassButton from "./GlassButton";
import GlowingButton from "./GlowingButton";
import { useGlobalContext } from "@/context/GlobalContext";

const Splash = () => {
  const { recordEmail } = useGlobalContext();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Step 1: Show "YOUR HEALTH IS COMPLEX" for 2 seconds
    if (step === 1) {
      const timer = setTimeout(() => {
        setStep(2);
      }, 2000);
      return () => clearTimeout(timer);
    }

    // Step 2: Show ComplexSystem with overlay for 5 seconds
    if (step === 2) {
      const timer = setTimeout(() => {
        setStep(3);
      }, 6000);
      return () => clearTimeout(timer);
    }

    if (step === 3) {
      const timer = setTimeout(() => {
        setStep(4);
      }, 3000);
      return () => clearTimeout(timer);
    }

    if (step === 4) {
      const timer = setTimeout(() => {
        setStep(5);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidEmail && !isSubmitting) {
      setIsSubmitting(true);
      const result = await recordEmail(email);
      if (result.success) {
        console.log("Email recorded successfully");
        // Context will handle page transition via hasRecordedEmail state
      } else {
        console.error("Failed to record email:", result.error);
        alert("Failed to submit email. Please try again.");
        setIsSubmitting(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && isValidEmail) {
      handleSubmit(e);
    }
  };

  const isValidEmail = email.includes("@") && email.includes(".");

  if (step === 5) {
    return (
      <div className=" h-screen w-screen inset-0 bg-black flex items-center justify-center z-20 transition ">
        <div className="flex flex-col items-center gap-8 relative animate-fade-in delay-0">
          <img
            src="/assets/images/vanta-logo.png"
            alt="Loading"
            className=" w-[150px]  object-contain opacity-70"
          />

          <div className=" flex flex-col gap-3 items-center mb-10">
            <p className="text-3xl font-bold font-tussilago text-white/90 tracking-wider">
              VANTA{" "}
              <span className=" font-aoi text-white/70 tracking-wider font-medium">
                OS
              </span>
            </p>
            <p className="text-sm font-aoi text-white/70 tracking-tighter">
              {isValidEmail ? "Press ENTER to submit" : "initializing..."}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex items-end flex-col gap-3"
          >
            <GlowingInput
              type="email"
              placeholder="enter email to proceed"
              className=" min-w-[300px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isSubmitting}
            />
            <div
              className="transition-all duration-300"
              style={{
                opacity: isValidEmail ? 1 : 0,
                transform: isValidEmail ? "scale(1)" : "scale(0.8)",
                pointerEvents: isValidEmail ? "auto" : "none",
              }}
            >
              <GlowingButton
                onClick={handleSubmit}
                disabled={!isValidEmail}
                isLoading={isSubmitting}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center animate-scale-fade-in">
        <h1
          style={{
            opacity: step < 3 ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
          className="md:text-2xl text-xl text-center font-aoi text-white/90 tracking-wider"
        >
          YOUR{" "}
          <span className="animated-gradient-shimmer font-tussilago font-bold md:text-3xl text-2xl">
            HEALTH
          </span>{" "}
          IS COMPLEX
        </h1>
      </div>

      {/* Step 2: Complex System with overlay */}
      {step > 1 && (
        <>
          <div
            style={{
              transform: isMobile
                ? `scale(calc(50vh / 900px))`
                : `scale(calc(90vh / 900px))`,
              transformOrigin: "center",
            }}
          >
            <ComplexSystem />
          </div>
        </>
      )}
      <div
        style={{
          opacity: step === 3 ? 1 : 0,
        }}
        className=" w-full h-full bg-black/10 backdrop-blur-sm absolute flex items-center justify-center transition-opacity duration-2000"
      >
        {step > 2 && (
          <h1
            style={{
              animationDelay: "500ms",
            }}
            className="md:text-2xl text-center md:text-left text-xl font-aoi text-white/90 tracking-wider animate-fade-in duration-2000 opacity-0"
          >
            YOUR{" "}
            <span className="animated-gradient-shimmer font-tussilago font-bold md:text-3xl text-2xl">
              HEALTHCARE
            </span>{" "}
            DOESN&apos;T HAVE TO BE
          </h1>
        )}
      </div>

      <div
        style={{
          opacity: step === 4 ? 1 : 0,
        }}
        className="absolute inset-0 bg-black flex items-center justify-center z-20 transition duration-1000"
      ></div>
    </div>
  );
};

export default Splash;
