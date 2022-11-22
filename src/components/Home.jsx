import { useState } from "react";
import "../assets/home.css";
import LightBulbs from "../assets/images/lightbulbs.jpg";
import Github from "../assets/images/github.png";
import Linkedin from "../assets/images/linkedin.png";

const Home = () => {
  const [fullnamePopup, setFullnamePopup] = useState("popupHide");
  const [skillsPopup, setSkillsPopup] = useState("popupHide");

  const handleFullnamePopupOver = () => {
    setFullnamePopup("fullname");
  };
  const handleFullnamePopupOut = () => {
    setFullnamePopup("popupHide");
  };
  const handleSkillsPopupOver = () => {
    setSkillsPopup("skills");
  };
  const handleSkillsPopupOut = () => {
    setSkillsPopup("popupHide");
  };

  return (
    <div className="home">
      <section className="hero" style={{ background: `url(${LightBulbs})` }}>
        <div className="hero-container">
          <div className="hero-container-left">
            <div className="hero-container-left-container">
              <div className="hero-container-left-div top">
                <div className={fullnamePopup}>
                  {'< fullname = "alae herrak" />'}
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <h1
                  onMouseOver={handleFullnamePopupOver}
                  onMouseOut={handleFullnamePopupOut}
                >
                  Hi, I'm <span>Alae</span>,
                </h1>
                <h3
                  onMouseOver={handleSkillsPopupOver}
                  onMouseOut={handleSkillsPopupOut}
                >
                  Full Stack Web Developer
                </h3>
              </div>
              <div className="hero-container-left-div bot">
                <div className={skillsPopup}>
                  <pre>
                    {
                      "let skills: {\n    frontEnd: true,\n    backEnd: true\n};"
                    }
                  </pre>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-container-right">
            <div className="links">
              <a href="https://www.github.com/alae-herrak">
                <img src={Github} alt="github" width='70px'/>
              </a>
              <a href="https://www.linkedin.com/in/alae-herrak-ba9039210/">
                <img src={Linkedin} alt="linkedin" width='70px'/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
