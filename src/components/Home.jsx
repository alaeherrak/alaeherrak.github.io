import { useState } from "react";
import "../assets/home.css";
import LightBulbs from "../assets/images/lightbulbs.jpg";

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
                <div className={fullnamePopup}>{'< fullname = "alae herrak" />'}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <h1 onMouseOver={handleFullnamePopupOver} onMouseOut={handleFullnamePopupOut}>
                  Hi, I'm <span>Alae</span>,
                </h1>
                <h3 onMouseOver={handleSkillsPopupOver} onMouseOut={handleSkillsPopupOut}>Full Stack Web Developer</h3>
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
          <div className="hero-container-right"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
