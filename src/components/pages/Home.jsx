import React from "react";
import ScrollAnimation from "../UI/ScrollAnimation";
import DynamicIconCloud from "../UI/DynamicIconCloud";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <ScrollAnimation>
        <div className="text-center z-10 px-4 mt-15">
          <div className="w-40 md:w-60 mx-auto my-5">
            <DynamicIconCloud />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-600 from-45% to-white bg-clip-text text-transparent text-shadow-lg/20">
            Hi, I'm Om.
          </h1>

          <p className="text-gray-400 text-md md:text-lg mb-8 max-w-lg mx-auto">
            I’m a web developer who turns ideas into user-friendly online
            experiences. From crafting clean, responsive layouts to integrating
            back-end services, I build reliable, engaging applications that work
            seamlessly on any device.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="https://drive.google.com/file/d/1yjpG_ZvvyuAy7w-2wjTWEFBe4VxZ_blO/view?usp=sharing"
              target="_blank"
              className="bg-rose-600/80 text-gray-200 py-3 px-10 rounded font-medium relative overflow-hidden hover:-translate-y-0.5 hover:shadow-sm shadow-gray-500/50 transition-all"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="border border-rose-600/50 text-rose-600/80 py-3 px-6 rounded font-medium duration-200 hover:-translate-y-0.5 hover:bg-rose-500/10 hover:shadow-sm shadow-gray-500/50 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Home;
