import Image from "next/image";
import styles from "./HeroDetails.module.css";
import TextType from "../TextAnimation/TextType";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import AOSWrapper from "../AOSWrapper/AOSWrapper";

export default function HeroDetails() {
  return (
    <div className="bg-neutral-900 flex items-center justify-center h-screen w-full">
      <AOSWrapper />
      <div data-aos="fade-right" className="flex flex-row">
        <div className={`${styles.imageWrapper} mr-16`}>
          <Image
            src={"/images/profile2.jpg"}
            alt="hero_image"
            width={250}
            height={250}
            className={styles.container}
          />
        </div>
        <div className="flex w-lg justify-center flex-col">
          <h1 className="uppercase text-white text-4xl font-black tracking-[2px]">
            Stefanos Kaloulis
          </h1>
          <h2 className="text-white text-xl pt-4 pb-4">
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
          <p className="text-neutral-400">
            Web Developer crafting sleek, responsive experiences from Patras,
            Greece.
          </p>
          <div className="text-white flex flex-row -translate-x-3 mt-6 text-lg">
            <a
              href="https://www.facebook.com/stefanos.kaloulis/"
              className="hover:-translate-y-2 hover:text-neutral-400 p-2 transition-all duration-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/SKaloulis"
              className="hover:-translate-y-2 hover:text-neutral-400 p-2 transition-all duration-500"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/s_kaloulis"
              className="hover:-translate-y-2 hover:text-neutral-400 p-2 transition-all duration-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/stefanos-kaloulis-b4ba792b6/"
              className="hover:-translate-y-2 hover:text-neutral-400 p-2 transition-all duration-500"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Stefanos2002"
              className="hover:-translate-y-2 hover:text-neutral-400 p-2 transition-all duration-500"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
