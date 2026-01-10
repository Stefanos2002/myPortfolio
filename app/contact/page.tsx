import AOSWrapper from "../components/Animations/AOSWrapper/AOSWrapper";
import ContactForm from "../components/Contact/ContactForm";
import DarkMap from "../components/DarkMap/DarkMap";

export default function Contact() {
  return (
    <main className="flex items-center justify-center relative pt-40 xl:pt-20 px-20 max-[900px]:px-6 flex-col w-full min-h-screen">
      <AOSWrapper />
      <div className="w-full max-w-5xl flex flex-col gap-0">
        {/* ===== Header ===== */}
        <header data-aos="fade-right" className="sm:text-left text-center">
          <span className="text-neutral-400 transition-colors duration-300 light:text-black light:border-[0.5] light:border-stone-400 text-xs mb-4 bg-neutral-800 light:bg-stone-300 light:font-semibold w-max uppercase p-3">
            Contact
          </span>
          <h1 className="text-white mt-6 light:text-black transition-all duration-300 font-extrabold text-3xl">
            Get In Touch
          </h1>
        </header>

        <div data-aos="fade-right" className="w-full mt-20 h-96 order-2">
          <DarkMap />
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
