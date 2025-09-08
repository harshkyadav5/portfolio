import React from "react";
import github from "../assets/github.svg";
import MagneticWrapper from "./common/MagneticWrapper";

export default function CertificationCard({ icon, title, subtitle, year, description, buttonText = "Github", url, image, engrave }) {
  return (
    <div className="relative flex [@media(max-width:991px)]:flex-col max-w-4xl min-h-110 md:flex-row items-center bg-[#eceff1] rounded-3xl sm:px-16 p-8 pb-0 sm:pt-16 md:pt-0 mx-8 lg:mx-0 hover:scale-102 transition-all duration-300 hover:bg-[#f6f6f6] hover:shadow-[0_4px_24px_0_#00000014] antialiased overflow-hidden">
      <div className="flex flex-col justify-start items-start w-full [@media(min-width:991px)]:w-75">
          {icon && <img src={icon} alt="icon" className="w-8 h-8 rounded-lg mb-4" />}

          <h2 className="text-2xl font-bold bg-linear-[145deg,#6d6d6e_5%,#1e1e22] bg-clip-text text-transparent mb-4">{title}</h2>

        <div className="text-sm font-bold text-gray-500 mt-1 tracking-widest">
          {subtitle?.toUpperCase()} &nbsp;•&nbsp; {year}
        </div>

        <p className="mt-4 text-gray-600 text-lg">{description}</p>

        {url && (
          <MagneticWrapper rotateDamp={8} perspective={500}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-white border-2 border-white px-5 py-2 rounded-xl text-[#323235] font-medium transition-all duration-300 tracking-wider hover:bg-[#eceff1] hover:shadow-[0_4px_24px_0_#00000014] group"
            >
              {buttonText}
              <img src={github} alt="github" className="group-hover:-rotate-10 group-hover:scale-110 transition-all duration-300"/>
            </a>
          </MagneticWrapper>
        )}
      </div>

      <div className="gap-4 flex justify-center relative transition-all duration-300">
          <img
            src={image}
            alt={title}
            className="object-cover w-full aspect-[4/3] rounded-xl relative right-0 max-w-md md:relative md:-right-8 transition-all duration-300"
          />
      </div>

      <img
        src={engrave}
        alt={subtitle}
        className="absolute right-5 bottom-4 min-w-30 w-[25%] h-auto rotate-[-23deg] grayscale opacity-15 select-none pointer-events-none transform transition-all duration-500 ease-out"
      />
    </div>
  );
}
