import { FaBriefcase, FaCalendar, FaCheck, FaLocationDot } from "react-icons/fa6";
import "./styles/Career.css";
import { config } from "../config";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray(".timeline-card-wrapper") as HTMLElement[];

    cards.forEach((card) => {
      const dot = card.querySelector(".timeline-dot");
      const content = card.querySelector(".timeline-card");

      if (dot) {
        gsap.fromTo(dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      }

      if (content) {
        gsap.fromTo(content,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      }
    });

    // Highlights animation
    const highlights = gsap.utils.toArray(".highlight-card") as HTMLElement[];
    highlights.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".career-highlights-section",
            start: "top 85%",
          }
        }
      );
    });

  }, []);

  return (
    <section id="career" className="experience-page">
      {/* Hero Section */}
      <div className="career-hero">
        <div className="career-container">
          <h2 className="career-hero-title">
            My <span className="title-accent">Experience</span>
          </h2>
          <p className="career-hero-subtitle">
            A timeline of my professional journey building scalable, high-impact systems.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline-section" ref={containerRef}>
        <div className="career-container">
          <div className="timeline-relative-wrapper">
            {/* Vertical Line */}
            <div className="timeline-line"></div>

            <div className="timeline-list">
              {config.experiences.map((exp, index) => (
                <div key={exp.id || index} className="timeline-card-wrapper">
                  {/* Dot */}
                  <div className="timeline-dot-container">
                    <div className="timeline-dot"></div>
                  </div>

                  {/* Card Content */}
                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <div className="timeline-card-title-row">
                        <div className="timeline-role-info">
                          <h3 className="timeline-role">{exp.title}</h3>
                          <div className="timeline-company">
                            <FaBriefcase className="timeline-icon-small" />
                            {exp.company}
                          </div>
                        </div>
                        {exp.current && (
                          <span className="timeline-badge-current">Current</span>
                        )}
                      </div>

                      <div className="timeline-meta-row">
                        <span className="timeline-meta-item">
                          <FaLocationDot className="timeline-icon-xs" />
                          {exp.location}
                        </span>
                        <span className="timeline-meta-item">
                          <FaCalendar className="timeline-icon-xs" />
                          {exp.startDate} — {exp.endDate}
                        </span>
                      </div>
                    </div>

                    <div className="timeline-card-content">
                      <p className="timeline-description">
                        {exp.description}
                      </p>

                      <div className="timeline-achievements">
                        <h4>Key Achievements</h4>
                        <ul>
                          {exp.achievements?.map((achievement: string, i: number) => (
                            <li key={i}>
                              <FaCheck className="timeline-check-icon" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="timeline-tech-stack">
                        <h4>Technologies</h4>
                        <div className="timeline-badges">
                          {exp.stack?.map((tech: string) => (
                            <span key={tech} className="timeline-badge">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
