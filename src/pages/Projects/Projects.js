import React from "react";
import "./Projects.css";
// import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
            Explore my latest projects with live demos and source code:
        </p>
        {/* card design */}
        <div className="row" id="ads">
          {/* <Spin> */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/projects/404/673e68174608407.Y3JvcCwzMjYwLDI1NTAsMTYsMA.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                        CodePlay-Hub
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/13Sharad/CodePlay-Hub.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.businesstoday.com.my%2Fwp-content%2Fuploads%2F2023%2F10%2FGOSHOP_20180403100711_goshop.webp&f=1&nofb=1&ipt=c18b3f31cc42e864771a102d794024b7a7173456357b0b04a1abe34146fa588c&ipo=images"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">Node</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">React</span>
                    <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">GoShopEase-Website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/13Sharad/GoShopEase-Website.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/10849384/10849384-1606025959593-14c483fef34cd.jpg"
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Html</span>
                  <span className="card-detail-badge">Css</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">First-Year-Guide</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/13Sharad/First-Year-Guide.git">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fmobile-weather-app-interface-design-gui-elements-weather-forecast-mobile-app-realistic-phone-temperature-weather-condition-user-interface-generator-ui-ux-toolkit-vector-illustration_397674-1044.jpg&f=1&nofb=1&ipt=5095ef2b3b1654c17a0d9fdcb5b886a0a27d55db7208ad607e71ed8a137235ab&ipo=images"
                    alt="project4"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">ReactJs</span>
                    <span className="card-detail-badge">TailWind</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Weather-Navigator</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/13Sharad/Weather-Navigator.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://www.rd.com/wp-content/uploads/2019/10/tic-tac-toe-scaled.jpg"
                    alt="project5"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ReactJs</span>
                  <span className="card-detail-badge">TailWind</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                        Square-Game
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/13Sharad/Square-Game.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          {/* </Spin> */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F61HHuFG1dUL.png&f=1&nofb=1&ipt=639a0ecc2bde5aa707def53aec9b25aeed51ef214a4b147c73570154a1e1fc60&ipo=images"
                    alt="project5"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Html</span>
                  <span className="card-detail-badge">TailWind.Css</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                        Test-of-Knowledge
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/13Sharad/Test-of-Knowledge.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
