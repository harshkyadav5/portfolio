import { useRef } from "react";
import gsap from "gsap";

export default function MagneticWrapper({ children, damp = 20, rotateDamp = 5, perspective = 50 }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    gsap.to(ref.current, {
      x: x / damp,
      y: y / damp,
      rotateX: -y / rotateDamp,
      rotateY: x / rotateDamp,
      transformPerspective: perspective,
      transformOrigin: "center",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block will-change-transform"
    >
      {children}
    </div>
  );
}
