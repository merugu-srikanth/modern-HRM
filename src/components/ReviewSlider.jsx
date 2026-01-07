import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    name: "Alice",
    role: "Data Scientist",
    avatar: "https://i.pravatar.cc/150?img=23",
    review:
      "Absolutely mind-blowing! From graphics to gameplay, it's a virtual masterpiece. I lost track of time in the immersive experience.",
  },
  {
    name: "Bob",
    role: "Architect",
    avatar: "https://i.pravatar.cc/150?img=13",
    review:
      "A hidden gem for tech enthusiasts. The selection is vast, and discovering new tech is addictively delightful!",
  },
  {
    name: "Charlie",
    role: "DevOps Engineer",
    avatar: "https://i.pravatar.cc/150?img=8",
    review:
      "Results speak louder than words. I've never seen progress like this. The workflows are challenging but rewarding.",
  },
];

export default function ReviewSlider() {
  const bubbleRef = useRef(null);
  const profileRef = useRef(null);
  const [index, setIndex] = useState(0);

  // GSAP animation on slide change
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(bubbleRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.35,
      ease: "power2.in",
    })
      .to(
        profileRef.current,
        {
          y: 150,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        },
        "<"
      )
      .set(bubbleRef.current, { scale: 0 })
      .to(bubbleRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.45,
        ease: "back.out(1.6)",
      })
      .to(
        profileRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
        },
        "-=0.25"
      );
  }, [index]);

  const prev = () =>
    setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () =>
    setIndex((i) => (i + 1) % REVIEWS.length);

  const review = REVIEWS[index];

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-black py-32 overflow-hidden">
      <main className="bg-white w-full max-w-2xl rounded-3xl text-center p-8 sm:p-16">
        {/* Header */}
        <h1 className="text-xl font-bold text-slate-900">
          A word from our customers
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          We've been helping businesses do their best since 2018
        </p>

        {/* Slider */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-[60px_auto_60px] items-center gap-4">
          {/* Prev */}
          <button
            onClick={prev}
                        className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold shadow-lg hover:scale-105 transition">

          
            <ChevronLeft />
          </button>

          {/* Review Content */}
          <div className="relative">
            {/* Speech bubble */}
            <div
              ref={bubbleRef}
              className="bg-black text-white rounded-md px-6 py-5 text-sm leading-relaxed relative"
            >
              “{review.review}”

              {/* Bubble arrow */}
              <span className="absolute left-1/2 -bottom-2 w-4 h-4 bg-black rotate-45 -translate-x-1/2" />
            </div>

            {/* Profile */}
            <div
              ref={profileRef}
              className="mt-8 flex flex-col items-center"
            >
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <p className="mt-2 text-sm font-bold text-slate-900">
                {review.name}
              </p>
              <p className="text-xs text-slate-500">
                {review.role}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold shadow-lg hover:scale-105 transition">
                   
                       
          
            <ChevronRight />
          </button>
        </div>
      </main>
    </section>
  );
}
