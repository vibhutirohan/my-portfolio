import { PropsWithChildren, useEffect, useRef } from "react";
import "./styles/Landing.css";
import { config } from "../config";
import gsap from "gsap";
import SplitType from "split-type";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";
  const landingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Split Text into characters
    const greetingText = new SplitType(".landing-intro h2", { types: "chars" });
    const titleText = new SplitType(".landing-intro h1", { types: "chars" });
    const engineerText = new SplitType(".landing-h2-1", { types: "chars" });
    const developerText = new SplitType(".landing-h2-info", { types: "chars" });

    // Ensure they start hidden
    gsap.set([greetingText.chars, titleText.chars, engineerText.chars, developerText.chars], {
      opacity: 0,
      y: 5,
    });

    const tl = gsap.timeline({ delay: 0.2 });

    // Type out "Hello! I'm"
    tl.to(greetingText.chars, {
      opacity: 1,
      y: 0,
      stagger: 0.08, // Significantly slower for greeting
      duration: 0.1,
      ease: "power1.out",
    })
      // Type out Name
      .to(titleText.chars, {
        opacity: 1,
        y: 0,
        stagger: 0.05, // Slower for name
        duration: 0.1,
        ease: "power1.out",
      }, "+=0.3")
      // Type out "Engineer"
      .to(engineerText.chars, {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        duration: 0.1,
        ease: "power1.out",
      }, "+=0.2")
      // Type out "Developer"
      .to(developerText.chars, {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        duration: 0.1,
        ease: "power1.out",
      }, "-=0.1");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div id="home" className="landing-section" ref={landingRef}>
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName} <br />
              {lastName && <span>{lastName}</span>}
            </h1>
          </div>

          <div className="landing-info">
            <h3>A Creative</h3>

            <h2 className="landing-info-h2">
              <div className="landing-h2-1">ENGINEER</div>
            </h2>

            <h2>
              <div className="landing-h2-info">DEVELOPER</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
