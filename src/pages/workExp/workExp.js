import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./workExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="12-2024 - 02-2025"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                    Web Designer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                    Copperpod IP
              </h4>
              <p>
                    Designed and developed responsive, user-friendly websites, enhancing Copperpod IP’s digital presence with a seamless
                    cross-platform experience.Optimized website performance, accessibility, and functionality, ensuring a smooth and interactive user experience. Collaborated with designers and developers to integrate visually appealing, brand-aligned design elements. Maintained and updated website content, ensuring accuracy, consistency, and optimal digital representation
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="10-2024 - 12-2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Edunet Foundation
              </h4>
              <p>
                Design a user-friendly e-commerce website for Edunet Foundation, a non-profit organization that provides educational resources to underprivileged children.
                Developed a responsive, mobile-first website using React, Node.js, and MongoDB, ensuring optimal performance and cross-platform compatibility. Integrated secure payment gateways and user authentication features, enhancing website functionality and user experience. Collaborated with a team of developers and designers to implement new features and resolve technical issues, ensuring project milestones and deadlines were met.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;