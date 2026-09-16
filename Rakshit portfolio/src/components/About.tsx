import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-photo-wrapper">
        <div className="about-photo-container">
          <div className="about-photo-glow"></div>
          <img 
            src="/images/rakshit-profile.png" 
            alt="Rakshit Katiyar" 
            className="about-photo"
          />
        </div>
      </div>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Computer Science undergraduate with strong programming fundamentals and hands-on experience in Python, C++, Java, Object-Oriented Programming (OOP), Data Structures, Algorithms, Databases, and AI/ML. Experienced in developing software and AI applications using Python, FastAPI, PostgreSQL, and Scikit-learn. Strong problem-solving, analytical, and logical reasoning skills.
        </p>
      </div>
    </div>
  );
};

export default About;
