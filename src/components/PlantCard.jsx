import bag from "../assets/bag.png";

function PlantCard({ image, name, text, price }) {
  return (
    <div className="plant-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{text}</p>
      <div className="card-bottom">
        <span>Rs. {price}/-</span>
        <button className="bag-btn" aria-label="add to bag">
          <img src={bag} alt="" />
        </button>
      </div>
    </div>
  );
}

export default PlantCard;
