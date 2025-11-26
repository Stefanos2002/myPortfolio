"use client";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircleProgress() {
  return (
    <div className="flex flex-row gap-10 mt-14">
      <div className="w-24 stroke-yellow-300">
        <CircularProgressbar
          value={66}
          text="66%"
          styles={{
            path: {
              // Path color
              stroke: `var(--color-yellow-300)`,
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: "var(--color-neutral-300)",
            },
          }}
        />
      </div>
      <div className="w-24">
        <CircularProgressbar value={66} text="66%" />
      </div>
      <div className="w-24">
        <CircularProgressbar value={66} text="66%" />
      </div>
      <div className="w-24">
        <CircularProgressbar value={66} text="66%" />
      </div>
      <div className="w-24">
        <CircularProgressbar value={66} text="66%" />
      </div>
      <div className="w-24">
        <CircularProgressbar value={66} text="66%" />
      </div>
    </div>
  );
}
