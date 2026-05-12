import Button from "../components/Button";
import bg from "../assets/background.jpg";
import aglaonema from "../assets/Aglaonema plant.png";
import plantain from "../assets/Plantain Lilies.png";
import sansevieria from "../assets/Sansevieria plant.png";
import ronnie from "../assets/Ronnie Hamill.png";

const indoorPlants = [
  [aglaonema, "Aglaonema plant"],
  [plantain, "Plantain Lilies"],
  [sansevieria, "Sansevieria plant"],
];

function HeroSection() {
  return (
<section id="home" className="hero" style={{ backgroundImage: `url(${bg})` }}>
  <div className="hero-text">
      <h1>Earth&apos;s Exhale</h1>
        <p>
   &quot;Earth Exhale&quot; symbolizes the purity and vitality of the
          Earth&apos;s natural environment and its essential role in sustaining
          life.
        </p>
        <div className="actions">
          <Button>Buy Now</Button>
     <button className="play">▶️</button>
          <span>Live Demo...</span>
        </div>
      </div>

      <div className="hero-product glass">
        <div className="product-slider">
          {indoorPlants.map((plant) => (
            <div className="product-slide" key={plant[1]}>
              <img src={plant[0]} alt={plant[1]} />
              <p>Indoor Plant</p>
              <h2>{plant[1]}</h2>
              <Button>Buy Now</Button>
            </div>
          ))}
        </div>
        <div className="dots">- &bull; &bull;</div>
      </div>

      <div className="small-review glass">
        <div className="avatar">
          <img src={ronnie} alt="Ronnie Hamill" />
        </div>
        <b>Ronnie Hamill</b>
        <p className="stars">⭐ ⭐ ⭐ ⭐</p>
        <p>
          I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
