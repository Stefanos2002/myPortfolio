"use client";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";

type MenuToggleProps = {
  open: boolean;
  onToggle: () => void;
};

export default function MenuToggle({ open, onToggle }: MenuToggleProps) {
  return (
    <>
      <button
        onClick={onToggle}
        className="relative h-7 w-7 cursor-pointer text-3xl text-white xl:hidden"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {/* Menu Icon */}
        <SlMenu
          className={`absolute inset-0 transition-all duration-300 ease-in-out
          ${
            open
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }
        `}
        />

        {/* Close Icon */}
        <IoClose
          className={`absolute -inset-1 text-4xl transition-all duration-300 ease-in-out
          ${
            open
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }
        `}
        />
      </button>
    </>
  );
}
