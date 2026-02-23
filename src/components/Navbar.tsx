import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    // Initialize Lenis smooth scroll
    lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.7,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.stop();

    // Animation loop
    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Smooth scroll for navbar links
    const links = document.querySelectorAll(".header ul a");

    links.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const link = e.currentTarget as HTMLAnchorElement;
          const section = link.getAttribute("data-href");

          if (section && lenis) {
            const el = document.querySelector(section);

            if (el instanceof HTMLElement) {
              lenis.scrollTo(el, {
                offset: 0,
                duration: 1.5,
              });
            }
          }
        }
      });
    });

    const resizeHandler = () => lenis?.resize();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <div className="header">
        {/* LEFT SIDE — Name */}
        <a href="/#" className="navbar-title" data-cursor="disable">
          Rohan's Portfolio
        </a>

        {/* Mobile hamburger button */}
        <button
          className="navbar-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={mobileMenuOpen ? "open" : ""}></span>
          <span className={mobileMenuOpen ? "open" : ""}></span>
          <span className={mobileMenuOpen ? "open" : ""}></span>
        </button>

        {/* CENTER — Navigation Links */}
        <ul className={`navbar-center-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <li>
            <a data-href="#home" href="#home" onClick={() => setMobileMenuOpen(false)}>
              <HoverLinks text="HOME" />
            </a>
          </li>

          <li>
            <a data-href="#about" href="#about" onClick={() => setMobileMenuOpen(false)}>
              <HoverLinks text="ABOUT" />
            </a>
          </li>

          <li>
            <a data-href="#education" href="#education" onClick={() => setMobileMenuOpen(false)}>
              <HoverLinks text="EDUCATION" />
            </a>
          </li>

          <li>
            <a data-href="#career" href="#career" onClick={() => setMobileMenuOpen(false)}>
              <HoverLinks text="CAREER" />
            </a>
          </li>

          <li>
            <a data-href="#work" href="#work" onClick={() => setMobileMenuOpen(false)}>
              <HoverLinks text="PROJECTS" />
            </a>
          </li>

          <li>
            <a data-href="#contact" href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <HoverLinks text="CONTACT" />
            </a>
          </li>

          {/* Added Resume link for mobile view */}
          <li className="mobile-resume-link" style={window.innerWidth <= 768 ? { display: 'block' } : { display: 'none' }}>
            <a
              href="https://drive.google.com/file/d/1XFfBjfYy0aNwanxyH0IxgcnuvFWdhiUf/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <HoverLinks text="RESUME" />
            </a>
          </li>
        </ul>

        {/* RIGHT SIDE — Resume */}
        <a
          href="https://drive.google.com/file/d/1XFfBjfYy0aNwanxyH0IxgcnuvFWdhiUf/view?usp=sharing"
          className="navbar-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </a>
      </div>

      {/* Visual Glow Elements */}
      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
