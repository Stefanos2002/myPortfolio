"use client";
import { useState } from "react";
import styles from "./Services.module.css";

interface Props {
  number: string;
  title: string;
  description: string;
}

export default function ServiceCard({ number, title, description }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div
        className={`bg-neutral-700 ${styles.jump} cursor-pointer group rounded-xl p-8 gap-5 h-80 flex flex-col justify-center`}
      >
        <span className="text-neutral-200 group-hover:bg-neutral-500 transition-all duration-300 bg-neutral-600 w-max p-4 px-5 text-md font-semibold rounded-full">
          {number}
        </span>

        <h1 className="text-neutral-200 font-extrabold text-lg">{title}</h1>

        <p className="text-neutral-400 text-[15px]">{description}</p>

        {/* READ MORE */}
        <h3
          className="uppercase text-[13px] text-neutral-200 font-bold cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <span>R</span>
          <span>E</span>
          <span>A</span>
          <span>D</span> <span>M</span>
          <span>O</span>
          <span>R</span>
          <span>E</span>
        </h3>
      </div>

      {/* OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
          <div className="bg-neutral-800 text-neutral-200 p-10 rounded-2xl w-[500px] relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <p className="text-neutral-400 mb-6">{description}</p>

            <p className="text-sm opacity-70">
              You can put any additional content here.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
