"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import ReactLenis from "lenis/react";
import { useRef } from "react";
import AOSWrapper from "../AOSWrapper/AOSWrapper";
import SplitText from "../SplitText";

const projects = [
  {
    title: "Cinegame Critic",
    src: "/videos/CGC.mp4",
    link: "https://www.cinegame-critic.com/",
  },
  {
    title: "SET",
    src: "/videos/SET.mp4",
    link: "https://www.set.gr/",
  },
  {
    title: "IGNITE",
    src: "/videos/IGNITE.mp4",
    link: "https://ignite.construction/",
  },
  {
    title: "Boston Kitchen",
    src: "/videos/BOSTON.mp4",
    link: "https://www.bostonkitchen.com/",
  },
  {
    title: "Nekenergy",
    src: "/videos/NEK.mp4",
    link: "https://nekenergy.gr/",
  },
];

const Card = ({
  i,
  title,
  link,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  link?: string;
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
      // CHANGED: Reduced mb-20 to mb-12 so the gap between cards is cleaner.
      className="sticky top-0 max-[1000px]:static max-[1000px]:h-auto max-[1000px]:mb-12 group flex flex-col items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(var(--card-top) + ${i * 20}px)`,
        }}
        className="
          relative flex flex-col origin-top overflow-hidden rounded-4xl
          
          /* === BELOW 1000PX (Normal Scroll Flow) === */
          max-[1000px]:!top-auto
          max-[1000px]:!transform-none
          max-[1000px]:w-full
          
          /* CHANGED: Replaced 'h-[60vh]' with 'aspect-video h-auto'.
             This forces the box to be exactly the size of the video (16:9),
             removing the empty internal space. */
          max-[1000px]:h-auto
          max-[1000px]:aspect-video
          
          /* === ABOVE 1000PX (Desktop Sticky Stack) === */
          min-[1000px]:w-auto 
          min-[1000px]:h-auto 
          min-[1000px]:max-w-4xl 
          min-[1000px]:max-h-134
          min-[1000px]:[--card-top:calc(-25vh+300px)]
        "
      >
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain rounded-4xl bg-neutral-900"
        />
        <div className="absolute inset-0 bg-black/70 bg-opacity-50 opacity-0 flex flex-col items-center justify-center text-center text-white transition-opacity duration-300 ease-in-out group-hover:opacity-100 rounded-4xl">
          <h2 className="text-xl uppercase font-semibold mb-4">{title}</h2>
          {link && (
            <a
              href={link}
              className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
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
        ref={container}
        // CHANGED: 'max-[1000px]:pb-0' - Removes the huge bottom padding needed for sticky scroll
        // since we are just stacking them normally now.
        className="relative flex order-2 w-full flex-col items-center justify-center pt-10 pb-[38vh] max-[1000px]:pb-0"
      >
        <SplitText
          text="Check out some of my past projects"
          className="text-2xl max-[650px]:text-xl transition-all duration-300 text-center max-[1000px]:mb-26 p-5 px-8 border-[0.5] text-white light:text-black light:border-black light:border-2"
          delay={70}
          duration={0.3}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        {projects.map((project, i) => {
          // Logic remains mainly for desktop.
          // On mobile, the scale is disabled via CSS !transform-none.
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
