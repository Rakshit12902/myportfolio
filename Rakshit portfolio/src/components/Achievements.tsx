import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./styles/Career.css";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    title: "HackIndia Hackathon 2026",
    category: "Technical Leadership",
    description: "Participated in the HackIndia Conversation AI Hackathon 2026 as a member of Team Code Fusion.",
    badge: "/images/hackathon.jpg"
  },
  {
    title: "166+ DSA Problems",
    category: "Analytical & Problem Solving",
    description: "Solved 166+ DSA problems on LeetCode using Python and C++, strengthening analytical and algorithmic problem-solving abilities.",
    badge: "/images/leetcode-badges.png"
  },
  {
    title: "HackerRank Skill Badges",
    category: "Programming Proficiency",
    description: "Earned programming skill badges/stars in C and Python on HackerRank.",
    badge: "/images/rakshit-hackerrank.png"
  }
];

const Achievements = () => {
  useEffect(() => {
    gsap.to("#achievements .career-timeline", {
      maxHeight: "100%",
      scrollTrigger: {
        trigger: "#achievements",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="career-section section-container" id="achievements" style={{ paddingTop: "120px", marginTop: "0px", marginBottom: "0px", paddingBottom: "100px" }}>
      <div className="career-container">
        <h2>
          My <span>Achievements</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          {achievements.map((achievement, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{achievement.title}</h4>
                  <h5>{achievement.category}</h5>
                </div>
              </div>
              <div className="achievement-text-wrapper" style={{ width: "40%", display: "flex", flexDirection: "column", gap: "15px" }}>
                <p style={{ width: "100%" }}>{achievement.description}</p>
                {achievement.badge && (
                  <img src={achievement.badge} alt="Achievement Badge" className="achievement-badge" />
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Achievements;
