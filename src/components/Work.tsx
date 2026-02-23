import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { config } from "../config";

gsap.registerPlugin(ScrollTrigger);

const MOBILE_BREAKPOINT = 1024;

const Work = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > MOBILE_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > MOBILE_BREAKPOINT);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let translateX: number = 0;

    function setTranslateX() {
      const boxes = document.getElementsByClassName("work-box");
      if (boxes.length === 0) return;

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const rect = boxes[0].getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;

      const padding =
        parseInt(window.getComputedStyle(boxes[0]).padding) / 2;

      translateX =
        rect.width * boxes.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, [isDesktop]);

  return (
    <div className={`work-section ${!isDesktop ? "work-mobile" : ""}`} id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="work-flex">
          {config.projects.map((project, index) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">

                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools and features</h4>
                <p>{project.technologies}</p>

                {(project as any).description && (
                  <ul className="project-desc" style={{ paddingLeft: "1.2rem", margin: "10px 0", fontSize: "14px", color: "#ccc" }}>
                    {(project as any).description.map((desc: string, i: number) => (
                      <li key={i} style={{ marginBottom: "6px" }}>{desc}</li>
                    ))}
                  </ul>
                )}

                {/* Button still works too */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-github-btn"
                    data-cursor="disable"
                  >
                    View on GitHub ↗
                  </a>
                )}
              </div>

              {/* ⭐ Image Click Redirects to GitHub ⭐ */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="work-image-click"
                data-cursor="disable"
              >
                <WorkImage image={project.image} alt={project.title} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
