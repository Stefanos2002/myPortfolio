import Image from "next/image";
import styles from "./HeroDetails.module.css";

export default function HeroDetails() {
  return (
    <div className="bg-neutral-900 flex items-center justify-center h-full w-full">
      <div className="flex flex-row">
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
          <h1 className="uppercase text-white text-4xl font-black tracking-[2.5px]">
            Stefanos Kaloulis
          </h1>
          <h2 className="text-white text-xl pt-4 pb-4">Web Developer</h2>
          <p className="text-neutral-400">
            Web Developer crafting sleek, responsive experiences from Patras,
            Greece.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
