// components/ThreeDSection.jsx
import React from "react";

const ThreeDSection = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen p-6 gap-6">
      {/* Left Side Content */}
      <div className="md:w-1/2 flex flex-col justify-center space-y-6 px-4">
        <h1 className="text-4xl font-bold text-gray-900">
          EVE (WALL‑E) ~ EVA
        </h1>
        <p className="text-lg text-gray-700">
          Explore this 3D model hosted on Sketchfab — rotate, zoom, and view in 3D.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            View Details
          </button>
          <a
            href="https://sketchfab.com/3d-models/eve-wall-e-eva-5da3637249074ed79f44fd958889c2ac"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
          >
            Open on Sketchfab
          </a>
        </div>
      </div>

      {/* Right Side 3D Embed */}
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="w-full h-[500px] md:h-[650px] border border-gray-300 rounded-lg overflow-hidden">
          {/* Sketchfab iframe embed */}
          <iframe
            title="EVE (WALL‑E) EVA 3D Model"
            width="100%"
            height="100%"
            src="https://sketchfab.com/models/5da3637249074ed79f44fd958889c2ac/embed"
            frameBorder="0"
            allow="autoplay; fullscreen; vr"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ThreeDSection;
