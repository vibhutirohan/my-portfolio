import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import Education from "./Education";
import "./styles/AboutLayout.css";

const TechStack = lazy(() => import("./TechStack"));


const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />

      {/* Hero / Landing Section */}
      <Landing>
        {!isDesktopView && children}
      </Landing>

      {/* ABOUT + 3D MODEL SIDE BY SIDE */}
      {isDesktopView ? (
        <section className="about-wrapper">
          <div className="about-left">
            {children}  {/* 3D model here */}
          </div>

          <div className="about-right">
            <About />
          </div>
        </section>
      ) : (
        <About />   // For mobile, simple stacked layout
      )}

      {/* What I Do */}
      <WhatIDo />

      {/* Education */}
      <div style={{ marginTop: "120px" }}>
        <Education />
      </div>

      {/* Experience */}
      <Career />

      {/* Projects */}
      <Work />

      {/* Tech Stack */}
      <Suspense fallback={<div>Loading.....</div>}>
        <TechStack />
      </Suspense>

      {/* Contact */}
      <Contact />
    </div>
  );
};

export default MainContainer;
