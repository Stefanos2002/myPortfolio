import AnimatedCircle from "../components/Animations/AnimatedCircle/AnimatedCircle";
import "react-circular-progressbar/dist/styles.css";
import TiltedCard from "../components/Animations/TiltedCard/TiltedCard";
import { FaCheckCircle } from "react-icons/fa";
import { GiLightBulb } from "react-icons/gi";
import styles from "./about.module.css";
import AOSWrapper from "../components/Animations/AOSWrapper/AOSWrapper";

export default function About() {
  return (
    <div className="flex items-center pt-20 px-10 xl:px-0 justify-center min-h-screen w-full flex-col">
      <AOSWrapper />
      <div
        data-aos="fade-right"
        className="flex w-full max-w-232 pb-10 pt-10 flex-col order-1"
      >
        <span className="text-neutral-400 transition-colors duration-300 light:text-black light:border-[0.5] light:border-stone-400 text-xs mb-4 bg-neutral-800 light:bg-stone-300 light:font-semibold w-max uppercase p-3">
          About
        </span>
        <h1 className="text-white light:text-black transition-all duration-300 font-extrabold text-3xl">
          About Me
        </h1>
      </div>
      <div
        data-aos="fade-right"
        className="flex items-center flex-row gap-10 order-2 [--card-w:220px] [--card-h:230px]
    [--img-w:260px]  [--img-h:240px]
    lg:[--card-w:300px] lg:[--card-h:305px]
    lg:[--img-w:320px]  lg:[--img-h:310px]"
      >
        <TiltedCard
          className={`${styles.hero_card} tiltcard`}
          // containerHeight="305px"
          // containerWidth="300px"
          // imageHeight="310px"
          // imageWidth="320px"
          containerHeight="var(--card-w)"
          containerWidth="var(--card-h)"
          imageHeight="var(--img-w)"
          imageWidth="var(--img-h)"
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
              <ul
                className={`${styles.details} text-sm justify-center items-stretch flex flex-col pt-4 pr-4 pl-4 pb-5 gap-4`}
              >
                <li className="flex flex-row justify-between items-center border-neutral-700 border-b pb-1 rounded-sm">
                  <span className="text-white transition-colors duration-300 light:text-stone-900 font-bold text-[15px] cursor-auto">
                    Fullname:
                  </span>
                  <span className="text-neutral-300 transition-colors duration-300 light:text-stone-700 cursor-auto">
                    Stefanos Kaloulis
                  </span>
                </li>
                <li className="flex flex-row justify-between items-center border-neutral-700 border-b pb-1 rounded-sm">
                  <span className="text-white transition-colors duration-300 light:text-stone-900 text-[15px] font-bold cursor-auto">
                    Age:
                  </span>
                  <span className="text-neutral-300 transition-colors duration-300 light:text-stone-700 cursor-auto">
                    22
                  </span>
                </li>
                <li className="flex flex-row justify-between items-center border-neutral-700 border-b pb-1 rounded-sm">
                  <span className="text-white transition-colors duration-300 light:text-stone-900 text-[15px] font-bold cursor-auto">
                    Birthdate:
                  </span>
                  <span className="text-neutral-300 transition-colors duration-300 light:text-stone-700 cursor-auto">
                    27/12/2002
                  </span>
                </li>
                <li className="flex flex-row justify-between items-center border-neutral-700 border-b pb-1 rounded-sm">
                  <span className="text-white transition-colors duration-300 light:text-stone-900 text-[15px] font-bold cursor-auto">
                    Email:
                  </span>
                  <a
                    href="mailto:kalouliss@gmail.com"
                    aria-label="Send email to kalouliss@gmail.com"
                    className="text-neutral-300 light:text-stone-700 hover:text-white light:hover:text-black transition-all duration-300 [transform:translateZ(40)] cursor-pointer"
                  >
                    kalouliss@gmail.com
                  </a>
                </li>
                <li className="flex flex-row justify-between items-center border-neutral-700 border-b pb-1 rounded-sm">
                  <span className="text-white transition-colors duration-300 light:text-stone-900 text-[15px] font-bold cursor-pointer">
                    Phone:
                  </span>
                  <a
                    href="tel:+306980090854"
                    className="text-neutral-300 light:text-stone-700 hover:text-white light:hover:text-black transition-all duration-300 [transform:translateZ(40)] cursor-pointer"
                  >
                    +30 698 009 0854
                  </a>
                </li>
                <li className="flex flex-row justify-between items-center border-neutral-700 border-b pb-1 rounded-sm">
                  <span className="text-white transition-colors duration-300 light:text-stone-900 text-[15px] font-bold">
                    Work:
                  </span>
                  <span className="text-neutral-300 transition-colors duration-300 light:text-stone-700">
                    Remote/On-site/Hybrid
                  </span>
                </li>
              </ul>
            </>
          }
        />
        <div className="flex w-full max-w-150 lg:max-w-143 translate-y-5.5 lg:translate-y-2.5 flex-col gap-1.5 lg:gap-3 justify-center">
          <p className="text-neutral-300 text-left light:text-stone-700 transition-all duration-300 light:font-[450] leading-[1.7rem] text-[15px] lg:text-[16px]">
            Hi, I’m Stefanos Kaloulis, a web developer that lives in Patras,
            Greece. I&apos;m also a Computer Science graduate from the
            University of Western Macedonia.
          </p>
          <p className="text-neutral-300 light:text-stone-700 light:font-[450] transition-all duration-300 text-left leading-[1.7rem] text-[15px] lg:text-[16px]">
            I’m fluent in English and passionate about creating clean,
            functional, and visually appealing websites. I’ve worked extensively
            with HTML, CSS, JavaScript, and TypeScript, and I enjoy building
            responsive and user-friendly applications using React, Next.js, and
            Tailwind CSS. I’ve also done several WordPress projects, handling
            everything from theme customization to plugin integration and site
            optimization.
          </p>
          <p className="text-neutral-300 light:text-stone-700 light:font-[450] transition-all duration-300 text-left leading-[1.7rem] text-[15px] lg:text-[16px]">
            I love bringing ideas to life on the web and am always exploring new
            tools and techniques to make my projects even better.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-right"
        className="flex flex-row order-4 mt-20 mb-20 pb-10 pt-10 justify-center items-center"
      >
        <h1 className="text-xl font-extrabold text-white transition-all duration-300 light:text-black mr-10">
          Developer Skills
        </h1>
        <div
          className={`fade flex flex-col relative transition-all duration-300 items-center justify-center gap-10 ${styles.fade} pl-10`}
        >
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
      </div>
      <div className="flex gap-10 w-full max-w-258 order-5 mb-24 flex-row items-center justify-center">
        <div
          data-aos="fade-right"
          className="bg-black transition-all duration-300 light:bg-white light:border light:border-stone-300 h-86 w-2/5 p-10 rounded-3xl flex flex-col"
        >
          <h1 className="text-white transition-all duration-300 light:text-black light:font-semibold text-left border-b-[0.5] light:border-stone-800 pb-1">
            Development Tools
          </h1>
          <ul className="text-neutral-400 transition-all duration-300 light:text-stone-800 mt-6 leading-8 list">
            <li className="flex flex-row items-center gap-2">
              <FaCheckCircle />
              Git/GitHub
            </li>
            <li className="flex flex-row items-center gap-2">
              <FaCheckCircle />
              Vercel
            </li>
            <li className="flex flex-row items-center gap-2">
              <FaCheckCircle />
              phpMyAdmin
            </li>
            <li className="flex flex-row items-center gap-2">
              <FaCheckCircle />
              Visual Studio Code
            </li>
            <li className="flex flex-row items-center gap-2">
              <FaCheckCircle />
              REST/External APIs
            </li>
            <li className="flex flex-row items-center gap-2">
              <FaCheckCircle />
              Web Server Management
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-left"
          className="bg-black transition-all duration-300 light:bg-white light:border light:border-stone-300 h-86 w-[45%] p-10 rounded-3xl"
        >
          <h1 className="text-white transition-all duration-300 light:text-black light:font-semibold text-left border-b-[0.5] light:border-stone-800 pb-1">
            Interests
          </h1>
          <ul className="text-neutral-400 transition-all duration-300 light:text-stone-800 mt-6 leading-8 list">
            <li className="flex flex-row items-center gap-2">
              <GiLightBulb />
              Crafting Dynamic Websites
            </li>
            <li className="flex flex-row items-center gap-2">
              <GiLightBulb />
              Responsive UX/UI Design
            </li>
            <li className="flex flex-row items-center gap-2">
              <GiLightBulb />
              API Integration
            </li>
            <li className="flex flex-row items-center gap-2">
              <GiLightBulb />
              Front-End Development
            </li>
            <li className="flex flex-row items-center gap-2">
              <GiLightBulb />
              Back-End Development
            </li>
            <li className="flex flex-row items-center gap-2">
              <GiLightBulb />
              Website Maintenance & Optimization
            </li>
            <li className="flex flex-row items-center gap-2">
              <GiLightBulb />
              Adaptation to New Technologies
            </li>
          </ul>
        </div>
      </div>
      <div
        data-aos="fade-right"
        className="flex w-full max-w-232 flex-row order-3 transition-all duration-300 bg-black light:bg-white light:border light:border-stone-300 justify-evenly gap-10 mt-24 px-6 py-12 rounded-xl"
      >
        <div className="flex flex-col">
          <h1 className="text-white light:text-black transition-all duration-300 font-bold light:font-black text-xl">
            Education
          </h1>
          <div className="flex flex-col h-full items-center justify-center">
            <span className="text-white light:text-black transition-all duration-300 font-bold text-lg px-4 py-3 rounded-full">
              2020 - 2025
            </span>
            <div>
              <span className="text-white light:text-black transition-all duration-300 light:font-semibold text-lg block">
                University of Western Macedonia
              </span>
              <span className="text-neutral-400 transition-all duration-300 light:text-stone-600 text-[15px] text-center block">
                BSc in Computer Science
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white light:text-black transition-all duration-300 font-bold light:font-black text-xl">
            Experience
          </h1>
          <div className="flex flex-row items-center mt-10 gap-5">
            <span className="text-neutral-400 text-sm transition-all duration-300 bg-neutral-900 light:text-stone-800 light:bg-stone-200 light:border light:border-stone-400 px-5 py-3 rounded-full">
              2024 (Jul - Oct)
            </span>
            <div>
              <span className="text-white transition-all duration-300 light:text-stone-700 light:font-semibold block">
                Omega Systems
              </span>
              <span className="text-neutral-400 transition-all duration-300 light:text-stone-600 text-[13px] block">
                Web Developer - Internship
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center mt-10 gap-5">
            <span className="text-neutral-400 transition-all duration-300 text-sm bg-neutral-900 light:text-stone-800 light:bg-stone-200 light:border light:border-stone-400 px-4 py-3 rounded-full">
              2024 (Jan - Nov)
            </span>
            <div>
              <span className="text-white transition-all duration-300 light:text-stone-700 light:font-semibold block">
                CineGame Critic website
              </span>
              <span className="text-neutral-400 transition-all duration-300 light:text-stone-600 text-[13px] block">
                Next.js FullStack Application
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center mt-10 gap-5">
            <span className="text-neutral-400 transition-all duration-300 text-sm bg-neutral-900 light:text-stone-800 light:bg-stone-200 light:border light:border-stone-400 px-4 py-3 rounded-full">
              2024 (Oct - Dec)
            </span>
            <div>
              <span className="text-white transition-all duration-300 light:text-stone-700 light:font-semibold block">
                Set Website
              </span>
              <span className="text-neutral-400 transition-all duration-300 light:text-stone-600 text-[13px] block">
                FullStack Web Developer
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center mt-10 gap-5">
            <span className="text-neutral-400 transition-all duration-300 text-sm bg-neutral-900 light:text-stone-800 light:bg-stone-200 light:border light:border-stone-400 px-4 py-3 rounded-full">
              2023 (Oct - Dec)
            </span>
            <div>
              <span className="text-white transition-all duration-300 light:text-stone-700 light:font-semibold block">
                Boston Kitchen Website
              </span>
              <span className="text-neutral-400 transition-all duration-300 light:text-stone-600 text-[13px] block">
                Web Designer
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center mt-10 gap-5">
            <span className="text-neutral-400 transition-all duration-300 text-sm bg-neutral-900 light:text-stone-800 light:bg-stone-200 light:border light:border-stone-400 px-4 py-3 rounded-full">
              2023 (Sep - Oct)
            </span>
            <div>
              <span className="text-white transition-all duration-300 light:text-stone-700 light:font-semibold block">
                Nekenergy Website
              </span>
              <span className="text-neutral-400 transition-all duration-300 light:text-stone-600 text-[13px] block">
                Web Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
