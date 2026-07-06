import React from "react";
import "./Menus.css";
import { Link } from "react-scroll";
import { 
  FiHome, 
  FiUser, 
  FiBookOpen, 
  FiCpu, 
  FiFolder, 
  FiBriefcase, 
  FiMail 
} from "react-icons/fi";
import Photo from './photo1.jpg';

const Menus = ({ toggle }) => {
  const menuItems = [
    { target: "home", label: "Home", icon: FiHome },
    { target: "about", label: "About", icon: FiUser },
    { target: "education", label: "Education", icon: FiBookOpen },
    { target: "techstack", label: "Tech Stack", icon: FiCpu },
    { target: "projects", label: "Projects", icon: FiFolder },
    { target: "work", label: "Work Experience", icon: FiBriefcase },
    { target: "contact", label: "Contact", icon: FiMail },
  ];

  return (
    <div className="menus-container">
      {toggle ? (
        <>
          <div className="profile-section">
            <div className="profile-pic-wrapper">
              <img src={Photo} alt="Sharad Singh" className="profile-pic" />
            </div>
            <h3 className="profile-name">Sharad Singh</h3>
            <p className="profile-title">Full-Stack Developer</p>
          </div>
          
          <nav className="nav-menu">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <div className="nav-item" key={item.target}>
                  <Link
                    to={item.target}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={300}
                    activeClass="active"
                    className="nav-link-custom"
                  >
                    <Icon size={18} className="menu-icon" />
                    <span className="menu-label">{item.label}</span>
                  </Link>
                </div>
              );
            })}
          </nav>
        </>
      ) : (
        <nav className="nav-menu collapsed">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <div className="nav-item" key={item.target}>
                <Link
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={300}
                  activeClass="active"
                  className="nav-link-custom collapsed-link"
                  title={item.label}
                >
                  <Icon size={20} className="menu-icon" />
                </Link>
              </div>
            );
          })}
        </nav>
      )}
    </div>
  );
};

export default Menus;