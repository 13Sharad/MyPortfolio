import React from "react";
import { SiReact, SiNextdotjs } from "react-icons/si";
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
            Work Experiences
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            {/* InterviewEasy – Freelance Full Stack Developer */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="07-2025 - 08-2025"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiNextdotjs />}
            >
              <h3 className="vertical-timeline-element-title">
                Freelance Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                InterviewEasy – DSA Learning Platform
              </h4>
              <p>
                Built a production-grade Next.js + Supabase platform in a 3-member team.
                Implemented Supabase Auth (email & Google) with JWT sessions, integrated
                Razorpay for premium sheet purchases, and used Resend for transactional
                emails. Deployed with SEO, mobile responsiveness, and analytics via Google
                Analytics/AdSense. Showcased on the live site’s About Us page.
              </p>
            </VerticalTimelineElement>

            {/* Twin Tring – Frontend Developer */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="04-2025 - 06-2025"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Twin Tring (Cycle Rental Service), Mumbai — Remote
              </h4>
              <p>
                Built the official website (React + Tailwind CSS) from scratch in a team of two.
                Implemented rental booking, service requests, feedback, and contact flows.
                Ensured responsive, fast-loading UI and collaborated with backend teams to
                integrate APIs and maintain cross-browser/device compatibility.
              </p>
            </VerticalTimelineElement>

            {/* Edunet Foundation – Full Stack Developer */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
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
                Designed a user-friendly e-commerce website for Edunet Foundation, a
                non-profit organization. Built using React, Node.js, and MongoDB with
                mobile-first responsive design. Integrated secure payment gateways and
                user authentication features, ensuring smooth cross-platform performance.
                Collaborated with designers and developers to deliver new features and
                resolve issues while meeting project deadlines.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
