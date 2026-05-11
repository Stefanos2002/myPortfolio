import AnimatedCircle from "../components/Animations/AnimatedCircle/AnimatedCircle";
import "react-circular-progressbar/dist/styles.css";
import TiltedCard from "../components/Animations/TiltedCard/TiltedCard";
import { FaCheckCircle, FaGithub } from "react-icons/fa";
import { GiLightBulb } from "react-icons/gi";
import { FiExternalLink } from "react-icons/fi";
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
        <section className="grid order-5 mb-20 justify-center grid-cols-1 md:grid-cols-2 gap-10">
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
          className="flex flex-col my-0 lg:my-8 lg:flex-row order-4 justify-center items-center"
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
        {/* ===== Education & Experience Timeline ===== */}
        <section data-aos="fade-right" className="order-2">
          <h2 className="text-white light:text-black font-bold text-xl mb-10 transition-colors duration-300">
            Education &amp; Experience
          </h2>

          {/* Horizontal timeline — md+ */}
          <div className="hidden sm:flex relative">
            <div className="absolute h-px bg-neutral-700 light:bg-stone-300 top-[5px] inset-x-0 transition-colors duration-300" />
            {[
              {
                type: "Education",
                date: "2020 – 2025",
                title: "University of Western Macedonia",
                sub: "BSc in Computer Science",
              },
              {
                type: "Experience",
                date: "07/2024 – 10/2024",
                title: "Omega Systems",
                sub: "FullStack Dev Intern",
              },
              {
                type: "Experience",
                date: "01/2026 – 04/2026",
                title: "Epectasi",
                sub: "ERP Tech Support",
              },
            ].map(({ type, date, title, sub }) => (
              <div
                key={title}
                className="flex-1 flex flex-col items-center text-center px-4"
              >
                <div className="w-3 h-3 rounded-full bg-neutral-500 light:bg-stone-500 ring-4 ring-neutral-950 light:ring-white relative z-10 mb-5 shrink-0 transition-colors duration-300" />
                <span className="text-xs uppercase tracking-widest text-neutral-500 light:text-stone-400 font-semibold transition-colors duration-300">
                  {type}
                </span>
                <time className="text-sm text-neutral-400 light:text-stone-500 mt-1 transition-colors duration-300">
                  {date}
                </time>
                <h3 className="text-white light:text-black font-semibold mt-2 text-sm leading-snug transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-neutral-400 light:text-stone-600 text-sm mt-0.5 transition-colors duration-300">
                  {sub}
                </p>
              </div>
            ))}
          </div>

          {/* Vertical timeline — mobile */}
          <ol className="sm:hidden relative border-l-2 border-neutral-700 light:border-stone-300 ml-2 transition-colors duration-300">
            <li className="mb-8 ms-6">
              <span className="absolute w-3 h-3 rounded-full bg-neutral-500 light:bg-stone-500 ring-4 ring-neutral-950 light:ring-white -left-1.5 mt-1.5 transition-colors duration-300" />
              <span className="text-xs uppercase tracking-widest text-neutral-500 light:text-stone-400 font-semibold transition-colors duration-300">
                Education
              </span>
              <time className="block text-sm text-neutral-400 light:text-stone-500 mt-0.5 transition-colors duration-300">
                2020 – 2025
              </time>
              <h3 className="text-white light:text-black font-semibold mt-1 transition-colors duration-300">
                University of Western Macedonia
              </h3>
              <p className="text-neutral-400 light:text-stone-600 text-sm transition-colors duration-300">
                BSc in Computer Science
              </p>
            </li>
            {[
              {
                date: "07/2024 – 10/2024",
                company: "Omega Systems",
                role: "FullStack Dev Intern",
              },
              {
                date: "01/2026 – 04/2026",
                company: "Epectasi",
                role: "ERP Tech Support",
              },
            ].map(({ date, company, role }) => (
              <li key={company} className="mb-8 ms-6">
                <span className="absolute w-3 h-3 rounded-full bg-neutral-500 light:bg-stone-500 ring-4 ring-neutral-950 light:ring-white -left-1.5 mt-1.5 transition-colors duration-300" />
                <span className="text-xs uppercase tracking-widest text-neutral-500 light:text-stone-400 font-semibold transition-colors duration-300">
                  Experience
                </span>
                <time className="block text-sm text-neutral-400 light:text-stone-500 mt-0.5 transition-colors duration-300">
                  {date}
                </time>
                <h3 className="text-white light:text-black font-semibold mt-1 transition-colors duration-300">
                  {company}
                </h3>
                <p className="text-neutral-400 light:text-stone-600 text-sm transition-colors duration-300">
                  {role}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ===== Projects ===== */}
        <section data-aos="fade-right" className="order-3">
          <h2 className="text-white light:text-black font-bold text-xl mb-8 transition-colors duration-300">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(
              [
                {
                  name: "CineGame Critic",
                  label: "Thesis",
                  url: "https://www.cinegame-critic.com",
                  github: "https://github.com/Stefanos2002/CGC",
                  description:
                    "Full-stack game & movie review platform with 1,800+ games, real-time filtering, JWT auth, and role-based access control.",
                  tags: ["Next.js", "TypeScript", "MongoDB", "JWT"],
                },
                {
                  name: "Spoudas Paint",
                  label: null,
                  url: "https://www.spoudaspaint.gr",
                  github: "https://github.com/Stefanos2002/spoudas-paint",
                  description:
                    "Business website with SSR, a booking system, and Payload CMS — fully client-managed without touching code.",
                  tags: ["Next.js", "Payload CMS", "TypeScript"],
                },
                {
                  name: "SET.gr",
                  label: null,
                  url: "https://www.set.gr",
                  github: null,
                  description:
                    "WordPress business site with custom PHP fields, Twig templates, and a rebuilt JS navigation for mobile responsiveness.",
                  tags: ["WordPress", "PHP", "Twig", "JavaScript"],
                },
                {
                  name: "Portfolio",
                  label: "This site",
                  url: "https://www.kaloulis.dev",
                  github: "https://github.com/Stefanos2002/myPortfolio",
                  description:
                    "Multi-page portfolio with Cloudinary video previews, Google Maps API, server-side contact form, and 90+ Lighthouse score.",
                  tags: ["Next.js 14", "TypeScript", "Cloudinary"],
                },
              ] as {
                name: string;
                label: string | null;
                url: string;
                github: string | null;
                description: string;
                tags: string[];
              }[]
            ).map(({ name, label, url, github, description, tags }) => (
              <div
                key={name}
                className="bg-black light:bg-white rounded-xl p-6 border border-neutral-800 light:border-stone-200 flex flex-col gap-3 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-white light:text-black font-semibold transition-colors duration-300">
                    {name}
                  </h3>
                  {label && (
                    <span className="text-xs bg-neutral-800 light:bg-stone-200 text-neutral-400 light:text-stone-600 px-2 py-1 rounded-full shrink-0 transition-colors duration-300">
                      {label}
                    </span>
                  )}
                </div>
                <p className="text-neutral-400 light:text-stone-600 text-sm leading-relaxed flex-1 transition-colors duration-300">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-neutral-900 light:bg-stone-100 text-neutral-300 light:text-stone-700 px-2 py-1 rounded transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-1">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white light:hover:text-black transition-colors duration-200"
                  >
                    <FiExternalLink size={14} /> Live
                  </a>
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white light:hover:text-black transition-colors duration-200"
                    >
                      <FaGithub size={14} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
