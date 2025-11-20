"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const calendlyRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const logo = logoRef.current;
    const heading = headingRef.current;
    const desc = descRef.current;
    const calendly = calendlyRef.current;

    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
    });

    const scrollTriggerInstance = tl.scrollTrigger;

    // Animate logo
    if (logo) {
      tl.fromTo(
        logo,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.1 }
      );
    }

    // Animate heading
    if (heading) {
      tl.fromTo(
        heading,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    // Animate description
    if (desc) {
      tl.fromTo(
        desc,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.1 },
        "-=0.05"
      );
    }

    // Animate Calendly
    if (calendly) {
      tl.fromTo(
        calendly,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.15 },
        "-=0.1"
      );
    }

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-black py-20 px-4 mt-[10%]">
      <div className="w-full max-w-[1000px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Side - Bold Statement */}
          <div className="flex-1 flex flex-col">
            <img
              ref={logoRef}
              src="/assets/images/vanta-logo.png"
              alt="Logo"
              className="w-40 h-40 object-contain opacity-0"
            />
            <h2
              ref={headingRef}
              className="font-aoi text-sm text-white/70 leading-tight opacity-0"
            >
              WE ARE BUILDING THE SEXIEST HEALTHCARE COMPANY TO HAVE EVER
              EXISTED
            </h2>

            <p
              ref={descRef}
              className="font-helvetica text-sm font-medium text-white leading-relaxed mt-4 opacity-0"
            >
              If you see what&apos;s coming, we&apos;d love to build the future
              of human potential with you.
              <br />
              <span className="animated-gradient-shimmer text-base">
                Schedule a conversation with the team.
              </span>
            </p>
          </div>

          {/* Right Side - Description + Calendly Widget */}
          <div className="flex-1 flex flex-col gap-6 w-full lg:w-auto">
            {/* Calendly Inline Widget */}
            <div
              ref={calendlyRef}
              className="w-full h-[450px] rounded-2xl overflow-hidden border border-white/20 bg-[#1a1a1a] opacity-0"
            >
              <iframe
                src="https://calendly.com/sujinlk/30-min?embed_domain=localhost&embed_type=Inline&hide_gdpr_banner=1"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a meeting"
                style={{ colorScheme: "dark" }}
                allow="payment"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
