"use client";

import { useEffect, useState, useRef } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface AnimatedCircleProps {
  value: number;
  label: string;
}

const AnimatedCircle: React.FC<AnimatedCircleProps> = ({ value, label }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Detect when the circle enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // ensures animation runs only once
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Start animation only after becoming visible
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setProgress(value), 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, value]);

  return (
    <div ref={ref} className="relative w-24">
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="yellowToOrange" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={"#facc15"} />
            <stop offset="100%" stopColor={"#ff8c00"} />
          </linearGradient>
        </defs>
      </svg>

      <CircularProgressbar
        value={progress}
        text=""
        styles={{
          path: {
            stroke: "url(#yellowToOrange)",
            transition: "stroke-dashoffset 1.2s ease-in-out, stroke 0.5s ease",
          },
          trail: { stroke: "white", strokeWidth: 6 },
        }}
      />

      <div className="absolute inset-0 text-white transition-all duration-300 light:text-black flex flex-col items-center justify-center text-sm">
        <span>{label}</span>
        <span className="font-semibold">{value}%</span>
      </div>
    </div>
  );
};

export default AnimatedCircle;
