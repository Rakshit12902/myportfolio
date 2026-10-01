import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { SiPython, SiReact, SiFastapi, SiPytorch, SiPostgresql } from "react-icons/si";
import { FaBrain } from "react-icons/fa";

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
            <h3>I build</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">IDEAS</div>
              <div className="landing-h2-2">Smart</div>
            </h2>
            <h2>
              <div className="landing-h2-info">into REALITY</div>
              <div className="landing-h2-info-1">AUTOMATIONS</div>
            </h2>
            <div style={{ marginTop: "1rem", maxWidth: "400px", color: "#a0a0a0", fontSize: "16px", lineHeight: "1.5", fontWeight: "300" }}>
              <p style={{ margin: 0 }}>A Computer Science student combining modern web technologies, AI/ML, and problem-solving to transform ideas into practical digital solutions. I focus on learning continuously and creating solutions that are simple, useful, and reliable.</p>
            </div>
          </div>
        </div>
        <div className="landing-profile-container">
          {/* Subtle Ambient Behind Glow */}
          <div className="profile-ambient-glow"></div>

          {/* Orbit Track 1 (Slow clockwise rotation) */}
          <div className="orbit-track orbit-track-1">
            <div className="orbit-item orbit-item-1" title="Python">
              <SiPython style={{ color: "#38bdf8" }} />
            </div>
            <div className="orbit-item orbit-item-2" title="React">
              <SiReact style={{ color: "#22d3ee" }} />
            </div>
            <div className="orbit-item orbit-item-3" title="FastAPI">
              <SiFastapi style={{ color: "#14b8a6" }} />
            </div>
          </div>

          {/* Orbit Track 2 (Reverse counter-clockwise rotation) */}
          <div className="orbit-track orbit-track-2">
            <div className="orbit-item orbit-item-4" title="AI / PyTorch">
              <SiPytorch style={{ color: "#ec4899" }} />
            </div>
            <div className="orbit-item orbit-item-5" title="PostgreSQL">
              <SiPostgresql style={{ color: "#818cf8" }} />
            </div>
            <div className="orbit-item orbit-item-6" title="Machine Learning / AI">
              <FaBrain style={{ color: "#a855f7" }} />
            </div>
          </div>

          <img src="/images/rakshit-profile.png" alt="Rakshit Katiyar" className="landing-profile-image" />
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
