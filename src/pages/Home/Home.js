import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { FiDownload, FiMail } from "react-icons/fi";
import "./Home.css";
import Resume from '../../assets/docs/Sharad_Singh_New_Resume.pdf'

const Home = () => {
  const [theme, setTheme] = useTheme();
  
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="home-container" id="home">
        {/* Floating Theme Button */}
        <button className="theme-toggle-fab" onClick={handleTheme} aria-label="Toggle Theme">
          {theme === "light" ? (
            <BsFillMoonStarsFill size={20} />
          ) : (
            <BsFillSunFill size={20} />
          )}
        </button>

        <div className="home-content glass-panel">
          <div className="hero-badge">Welcome to my Space ✨</div>
          <h2 className="hero-subtitle">Hi 👋 I'm a</h2>
          <h1 className="hero-title">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Developer",
                  "MERN Stack Developer",
                  "Freelance Web Engineer",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
              }}
            />
          </h1>
          <p className="hero-desc">
            I craft next-level web applications with seamless frontend experiences and robust backend logic. Passionate about solving real-world challenges through code.
          </p>

          <div className="hero-actions">
            <a
              className="btn-primary-custom"
              href="mailto:sharadsingh24m@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <FiMail />
              <span>Hire Me</span>
            </a>
            <a 
              className="btn-secondary-custom" 
              href={Resume} 
              download="Sharad_Resume.pdf"
            >
              <FiDownload />
              <span>My Resume</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;