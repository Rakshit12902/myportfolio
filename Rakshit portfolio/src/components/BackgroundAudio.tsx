import { useEffect, useRef, useState } from "react";
import { useLoading } from "../context/LoadingProvider";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

const BackgroundAudio = () => {
  const { isLoading } = useLoading();
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/background-music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0; // Start at 0 for fade-in

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoading && audioRef.current) {
      // Loading finished! Fade in the background music
      audioRef.current.play().catch((e) => console.log("BG audio play failed", e));
      
      let vol = 0;
      const fadein = setInterval(() => {
        if (vol < 0.9) {
          vol += 0.1;
          if (audioRef.current) audioRef.current.volume = vol;
        } else {
          clearInterval(fadein);
        }
      }, 150);
    }
  }, [isLoading]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Don't show the mute button until the loading screen is gone
  if (isLoading) return null;

  return (
    <div
      onClick={() => setIsMuted(!isMuted)}
      style={{
        position: "fixed",
        bottom: "90px",
        right: "30px",
        zIndex: 9999,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "var(--backgroundColor)",
        border: "1px solid var(--accentColor)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        color: "var(--accentColor)",
        fontSize: "20px",
        boxShadow: "0 0 15px rgba(94, 234, 212, 0.2)",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow = "0 0 25px rgba(94, 234, 212, 0.5)";
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = "0 0 15px rgba(94, 234, 212, 0.2)";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {isMuted ? <MdVolumeOff /> : <MdVolumeUp />}
    </div>
  );
};

export default BackgroundAudio;

