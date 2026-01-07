import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaClipboardList,
  FaCode,
  FaDatabase,
  FaChartLine,
} from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const offers = [
  {
    icon: FaClipboardList,
    title: "Questionnaire Development",
    desc: "Expertly designed questionnaires aligned with research objectives to ensure clarity, accuracy, and actionable insights.",
  },
  {
    icon: FaCode,
    title: "Survey Programming",
    desc: "Robust survey programming with advanced logic, device compatibility, and seamless respondent experience.",
  },
  {
    icon: FaDatabase,
    title: "Fielding & Data Collection",
    desc: "Reliable data collection using verified panels and proven methodologies to ensure representative results.",
  },
  {
    icon: FaChartLine,
    title: "Data Processing & Analysis",
    desc: "Comprehensive data cleaning, processing, and advanced analysis to turn data into strategic intelligence.",
  },
];

const WhatWeOffer = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const dotsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Entrance animation */
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.9,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      /* Moving border dot animation */
      dotsRef.current.forEach((dot, index) => {
        if (!dot) return;

        const tl = gsap.timeline({
          repeat: -1,
          defaults: { ease: "none", duration: 1.5 },
          delay: index * 0.3,
        });

        tl.to(dot, { top: "8%", left: "85%" })
          .to(dot, { top: "8%", left: "8%" })
          .to(dot, { top: "85%", left: "8%" })
          .to(dot, { top: "85%", left: "85%" });
      });

      /* Hover animation */
      cardsRef.current.forEach((card) => {
        if (!card) return;

        const icon = card.querySelector(".offer-icon");

        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -14, duration: 0.3, ease: "power2.out" });
          gsap.to(icon, {
            scale: 1.2,
            rotate: 8,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
          gsap.to(icon, {
            scale: 1,
            rotate: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black pt-2 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-900/10 to-black" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white uppercase">
            What we{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Offer
            </span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            We’re here to help with every step of the research process. Whether
            you are looking for end-to-end support or ad hoc services, we tailor
            our approach to best fit your research needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {offers.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="relative group"
              >
                {/* Outer animated border */}
                <div className="absolute inset-0 rounded-3xl  bg-gradient-to-br from-emerald-400/40 to-cyan-400/40">
                  <div className="relative w-full h-full rounded-3xl bg-black" />
                </div>

                {/* Moving dot */}
                <span
                  ref={(el) => (dotsRef.current[index] = el)}
                  className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_#fff] z-20"
                  style={{ top: "8%", left: "85%" }}
                />

                {/* Card */}
                <div className="relative z-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-10 h-full">
                  {/* Glow ray */}
                  <div className="absolute top-0 left-0 w-48 h-10 bg-white/30 blur-2xl rotate-45 opacity-30" />

                  {/* Icon */}
                  <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-black border border-emerald-400/40 flex items-center justify-center">
                    <Icon className="offer-icon w-9 h-9 text-emerald-400" />
                  </div>

                  <h4 className="text-xl font-semibold text-white text-center mb-4">
                    {item.title}
                  </h4>

                  <p className="text-gray-400 text-sm text-center leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Decorative lines */}
                  <span className="absolute top-[10%] left-0 w-full h-px bg-gradient-to-r from-emerald-400/40 to-transparent" />
                  <span className="absolute bottom-[10%] left-0 w-full h-px bg-gradient-to-r from-transparent to-cyan-400/40" />
                  <span className="absolute left-[10%] top-0 h-full w-px bg-gradient-to-b from-emerald-400/40 to-transparent" />
                  <span className="absolute right-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent to-cyan-400/40" />
                </div>
              </div>
            );
          })}
        </div>


            <div className="flex justify-center mt-20">

       <button className=" w-100
  flex items-center justify-center
  px-14 py-5
  rounded-full
  bg-gradient-to-r from-emerald-400 to-cyan-400
  text-black font-semibold text-lg
  shadow-lg
  hover:scale-105 transition
">
  Get in touch!
</button>

      </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
