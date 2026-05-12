import ReviewCard from "../components/ReviewCard";
import shelly from "../assets/Shelly Russel.png";
import lula from "../assets/Lula Rolfson.jpg";
import carol from "../assets/Carol Huels.png";

const reviews = [
  ["Shelly Russel", shelly, "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!"],
  ["Lula Rolfson", lula, "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home."],
  ["Carol Huels", carol, "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!."],
];

function ReviewSection() {
  return (
    <section id="contact" className="section review">
      <h2 className="title">Customer Review</h2>
      <div className="review-grid">
        {reviews.map((item) => (
          <ReviewCard key={item[0]} name={item[0]} image={item[1]} text={item[2]} />
        ))}
      </div>
    </section>
  );
}

export default ReviewSection;
