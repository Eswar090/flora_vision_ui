import PlantCard from "../components/PlantCard";
import aglaonema from "../assets/Aglaonema plant.png";
import plantain from "../assets/Plantain Lilies.png";
import cactus from "../assets/Cactus.png";
import swiss from "../assets/Swiss cheese Plant.png";
import sansevieria from "../assets/Sansevieria plant.png";
import agave from "../assets/Agave plant.png";

const plants = [
  {
    image: aglaonema,
    name: "Aglaonema plant",
    text: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care.",
    price: "300",
  },
  {
    image: plantain,
    name: "Plantain Lilies",
    text: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes.",
    price: "380",
  },
  {
    image: cactus,
    name: "Cactus",
    text: "It is known for their ability to thrive in arid environments.",
    price: "259",
  },
  {
    image: swiss,
    name: "Swiss cheese Plant",
    text: "It is a popular tropical houseplant known for its distinctive, perforated leaves.",
    price: "400",
  },
  {
    image: sansevieria,
    name: "Sansevieria plant",
    text: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: "450",
  },
  {
    image: agave,
    name: "Agave plant",
    text: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    price: "359",
  },
];


function TopSelling() {
  return (
    <section id="plants" className="section">
      <h2 className="title">Our Top Selling Plants</h2>
      <div className="plant-grid">
        {plants.map((item) => (
          <PlantCard
            key={item.name}
            image={item.image}
            name={item.name}
            text={item.text}
            price={item.price}
          />
        ))}
      </div>

    </section>
  );
}

export default TopSelling;
