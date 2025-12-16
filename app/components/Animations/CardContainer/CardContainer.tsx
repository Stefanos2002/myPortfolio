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
    link: "https://res.cloudinary.com/druxzsmzm/video/upload/f_auto,q_auto/v1765906380/CGC_oxbbdm.mp4",
  },
  {
    title: "SET",
    src: "/videos/SET.mp4",
    link: "https://res.cloudinary.com/druxzsmzm/video/upload/f_auto,q_auto/v1765906385/SET_hhwegk.mp4",
  },
  {
    title: "IGNITE",
    src: "/videos/IGNITE.mp4",
    link: "https://res.cloudinary.com/druxzsmzm/video/upload/f_auto,q_auto/v1765906391/IGNITE_n6ahxc.mp4",
  },
  {
    title: "Boston Kitchen",
    src: "/videos/BOSTON.mp4",
    link: "https://res.cloudinary.com/druxzsmzm/video/upload/f_auto,q_auto/v1765906676/BOSTON_qgdax5.mp4",
  },
  {
    title: "Nekenergy",
    src: "/videos/NEK.mp4",
    link: "https://res.cloudinary.com/druxzsmzm/video/upload/f_auto,q_auto/v1765906382/NEK_md2huo.mp4",
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
      className="sticky top-0 max-[1000px]:static max-[1000px]:h-auto max-[1000px]:mb-12 group flex flex-col items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(var(--card-top) + ${i * 20}px)`,
        }}
        // REMOVED COMMENTS FROM INSIDE THE STRING
        className="relative flex flex-col origin-top overflow-hidden rounded-4xl max-[1000px]:!top-auto max-[1000px]:!transform-none max-[1000px]:w-full max-[1000px]:h-auto max-[1000px]:aspect-video min-[1000px]:w-auto min-[1000px]:h-auto min-[1000px]:max-w-4xl min-[1000px]:max-h-134 min-[1000px]:[--card-top:calc(-25vh+300px)]"
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
        data-aos="fade-right"
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
