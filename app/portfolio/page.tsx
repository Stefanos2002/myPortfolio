import AOSWrapper from "../components/Animations/AOSWrapper/AOSWrapper";
import CardContainer from "../components/Animations/CardContainer/CardContainer";

export default function Portfolio() {
  return (
    <main className="flex items-center justify-center relative pt-10 px-20 max-[850px]:px-8 max-[650px]:px-4 flex-col w-full min-h-screen">
      <AOSWrapper />
      <div className="w-full mt-34 xl:mt-10 max-w-5xl justify-center flex flex-col gap-20 xl:gap-32">
        {/* ===== Header ===== */}
        <header data-aos="fade-right" className="relative z-10">
          <span className="text-neutral-400 transition-colors duration-300 light:text-black light:border-[0.5] light:border-stone-400 text-xs mb-4 bg-neutral-800 light:bg-stone-300 light:font-semibold w-max uppercase p-3">
            Portfolio
          </span>
          <h1 className="text-white mt-6 light:text-black transition-all duration-300 font-extrabold text-3xl">
            My Dev Showcase
          </h1>
        </header>
        <CardContainer />
      </div>
    </main>
  );
}
