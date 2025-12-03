"use client";
import type { MotionValue, SpringOptions } from "motion/react";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "motion/react";

interface TiltedCardProps {
  imageSrc: React.ComponentProps<"img">["src"];
  containerHeight?: React.CSSProperties["height"];
  containerWidth?: React.CSSProperties["width"];
  imageHeight?: React.CSSProperties["height"];
  imageWidth?: React.CSSProperties["width"];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;

  overlayFrontContent?: React.ReactNode; // ← NEW
  overlayBackContent?: React.ReactNode; // ← NEW
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  overlayFrontContent = null, // NEW
  overlayBackContent = null, // NEW
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue<number>(0), springValues);
  const rotateY = useSpring(useMotionValue<number>(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);
  const [flipped, setFlipped] = useState(false);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  function handleClick() {
    animate(rotateCard, flipped ? 0 : 180, {
      duration: 0.55,
      ease: [0.55, 0.06, 0.68, 0.19],
    });

    setFlipped((prev) => !prev);
  }
  const rotateCard = useMotionValue<number>(0);

  // combine flip rotation + hover tilt
  // Combined rotateY
  const combinedRotateY = useTransform(
    [rotateY, rotateCard] as MotionValue<number>[], // <-- explicitly tell TS this is an array of MotionValues
    (values: number[]) => values[0] + values[1] // values is inferred as number[]
  );
  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className="relative [transform-style:preserve-3d]"
        onClick={handleClick}
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX: rotateX, // tilt only on front
          rotateY: combinedRotateY,
          scale,
        }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute inset-0 backface-hidden cursor-pointer"
          style={{ pointerEvents: flipped ? "none" : "auto" }}
        >
          <motion.img
            src={imageSrc}
            alt={""}
            className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
            style={{
              width: imageWidth,
              height: imageHeight,
            }}
          />

          {overlayFrontContent && (
            <motion.div className="absolute bottom-6 right-8 z-2 will-change-transform transform-[translateZ(30px)]">
              {overlayFrontContent}
            </motion.div>
          )}
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute inset-0 rounded-[15px] bg-black px-6 flex flex-col justify-center transform-[rotateY(180deg)] backface-hidden cursor-pointer"
          style={{ pointerEvents: flipped ? "auto" : "none" }}
          onClick={(e) => {
            // Only flip back if clicking empty area
            if ((e.target as HTMLElement).tagName === "DIV") {
              handleClick();
            }
          }}
        >
          {overlayBackContent}
        </div>
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        ></motion.figcaption>
      )}
    </figure>
  );
}
