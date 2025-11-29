import AOSWrapper from "../components/AOSWrapper/AOSWrapper";

export default function Services() {
  return (
    <div className="flex relative pt-10 pr-22 pl-20 flex-col w-full h-full">
      <AOSWrapper />
      <div
        data-aos="fade-right"
        className="flex w-full pb-10 pt-10 flex-col order-1"
      >
        <span className="text-neutral-400 text-xs mb-4 bg-neutral-800 w-max uppercase p-3">
          Services
        </span>
        <h1 className="text-white font-extrabold text-3xl">What I Do</h1>
      </div>
      <div
        data-aos="flip-down"
        className="grid grid-cols-3 gap-10 order-2 mb-24"
      >
        <div className="bg-neutral-700 rounded-xl p-8 gap-5 h-80 flex flex-col justify-center">
          <span className="text-neutral-200 bg-neutral-600 w-max p-4 px-5 text-md font-semibold rounded-full">
            01
          </span>
          <h1 className="text-neutral-200 font-extrabold text-lg">
            Web Design
          </h1>
          <p className="text-neutral-400 text-[15px]">
            Crafting clean, modern, and visually appealing layouts tailored to
            client needs while ensuring both aesthetics and usability.
          </p>
          <span className="uppercase text-[13px] text-neutral-200 font-medium">
            Read More
          </span>
        </div>
        <div className="bg-neutral-700 rounded-xl p-8 gap-5 h-80 flex flex-col justify-center">
          <span className="text-neutral-200 bg-neutral-600 w-max p-4 px-5 text-md font-semibold rounded-full">
            02
          </span>
          <h1 className="text-neutral-200 font-extrabold text-lg">
            Web Development
          </h1>
          <p className="text-neutral-400 text-[15px]">
            Building fast, dynamic, and scalable websites using HTML, CSS,
            JavaScript, React, Next.js, TypeScript, and Tailwind CSS.
          </p>
          <span className="uppercase text-[13px] text-neutral-200 font-medium">
            Read More
          </span>
        </div>
        <div className="bg-neutral-700 rounded-xl p-8 gap-5 h-80 flex flex-col justify-center">
          <span className="text-neutral-200 bg-neutral-600 w-max p-4 px-5 text-md font-semibold rounded-full">
            03
          </span>
          <h1 className="text-neutral-200 font-extrabold text-lg">
            WordPress Development
          </h1>
          <p className="text-neutral-400 text-[15px]">
            Customizing themes, implementing new features, optimizing design,
            managing databases, and improving website functionality on
            WordPress.
          </p>
          <span className="uppercase text-[13px] text-neutral-200 font-medium">
            Read More
          </span>
        </div>
        <div className="bg-neutral-700 rounded-xl p-8 gap-5 h-80 flex flex-col justify-center">
          <span className="text-neutral-200 bg-neutral-600 w-max p-4 px-5 text-md font-semibold rounded-full">
            04
          </span>
          <h1 className="text-neutral-200 font-extrabold text-lg">
            Responsive Design
          </h1>
          <p className="text-neutral-400 text-[15px]">
            Ensuring seamless user experiences across all devices with fully
            responsive, mobile-friendly layouts and animations.
          </p>
          <span className="uppercase text-[13px] text-neutral-200 font-medium">
            Read More
          </span>
        </div>
        <div className="bg-neutral-700 rounded-xl p-8 gap-5 h-80 flex flex-col justify-center">
          <span className="text-neutral-200 bg-neutral-600 w-max p-4 px-5 text-md font-semibold rounded-full">
            05
          </span>
          <h1 className="text-neutral-200 font-extrabold text-lg">
            Website Maintenance
          </h1>
          <p className="text-neutral-400 text-[15px]">
            Providing ongoing updates, bug fixes, content changes, and overall
            optimization to keep websites fast and reliable.
          </p>
          <span className="uppercase text-[13px] text-neutral-200 font-medium">
            Read More
          </span>
        </div>
        <div className="bg-neutral-700 rounded-xl p-8 gap-5 h-80 flex flex-col justify-center">
          <span className="text-neutral-200 bg-neutral-600 w-max p-4 px-5 text-md font-semibold rounded-full">
            06
          </span>
          <h1 className="text-neutral-200 font-extrabold text-lg">
            DNS, Database & Technical Support
          </h1>
          <p className="text-neutral-400 text-[15px]">
            Managing DNS records, configuring domains, and handling database
            administration tasks.
          </p>
          <span className="uppercase text-[13px] text-neutral-200 font-medium">
            Read More
          </span>
        </div>
      </div>
    </div>
  );
}
