import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./styles/Career.css";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useEffect(() => {
    gsap.to("#techstack .career-timeline", {
      maxHeight: "100%",
      scrollTrigger: {
        trigger: "#techstack",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="career-section section-container" id="techstack" style={{ paddingBottom: "40px" }}>
      <div className="career-container">
        <h2>
          My Technical <span>&</span>
          <br /> Soft Skills
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Languages</h4>
                <h5>Core Programming</h5>
              </div>
            </div>
            <p>Python, C++, Java</p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Machine Learning</h4>
                <h5>Data & Intelligence</h5>
              </div>
            </div>
            <p>scikit-learn, pandas, numpy, opencv</p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frameworks</h4>
                <h5>Web & Integrations</h5>
              </div>
            </div>
            <p>FastAPI, LangChain, React</p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Database</h4>
                <h5>Data Storage</h5>
              </div>
            </div>
            <p>MySQL, PostgreSQL, Qdrant</p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Core CS</h4>
                <h5>Computer Science Fundamentals</h5>
              </div>
            </div>
            <p>OOP, Data Structures, Algorithms, DBMS, SQL, Arrays, Problem Solving</p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tools</h4>
                <h5>Development & Version Control</h5>
              </div>
            </div>
            <p>Git, GitHub, Version Control</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TechStack;
