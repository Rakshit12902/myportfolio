import { useState, useRef } from "react";
import { MdArrowOutward, MdPlayArrow } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (props.video) {
      setIsHovered(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch((e) => console.log("Video play failed:", e));
      }
    }
  };

  const handleMouseLeave = () => {
    if (props.video) {
      setIsHovered(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="work-image">
      <a
        className={`work-image-in curtain-container ${isHovered && props.video ? "curtain-active" : ""}`}
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        {/* Video Stage (Sits behind curtain, shrinks/settles inward into view when curtain splits open) */}
        {props.video && (
          <div className="curtain-stage">
            <video
              ref={videoRef}
              src={props.video}
              muted
              playsInline
              loop
              preload="metadata"
              className="curtain-video"
            />
            {/* Ambient edge glow when video is unveiled */}
            <div className="curtain-video-glow" />
          </div>
        )}

        {/* Static Base Image Layer */}
        {props.image && (
          <div className="curtain-image-base">
            <img src={props.image} alt={props.alt} />
          </div>
        )}

        {/* Left Curtain */}
        {props.video && (
          <div className="curtain-panel curtain-left">
            <div className="curtain-edge-light" />
          </div>
        )}

        {/* Right Curtain */}
        {props.video && (
          <div className="curtain-panel curtain-right">
            <div className="curtain-edge-light" />
          </div>
        )}

        {/* Subtle "Preview Available" badge */}
        {props.video && (
          <div className="curtain-badge">
            <span className="badge-pulse" />
            <MdPlayArrow style={{ fontSize: "14px", marginRight: "3px" }} />
            <span>Hover to Unveil</span>
          </div>
        )}
      </a>
    </div>
  );
};

export default WorkImage;
