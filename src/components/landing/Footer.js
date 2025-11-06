"use client";

import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-black py-20 px-4 mt-[10%]">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Side - Bold Statement */}
          <div
            className="flex-1 flex flex-col transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
            }}
          >
            <h2 className="font-aoi text-sm  text-white/70 leading-tight">
              WE ARE BUILDING THE SEXIEST HEALTHCARE COMPANY TO HAVE EVER
              EXISTED
            </h2>
            <img
              src="/assets/images/vanta-logo.png"
              alt="Logo"
              className="w-40 h-40 object-contain"
            />
            <p className="font-morigothic font-light text-xl text-white leading-relaxed mt-4">
              If you see what&apos;s coming, we&apos;d love to build the future
              of human potential with you. Schedule a conversation with the
              team.
            </p>
          </div>

          {/* Right Side - Description + Calendly Widget */}
          <div
            className="flex-1 flex flex-col gap-6  w-full lg:w-auto transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transitionDelay: "200ms",
            }}
          >
            {/* Calendly Inline Widget */}
            <div className="w-full  h-[450px] rounded-2xl overflow-hidden border border-white/20 bg-[#1a1a1a]">
              <iframe
                src="https://calendly.com/sujinlk/30-min?embed_domain=localhost&embed_type=Inline&hide_gdpr_banner=1"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a meeting"
                style={{ colorScheme: "dark" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
