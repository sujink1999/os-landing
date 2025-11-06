"use client";

import { useState } from "react";
import GlowingInput from "@/components/system/GlowingInput";
import GlassButton from "@/components/system/GlassButton";

const DemoPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    console.log("Form submitted:", { name, email });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-4xl font-tussilago font-bold text-white text-center mb-12">
          Glassmorphic Components
        </h1>

        <div className="space-y-6">
          <GlowingInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          <GlowingInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <GlassButton onClick={handleSubmit}>
            Get Started
          </GlassButton>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
