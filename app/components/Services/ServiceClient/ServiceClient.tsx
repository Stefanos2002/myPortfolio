"use client";
import { useState, cloneElement, ReactElement } from "react";
import AOSWrapper from "../../Animations/AOSWrapper/AOSWrapper";
import styles from "./ServiceClient.module.css";
import Image from "next/image";

export default function ServiceClient({
  children,
}: {
  children: ReactElement<{
    onOpen?: (
      image: string,
      title: string,
      intro: string,
      qualifications: string[],
      focus: string
    ) => void;
  }>[];
}) {
  const [open, setOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const closeModal = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setOpen(false);
      setAnimateOut(false); // reset
    }, 300); // match fade-out duration
  };

  const [modalData, setModalData] = useState({
    image: "",
    title: "",
    intro: "",
    qualifications: [""],
    focus: "",
  });

  const openModal = (
    image: string,
    title: string,
    intro: string,
    qualifications: string[],
    focus: string
  ) => {
    setModalData({ image, title, intro, qualifications, focus });
    setOpen(true);
  };

  return (
    <>
      <AOSWrapper />
      <div
        data-aos="flip-down"
        className="grid grid-cols-3 gap-10 order-2 mb-24"
      >
        {children.map((child) =>
          cloneElement(child, {
            onOpen: openModal, // inject handler into each server card
          })
        )}
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          data-aos={"fade-in"}
          data-aos-duration="300"
          onClick={closeModal}
          className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40 ${
            animateOut ? styles.fadeOut : ""
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-neutral-900 text-neutral-200 p-10 rounded-2xl w-2/3 h-3/4 overflow-y-scroll relative"
          >
            <button
              onClick={closeModal}
              className={`absolute top-3 right-5 text-xl border rounded-full px-[10px] py-1 cursor-pointer ${styles.bounce}`}
            >
              ✕
            </button>

            {modalData.image && (
              <Image
                src={modalData.image}
                alt={modalData.title || "Service Image"}
                width={800}
                height={800}
                className="mb-4"
              />
            )}
            <p className="text-neutral-400 mb-6">{modalData.intro}</p>
            <h2 className="mb-2">What I Offer</h2>
            <ul className="mb-6 list-disc text-neutral-400">
              {modalData.qualifications?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h2>My Focus</h2>
            <p className="text-neutral-400 mt-2">{modalData.focus}</p>
          </div>
        </div>
      )}
    </>
  );
}
