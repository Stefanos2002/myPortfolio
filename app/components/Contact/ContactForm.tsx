// components/ContactForm.tsx
"use client";
import { useState } from "react";
import AOSWrapper from "../Animations/AOSWrapper/AOSWrapper";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) setStatus("Message sent!");
      else setStatus("Failed to send message.");
    } catch {
      setStatus("Failed to send message.");
    }
  };

  return (
    <>
      <AOSWrapper />
      <form
        data-aos="zoom-in"
        onSubmit={handleSubmit}
        className="flex flex-col w-full mt-20 mb-20 order-3"
      >
        <ul className="mb-10 flex flex-col gap-6 text-white light:text-neutral-400">
          <li className="border border-neutral-500 light:border-[1.5] light:border-neutral-400 light:text-black rounded-lg transition-colors duration-300 focus-within:border-neutral-200 light:focus-within:border-neutral-800">
            <input
              name="name"
              onChange={handleChange}
              value={form.name}
              className="placeholder-white light:placeholder-neutral-700 light:focus-within:placeholder-black rounded-md p-3 w-full bg-transparent outline-none italic text-[15px]"
              placeholder="Name"
              type="text"
            />
          </li>
          <li className="border border-neutral-500 light:border-[1.5] light:border-neutral-400 light:text-black rounded-lg transition-colors duration-300 focus-within:border-neutral-200 light:focus-within:border-neutral-900">
            <input
              name="email"
              onChange={handleChange}
              value={form.email}
              className="placeholder-white light:placeholder-neutral-700 light:focus-within:placeholder-black rounded-md p-3 w-full bg-transparent outline-none italic text-[15px]"
              placeholder="Email"
              type="email"
              required
            />
          </li>
          <li className="border border-neutral-500 light:border-[1.5] light:border-neutral-400 light:text-black rounded-lg transition-colors duration-300 focus-within:border-neutral-200 light:focus-within:border-neutral-900">
            <textarea
              name="message"
              onChange={handleChange}
              value={form.message}
              className="placeholder-white light:placeholder-neutral-700 light:focus-within:placeholder-black rounded-md p-3 w-full bg-transparent outline-none italic text-[15px]"
              placeholder="Message"
              required
            />
          </li>
        </ul>
        <button
          className="p-3 px-6 bg-white light:border light:border-neutral-300 font-semibold transition-[width,letter-spacing] duration-300 hover:tracking-widest hover:w-50 rounded-lg w-44 cursor-pointer"
          type="submit"
        >
          Send Message
        </button>
        {status && (
          <p className="mt-4 text-sm font-medium text-white">{status}</p>
        )}
      </form>
    </>
  );
}
