import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import { FiLinkedin, FiGithub, FiMail, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return;
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setname("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <div className="contact-section" id="contact">
        <h2 className="section-title">GET IN TOUCH</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Have a project in mind, a freelance inquiry, or just want to say hello? Drop a message!
        </p>

        <div className="contact-grid glass-panel">
          {/* Info Block */}
          <div className="contact-info-col">
            <h3 className="info-title">Let's Connect</h3>
            <p className="info-desc">
              I am open to freelance collaborations, full-time opportunities, or discussing new ideas. Let's build something exceptional together!
            </p>

            <div className="info-details-list">
              <div className="info-detail-item">
                <FiMail className="info-detail-icon" />
                <div>
                  <h4>Email Me</h4>
                  <a href="mailto:sharadsingh24m@gmail.com" className="info-link">
                    sharadsingh24m@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-detail-item">
                <FiMapPin className="info-detail-icon" />
                <div>
                  <h4>Based In</h4>
                  <p>Bengaluru / Vaishali, India</p>
                </div>
              </div>
            </div>

            <div className="social-links-container">
              <h4>Follow My Work</h4>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sharad-singh-b47678260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/13Sharad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="GitHub"
                >
                  <FiGithub size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form Block */}
          <div className="contact-form-col">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name-input">Full Name</label>
                <input
                  id="name-input"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email-input">Email Address</label>
                <input
                  id="email-input"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="msg-input">Your Message</label>
                <textarea
                  id="msg-input"
                  name="msg"
                  rows="5"
                  placeholder="How can I help you?"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn-primary-custom submit-btn">
                <FiSend />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;