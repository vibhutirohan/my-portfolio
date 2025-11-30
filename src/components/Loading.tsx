import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Handle percent reaching 100 safely
  useEffect(() => {
    if (percent >= 100) {
      const timer = setTimeout(() => {
        setLoaded(true);
        const innerTimer = setTimeout(() => {
          setIsLoaded(true);
        }, 1000);

        return () => clearTimeout(innerTimer);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [percent]);

  // Run initial FX AFTER loaded
  useEffect(() => {
    if (!isLoaded) return;

    setClicked(true);

    const timeout = setTimeout(() => {
      import("./utils/initialFX").then((module) => {
        module.initialFX?.();
        setIsLoading(false);
      });
    }, 900);

    return () => clearTimeout(timeout);
  }, [isLoaded, setIsLoading]);

  // Fancy hover effect
  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          Rohan's Portfolio
        </a>

        <div className={`loaderGame ${clicked ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {Array.from({ length: 27 }).map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>

      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee>
            <span>Software Developer  </span>
            <span> Data Engineer</span>
            <span>AI/ML Engineer</span>
            <span>Data Scientist</span>
          </Marquee>
        </div>

        <div
          className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
          onMouseMove={handleMouseMove}
        >
          <div className="loading-hover"></div>

          <div className={`loading-button ${loaded ? "loading-complete" : ""}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>

              <div className="loading-box"></div>
            </div>

            <div className="loading-content2">
              <span>Rohan's Portfolio </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

/* ------------------------------------------------------------------
   ⭐ REQUIRED by Scene.tsx
   Restoring setProgress to avoid:
   "does not provide an export named 'setProgress'"
------------------------------------------------------------------- */
export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      percent += Math.round(Math.random() * 5);
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent += Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }

  return { loaded, percent, clear };
};
