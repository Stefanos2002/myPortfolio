import Image from "next/image";
import styles from "./HeroDetails.module.css";
import TextType from "../Animations/TextAnimation/TextType";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import AOSWrapper from "../Animations/AOSWrapper/AOSWrapper";

export default function HeroDetails() {
  return (
    <div className="bg-neutral-900 light:bg-stone-200 flex items-center justify-center h-screen w-full">
      <AOSWrapper />
      <div data-aos="fade-right" className="flex flex-row">
        <div className={`hero_image ${styles.imageWrapper} mr-16`} />
        <div className="flex w-lg justify-center flex-col">
          <h1 className="uppercase text-white light:text-black light:font-extrabold text-4xl font-black">
            Stefanos Kaloulis
          </h1>
          <h2 className="text-white light:text-black text-xl pt-4 pb-4">
            <TextType
              text={[
                "React Developer",
                "Next.js Developer",
                "Fullstack Developer",
                "Wordpress Developer",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h2>
          <p className="text-neutral-400 light:text-black">
            Web Developer crafting sleek, responsive experiences from Patras,
            Greece.
          </p>
          <div className="text-white light:text-black flex flex-row -translate-x-3 mt-6 text-lg">
            <a
              href="https://www.facebook.com/stefanos.kaloulis/"
              className="hover:-translate-y-2 hover:text-neutral-400 light:hover:text-black p-2 transition-all duration-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/SKaloulis"
              className="hover:-translate-y-2 hover:text-neutral-400 light:hover:text-black p-2 transition-all duration-500"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/s_kaloulis"
              className="hover:-translate-y-2 hover:text-neutral-400 light:hover:text-black p-2 transition-all duration-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/stefanos-kaloulis-b4ba792b6/"
              className="hover:-translate-y-2 hover:text-neutral-400 light:hover:text-black p-2 transition-all duration-500"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Stefanos2002"
              className="hover:-translate-y-2 hover:text-neutral-400 light:hover:text-black p-2 transition-all duration-500"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
