import { useState, useRef, useEffect } from "react";
import PortfolioBanner from "../assets/portfolio_banner.png";
import MyImage from "../assets/me_3.png";
import MyImageAlt from "../assets/me_4.jpg";

export default function Banner() {
  const [flipped, setFlipped] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
  }, []);

  const handleDoubleClick = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center max-w-4xl w-full px-3 md:px-8 mx-auto transition-all duration-300 load">
      <div className="flex justify-center items-center w-full h-auto mt-25 mb-0 md:mt-30 md:mb-10 lg:my-9 mx-auto relative transition-all duration-300">
        <img
          src={PortfolioBanner}
          alt="Banner image"
          className="w-full h-full object-cover rounded-lg sm:rounded-3xl shadow-[0_8px_32px_#00000029] opacity-85 transition-all duration-300"
        />

        <div
          onDoubleClick={handleDoubleClick}
          className="absolute -bottom-[7vw] sm:bottom-[-3rem] right-[4vw] md:right-12 w-[19vw] h-[19vw] sm:w-35 sm:h-35 md:w-40 md:h-40 perspective rounded-full transition-all duration-300"
        >
          <div
            className={`relative w-full h-full transform-style-preserve-3d flip-container transition-all duration-300 ${
              mounted.current
                ? flipped
                  ? "rotate-y-axis-180"
                  : "rotate-y-axis-0"
                : ""
            }`}
          >
            {/* Front */}
            <img
              src={MyImage}
              alt="My image"
              className="absolute w-full h-full object-cover rounded-full backface-hidden border-2 sm:border-3 shadow-[0_8px_32px_#00000029] border-white/50 bg-white/30 transition-all duration-300"
            />

            {/* Back */}
            <img
              src={MyImageAlt}
              alt="My alternate image"
              className="absolute w-full h-full object-cover rounded-full backface-hidden rotate-y-180 border-3 shadow-[0_8px_32px_#00000029] border-white/50 bg-white/30 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
