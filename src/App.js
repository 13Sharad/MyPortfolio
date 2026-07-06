import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/workExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [theme] = useTheme();
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <div className="app-layout">
          <Layout toggle={toggle} handleToggle={handleToggle} />
          <div className={`main-content ${toggle ? "sidebar-expanded" : "sidebar-collapsed"}`}>
            <Home />
            <About />
            <Education />
            <Techstack />
            <Projects />
            <WorkExp />
            <Contact />
            
            <div className="footer pb-4 pt-4 mt-5 text-center" style={{ borderTop: "1px solid var(--border-color)", color: "var(--text-muted)" }}>
              <h5 style={{ fontSize: "1rem", fontWeight: "500", margin: 0 }}>Made With 😍 Sharad &copy; 2026</h5>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#fff"
        style={{ 
          backgroundColor: "var(--accent)", 
          borderRadius: "50%", 
          boxShadow: "0 4px 12px rgba(99, 102, 241, 0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      />
    </>
  );
}

export default App;