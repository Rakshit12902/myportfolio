import { useEffect, useRef, useState } from "react";
import { useLoading } from "../context/LoadingProvider";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

const BackgroundAudio = () => {
  const { isLoading } = useLoading();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/background-music.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // When loading completes, auto-play background music smoothly
  useEffect(() => {
    if (!isLoading && audioRef.current) {
      audioRef.current.volume = 0;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          let vol = 0;
          const fadein = setInterval(() => {
            if (vol < 0.8) {
              vol += 0.1;
              if (audioRef.current) audioRef.current.volume = vol;
            } else {
              clearInterval(fadein);
            }
          }, 120);
        })
        .catch((e) => {
          console.log("Audio autoplay prevented by browser:", e);
          setIsPlaying(false);
        });
    }
  }, [isLoading]);

  // Click anywhere on screen stops the initial auto-play music once
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      // Do not stop if clicking directly on the toggle button
      if (target?.closest("#music-toggle-btn")) {
        return;
      }

      // If music is currently playing, clicking anywhere stops/pauses it
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener("click", handleGlobalClick);
    return () => {
      window.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  // Explicit button toggle (always works reliably to start/stop anytime)
  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      if (audioRef.current.volume === 0) {
        audioRef.current.volume = 0.6;
      }
      audioRef.current.muted = false;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Play failed on user toggle:", err));
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Don't show the mute/unmute button until loading screen is gone
  if (isLoading) return null;

  return (
    <div
      id="music-toggle-btn"
      onClick={toggleMusic}
      title={isPlaying ? "Click to Pause Music" : "Click to Play Music"}
      style={{
        position: "fixed",
        bottom: "90px",
        right: "30px",
        zIndex: 99999,
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        backgroundColor: "var(--backgroundColor)",
        border: "1px solid var(--accentColor)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        color: "var(--accentColor)",
        fontSize: "22px",
        boxShadow: isPlaying
          ? "0 0 20px rgba(94, 234, 212, 0.4)"
          : "0 0 10px rgba(255, 255, 255, 0.1)",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow = "0 0 25px rgba(94, 234, 212, 0.6)";
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = isPlaying
          ? "0 0 20px rgba(94, 234, 212, 0.4)"
          : "0 0 10px rgba(255, 255, 255, 0.1)";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {isPlaying ? <MdVolumeUp /> : <MdVolumeOff />}
    </div>
  );
};

export default BackgroundAudio;
