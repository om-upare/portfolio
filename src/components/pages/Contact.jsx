import React, { useState } from "react";
import ScrollAnimation from "../UI/ScrollAnimation";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_Service_ID,
        import.meta.env.VITE_Templete_ID,
        e.target,
        import.meta.env.VITE_API_Public_Key
      )
      .then((result) => {
        if (result) toast.success("Email Sent Successfully");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((e) => {
        if (e) toast.error("Somthing went wrong!");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <Toaster richColors closeButton />
      <ScrollAnimation>
        <div class="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-rose-500 from-45% to-white bg-clip-text text-transparent text-center text-shadow-lg/20">
            Get In Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your Name"
                className="border border-white/10 rounded w-full bg-white/5 px-4 py-3 text-white transition focus:outline-none focus:border-rose-500 focus:bg-rose-500/5"
              />
            </div>
            <div className="relative">
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                id="email"
                name="email"
                required
                placeholder="example@gmail.com"
                className="border border-white/10 rounded w-full bg-white/5 px-4 py-3 text-white transition focus:outline-none focus:border-rose-500 focus:bg-rose-500/5"
              />
            </div>
            <div className="relative">
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                id="message"
                name="message"
                required
                placeholder="Your Message..."
                className="border border-white/10 rounded w-full bg-white/5 px-4 py-3 text-white transition focus:outline-none focus:border-rose-500 focus:bg-rose-500/5"
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer bg-rose-600/80 text-gray-200 w-full py-3 px-6 rounded font-medium  relative overflow-hidden hover:translate-y-0.5 hover:shadow-sm shadow-gray-500/50 transition-all"
            >
              Send Message
            </button>
          </form>

          <div className="text-center my-6">
            <span className="font-bold">or</span>
          </div>
          <hr className="border border-white/10" />
          <div className="text-2xl flex gap-3 justify-center py-3">
            <a href="https://www.linkedin.com/in/om-upare" target="_blank">
              <FaLinkedin className=" hover:text-blue-500 transition-all hover:translate-y-0.5" />
            </a>{" "}
            <a href="tel:+7066778552">
              <FaWhatsapp className=" hover:text-green-500 transition-all hover:translate-y-0.5" />
            </a>
            <a href="mailto:omupare456@gmail.com">
              <MdOutlineMail className=" hover:text-yellow-500 transition-all hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Contact;
