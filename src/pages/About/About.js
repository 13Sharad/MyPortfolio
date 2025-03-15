import React from "react";
import "./About.css";
import Photo from './photo2.jpg';
// import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      {/* <Jump> */}
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={Photo}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                My name is Sharad Singh. I am currently pursuing my Bachelor's degree in Information Technology from Haldia Institute of Technology. I’m originally from Vaishali, Bihar.  
                I have a technical background in C++, Data Structures, Algorithms, and various web development technologies, including HTML, CSS, JavaScript, React, Express.js, Node.js, and MongoDB. I have completed several projects using these technologies, such as a CodePlay-Hub
                and a GoShopEase-Website. Additionally, I have made contributions to open-source projects.  
                My strengths include strong communication skills, a hardworking nature, and the ability to work well within a team. In my free time, I enjoy playing cricket, listening to music, and watching podcasts.  
              </p>
            </div>
          </div>
        </div>
      {/* </Jump> */}
    </>
  );
};

export default About;

