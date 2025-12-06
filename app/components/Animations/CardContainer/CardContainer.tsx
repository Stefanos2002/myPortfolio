"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import ReactLenis from "lenis/react";
import { useRef } from "react";
import Image from "next/image";
import AOSWrapper from "../AOSWrapper/AOSWrapper";

const projects = [
  {
    title: "Project 1",
    src: "/images/database2.png",
  },
  {
    title: "Project 2",
    src: "/images/profile2.jpg",
  },
  {
    title: "Project 3",
    src: "/images/responsive2.png",
  },
  {
    title: "Project 4",
    src: "/images/wordpress.png",
  },
  {
    title: "Project 5",
    src: "/images/web-design.jpeg",
  },
];

const Card = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  src: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-10vh + ${i * 20 + 250}px)`,
        }}
        className="rounded-4xl relative -top-1/4 flex h-120 w-[60vw] origin-top flex-col overflow-hidden"
      >
        <Image src={src} alt={title} fill className="object-cover" />
      </motion.div>
    </div>
  );
};

export default function CardContainer() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <AOSWrapper />
      <main
        data-aos="fade-up"
        ref={container}
        className="relative flex order-2 w-full flex-col items-center justify-center pb-[50vh]"
      >
        {/* <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
          <span className="after:from-background after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
            scroll down to see card stack
          </span>
        </div> */}
        {projects.map((project, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (projects.length - i - 1) * 0.1
          );
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
}
