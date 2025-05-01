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
            As a passionate frontend developer, I transform design concepts into
            engaging, interactive digital experiences. I build visually
            appealing and responsive interfaces that seamlessly integrate
            creativity with functionality, ensuring an exceptional user journey
            across all devices.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="https://drive.usercontent.google.com/u/0/uc?id=1xuGACRHxenbSEq5tTupHxdILRrlOiNfA&export=download"
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
