import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  return (
    <>
      <div className="techstack-section" id="techstack">
        <h2 className="section-title">TECHNOLOGY STACK</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Languages, frameworks, databases, and development tools I use regularly
        </p>
        
        <div className="tech-grid">
          {TechstackList.map((tech) => {
            const Icon = tech.icon;
            return (
              <div key={tech._id} className="tech-card glass-panel">
                <div className="tech-card-content">
                  <Icon className="tech-icon" />
                  <h5 className="tech-name">{tech.name}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Techstack;
