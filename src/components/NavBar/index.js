import "./index.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-con">
        <div className="nav-logo-con">
            <h1>Destination Planning</h1>
        </div>
        <div className="nav-items-con">
          <Link to = "/" className="link">Explore Destinations</Link>
          <Link to = "/reviews" className="link">Reviews</Link>
          <Link to = "/plan-my-trip" className="link">Plan your trip</Link>
          <Link to = "/existing-itineraries" className="link">Existing Plans</Link>
        </div>
      </div>
      <hr className="seperator" />
    </nav>
  );
};

export default NavBar;
