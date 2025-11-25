import Image from "next/image";
import TiltedCard from "../components/TiltedCard/TiltedCard";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className="flex relative pt-10 pl-30 pr-30 flex-col w-full h-full">
      <div className="flex w-full pb-10 pt-10 flex-col">
        <span className="text-neutral-400 text-xs mb-4 bg-neutral-800 w-max uppercase p-3">
          About
        </span>
        <h1 className="text-white font-extrabold text-3xl">About Me</h1>
      </div>
      <div className="flex flex-row gap-10">
        <TiltedCard
          imageSrc="/images/profile2.jpg"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={6}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayFrontContent={
            <button
              className={`${styles.card_button} border cursor-pointer solid border-neutral-300 text-md rounded-full text-white bg-neutral-700/75 p-1 px-3`}
            >
              Click Me
            </button>
          }
          overlayBackContent={
            <>
              <div className="flex flex-col items-center">
                <h2 className="uppercase w-max p-1 px-2 mb-2 text-neutral-400 text-xs text-center bg-neutral-800">
                  Details
                </h2>
              </div>
              <ul className="text-sm flex flex-col pt-0 pr-4 pl-4 pb-5 gap-3">
                <li className="flex flex-row justify-between border-b-[0.5px] rounded-md tracking-wide">
                  <span className="text-white font-bold cursor-auto">
                    Fullname:
                  </span>
                  <span className="text-neutral-300 cursor-auto">
                    Stefanos Kaloulis
                  </span>
                </li>
                <li className="flex flex-row justify-between border-b-[0.5px] rounded-md tracking-wide">
                  <span className="text-white font-bold cursor-auto">Age:</span>
                  <span className="text-neutral-300 cursor-auto">22</span>
                </li>
                <li className="flex flex-row justify-between border-b-[0.5px] rounded-md tracking-wide">
                  <span className="text-white font-bold cursor-auto">
                    Birthdate:
                  </span>
                  <span className="text-neutral-300 cursor-auto">
                    27/12/2002
                  </span>
                </li>
                <li className="flex flex-row justify-between border-b-[0.5px] rounded-md tracking-wide">
                  <span className="text-white font-bold cursor-auto">
                    Address:
                  </span>
                  <span className="text-neutral-300 cursor-auto">
                    Aretha 9, Patras
                  </span>
                </li>
                <li className="flex flex-row justify-between border-b-[0.5px] rounded-md tracking-wide">
                  <span className="text-white font-bold cursor-auto">
                    Email:
                  </span>
                  <a
                    href="mailto:kalouliss@gmail.com"
                    aria-label="Send email to kalouliss@gmail.com"
                    className="text-neutral-300 hover:text-white transition-all duration-200 [transform:translateZ(40)] cursor-pointer"
                  >
                    kalouliss@gmail.com
                  </a>
                </li>
                <li className="flex flex-row justify-between border-b-[0.5px] rounded-md tracking-wide">
                  <span className="text-white font-bold cursor-pointer">
                    Phone:
                  </span>
                  <a
                    href="tel:+306980090854"
                    className="text-neutral-300 hover:text-white transition-all duration-200 [transform:translateZ(40)] cursor-pointer"
                  >
                    +30 698 009 0854
                  </a>
                </li>
                <li className="flex flex-row justify-between border-b-[0.5px] rounded-md tracking-wide">
                  <span className="text-white font-bold">Nationality:</span>
                  <span className="text-neutral-300">Greek</span>
                </li>
              </ul>
            </>
          }
        />
        <p className="text-white leading-7 text-md">
          My name is Stefanos Kaloulis, and I am a graduate of the Department of
          Computer Science at the University of Western Macedonia. I am fluent
          in English and have a strong interest in programming.
          <br /> I have acquired both basic and advanced knowledge of HTML, CSS,
          JavaScript, and TypeScript, as well as libraries and frameworks such
          as React, Next.js, and Tailwind CSS. I have also worked on Wordpress
          projects and I am passionate about creating impressive and functional
          websites.
        </p>
      </div>
    </div>
  );
}
