import React from "react";
import { LuTvMinimalPlay } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import ScrollAnimation from "../UI/ScrollAnimation";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ScrollAnimation>
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-rose-600 from-45% to-white bg-clip-text 
          text-transparent text-center text-shadow-lg/20"
          >
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1st Project */}

            <div
              className="hover:bg-neutral-800/20 backdrop-blur-sm p-6 rounded-xl border 
            border-white/10 hover:-translate-y-1 hover:border-rose-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Geo-Sphere</h3>
              <p className="text-gray-400 mb-4">
                Developed a dynamic React app providing extensive country data.
                Leveraged component architecture, Axios for API calls, React
                Router for navigation, and responsive CSS for optimal
                multi-device performance.
              </p>
              <div className="flex flex-wrap gap-2">
                {["ReactJS", "CSS", "Axios", "React-Router-DOM"].map(
                  (skill, key) => {
                    return (
                      <span
                        key={key}
                        className="bg-rose-500/10 text-rose-500 py-1 px-3 rounded-full text-sm hover:bg-rose-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                      >
                        {skill}
                      </span>
                    );
                  }
                )}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 mt-1">
                  <FaGithub className="my-5" />
                  <a
                    href="https://github.com/om-upare/Geo-Sphere.git"
                    target="_blank"
                    className="text-white hover:text-rose-400 transition-colors my-4"
                  >
                    Repository
                  </a>
                  <LuTvMinimalPlay className="my-5 ml-5" />
                  <a
                    href="https://om-upare.github.io/Geo-Sphere/"
                    target="_blank"
                    className="text-white hover:text-rose-400 transition-colors my-4"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>

            {/* 2nd Project */}

            <div
              className="hover:bg-neutral-800/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 
            hover:-translate-y-1 hover:border-rose-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Portfolio-Site</h3>
              <p className="text-gray-400 mb-4">
                Developed a portfolio site using React and Tailwindcss for a
                sleek, responsive design. Integrated EmailJs for seamless
                contact form functionality and Sonner for real-time
                notifications.
              </p>
              <div className="flex flex-wrap gap-2">
                {["ReactJS", "TailwindCSS", "EmailJS", "Sonner"].map(
                  (skill, key) => {
                    return (
                      <span
                        key={key}
                        className="bg-rose-500/10 text-rose-500 py-1 px-3 rounded-full text-sm hover:bg-rose-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                      >
                        {skill}
                      </span>
                    );
                  }
                )}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 mt-1">
                  <FaGithub className="my-5" />
                  <a
                    href="https://github.com/om-upare/portfolio.git"
                    target="_blank"
                    className="text-white hover:text-rose-400 transition-colors my-4"
                  >
                    Repository
                  </a>
                  <LuTvMinimalPlay className="my-5 ml-5" />
                  <a
                    href=""
                    className="text-white hover:text-rose-400 transition-colors my-4"
                  >
                    Currently Live
                  </a>
                </div>
              </div>
            </div>

            {/* 3rd Project */}

            <div
              className="hover:bg-neutral-800/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:-translate-y-1 
            hover:border-rose-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Task Manager</h3>
              <p className="text-gray-400 mb-4">
                Developed a Task Manager using React and Tailwindcss, leveraging
                ContextAPI for state management and local storage for data
                persistence. Features include adding, editing, and deleting
                tasks.
              </p>
              <div className="flex flex-wrap gap-2">
                {["TailwindCSS", "JavaScript", "ReactJS", "ContextAPI"].map(
                  (skill, key) => {
                    return (
                      <span
                        key={key}
                        className="bg-rose-500/10 text-rose-500 py-1 px-3 rounded-full text-sm hover:bg-rose-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                      >
                        {skill}
                      </span>
                    );
                  }
                )}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 mt-1">
                  <FaGithub className="my-5" />
                  <a
                    href="https://github.com/om-upare/Task-Manager.git"
                    target="_blank"
                    className="text-white hover:text-rose-400 transition-colors my-4"
                  >
                    Repository
                  </a>
                  <LuTvMinimalPlay className="my-5 ml-5" />
                  <a
                    href="https://om-upare.github.io/Task-Manager/"
                    target="_blank"
                    className="text-white hover:text-rose-400 transition-colors my-4"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>

            {/* 4th Project */}

            <div
              className="hover:bg-neutral-800/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 
            hover:-translate-y-1 hover:border-rose-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Currency-Converter</h3>
              <p className="text-gray-400 mb-4">
                Developed a Currency Converter using HTML, CSS, and JavaScript
                for a clean, functional interface that allows users to easily
                convert currencies.
              </p>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript"].map((skill, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-rose-500/10 text-rose-500 py-1 px-3 rounded-full text-sm 
                        hover:bg-rose-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 mt-1">
                  <FaGithub className="my-5" />
                  <a
                    href="https://github.com/om-upare/Currency-Converter.git"
                    target="_blank"
                    className="text-white hover:text-rose-400 transition-colors my-4"
                  >
                    Repository
                  </a>
                  <LuTvMinimalPlay className="my-5 ml-5" />
                  <a
                    href="https://currency-converter000.netlify.app/"
                    target="_blank"
                    className="text-white hover:text-rose-400 transition-colors my-4"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Projects;
