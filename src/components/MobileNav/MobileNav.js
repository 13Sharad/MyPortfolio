import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
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
import "./MobileNav.css";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuClick = () => {
    setOpen(false);
  };

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
    <div className="mobile-nav glass-panel">
      <div className="mobile-nav-header">
        {open ? (
          <AiOutlineMenuFold
            size={26}
            className="mobile-nav-icon"
            onClick={handleOpen}
          />
        ) : (
          <GiHamburgerMenu
            size={26}
            className="mobile-nav-icon"
            onClick={handleOpen}
          />
        )}
        <span className="mobile-nav-title">Sharad Singh</span>
      </div>
      
      {open && (
        <div className="mobile-nav-menu glass-panel">
          <nav className="mobile-nav-links">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.target}
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={300}
                  activeClass="active"
                  className="mobile-nav-link"
                  onClick={handleMenuClick}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;