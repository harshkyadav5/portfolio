import React from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/Linkedin.svg";
import leetcode from "../assets/leetcode.svg";
import MagneticWrapper from "./common/MagneticWrapper";

export default function Footer() {
  return (
    <footer className="bg-[#f1f1f1] py-10">
      <div className="flex flex-col items-center gap-6">
        
        <div className="flex gap-8 items-center">
          <MagneticWrapper>
            <a href="https://www.linkedin.com/in/harshyadav05" target="_blank" rel="noopener noreferrer" className="block hover:bg-white rounded-xl transition-all duration-300 p-1">
              <img src={linkedin} alt="LinkedIn"/>
            </a>
          </MagneticWrapper>
          <MagneticWrapper>
            <a href="https://leetcode.com/u/harshkyadav5/" target="_blank" rel="noopener noreferrer" className="block hover:bg-white rounded-xl transition-all duration-300 p-1">
              <img src={leetcode} alt="Leetcode"/>
            </a>
          </MagneticWrapper>
          <MagneticWrapper>
            <a href="https://github.com/harshkyadav5" target="_blank" rel="noopener noreferrer" className="block hover:bg-white rounded-xl transition-all duration-300 p-1">
              <img src={github} alt="Github"/>
            </a>
          </MagneticWrapper>
        </div>

        <p className="text-gray-500 text-sm mx-auto my-5.5">
          Copyright © {new Date().getFullYear()} Harsh Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
