import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              RAKSHIT
              <br />
              <span>KATIYAR</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>I am a</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Software</div>
              <div className="landing-h2-2">Fullstack</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Engineer</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>
            <div style={{ marginTop: "1rem", maxWidth: "400px", color: "#a0a0a0", fontSize: "16px", lineHeight: "1.5", fontWeight: "300" }}>
              <p style={{ margin: 0 }}>Software Engineer & AI/ML Enthusiast building intelligent, user-focused solutions that solve real-world problems.</p>
            </div>
          </div>
        </div>
        <div className="landing-profile-container">
          <img src="/images/rakshit-profile.png" alt="Rakshit Katiyar" className="landing-profile-image" />
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
