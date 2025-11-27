import AnimatedCircle from "../components/AnimatedCircle/AnimatedCircle";
import "react-circular-progressbar/dist/styles.css";
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
        <div className="flex flex-col gap-4 justify-center">
          <p className="text-neutral-300 text-left leading-[1.8rem] text-[15px]">
            Hi, I’m Stefanos Kaloulis, a web developer and Computer Science
            graduate from the University of Western Macedonia.
          </p>
          <p className="text-neutral-300 text-left leading-[1.8rem] text-[15px]">
            I’m fluent in English and passionate about creating clean,
            functional, and visually appealing websites. I’ve worked extensively
            with HTML, CSS, JavaScript, and TypeScript, and I enjoy building
            responsive and user-friendly applications using React, Next.js, and
            Tailwind CSS. I’ve also done several WordPress projects, handling
            everything from theme customization to plugin integration and site
            optimization.
          </p>
          <p className="text-neutral-300 text-left leading-[1.8rem] text-[15px]">
            I love bringing ideas to life on the web and am always exploring new
            tools and techniques to make my projects even better.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center bg-black justify-center gap-10 mt-24 mb-24 pb-10 pt-10 rounded-xl">
        <div className="flex gap-10 flex-row">
          <AnimatedCircle label="Next.js" value={90} />
          <AnimatedCircle label="React.js" value={86} />
          <AnimatedCircle label="Typescript" value={83} />
          <AnimatedCircle label="Javascript" value={80} />
        </div>
        <div className="flex gap-10 flex-row">
          <AnimatedCircle label="Tailwind" value={95} />
          <AnimatedCircle label="HTML" value={95} />
          <AnimatedCircle label="Node.js" value={78} />
          <AnimatedCircle label="MongoDB" value={76} />
          <AnimatedCircle label="Wordpress" value={73} />
        </div>
      </div>
      <div>hello there</div>
    </div>
  );
}
