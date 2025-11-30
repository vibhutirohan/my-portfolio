import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
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
          Rohan Vibhuti
        </a>

        {/* CENTER — Navigation Links */}
        <ul className="navbar-center-links">
          <li>
            <a data-href="#home" href="#home">
              <HoverLinks text="HOME" />
            </a>
          </li>

          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>

          <li>
            <a data-href="#education" href="#education">
              <HoverLinks text="EDUCATION" />
            </a>
          </li>

          <li>
            <a data-href="#career" href="#career">
              <HoverLinks text="CAREER" />
            </a>
          </li>

          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="PROJECTS" />
            </a>
          </li>

          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>

        {/* RIGHT SIDE — Resume */}
        <a
          href="https://drive.google.com/file/d/1lxxXD7tqFpnNz7Q6hZXyDFY1YsLX72pQ/view?usp=sharing"
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
