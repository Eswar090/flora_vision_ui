import Button from "../components/Button";
import bag from "../assets/bag.png";
import desk from "../assets/Plantain Lilies.png";
import agave from "../assets/For Your Desks Decorations.png";

function TrendySection() {
  return (
    <section className="section trendy">
      <h2 className="title">Our Trendy plants</h2>

      <div className="wide-card glass">
        <img src={desk} alt="desk decoration plant" />
        <div>
          <h3>For Your Desks Decorations</h3>
          <p>
             I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
          <h4>Rs. 599/-</h4>
          <div className="card-actions">
            <Button />
            <button className="bag-btn" aria-label="add to bag">
              <img src={bag} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="wide-card glass second">
        <div>
          <h3>For Your Desks Decorations</h3>
          <p>
            The greenery adds a touch of nature and serenity to my desk, making
            it feel more inviting and calming.
          </p>
          <h4>Rs. 399/-</h4>
          <div className="card-actions">
            <Button />
            <button className="bag-btn" aria-label="add to bag">
              <img src={bag} alt="" />
            </button>
          </div>
        </div>
        <img src={agave} alt="agave plant" />
      </div>
    </section>
  );
}

export default TrendySection;
