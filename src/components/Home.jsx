import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/home.css";
import LightBulbs from "../assets/images/lightbulbs.jpg";
import Github from "../assets/images/github.png";
import Linkedin from "../assets/images/linkedin.png";
import QuickAction from "../assets/images/quickAction.png";
import RightArrow from "../assets/images/rightArrow.png";

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
                <img src={Github} alt="github" width="70px" />
              </a>
              <a href="https://www.linkedin.com/in/alae-herrak-ba9039210/">
                <img src={Linkedin} alt="linkedin" width="70px" />
              </a>
            </div>
            {/* big screen */}
            <div className="hero-container-right-main">
              <div className="window-head">Terminal</div>
              <div className="window-body">
                <div>C:\users\alae\{">"} cd desktop</div>
                <div>C:\users\alae\desktop{">"} cd projects</div>
                <div>C:\users\alae\desktop\projects{">"} cd portfolio</div>
                <div>C:\users\alae\desktop\projects\portfolio{">"} dir</div>
                <div><Link to='/'>- home</Link></div>
                <div><Link to='/projects'>- projects</Link></div>
                <div><Link to='/about'>- about</Link></div>
                <div><Link to='/contact'>- contact</Link></div>
                <div>C:\users\alae\desktop\projects\portfolio{">"} <span className="underscore">_</span></div>
              </div>
            </div>
            {/* tabler */}
            <div className="hero-container-right-tablet">
                <div className="tablet-container">
                    <pre>{'const PERSON = {\n    fullName: "alae herrak",\n    skills: {\n        frontEnd: true,\n        backEnd: true\n    }\n};'}</pre><pre>{'const PORTFOLIO = {\n    directory: [\n        '}<Link to='/'>home</Link>{',\n        '}<Link to='/projects'>projects</Link>{',\n        '}<Link to='/about'>about</Link>{',\n        '}<Link to='/contact'>contact</Link>{'\n    ]\n};'}</pre> 
                </div>
            </div>
            {/* mobile */}
            <div className="hero-container-right-mobile">
                <div className="mobile-container">
                    <pre>{'const PERSON = {\n    fullName: "alae herrak",\n    skills: {\n        frontEnd: true,\n        backEnd: true\n    }\n};\nconst PORTFOLIO = {\n    directory: [\n        '}<Link to='/'>home</Link>{',\n        '}<Link to='/projects'>projects</Link>{',\n        '}<Link to='/about'>about</Link>{',\n        '}<Link to='/contact'>contact</Link>{'\n    ]\n};'}</pre> 
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
