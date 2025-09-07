import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import tailwindLogo from "../assets/tailwind.svg";
import jsLogo from "../assets/js.svg";
import reactLogo from "../assets/react.svg";
import nodeLogo from "../assets/node.svg";
import expressLogo from "../assets/express.svg";
import cppLogo from "../assets/cpp.svg";
import pythonLogo from "../assets/python.svg";
import javaLogo from "../assets/java.svg";
import numpyLogo from "../assets/numpy.svg";
import pandasLogo from "../assets/pandas.svg";
import sklearnLogo from "../assets/sklearn.svg";
import matplotlibLogo from "../assets/matplotlib.svg";
import seabornLogo from "../assets/seaborn.svg";
// import tensorflowLogo from "../assets/tensorflow.svg";
import mysqlLogo from "../assets/mysql.svg";
import postgresLogo from "../assets/postgres.svg";
import gitLogo from "../assets/git.svg";
import githubLogo from "../assets/github_1.svg";

const techStack = [
  // Web Development
  { name: "HTML5", logo: htmlLogo, category: "Web Development" },
  { name: "CSS3", logo: cssLogo, category: "Web Development" },
  { name: "TailwindCSS", logo: tailwindLogo, category: "Web Development" },
  { name: "JavaScript", logo: jsLogo, category: "Web Development" },
  { name: "React", logo: reactLogo, category: "Web Development" },
  { name: "Node.js", logo: nodeLogo, category: "Web Development" },
  { name: "Express.js", logo: expressLogo, category: "Web Development" },

  // Programming
  { name: "C++", logo: cppLogo, category: "Programming" },
  { name: "Python", logo: pythonLogo, category: "Programming" },
  { name: "Java", logo: javaLogo, category: "Programming" },

  // Database
  { name: "MySQL", logo: mysqlLogo, category: "Database" },
  { name: "PostgreSQL", logo: postgresLogo, category: "Database" },

  // Data Science
  { name: "NumPy", logo: numpyLogo, category: "Data Science" },
  { name: "Pandas", logo: pandasLogo, category: "Data Science" },

  // Machine Learning
  { name: "Scikit-Learn", logo: sklearnLogo, category: "Machine Learning" },
  // { name: "TensorFlow", logo: tensorflowLogo, category: "Machine Learning" },

  // Data Visualization
  { name: "Matplotlib", logo: matplotlibLogo, category: "Data Visualization" },
  { name: "Seaborn", logo: seabornLogo, category: "Data Visualization" },

  // Version Control
  { name: "Git", logo: gitLogo, category: "Version Control" },
  { name: "GitHub", logo: githubLogo, category: "Version Control" },
];

export default function TechStack() {
  const doubledTechStack = [...techStack, ...techStack];
  const marqueeRef = useRef(null);
  const tl = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    if (!mediaQuery.matches) {
      const ctx = gsap.context(() => {
        tl.current = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        tl.current
        .to(marqueeRef.current, {
          xPercent: -50,
          duration: 35,
          ease: "linear",
          delay: 1,
        });
      });
      return () => ctx.revert();
    }

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (tl.current) {
      gsap.to(tl.current, {
        timeScale: 0.3,
        duration: 1.2,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    if (tl.current) {
      gsap.to(tl.current, {
        timeScale: 1,
        duration: 0.8,
        ease: "power2.out"
      });
    }
  };

  const TechCard = ({ tech }) => (
    <div
      className="flex flex-col items-center justify-center bg-[#eceff1] rounded-3xl p-4 transition-all duration-300 hover:bg-[#f6f6f6] hover:scale-101 hover:shadow-[0_4px_24px_0_#00000014]"
    >
      <img src={tech.logo} alt={tech.name} className="h-13 w-13 mb-4" />
      <span className="text-base text-gray-800 text-center tracking-wide mb-1">
        {tech.name}
      </span>
      <span className="text-sm text-gray-500 text-center tracking-wider">
        {tech.category}
      </span>
    </div>
  );

  return (
    <section className="relative pt-6 pb-40 text-gray-800 overflow-hidden antialiased load">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 mt-6 p-2 text-center text-[#5e5e63]">
          My Tech Stack
        </h2>

        {!isMobile ? (
          <div
            className="relative w-full overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div ref={marqueeRef} className="flex w-max p-5 gap-8">
              {doubledTechStack.map((tech, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center min-w-[140px] bg-[#eceff1] rounded-3xl p-4 transition-all duration-300 hover:bg-[#f6f6f6] hover:scale-101 hover:shadow-[0_4px_24px_0_#00000014]"
                >
                  <img src={tech.logo} alt={tech.name} className="h-13 w-13 mb-4" />
                  <span className="text-base text-gray-800 text-center tracking-wider mb-1">
                    {tech.name}
                  </span>
                  <span className="text-sm text-gray-500 text-center tracking-wider">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {techStack.map((tech, i) => (
              <TechCard key={i} tech={tech} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
