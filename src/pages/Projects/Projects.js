import React, { useState } from "react";
import "./Projects.css";
import { FiGithub, FiTrendingUp } from "react-icons/fi";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [expandedId, setExpandedId] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "TransOra",
      category: "freelance",
      badge: "Freelance (2 Devs)",
      description: "India's fastest D2C fulfillment network. From dark stores to doorsteps, helping brands delight customers with lightning-fast delivery in 60-90 minutes.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Shopify API", "WooCommerce"],
      github: "https://github.com/13Sharad",
      role: "Co-developer (Frontend & Integration)",
      metrics: [
        "60-90 Min delivery timelines",
        "25% Lower fulfillment costs",
        "98%+ On-time delivery rate",
        "90% Fewer returns (RTO)",
        "3x Sales boost potential"
      ]
    },
    {
      id: 2,
      title: "InterviewEasy",
      category: "freelance",
      badge: "Freelance (3 Devs)",
      description: "A production-grade coding interview preparation platform. Offers interview-oriented questions, structured DSA sheets, CS fundamentals cheatsheets, and premium prep roadmap kits.",
      tech: ["Next.js", "Tailwind CSS", "Supabase", "Razorpay", "Resend", "Google Analytics"],
      github: "https://github.com/13Sharad",
      role: "Co-developer (Full-Stack & Payment Gateway)",
      metrics: [
        "12,504+ Engineers learning on platform",
        "Supabase Auth integration",
        "Razorpay premium gateway integration",
        "CS Fundamentals Cheat Sheets"
      ]
    },
    {
      id: 3,
      title: "Twin Tring",
      category: "freelance",
      badge: "Freelance (2 Devs)",
      description: "Official bicycle rental and service website in Mumbai. Built custom booking forms, service requests, user reviews, and structured contact workflows.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/13Sharad",
      role: "Frontend Lead",
      metrics: [
        "Official Mumbai rental service site",
        "Interactive rental booking dashboard",
        "Complete responsive user feedback loop"
      ]
    },
    {
      id: 4,
      title: "VehicleKhareedo",
      category: "freelance",
      badge: "Client Project (Individual)",
      description: "Premium Pre-Delivery Inspection (PDI) booking and automotive community hub in Gujarat. Connects vehicle buyers with independent brand-agnostic car experts.",
      tech: ["React", "Tailwind CSS", "Express.js", "MongoDB", "EMI Calculator"],
      github: "https://github.com/13Sharad",
      role: "Lead Full-Stack Developer",
      metrics: [
        "Pre-Delivery check scheduling system",
        "Paisa-Vasool pricing modules",
        "Gujarat car lovers discussion community"
      ]
    },
    {
      id: 5,
      title: "Chowdhary Classes",
      category: "freelance",
      badge: "Client Project (Individual)",
      description: "Tuition and batch management website for Raniganj's leading commerce and economics classes. Fosters a student-centric learning environment with study notes archives.",
      tech: ["React.js", "CSS3", "JavaScript", "Ratio Calculators", "PDF Engine"],
      github: "https://github.com/13Sharad",
      role: "Solo Creator",
      metrics: [
        "Active student download portal",
        "Conceptual golden rules interactive page",
        "Tuition query forms and batch schedule guides"
      ]
    },
    {
      id: 6,
      title: "PDFExtract-Pro",
      category: "personal",
      badge: "Group Project (Next.js 16)",
      description: "Advanced Next.js and TypeScript project for automated text and data extraction from PDF documents, customized to bypass build CVE blocks.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostCSS", "Vercel Deploy"],
      github: "https://github.com/13Sharad/PDFExtract-Pro",
      role: "Lead Developer",
      metrics: [
        "Group project with clean parser pipelines",
        "Upgraded Next.js to bypass Vercel blocker",
        "Fully optimized TypeScript configurations"
      ]
    },
    {
      id: 7,
      title: "Habit Tracker",
      category: "personal",
      badge: "Academic Project (Individual)",
      description: "A Next.js & MongoDB application for daily habit tracking with secure email authentication, password hashing, and consecutive streak monitoring.",
      tech: ["Next.js", "MongoDB Atlas", "JWT Auth", "bcryptjs"],
      github: "https://github.com/13Sharad/habit-tracker",
      role: "Solo Creator",
      metrics: [
        "Secure custom authentication",
        "24-hour mark done streak logic",
        "Streaks grow / resets on misses"
      ]
    },
    {
      id: 8,
      title: "CodePlay-Hub",
      category: "personal",
      badge: "Academic Project (Individual)",
      description: "EdTech MERN application empowering instructors to publish courses, view detailed sales graphs, and enabling students to purchase and learn interactively.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Razorpay"],
      github: "https://github.com/13Sharad/CodePlay-Hub",
      role: "Solo Creator",
      metrics: [
        "MERN Stack course publish pipelines",
        "Real-time sales & enrollment graphs",
        "Integrated secure Razorpay gateway"
      ]
    },
    {
      id: 9,
      title: "Resume Pilot",
      category: "personal",
      badge: "Group Project (2 Devs)",
      description: "Modern AI-powered resume and cover letter builder featuring real-time preview, template selection, and an ATS compatibility score checker.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "Node.js", "Express", "Firebase Auth"],
      github: "https://github.com/13Sharad/Resume_Pilot",
      role: "Co-creator",
      metrics: [
        "ATS keyword optimization algorithms",
        "AI cover letter builder templates",
        "Multiple export formats support (PDF/DOCX)"
      ]
    },
    {
      id: 10,
      title: "Issue Tracker",
      category: "personal",
      badge: "Academic Project (Individual)",
      description: "Full-stack React (TypeScript) and Node tool to create and manage projects, track issues, assign priorities, and monitor status updates.",
      tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose"],
      github: "https://github.com/13Sharad/Issue-Tracker",
      role: "Solo Creator",
      metrics: [
        "TypeScript static type safety",
        "Priority dashboard & project issue boards",
        "Structured RESTful backend routing"
      ]
    }
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="projects-section" id="projects">
      <h2 className="section-title">TOP RECENT PROJECTS</h2>
      <div className="section-divider"></div>
      <p className="section-subtitle">
        Explore my latest work, including freelance solutions and academic projects
      </p>

      {/* Filter Tabs */}
      <div className="projects-filter-tabs">
        <button
          className={`filter-tab-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Projects
        </button>
        <button
          className={`filter-tab-btn ${filter === "freelance" ? "active" : ""}`}
          onClick={() => setFilter("freelance")}
        >
          Freelance & Client Work
        </button>
        <button
          className={`filter-tab-btn ${filter === "personal" ? "active" : ""}`}
          onClick={() => setFilter("personal")}
        >
          Personal & Academic
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => {
          const isExpanded = expandedId === project.id;
          return (
            <div key={project.id} className="project-card glass-panel">
              <div className="project-card-header">
                <span className="project-category-badge">{project.badge}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-role">Role: {project.role}</p>
              </div>

              <div className="project-card-body">
                <p className="project-desc">{project.description}</p>

                <div className="project-tech-badges">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="badge-custom">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="project-details-drawer">
                    <div className="drawer-title">
                      <FiTrendingUp size={16} />
                      <span>Key Highlights & Metrics</span>
                    </div>
                    <ul className="highlights-list">
                      {project.metrics.map((m, idx) => (
                        <li key={idx}>{m}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="project-card-footer">
                <button
                  className="btn-details-toggle"
                  onClick={() => toggleExpand(project.id)}
                >
                  {isExpanded ? "Hide Details" : "Show Details"}
                </button>
                <div className="footer-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-icon"
                    title="View Source Code"
                  >
                    <FiGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
