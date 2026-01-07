import React from "react";
import logo from '../assets/Logo.png'

const Navigation = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="backdrop-blur-xl bg-black/40 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold tracking-wide text-white">
              <img src={logo} alt="Company Logo" className="h-12 w-auto" />
            </div>

            {/* Nav Links */}
            <nav className="hidden md:flex space-x-8 text-xl font-medium text-gray-300">
              {["Solutions", "Use Cases", "Insights", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="relative hover:text-emerald-500 hover: transition"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full" />
                  </a>
                )
              )}
            </nav>

            {/* CTA */}
            <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold shadow-lg hover:scale-105 transition">
              Get Started
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
