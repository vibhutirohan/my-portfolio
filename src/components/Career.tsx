import "./styles/Career.css";
import { config } from "../config";

const Career = () => {
  return (
    <section id="career" className="career-section section-container">
      <div className="career-container">
        <h2 className="career-title">
          Career <br /> Experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {config.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>

                {/* Correct period */}
                <h3>{exp.period}</h3>
              </div>

              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
