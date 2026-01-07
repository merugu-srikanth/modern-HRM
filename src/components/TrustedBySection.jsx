import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  SiTiktok,
  SiAmazon,
  SiGoogle,
  SiApple,
  SiFacebook,
  SiNetflix,
  SiSpotify,
  SiTesla,
  SiNike,
  SiAdidas,
  SiIntel,
  SiSamsung,
} from "react-icons/si";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
  FaMicrosoft,
} from "react-icons/fa";
import LogoMarquee from "./LogoMarquee";
import { motion } from "framer-motion";
import { GiSpiralArrow } from "react-icons/gi";

const TrustedBySection = () => {
  const sectionRef = useRef(null);
  const reviewRefs = useRef([]);
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      name: "Rishell Rim",
      role: "Head of Research & Insights",
      platform: "TikTok",
      icon: SiTiktok,
      color: "text-pink-500",
      review:
        "To lead in AI, brands need more than innovation, they need evidence. Partnering with NewtonX provided that proof.",
      stats: "123.06%",
      statLabel: "ROI Increase",
    },
    {
      name: "Alex Morgan",
      role: "Data Science Lead",
      platform: "Google",
      icon: SiGoogle,
      color: "text-blue-500",
      review:
        "The data quality and insights provided by NewtonX transformed our market research approach completely.",
      stats: "87%",
      statLabel: "Accuracy Improvement",
    },
    {
      name: "Sarah Chen",
      role: "VP of Marketing",
      platform: "Microsoft",
      icon: FaMicrosoft,
      color: "text-teal-500",
      review:
        "Working with NewtonX was a game-changer for our strategic planning and product roadmap.",
      stats: "2.5x",
      statLabel: "Decision Speed",
    },
  ];

  /* ---------------- INITIAL ANIMATION ---------------- */
  useEffect(() => {
    gsap.set(reviewRefs.current, { autoAlpha: 0, y: 40, scale: 0.95 });
    gsap.to(reviewRefs.current[0], {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  /* ---------------- CHANGE REVIEW (FIXED) ---------------- */
  const changeReview = (direction) => {
    const current = reviewRefs.current[activeReview];

    let nextIndex =
      direction === "next"
        ? (activeReview + 1) % reviews.length
        : (activeReview - 1 + reviews.length) % reviews.length;

    const next = reviewRefs.current[nextIndex];

    // Animate OUT current
    gsap.to(current, {
      autoAlpha: 0,
      x: direction === "next" ? -80 : 80,
      scale: 0.9,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        // Reset position
        gsap.set(current, { x: 0 });

        // Update state AFTER animation
        setActiveReview(nextIndex);

        // Animate IN next
        gsap.fromTo(
          next,
          { autoAlpha: 0, x: direction === "next" ? 80 : -80, scale: 0.9 },
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          }
        );
      },
    });
  };

  return (
     <section ref={sectionRef} className="relative bg-black pt-24 pb-10 overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="gradient-bg absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(45deg, #0f172a, #1e293b, #0f172a, #1e293b)',
          backgroundSize: '400% 400%'
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating orbs */}
      <div className="floating-orb absolute w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl top-1/4 -left-24" />
      <div className="floating-orb absolute w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl bottom-1/4 -right-24" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <GiSpiralArrow className="w-8 h-8 text-emerald-400 animate-spin-slow" />
            <span className="text-sm uppercase tracking-widest text-emerald-400 font-semibold">
              Trusted Worldwide
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Trusted by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-[length:200%_auto] animate-gradient">
              {' '}Industry Leaders
            </span>
          </h2>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Join thousands of innovative companies that trust our data-driven insights 
            to make smarter business decisions
          </p>
        </motion.div>
        <LogoMarquee />

        {/* Review Container */}
        <div className="relative max-w-3xl mx-auto h-[380px]">
          {reviews.map((review, i) => {
            const Icon = review.icon;
            return (
              <div
                key={i}
                ref={(el) => (reviewRefs.current[i] = el)}
                className="absolute inset-0"
              >
                <div className="relative h-full rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl p-10">
                  <FaQuoteLeft className="absolute -top-6 -left-6 w-12 h-12 text-emerald-400/20" />
                  <FaQuoteRight className="absolute -bottom-6 -right-6 w-12 h-12 text-cyan-400/20" />

                  <div className="flex items-center gap-3 mb-6">
                    <Icon className={`w-6 h-6 ${review.color}`} />
                    <span className="text-white font-bold">
                      {review.platform}
                    </span>
                  </div>

                  <blockquote className="text-2xl text-white mb-8">
                    “{review.review}”
                  </blockquote>

                  <div className="flex justify-between border-t border-white/10 pt-6">
                    <div>
                      <p className="font-bold text-white">{review.name}</p>
                      <p className="text-gray-400 text-sm">{review.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                        {review.stats}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {review.statLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={() => changeReview("prev")}
                        className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold shadow-lg hover:scale-105 transition">
          
            <FaChevronLeft className="text-white" />
          </button>

          <button
            onClick={() => changeReview("next")}
                        className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold shadow-lg hover:scale-105 transition">
          
            <FaChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
