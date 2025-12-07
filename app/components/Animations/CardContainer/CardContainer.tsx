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
  },
  {
    title: "IGNITE",
    src: "/videos/IGNITE.mp4",
  },
  {
    title: "Boston Kitchen",
    src: "/videos/BOSTON.mp4",
  },
  {
    title: "Nekenergy",
    src: "/videos/NEK.mp4",
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
      className="sticky top-0 group flex flex-col items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-25vh + ${i * 20 + 250}px)`,
        }}
        className="rounded-4xl relative -top-1/4 flex h-134 w-[60vw] origin-top flex-col overflow-hidden"
      >
        {/* <Image src={src} alt={title} fill className="object-cover" /> */}
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 bg-opacity-50 opacity-0 flex flex-col items-center justify-center text-center text-white transition-opacity duration-300 ease-in-out group-hover:opacity-100 rounded-4xl">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
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
        data-aos="fade-up"
        ref={container}
        className="relative flex order-2 w-full flex-col items-center justify-center pb-[38vh]"
      >
        <SplitText
          text="Browse My Latest Creations"
          className="text-2xl text-center mt-20 p-5 px-8 border-[0.5] text-white"
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
