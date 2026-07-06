import React from "react";
import "./About.css";
import Photo from './photo2.jpg';
import { FiMapPin, FiAward, FiBook } from "react-icons/fi";

const About = () => {
  return (
    <>
      <div className="about-section" id="about">
        <h2 className="section-title">ABOUT ME</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">Get to know more about my background, focus, and drive</p>

        <div className="about-grid glass-panel">
          <div className="about-image-col">
            <div className="image-frame">
              <img
                src={Photo}
                alt="Sharad Singh"
                className="about-img-el"
              />
            </div>
          </div>
          
          <div className="about-content-col">
            <h3 className="about-greeting">I'm Sharad Singh, a Full-Stack Engineer</h3>
            <p className="about-paragraph">
              I am currently pursuing my Bachelor's degree in Information Technology from <strong>Haldia Institute of Technology</strong> (2022 - 2026). Originally from Vaishali, Bihar, I'm currently active in full-stack engineering and freelance website development.
            </p>
            <p className="about-paragraph">
              With a strong base in Data Structures, Algorithms, and C++, I build scalable applications using React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS. I have experience building full-stack products, cooperating in teams of up to 3 developers, and delivering clean, production-grade solutions for freelance clients.
            </p>

            <div className="about-quick-cards">
              <div className="quick-card">
                <FiMapPin className="quick-card-icon" />
                <h4>Location</h4>
                <p>Vaishali, Bihar / Haldia, WB</p>
              </div>
              <div className="quick-card">
                <FiAward className="quick-card-icon" />
                <h4>Freelance Focus</h4>
                <p>MERN & Next.js Platforms</p>
              </div>
              <div className="quick-card">
                <FiBook className="quick-card-icon" />
                <h4>Education</h4>
                <p>B.Tech in IT (2026)</p>
              </div>
            </div>
            
            <p className="about-paragraph strengths-intro">
              My core strengths include writing clean, modular code, executing fast debugging cycles, and communicating clearly in collaborative settings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
