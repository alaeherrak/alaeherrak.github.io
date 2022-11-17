import "../assets/home.css";
import GitHubLogo from "../assets/images/githubLogo.png";
import LinkedinLogo from "../assets/images/linkedinLogo.png";
import FacebookLogo from "../assets/images/facebookLogo.png";
import SideLink from "./SideLink";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-links">
        <SideLink link="https://www.github.com/alae-herrak" logo={GitHubLogo} />
        <SideLink
          link="https://www.linkedin.com/in/alae-herrak-ba9039210"
          logo={LinkedinLogo}
        />
        <SideLink
          link="https://www.facebook.com/herrakalae"
          logo={FacebookLogo}
        />
      </div>
      <div className="home-main">
        <div className="home-main-container">
          <div className="d d1">Hi,</div>
          <div className="d d2">
            I'm{" "}
            <span>
              <span className="s1">A</span>
              <span className="s2">A</span>
              <span className="s3">A</span>
            </span>
            lae,
          </div>
          <div className="d d3">web developer</div>
          <div className="d4">{'>'} front end / back end developer</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
