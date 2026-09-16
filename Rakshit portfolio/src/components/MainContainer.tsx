import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Certifications from "./Certifications";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import { setLayoutTimeline } from "./utils/GsapScroll";
import { useLoading } from "../context/LoadingProvider";
import { setProgress } from "./Loading";
import BackgroundAudio from "./BackgroundAudio";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const { setLoading } = useLoading();

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    setLayoutTimeline();

    // Trigger the loading screen animation
    const progress = setProgress(setLoading);
    setTimeout(() => {
      progress.loaded();
    }, 500);

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <BackgroundAudio />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Suspense fallback={<div>Loading Skills....</div>}>
              <TechStack />
            </Suspense>
            <Work />
            <Certifications />
            <Achievements />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
