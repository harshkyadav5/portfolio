import React from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/LinkedIn.svg";
import leetcode from "../assets/leetcode.svg";
import codeforces from "../assets/codeforces.svg";
import MagneticWrapper from "./common/MagneticWrapper";

const socials = [
  {
    href: "https://www.linkedin.com/in/harshyadav05",
    img: linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/harshkyadav5",
    img: github,
    label: "GitHub",
  },
  {
    href: "https://leetcode.com/u/harshkyadav5/",
    img: leetcode,
    label: "LeetCode",
  },
  {
    href: "https://codeforces.com/profile/harshYadav5",
    img: codeforces,
    label: "Codeforces",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f1f1f1] py-10 antialiased tracking-wide load">
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-8 items-center">
          {socials.map(({ href, img, label }, i) => (
            <div key={i} className="relative group flex flex-col items-center">
              <MagneticWrapper>
                <a
                  href={href} target="_blank" rel="noopener noreferrer" className="block hover:bg-white rounded-xl transition-all duration-300 p-1">
                  <img src={img} alt={label} />
                </a>
              </MagneticWrapper>

              <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-white text-gray-700 text-sm rounded-lg px-2 py-1 whitespace-nowrap shadow-[0_8px_32px_#00000029]">
                {label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-sm mx-auto my-6">
          Copyright © {new Date().getFullYear()} Harsh Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
