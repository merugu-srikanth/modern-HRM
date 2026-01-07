import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from '../assets/Logo.png'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-animate", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });

      gsap.to(orb1Ref.current, {
        x: 60,
        y: -40,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2Ref.current, {
        x: -50,
        y: 30,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-black overflow-hidden pt-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-900/10 to-black" />

      {/* Floating orbs */}
      <div
        ref={orb1Ref}
        className="absolute w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl top-20 left-10"
      />
      <div
        ref={orb2Ref}
        className="absolute w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl bottom-20 right-10"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* CTA */}
        <div className="footer-animate text-center mb-24">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to elevate your data strategy?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            QuantifyAI helps organizations turn complex data into confident
            business decisions.
          </p>

          <button
            className="
              group inline-flex items-center gap-4
              px-14 py-6
              rounded-full
              bg-gradient-to-r from-emerald-400 to-cyan-400
              text-black font-bold text-xl
              shadow-[0_25px_60px_-15px_rgba(16,185,129,0.7)]
              hover:scale-105 transition-all duration-300
            "
          >
            Get in touch
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            <span className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-opacity" />
          </button>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 pb-20 border-b border-white/10">
          {/* Brand */}
          <div className="footer-animate">
            {/* <h4 className="text-2xl font-bold text-white mb-4">
              Quantify<span className="text-emerald-400">AI</span>
            </h4> */}
            <img src={logo} alt="QuantifyAI Logo" className="h-18 mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered research, analytics, and insights helping businesses
              make smarter, faster decisions.
            </p>
          </div>

          {/* Services */}
          <div className="footer-animate">
            <h5 className="text-white font-semibold mb-4">Services</h5>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Questionnaire Development</li>
              <li>Survey Programming</li>
              <li>Fielding & Data Collection</li>
              <li>Data Processing & Analysis</li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-animate">
            <h5 className="text-white font-semibold mb-4">Company</h5>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>About</li>
              <li>Solutions</li>
              <li>Case Studies</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact + Socials */}
          <div className="footer-animate">
            <h5 className="text-white font-semibold mb-4">Contact</h5>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-emerald-400" />
                hello@quantifyai.com
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-cyan-400" />
                +91 98765 43210
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[
                FaLinkedinIn,
                FaTwitter,
                FaGithub,
                FaInstagram,
                FaYoutube,
              ].map((Icon, i) => (
                <a
                  key={i}
                  className="p-3 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-emerald-400/20 hover:to-cyan-400/20 transition-all hover:scale-110"
                >
                  <Icon className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-animate text-center py-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} QuantifyAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
