import logo from "../assets/plantlogo.png";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="brand">
          <img src={logo} alt="FloraVision" />
          <b>FloraVision.</b>
        </div>
        <p>
          "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
        </p>
      </div>

      <div>
        <h3>Quick Link&apos;s</h3>
        <a href="#home">Home</a>
        <a href="#plants">Type&apos;s Of plant&apos;s</a>
        <a href="#contact">Contact</a>
        <a href="#home">Privacy</a>
      </div>

      <div>
        <h3>For Every Update.</h3>
        <form>
          <input type="email" placeholder="Enter Email" />
          <button>SUBSCRIBE</button>
        </form>
        <p>FloraVision @ all right reserve</p>
      </div>
    </footer>
  );
}

export default Footer;
