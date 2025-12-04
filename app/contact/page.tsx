import AOSWrapper from "../components/Animations/AOSWrapper/AOSWrapper";
import ContactForm from "../components/Contact/ContactForm";
import DarkMap from "../components/DarkMap/DarkMap";

export default function Contact() {
  return (
    <div className="flex relative pt-10 pr-22 pl-20 flex-col w-full h-full">
      <AOSWrapper />
      <div
        data-aos="fade-right"
        className="flex w-full pb-10 pt-10 flex-col order-1"
      >
        <span className="text-neutral-400 text-xs mb-4 bg-neutral-800 w-max uppercase p-3">
          Contact
        </span>
        <h1 className="text-white font-extrabold text-3xl">Get In Touch</h1>
      </div>
      <div data-aos="fade-right" className="w-full h-96 order-2">
        <DarkMap />
      </div>
      <ContactForm />
    </div>
  );
}
