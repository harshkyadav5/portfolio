import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import faceAvatar from "../assets/me_2.png";
import user from "../assets/user.svg";
import home from "../assets/home.svg";
import Modal from "./Modal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const buttonRef = useRef(null);

  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-8 left-0 right-0 z-20">
      <div className="max-w-[1200px] px-[72px] mx-auto flex justify-between items-center relative">
        <Link
          to="/"
          className="h-[60px] w-[60px] bg-white rounded-full flex justify-center items-center shadow-[0_8px_32px_#00000029] overflow-hidden hover:scale-93 transition-all duration-300"
        >
          <img
            src={faceAvatar}
            alt="face avatar"
            className="h-14 w-14 translate-y-1 drop-shadow-[0_4px_2px_#00000079]"
          />
        </Link>

        <div className="relative">
          <button
            ref={buttonRef}
            onClick={handleToggle}
            className={`h-[60px] w-[60px] bg-white rounded-full flex justify-center items-center shadow-[0_8px_32px_#00000029] transition-all duration-300 active:scale-100
              ${isOpen ? "scale-105" : "scale-100 hover:scale-93"}`}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7 text-gray-700 transition-all duration-400 rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7 text-gray-700 transition-all duration-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            ignoreRef={buttonRef}
            position="absolute"
            className="right-0 mt-3 w-56"
          >
            <nav className="flex flex-col text-lg">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 rounded-2xl p-3 hover:bg-gray-100 ${isHome ? "font-semibold" : "font-normal text-[#5e5e63]"}`}
              >
                <img src={home} alt="home" />
                home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 rounded-2xl p-3 hover:bg-gray-100 ${isAbout ? "font-semibold" : "font-normal text-[#5e5e63]"}`}
              >
                <img src={user} alt="about" />
                about
              </Link>
            </nav>
          </Modal>
        </div>
      </div>
    </nav>
  );
}