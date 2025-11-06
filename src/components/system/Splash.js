"use client";

import { useState, useEffect } from "react";
import ComplexSystem from "./ComplexSystem";
import GlowingInput from "./GlowingInput";
import GlassButton from "./GlassButton";
import { useGlobalContext } from "@/context/GlobalContext";

const Splash = () => {
  const { saveEmail } = useGlobalContext();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      saveEmail(email);
      console.log("Email submitted and saved:", email);
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
            className=" w-[300px]  object-contain animate-pulse"
          />

          <div className=" flex flex-col gap-3 items-center mb-10">
            <p className="text-3xl  font-tussilago text-white/90 tracking-wider">
              VANTA{" "}
              <span className=" font-aoi text-white/70 tracking-wider">OS</span>
            </p>
            <p className="text-sm font-aoi text-white/70 tracking-wider">
              {isValidEmail ? "Press ENTER to submit" : "initialising..."}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <GlowingInput
              type="email"
              placeholder="enter email to proceed"
              className=" min-w-[300px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
            />
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
          className="text-4xl font-aoi text-white/90 tracking-wider"
        >
          YOUR <span className=" font-tussilago">HEALTH</span> IS COMPLEX
        </h1>
      </div>

      {/* Step 2: Complex System with overlay */}
      {step > 1 && (
        <>
          <div
            style={{
              transform: `scale(calc(90vh / 900px))`,
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
            className="text-3xl font-aoi text-white/90 tracking-wider animate-fade-in duration-2000 opacity-0"
          >
            YOUR <span className=" font-tussilago">HEALTHCARE</span>{" "}
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
