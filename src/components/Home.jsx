import "../assets/home.css";
import GitHubLogo from "../assets/images/githubLogo.png";
import LinkedinLogo from "../assets/images/linkedinLogo.png";
import FacebookLogo from "../assets/images/facebookLogo.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-links">
        <a href="https://www.github.com/alae-herrak" target='_blank'>
          <img src={GitHubLogo} alt="ghl" width="35px" />
        </a>
        <a href="https://www.linkedin.com/in/alae-herrak-ba9039210" target='_blank'>
          <img src={LinkedinLogo} alt="ghl" width="35px" />
        </a>
        <a href="https://www.facebook.com/herrakalae" target='_blank'>
          <img src={FacebookLogo} alt="ghl" width="35px" />
        </a>
      </div>
      <div className="home-main"></div>
    </div>
  );
};

export default Home;
