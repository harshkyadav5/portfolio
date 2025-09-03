import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './ParticleAnimation.css';

gsap.registerPlugin(ScrollTrigger);

const particlesData = [
  { selector: '.particle-1', xRange: [-15, 21], yRange: [-12, 20], rotation: 20 },
  { selector: '.particle-2', xRange: [-15, 21], yRange: [-20, 24], rotation: -26 },
  { selector: '.particle-3', xRange: [-4, 8], yRange: [-4, 8], rotation: 17 },
  { selector: '.particle-4', xRange: [-5, 6], yRange: [-3, 6], rotation: 20 },
  { selector: '.particle-5', xRange: [-4, 6], yRange: [-6, 4], rotation: 35 },
  { selector: '.particle-6', xRange: [-7, 4], yRange: [-9, 4], rotation: 23 },
  { selector: '.particle-7', xRange: [-9, 6], yRange: [-6, 4], rotation: -26 },
  { selector: '.particle-8', xRange: [-8, 4], yRange: [-4, 9], rotation: -49 },
];

export default function ParticleAnimationGSAP() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const particles = gsap.utils.toArray('.particle', wrapper);

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1051px)",
        isTablet: "(max-width: 1050px) and (min-width: 911px)",
        isSmallTablet: "(max-width: 910px) and (min-width: 721px)",
        isMobile: "(max-width: 720px)"
      },
      (context) => {
        let scale = 1.5;

        if (context.conditions.isTablet) scale = 1.3;
        if (context.conditions.isSmallTablet) scale = 1.1;
        if (context.conditions.isMobile) scale = 1;

        gsap.set(wrapper, { scale, opacity: 0 });

        gsap.to(wrapper, {
          duration: 1,
          opacity: 1,
          scale,
          ease: "power2.out",
        });
      }
    );

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      particles.forEach((particle, index) => {
        const data = particlesData[index];
        const xOffset = gsap.utils.mapRange(
          0,
          window.innerWidth,
          data.xRange[0],
          data.xRange[1],
          mouseX
        );
        const yOffset = gsap.utils.mapRange(
          0,
          window.innerHeight,
          data.yRange[0],
          data.yRange[1],
          mouseY
        );

        gsap.to(particle, {
          x: xOffset,
          y: yOffset,
          rotate: data.rotation,
          duration: 1.5,
          ease: "power2.out",
        });
      });
    };

    gsap.to(".particle-wrapper", {
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".scroll-start-ref",
        start: "top top",
        endTrigger: ".particle-wrapper",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const baseScale =
              window.innerWidth <= 770
              ? 1
              : window.innerWidth <= 910
              ? 1.1
              : window.innerWidth <= 1050
              ? 1.3
              : 1.5;

          const newScale = baseScale + self.progress;
          gsap.set(".particle-wrapper", { scale: newScale });
        },
      },
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      mm.revert();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="particle-wrapper">
      {particlesData.map((data, index) => (
        <div key={index} className={`particle ${data.selector.substring(1)}`}></div>
      ))}
    </div>
  );
}
