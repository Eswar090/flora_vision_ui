function ReviewCard({ name, image, text }) {
  return (
    <div className="review-card">
      <div className="person">
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="stars">⭐ ⭐ ⭐ ⭐ ⭐</p>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default ReviewCard;
