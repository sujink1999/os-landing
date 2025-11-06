"use client";

import Splash from "@/components/system/Splash";
import { useGlobalContext } from "@/context/GlobalContext";
import Landing from "@/components/landing/Landing";

const InvestPage = () => {
  const { hasSubmittedEmail } = useGlobalContext();
  // if (!hasSubmittedEmail) {
  //   return <Splash />;
  // }
  return <Landing />;
};

export default InvestPage;
