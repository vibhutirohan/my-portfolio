import "./styles/About.css";
import gsap from "gsap";
import SplitType from "split-type";
import { useEffect } from "react";
import { config } from "../config";

const About = () => {
  useEffect(() => {
    const text = new SplitType(".about-text p", { types: "words,chars" });

    // Typewriter effect per character
    gsap.from(text.chars, {
      opacity: 0,
      y: 5,
      stagger: 0.01,
      duration: 0.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-text">
        <h2>Who I Am</h2>
        <p style={{ whiteSpace: "pre-line" }}>{config.about.description}</p>
      </div>
    </section>
  );
};

export default About;
