import { NavLink } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  return (
    <nav>
      <div id="desktop-nav">
        <div className="container">
            <div className="logo">
                <NavLink><h2>Coacher</h2></NavLink>
            </div>
            <div className="pages">
                <ul>
                    <li><NavLink>Home</NavLink></li>
                </ul>
            </div>
        </div>
      </div>

      <div id="mobile-nav">
        <div className="container">

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
