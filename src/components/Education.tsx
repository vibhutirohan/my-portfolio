import { config } from "../config";
import "./styles/Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section section-container">
      <h2 className="education-title">
        My <span>Education</span>
      </h2>

      <div className="education-timeline">
        {config.education.map((edu, index) => (
          <div key={index} className="edu-card">
            <div className="edu-dot"></div>

            <div className="edu-content">
              <h3>{edu.degree}</h3>
              <h4>
                {edu.url ? (
                  <a href={edu.url} target="_blank" rel="noopener noreferrer" className="edu-link">
                    {edu.institution}
                  </a>
                ) : (
                  edu.institution
                )}
                {" "}• {edu.period}
              </h4>

              <div className="edu-cgpa-box">
                <span>CGPA:</span> <strong>{edu.cgpa}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
