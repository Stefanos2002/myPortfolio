"use client";
import styles from "./ServiceCard.module.css";

interface Props {
  number: string;
  title: string;
  description: string;
  intro: string;
  image?: string;
  qualifications?: string[];
  focus?: string;
  onOpen?: (
    image: string,
    title: string,
    intro: string,
    qualifications: string[],
    focus: string
  ) => void;
}

export default function ServiceCard({
  number,
  title,
  image,
  description,
  intro,
  qualifications,
  focus,
  onOpen,
}: Props) {
  return (
    <>
      {/* CARD */}
      <div
        className={`bg-neutral-700 transition-colors duration-300 light:bg-white light:border light:border-stone-300 ${styles.jump} cursor-pointer group rounded-xl p-8 gap-5 h-80 flex flex-col justify-center`}
        onClick={() =>
          onOpen?.(image ?? "", title, intro, qualifications ?? [], focus ?? "")
        } // Use the injected handler
      >
        <span className="text-neutral-200 light:text-stone-700 group-hover:bg-neutral-500 light:group-hover:bg-stone-300 transition-all duration-300 bg-neutral-600 light:bg-stone-200 w-max p-4 px-5 text-md font-semibold rounded-full">
          {number}
        </span>

        <h1 className="text-neutral-200 transition-all duration-300 light:text-black font-extrabold text-lg">
          {title}
        </h1>

        <p className="text-neutral-400 max-w-3xs transition-all duration-300 light:text-stone-800 text-[15px]">
          {description}
        </p>

        {/* READ MORE */}
        <h3 className="uppercase text-[13px] transition-all duration-300 text-neutral-200 light:text-black font-bold cursor-pointer">
          <span>R</span>
          <span>E</span>
          <span>A</span>
          <span>D</span> <span>M</span>
          <span>O</span>
          <span>R</span>
          <span>E</span>
        </h3>
      </div>
    </>
  );
}
