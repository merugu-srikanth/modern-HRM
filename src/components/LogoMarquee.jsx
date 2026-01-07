import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  SiTiktok,
  SiAmazon,
  SiGoogle,
  SiApple,
  SiFacebook,
  SiNetflix,
  SiSpotify,
} from "react-icons/si";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { AiFillTwitterCircle } from "react-icons/ai";

const logos = [
  SiTiktok,
  SiAmazon,
  SiGoogle,
  TfiMicrosoftAlt,
  SiApple,
  SiFacebook,
  AiFillTwitterCircle,
  SiNetflix,
  SiSpotify,
];

export default function LogoMarquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const width = track.scrollWidth / 2;

      gsap.to(track, {
        x: -width,
        duration: 40,
        ease: "linear",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden pb-25 ">
      <div
        ref={trackRef}
        className="flex w-max gap-32 px-16"
        onMouseEnter={() => gsap.globalTimeline.pause()}
        onMouseLeave={() => gsap.globalTimeline.resume()}
      >
        {[...logos, ...logos].map((Icon, i) => (
          <div
            key={i}
            className="flex items-center justify-center opacity-70 hover:opacity-100 transition"
          >
            <Icon className="w-16 h-16 text-white" />
          </div>
        ))}
      </div>
    </div>
  );
}
