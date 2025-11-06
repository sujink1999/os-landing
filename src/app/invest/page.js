"use client";

import { useState, useEffect } from "react";
import Splash from "@/components/system/Splash";
import GlassLoader from "@/components/system/GlassLoader";
import { useGlobalContext } from "@/context/GlobalContext";
import Landing from "@/components/landing/Landing";

const InvestPage = () => {
  const { hasRecordedEmail } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for minimum 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <GlassLoader />;
  }

  if (!hasRecordedEmail) {
    return <Splash />;
  }

  return <Landing />;
};

export default InvestPage;
