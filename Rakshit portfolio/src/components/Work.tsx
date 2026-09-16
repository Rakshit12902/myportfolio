import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "RAG Based AI Teaching Assistant",
    category: "AI Teaching Assistant",
    tools: "Python, FastAPI, LangChain, ChromaDB, PostgreSQL, React",
    description: [
      "Built an AI-powered teaching assistant to answer student queries using course materials.",
      "Implemented Retrieval-Augmented Generation (RAG) to retrieve relevant information from PDFs and lecture notes.",
      "Improved response accuracy by grounding answers in course-specific knowledge."
    ],
    image: "/images/rag-teaching-assistant.png",
    link: "https://edu-ai-omega-roan.vercel.app/login",
  },
  {
    title: "CuraMind – AI Medical Report Assistant",
    category: "AI Healthcare Assistant",
    tools: "Python, FastAPI, React, Supabase, Groq, LangChain, PostgreSQL, Qdrant, Git",
    description: [
      "Developed an AI-powered healthcare assistant that analyzes blood test reports and provides simplified explanations.",
      "Implemented secure authentication, report uploads, conversational chat, and persistent chat history.",
      "Integrated LLMs with RAG for personalized report analysis and follow-up queries."
    ],
    image: "/images/curamind-project.png",
    link: "https://curamind-mu.vercel.app/",
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <ul className="carousel-description" style={{ fontSize: "14px", color: "#a0a0a0", marginTop: "10px", paddingLeft: "20px" }}>
                          {project.description.map((point, i) => (
                            <li key={i} style={{ marginBottom: "5px" }}>{point}</li>
                          ))}
                        </ul>
                        <div className="carousel-tools" style={{ marginTop: "15px" }}>
                          <span className="tools-label">Tech Stack</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.link && (
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="carousel-action-link"
                          >
                            View Live Project <MdArrowOutward />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
