"use client";

import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface AnimatedCircleProps {
  value: number;
  label: string;
}

const AnimatedCircle: React.FC<AnimatedCircleProps> = ({ value, label }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 200);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="relative w-24 ">
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="yellowToOrange" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#ff8c00" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgressbar
        value={progress}
        text=""
        styles={{
          path: {
            stroke: "url(#yellowToOrange)",
            transition: "stroke-dashoffset 1.2s ease-in-out",
          },
          trail: { stroke: "white", strokeWidth: 6 },
        }}
      />

      <div className="absolute inset-0 text-white flex flex-col items-center justify-center text-sm">
        <span className="">{label}</span>
        <span className="font-semibold">{value}%</span>
      </div>
    </div>
  );
};
export default AnimatedCircle;
