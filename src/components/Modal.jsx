import { useEffect, useRef, useState } from "react";

export default function Modal({ isOpen, onClose, children, position = "absolute", className = "", ignoreRef }) {
  const [show, setShow] = useState(isOpen);
  const [scale, setScale] = useState("scale-0");
  const [opacity, setOpacity] = useState("opacity-0");
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      
      setScale("scale-0");
      setOpacity("opacity-0");

      const timeout1 = setTimeout(() => {
        setScale("scale-105");
        setOpacity("opacity-100");
      }, 100);

      const timeout2 = setTimeout(() => {
        setScale("scale-100");
      }, 350);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    } else {
      setScale("scale-0");
      setOpacity("opacity-0");

      const timeout3 = setTimeout(() => {
        setShow(false);
      }, 300);

      return () => {
        clearTimeout(timeout3);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        (!ignoreRef || !ignoreRef.current.contains(event.target))
      ) {
        onClose?.();
      }
    }

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose, ignoreRef]);

  if (!show) return null;

  return (
    <div
      ref={modalRef}
      className={`${position} ${className} bg-white rounded-3xl shadow-[0_8px_32px_#00000029] p-2 z-50 transition-all duration-300 ease-in-out origin-top-right ${scale} ${opacity}`}
    >
      <div className="font-base tracking-wide">{children}</div>
    </div>
  );
}