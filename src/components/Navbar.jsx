import logo from "../assets/plantlogo.png";
import search from "../assets/Search.png";
import bag from "../assets/bag.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="FloraVision" />
        <b>FloraVision.</b>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li className="plant-type">
          <details>
            <summary>Plants Type</summary>
            <ul className="dropdown">
              <li>Indoor</li>
              <li>Outdoor</li>
            </ul>
          </details>
        </li>
        <li>More</li>
        <li>Contact</li>
      </ul>

      <div className="nav-icons">
        <img src={search} alt="search" />
        <img src={bag} alt="bag" />
        <span>☰</span>
      </div>
    </nav>
  );
}

export default Navbar;
