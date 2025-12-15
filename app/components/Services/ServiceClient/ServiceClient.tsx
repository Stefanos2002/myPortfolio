"use client";
import { useEffect, useState } from "react";
import AOSWrapper from "../../Animations/AOSWrapper/AOSWrapper";
import styles from "./ServiceClient.module.css";
import Image from "next/image";
import ServiceCard from "../ServiceCard/ServiceCard";

interface ServiceData {
  number: string;
  title: string;
  description: string;
  intro: string;
  image?: string;
  qualifications?: string[];
  focus?: string;
}

export default function ServiceClient({ data }: { data: ServiceData[] }) {
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
    qualifications: [] as string[],
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

  // Handle ESC key to close modal
  useEffect(() => {
    if (!open) return; // only attach listener if modal is open

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc); // cleanup
    };
  }, [open]);

  return (
    <>
      <AOSWrapper />
      <div
        // data-aos="flip-down"
        className="grid grid-cols-1 min-[768px]:grid-cols-2 min-[1140px]:grid-cols-3 gap-10 order-2 mb-24"
      >
        {data.map((item, index) => (
          <ServiceCard
            key={`${index}-${item.title}`}
            number={item.number}
            title={item.title}
            description={item.description}
            image={item.image}
            intro={item.intro}
            qualifications={item.qualifications || []}
            focus={item.focus}
            onOpen={openModal} // Directly pass the handler
          />
        ))}
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          data-aos={"fade-in"}
          data-aos-duration="300"
          onClick={closeModal}
          className={`overlay fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40 ${
            animateOut ? styles.fadeOut : ""
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-neutral-900 light:bg-white text-neutral-200 light:text-black p-10 rounded-2xl w-4/5 min-[1140px]:w-3/5 h-3/4 overflow-y-auto ${styles.scrollbar} relative`}
          >
            <button
              onClick={closeModal}
              className={`absolute top-3 right-5 text-xl border light:border-[1.5] light:border-black light:font-semibold rounded-full px-2.5 py-1 cursor-pointer ${styles.bounce}`}
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
            <p className="text-neutral-400 light:text-black mb-6">
              {modalData.intro}
            </p>
            <h2 className="mb-2 light:font-bold">What I Offer</h2>
            {modalData.qualifications.length > 0 && (
              <ul className="mb-6 list-disc text-neutral-400 light:text-black">
                {modalData.qualifications?.map((item) => (
                  <li key={`${modalData.title}-${item}`}>{item}</li>
                ))}
              </ul>
            )}
            <h2 className="mb-2 light:font-bold">My Focus</h2>
            <p className="text-neutral-400 light:text-black">
              {modalData.focus}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
