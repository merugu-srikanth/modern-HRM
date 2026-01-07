import React, { useEffect, useRef } from 'react';

const ThreeDRobo = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    // Load the required scripts dynamically
    const loadScripts = async () => {
      try {
        // Check if Three.js is already loaded
        if (!window.THREE) {
          await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js');
        }
        
        // Check if anime.js is already loaded
        if (!window.anime) {
          await loadScript('https://cdn.spline.design/lib/anime.min.js');
        }
        
        // Check if Spline runtime is already loaded
        if (!window.SpeRuntime) {
          await loadScript('https://assets.codepen.io/9589/spline.runtime.min.js');
        }
        
        // Initialize the application
        if (window.SpeRuntime) {
          appRef.current = new window.SpeRuntime.Application();
          appRef.current.start("https://assets.codepen.io/9589/scene.gltf");
        }
      } catch (error) {
        console.error('Error loading 3D scripts:', error);
      }
    };

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        // Check if script is already loaded
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    loadScripts();

    // Cleanup function
    return () => {
      if (appRef.current) {
        // Clean up the Spline application
        appRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full relative bg-#e60707d4"
    >
      <canvas 
        ref={canvasRef}
        id="canvas3d"
        className="w-full h-full outline-none bg-#0817e600"
      />
      
      <a 
        className="spline-watermark absolute bottom-4 right-4 w-8 h-8 z-20 hidden hover:opacity-80"
        href="https://spline.design"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img 
          src="https://spline.design/_assets/_images/icon_favicon32x32.png" 
          alt="Spline Design"
          className="block w-full h-full"
        />
      </a>
    </div>
  );
};

export default ThreeDRobo;