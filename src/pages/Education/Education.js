import React from "react";
import { MdSchool as SchoolIcon } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="education-section" id="education">
        <h2 className="section-title">EDUCATION DETAILS</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          My academic timeline and formal credentials
        </p>

        <div className="timeline-container">
          <VerticalTimeline lineColor="var(--timeline-line)">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ 
                background: "var(--bg-secondary)", 
                color: "var(--text-primary)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-sm)",
                borderRadius: "12px"
              }}
              contentArrowStyle={{ borderRight: "7px solid var(--bg-secondary)" }}
              date="2009 - 2019"
              iconStyle={{ background: "var(--accent)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Matriculation</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Best Model Public School, IN
              </h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ 
                background: "var(--bg-secondary)", 
                color: "var(--text-primary)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-sm)",
                borderRadius: "12px"
              }}
              contentArrowStyle={{ borderRight: "7px solid var(--bg-secondary)" }}
              date="2019 - 2021"
              iconStyle={{ background: "var(--accent)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Intermediate</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Oxford Senior Secondary School, IN
              </h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ 
                background: "var(--bg-secondary)", 
                color: "var(--text-primary)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-sm)",
                borderRadius: "12px"
              }}
              contentArrowStyle={{ borderRight: "7px solid var(--bg-secondary)" }}
              date="2022 - 2026"
              iconStyle={{ background: "var(--accent)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">B.Tech in Information Technology</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Haldia Institute of Technology, IN
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Education;