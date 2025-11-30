import "./styles/About.css";
import gsap from "gsap";
import SplitType from "split-type";
import { useEffect } from "react";
import { config } from "../config";

const About = () => {
  useEffect(() => {
    const text = new SplitType(".about-text p", { types: "words" });

    gsap.from(text.words, {
      opacity: 0,
      y: 10,
      stagger: 0.02,
      duration: 1.2,
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
        <p>{config.about.description}</p>
      </div>
    </section>
  );
};

export default About;
