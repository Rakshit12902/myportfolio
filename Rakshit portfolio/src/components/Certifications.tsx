import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./styles/Career.css";
import "./styles/Work.css"; // For carousel-action-link styling
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: "Complete Data Science Bootcamp",
    category: "Udemy",
    tools: "Data Science",
    description: "Completed comprehensive training in Data Science.",
    image: "/images/rakshit-cert3.jpeg",
    link: "",
  },
  {
    title: "Master SQL for Data Science",
    category: "Udemy",
    tools: "SQL & Databases",
    description: "Mastered SQL concepts and techniques for data science applications.",
    image: "/images/rakshit-cert2.jpeg",
    link: "",
  },
  {
    title: "Empowering Business with Effective Insights",
    category: "Tata Data Visualization",
    tools: "Data Visualization",
    description: "Learned effective data visualization strategies for business insights.",
    image: "/images/rakshit-cert1.jpeg",
    link: "",
  }
];

const Certifications = () => {
  useEffect(() => {
    gsap.to("#certifications .career-timeline", {
      maxHeight: "100%",
      scrollTrigger: {
        trigger: "#certifications",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="career-section section-container" id="certifications" style={{ paddingTop: "120px", marginBottom: "0px", paddingBottom: "100px" }}>
      <div className="career-container">
        <h2>
          My <span>Certifications</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          {certifications.map((cert, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{cert.title}</h4>
                  <h5>{cert.category}</h5>
                </div>
              </div>
              
              <div className="achievement-text-wrapper" style={{ width: "40%", display: "flex", flexDirection: "column", gap: "15px" }}>
                <p style={{ width: "100%" }}>{cert.description}</p>
                <p style={{ width: "100%", fontSize: "14px", color: "#a0a0a0", margin: 0 }}>{cert.tools}</p>
                
                {cert.image && (
                  cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block" }}>
                      <img src={cert.image} alt={cert.title} className="achievement-badge" style={{ maxWidth: "300px" }} />
                    </a>
                  ) : (
                    <img src={cert.image} alt={cert.title} className="achievement-badge" style={{ maxWidth: "300px" }} />
                  )
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Certifications;
