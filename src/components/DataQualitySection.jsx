import React from "react";
import { motion } from "framer-motion";
import BigData from '../assets/bgData2.png';

const DataQualitySection = () => {
  return (
    <section className="relative bg-black py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-emerald-400 mb-6">
            <span className="w-8 h-[2px] bg-emerald-400" />
            Data Integrity First
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-4xl font-bold text-white leading-tight">
            Redefining industry standards with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              uncompromising data quality
            </span>
            .
          </h2>

          {/* Description */}
          <p className="mt-8 text-gray-400 text-justify text-lg leading-relaxed">
            In a world where poor data leads to costly decisions, we take a
            different approach. Our proprietary research ecosystem is built to
            deliver **authentic, high-engagement insights** you can trust.
          </p>

          <p className="mt-6 text-gray-400 text-justify text-lg leading-relaxed">
            <span className="text-white font-semibold">OpinionElite</span>, our
            global proprietary panel, connects you with verified B2B and B2C
            audiences across markets. By validating respondent identities through
            LinkedIn and Facebook, combined with AI-powered fraud detection, we
            ensure every response comes from a real, engaged human.
          </p>

          {/* Feature Pills */}
          <div className="mt-10 flex flex-wrap gap-4">
            {[
              "Verified Respondents",
              "AI Fraud Detection",
              "Global B2B + B2C Reach",
              "High Engagement Rates",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300 backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          {/* Glow Orbs */}
          <div className="absolute -top-14 -right-14 w-56 h-56 bg-emerald-400/25 blur-3xl rounded-full" />
          <div className="absolute bottom-0 -left-10 w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full" />

          {/* Image Card */}
          <div className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl px-5 shadow-2xl">
           <img src='https://html.designingmedia.com/artelligence/assets/images/banner-image.png' />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DataQualitySection;
