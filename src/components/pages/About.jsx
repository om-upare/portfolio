import React from "react";
import { LiaBookSolid } from "react-icons/lia";
import { FaLaptopCode } from "react-icons/fa6";
import ScrollAnimation from "../UI/ScrollAnimation";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJs",
    "Redux",
    "Tailwindcss",
    "MySql",
    "Motion",
    "NodeJs",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ScrollAnimation>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-rose-600 from-45% to-white bg-clip-text text-transparent text-center text-shadow-lg/20">
            About Me
          </h2>
          <div className="hover:bg-neutral-800/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:-translate-y-0.5 hover:border-rose-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <div className="grid grid-cols-1 ">
              <p className="text-gray-300 mb-6 text-center mx-auto">
                I'm a web developer with a passion for building responsive,
                user-centric applications that merge sleek design with robust
                functionality. I continually explore new technologies and
                creative solutions to deliver engaging digital experiences.
              </p>

              <div className="flex flex-col justify-center">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <div className="flex justify-center">
                    <LiaBookSolid className="my-1 ml-0 mr-1 text-lg" />
                    <h3 className="text-center text-xl font-bold mb-4">
                      Education
                    </h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm text-center">
                    <li>
                      <strong>Btech in Computer Technology</strong> -
                      Priyadarshini College of Engineering, Nagpur ( 2020-2024 )
                    </li>
                    <li>
                      Coursework - Web Development, AI, DBMS, Data Structures,
                      SDLC
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <div className="flex justify-center">
                    <FaLaptopCode className="my-1 ml-0 mr-2 text-lg" />
                    <h3 className="text-center text-xl font-bold mb-4">
                      Skills
                    </h3>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    {skills.map((skill, key) => {
                      return (
                        <span
                          key={key}
                          className="bg-rose-500/10 text-rose-500 py-1 px-3 rounded-full text-sm hover:bg-rose-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default About;
