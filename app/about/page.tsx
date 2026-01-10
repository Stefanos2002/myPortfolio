import AnimatedCircle from "../components/Animations/AnimatedCircle/AnimatedCircle";
import "react-circular-progressbar/dist/styles.css";
import TiltedCard from "../components/Animations/TiltedCard/TiltedCard";
import { FaCheckCircle } from "react-icons/fa";
import { GiLightBulb } from "react-icons/gi";
import styles from "./about.module.css";
import AOSWrapper from "../components/Animations/AOSWrapper/AOSWrapper";

export default function About() {
  const skills = [
    { label: "Next.js", value: 90 },
    { label: "React.js", value: 86 },
    { label: "TypeScript", value: 83 },
    { label: "JavaScript", value: 80 },
    { label: "Tailwind", value: 95 },
    { label: "HTML", value: 95 },
    { label: "Node.js", value: 78 },
    { label: "MongoDB", value: 76 },
    { label: "WordPress", value: 73 },
  ];
  return (
    <section className="w-full min-h-screen overflow-x-hidden flex justify-center px-10 min-[1060px]:px-20 max-[520px]:px-5 pt-40 xl:pt-20">
      <AOSWrapper />

      <div className="w-full max-w-4xl flex flex-col gap-20">
        {/* ===== Header ===== */}
        <header data-aos="fade-right" className="sm:text-left text-center">
          <span className="text-neutral-400 transition-colors duration-300 light:text-black light:border-[0.5] light:border-stone-400 text-xs mb-4 bg-neutral-800 light:bg-stone-300 light:font-semibold w-max uppercase p-3">
            About
          </span>
          <h1 className="text-white mt-6 light:text-black transition-all duration-300 font-extrabold text-3xl">
            About Me
          </h1>
        </header>

        {/* ===== Profile Card + Bio ===== */}
        <section
          data-aos="fade-right"
          // CHANGED: Use 'flow-root' (or block) instead of flex.
          // removed gap-8 (we use margins on the image now).
          className="flow-root order-1"
        >
          {/* Card */}
          <div
            // CHANGED:
            // 1. float-none mx-auto mb-6 -> Default behavior (stacked, centered, margin bottom)
            // 2. min-[520px]:... -> Only applies float and side margin if screen > 520px
            className="
    shrink-0 flex justify-center
    [--card:280px]
    
    float-none 
    mx-auto 
    mb-6

    min-[520px]:float-left 
    min-[520px]:mr-8 
    min-[520px]:mb-4
  "
          >
            <TiltedCard
              className={`${styles.hero_card} tiltcard`}
              containerWidth="var(--card)"
              containerHeight="var(--card)"
              imageWidth="var(--card)"
              imageHeight="var(--card)"
              rotateAmplitude={6}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayFrontContent={
                <div className="pointer-events-none">
                  <button
                    className={`${styles.card_button} cursor-pointer border border-neutral-300 rounded-full bg-neutral-700/75 text-white px-4 py-1`}
                  >
                    Click Me
                  </button>
                </div>
              }
              overlayBackContent={
                <ul
                  className={`${styles.details} flex justify-between h-full items-stretch flex-col gap-3 text-sm p-4`}
                >
                  {[
                    ["Fullname", "Stefanos Kaloulis"],
                    ["Age", "22"],
                    ["Birthdate", "27/12/2002"],
                    [
                      "Email",
                      "kalouliss@gmail.com",
                      "mailto:kalouliss@gmail.com",
                    ],
                    ["Phone", "+30 698 009 0854", "tel:+306980090854"],
                    ["Work", "Remote / On-site / Hybrid"],
                  ].map(([label, value, link]) => (
                    <li
                      key={label}
                      className="flex flex-row justify-between border-b border-neutral-700 pb-1"
                    >
                      <span className="font-bold transition-colors duration-300 text-white light:text-black">
                        {label}:
                      </span>
                      {link ? (
                        <a
                          href={link}
                          className="text-neutral-300 transition-colors duration-300 light:text-stone-700 hover:text-white"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-neutral-300 transition-colors duration-300 text-right light:text-stone-700">
                          {value}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              }
            />
          </div>

          {/* Bio */}
          <div className="space-y-3 text-left max-[520px]:text-center">
            <p className="text-neutral-300 transition-colors duration-300 light:text-stone-700 leading-relaxed">
              Hi, I’m Stefanos Kaloulis, a web developer based in Patras, Greece
              and a Computer Science graduate from the University of Western
              Macedonia.
            </p>

            <p className="text-neutral-300 transition-colors duration-300 light:text-stone-700 leading-relaxed">
              I&apos;m Fluent in English and passionate about creating clean,
              functional websites. Experienced with HTML, CSS, JavaScript, and
              TypeScript, and building responsive, user-friendly apps with
              React, Next.js, and Tailwind CSS. Also skilled in WordPress theme
              customization, plugin integration, and site optimization.
            </p>

            <p className="text-neutral-300 transition-colors duration-300 light:text-stone-700 leading-relaxed">
              I love bringing ideas to life on the web and continuously learning
              new technologies.
            </p>
          </div>
        </section>

        {/* ===== Tools & Interests ===== */}
        <section className="grid order-4 mb-20 justify-center grid-cols-1 md:grid-cols-2 gap-10">
          <div
            data-aos="fade-right"
            className="card bg-black light:bg-white rounded-xl p-10"
          >
            <h1 className="text-white transition-all duration-300 light:text-black light:font-semibold text-left border-b-[0.5] light:border-stone-800 pb-1">
              Development Tools
            </h1>
            <ul className="list space-y-2 mt-6">
              {[
                "Git / GitHub",
                "Vercel",
                "phpMyAdmin",
                "VS Code",
                "REST APIs",
                "Server Management",
              ].map((tool) => (
                <li
                  key={tool}
                  className="flex transition-colors duration-300 text-white light:text-black items-center gap-2"
                >
                  <FaCheckCircle /> {tool}
                </li>
              ))}
            </ul>
          </div>

          <div
            data-aos="fade-left"
            className="card bg-black light:bg-white rounded-xl p-10"
          >
            <h1 className="text-white transition-all duration-300 light:text-black light:font-semibold text-left border-b-[0.5] light:border-stone-800 pb-1">
              Interests
            </h1>
            <ul className="list space-y-2 mt-6">
              {[
                "Dynamic Websites",
                "UX / UI Design",
                "API Integration",
                "Front-End Development",
                "Back-End Development",
                "Optimization",
                "New Technologies",
              ].map((interest) => (
                <li
                  key={interest}
                  className="flex transition-colors duration-300 text-white light:text-black items-center gap-2"
                >
                  <GiLightBulb /> {interest}
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* ===== Developer Skills ===== */}
        <div
          // data-aos="fade-right"
          className="flex flex-col my-0 lg:my-8 lg:flex-row order-3 justify-center items-center"
        >
          <h1 className="lg:text-xl transition-colors duration-300 text-2xl underline lg:no-underline text-center font-extrabold text-white light:text-black mb-13 mr-0 lg:mb-0 lg:mr-10">
            Developer Skills
          </h1>

          <div
            className={`relative max-w-2xl lg:max-w-full transition-all duration-300 flex flex-wrap justify-center gap-10 ${styles.fade} pl-0 lg:pl-10`}
          >
            {skills.map((skill) => (
              <AnimatedCircle
                key={skill.label}
                label={skill.label}
                value={skill.value}
              />
            ))}
          </div>
        </div>
        {/* ===== Education & Experience ===== */}
        <section
          data-aos="fade-right"
          className="bg-black order-2 light:bg-white border light:border-stone-300 rounded-xl px-6 py-12 flex justify-evenly max-[850px]:flex-col flex-row gap-12 max-[500px]:gap-18"
        >
          {/* Education */}
          <div className="flex flex-col max-[850px]:items-center max-[850px]:gap-6 justify-center">
            <h1 className="text-white max-[850px]:font-black font-bold light:text-black transition-all duration-300 light:font-black max-[850px]:text-2xl text-xl">
              Education
            </h1>
            <div className="flex flex-col h-full items-center justify-center">
              <span className="text-white light:text-black transition-all duration-300 font-bold text-lg max-[405px]:text-[16px] px-4 max-[850px]:py-0 py-3 rounded-full">
                2020 - 2025
              </span>
              <div>
                <span className="text-white text-center light:text-black transition-all duration-300 font-bold text-lg max-[405px]:text-[16px] block">
                  University of Western Macedonia
                </span>
                <span className="text-neutral-400 transition-all duration-300 light:text-stone-600 text-[15px] max-[405px]:text-[14px] text-center block">
                  BSc in Computer Science
                </span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="flex flex-col max-[850px]:px-6 max-[850px]:mx-auto">
            <h1 className="text-white max-[850px]:text-center max-[850px]:font-black font-bold light:text-black transition-all duration-300 light:font-black max-[850px]:text-2xl text-xl">
              Experience
            </h1>
            <div className="space-y-6">
              {[
                ["2024 (Jul – Oct)", "Omega Systems", "Web Developer Intern"],
                [
                  "2024 (Jan - Nov)",
                  "CineGame Critic",
                  "Next.js FullStack App",
                ],
                ["2024 (Oct - Dec)", "Set Website", "FullStack Developer"],
                ["2023 (Oct - Dec)", "Boston Kitchen", "Web Designer"],
                ["2023 (Sep - Oct)", "Nekenergy", "Web Developer"],
              ].map(([date, company, role]) => (
                <div
                  key={company}
                  className="flex max-[555px]:items-center max-[500px]:flex-col mt-8 flex-row max-[500px]:gap-2.5 gap-5"
                >
                  <span className="text-neutral-400 w-max text-sm transition-all duration-300 bg-neutral-900 light:text-stone-800 light:bg-stone-200 light:border light:border-stone-400 px-5 py-3 rounded-full">
                    {date}
                  </span>
                  <div>
                    <p className="text-white transition-colors duration-300 max-[500px]:text-center light:text-black font-semibold">
                      {company}
                    </p>
                    <p className="text-neutral-400 max-[500px]:text-center transition-colors duration-300 text-sm">
                      {role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
