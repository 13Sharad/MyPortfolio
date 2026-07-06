import React from "react";
import { SiReact, SiNextdotjs } from "react-icons/si";
import { FiBriefcase } from "react-icons/fi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./workExp.css";

const WorkExp = () => {
  return (
    <>
      <div className="work-section" id="work">
        <h2 className="section-title">WORK EXPERIENCES</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          My journey in client-facing freelance projects and developer roles
        </p>

        <div className="timeline-container">
          <VerticalTimeline lineColor="var(--timeline-line)">
            {/* TransOra – Freelance Full Stack Developer */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: "var(--bg-secondary)", 
                color: "var(--text-primary)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-sm)",
                borderRadius: "12px"
              }}
              contentArrowStyle={{ borderRight: "7px solid var(--bg-secondary)" }}
              date="09-2025 - 10-2025"
              iconStyle={{ background: "var(--accent)", color: "#fff" }}
              icon={<FiBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">
                Freelance Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                TransOra Logistics – team of 2 devs
              </h4>
              <p className="timeline-desc">
                Collaborated in a two-member team to construct a next-generation logistics and dark store fulfillment portal. 
                Integrated custom client hooks for Shopify, WooCommerce, and Magento, and reduced operational overhead while 
                ensuring smooth delivery routing metrics.
              </p>
            </VerticalTimelineElement>

            {/* InterviewEasy – Freelance Full Stack Developer */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: "var(--bg-secondary)", 
                color: "var(--text-primary)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-sm)",
                borderRadius: "12px"
              }}
              contentArrowStyle={{ borderRight: "7px solid var(--bg-secondary)" }}
              date="07-2025 - 08-2025"
              iconStyle={{ background: "var(--accent)", color: "#fff" }}
              icon={<SiNextdotjs />}
            >
              <h3 className="vertical-timeline-element-title">
                Freelance Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                InterviewEasy Prep – team of 3 devs
              </h4>
              <p className="timeline-desc">
                Built a production-grade Next.js + Supabase platform. Implemented secure Supabase Auth, 
                Razorpay premium subscription APIs, and Resend email hooks. Deployed search optimization (SEO) 
                and verified performance speeds for 12k+ active users.
              </p>
            </VerticalTimelineElement>

            {/* Twin Tring – Frontend Developer */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: "var(--bg-secondary)", 
                color: "var(--text-primary)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-sm)",
                borderRadius: "12px"
              }}
              contentArrowStyle={{ borderRight: "7px solid var(--bg-secondary)" }}
              date="04-2025 - 06-2025"
              iconStyle={{ background: "var(--accent)", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Twin Tring (Cycle Rental) – team of 2 devs
              </h4>
              <p className="timeline-desc">
                Engineered the official bicycle rental and repair portal from scratch using React and Tailwind CSS. 
                Structured client booking calendars, request forms, and feedback portals, resulting in dynamic cross-device parity.
              </p>
            </VerticalTimelineElement>

            {/* Edunet Foundation – Full Stack Developer */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: "var(--bg-secondary)", 
                color: "var(--text-primary)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-sm)",
                borderRadius: "12px"
              }}
              contentArrowStyle={{ borderRight: "7px solid var(--bg-secondary)" }}
              date="10-2024 - 12-2024"
              iconStyle={{ background: "var(--accent)", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Edunet Foundation
              </h4>
              <p className="timeline-desc">
                Designed a responsive ecommerce portal for Edunet non-profit organization using React, Node.js, and MongoDB. 
                Optimized checkout flows and dashboard interfaces while keeping layouts fully mobile-first.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
