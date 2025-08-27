import { useRef } from "react";
import mapPin from "../assets/mapPin.svg";
import ParticleAnimationGSAP from "./ParticleAnimation";

export default function Hero() {
  return (
    <section className="relative w-full mt-[240px] mb-[140px] text-[#5e5e63] flex flex-col items-center justify-center leading-[2.5] overflow-visible antialiased load">
      <div className="z-10 max-w-xl w-full px-6 text-center">
        <h1
          className="text-5xl md:text-7xl font-bold leading-[1.5]
          bg-linear-[141deg,#b3b3b5,#1e1e22] bg-clip-text text-transparent mb-[20px]"
        >
          hi, i'm harsh
        </h1>

        <div className="mt-[12px] mb-[32px] flex justify-center items-center gap-2 text-lg">
          <img src={mapPin} alt="location" />
          <span>new delhi, in</span>
        </div>

        <p className="mt-6 text-lg">
          I'm a developer who builds interactive web experiences. I'm passionate about creating and learning new things, and I enjoy collaborating with others on projects.
        </p>

        <ParticleAnimationGSAP />
      </div>
    </section>
  );
}
