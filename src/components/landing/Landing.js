"use client";

import Carousel from "./Carousel";
import Footer from "./Footer";
import Globe from "./Globe";
import Hero from "./Hero";
import Invest from "./Invest";
import OutliveOrdinary from "./OutliveOrdinary";
import Promo from "./Promo";
import Roadmap from "./Roadmap";

const Landing = () => {
  return (
    <div className="w-full overflow-x-hidden bg-black">
      <div className="flex flex-col">
        <Hero />
        <OutliveOrdinary />
        <Globe />
        <Promo />
        <Carousel />
        <Roadmap />
        <Invest />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
