import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ReactLenis root />
      <Router>
        <Navbar />

        <div
          className={`fixed top-0 left-0 w-full h-50 pointer-events-none transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)", 
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
            zIndex: 400,
          }}
        ></div>
        <div
          className={`fixed top-0 left-0 w-full h-40 pointer-events-none transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)", 
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
            zIndex: 400,
          }}
        ></div>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
