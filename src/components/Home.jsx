import "../assets/home.css";
import Laptop from "../assets/images/lightbulbs.jpg";

const Home = () => {
  return (
    <div className="home">
      <section className="hero" style={{background: `url(${Laptop})`}}>
        <div className="hero-container">

        </div>
      </section>
      {/* <img src={Laptop} alt="laptop image" /> */}
    </div>
  );
};

export default Home;
