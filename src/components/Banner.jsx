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
    <div className="flex flex-col items-center max-w-4xl w-full px-8 mx-auto load">
      <div className="flex justify-center items-center w-full h-auto my-9 mx-auto relative">
        <img
          src={PortfolioBanner}
          alt="Banner image"
          className="w-full h-full object-cover rounded-3xl shadow-[0_8px_32px_#00000029] opacity-85"
        />

        <div
          onDoubleClick={handleDoubleClick}
          className="absolute bottom-[-3rem] right-12 w-40 h-40 perspective rounded-full"
        >
          <div
            className={`relative w-full h-full transform-style-preserve-3d flip-container ${
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
              className="absolute w-full h-full object-cover rounded-full backface-hidden border-3 shadow-[0_8px_32px_#00000029] border-white/50 bg-white/30"
            />

            {/* Back */}
            <img
              src={MyImageAlt}
              alt="My alternate image"
              className="absolute w-full h-full object-cover rounded-full backface-hidden rotate-y-180 border-3 shadow-[0_8px_32px_#00000029] border-white/50 bg-white/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
