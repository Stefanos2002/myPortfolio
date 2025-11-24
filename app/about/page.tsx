import Image from "next/image";

export default function About() {
  return (
    <div className="flex relative pt-10 pl-14 m flex-col w-full h-full">
      <div className="flex w-full p-10 flex-col">
        <span className="text-neutral-400 text-xs mb-4 bg-neutral-800 w-max uppercase p-3">
          About
        </span>
        <h1 className="text-white font-extrabold text-3xl">About Me</h1>
      </div>
      <div>
        <Image
          src={"/images/profile2.jpg"}
          alt={"hero_image"}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
