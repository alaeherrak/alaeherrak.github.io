import "../assets/home.css";
import Laptop from "../assets/images/lightbulbs.jpg";

const Home = () => {
  return (
    <div className="home">
      <section className="hero" style={{background: `url(${Laptop})`}}>
        <div className="hero-container">
          <div className="hero-container-left">
            <div  className="hero-container-left-container">
              <h2>Hi, I'm Alae,</h2>
              <h1>Full Stack Web Developer</h1>
            </div>
          </div>
          <div className="hero-container-right">

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
