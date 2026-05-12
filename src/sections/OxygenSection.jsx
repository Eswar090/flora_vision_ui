import { useState } from "react";
import Button from "../components/Button";
import aglaonema from "../assets/Aglaonema plant.png";
import plantain from "../assets/Plantain Lilies.png";
import sansevieria from "../assets/Sansevieria plant.png";
import agave from "../assets/Agave plant.png";

const plants = [
  [aglaonema, "We Have Small And Best O2 Plants Collection’s", "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe."],
  [plantain, "Plantain Lilies", "A soft leafy plant loved for indoor corners, calm decor, and a fresh natural feeling around the home."],
  [sansevieria, "Sansevieria plant", "A strong low-care oxygen plant that is popular for bedrooms, desks, and modern indoor spaces."],
  [agave, "Agave plant", "A compact succulent plant with bold leaves, perfect for clean air styling and easy indoor decoration."],
];

function OxygenSection() {
  const [index, setIndex] = useState(0);
  const plant = plants[index];
  const next = () => setIndex((index + 1) % plants.length);
  const prev = () => setIndex((index + plants.length - 1) % plants.length);

  return (
    <section className="section oxygen">
      <h2 className="title">Our Best o2</h2>
      <div className="oxygen-card glass">
        <img className="oxygen-plant" src={plant[0]} alt={plant[1]} />
        <div>
          <h3>{plant[1]}</h3>
          
          <p>
            Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
          </p>
          <p>{plant[2]}</p>
          <Button />
          <div className="oxygen-side">
            <button onClick={prev}>&lt;</button>
            <span>0{index + 1}/04</span>
            <button onClick={next}>&gt;</button>
          </div>
        </div>
      </div>
      <div className="oxygen-dots">- &bull; &bull;</div>
    </section>
  );
}

export default OxygenSection;
