import { NavLink } from "react-router-dom";
import "./index.scss";
import { useState } from "react";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <nav>
      <div id="desktop-nav">
        <div className="container">
          <div className="logo">
            <NavLink>
              <h2>Coacher</h2>
            </NavLink>
          </div>
          <div className="pages">
            <ul className="page-elem">
              <li className="list">
                <NavLink className={"link"} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="list">
                <NavLink className={"link"} to={"/Basket"}>
                  Basket
                </NavLink>
              </li>
              <li className="list">
                <NavLink className={"link"} to={"/Wishlist"}>
                  Wishlist
                </NavLink>
              </li>
              <li className="list">
                <NavLink className={"link"} to={"/AddPage"}>
                  AddPage
                </NavLink>
              </li>
              <li>
                <button className="meet-btn">Meet Me</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="mobile-nav">
        <div className="container">
        <div className="logo">
            <NavLink>
              <h2>Coacher</h2>
            </NavLink>
            <div className="icon">
                <button className="nav-menu-btn" onClick={()=>setIsNavOpen(!isNavOpen)}><i className={`${!isNavOpen ? 'fa-solid fa-bars' : 'fa-solid fa-xmark'}`}></i></button>
            </div>
          </div>
          <div className={`pages ${isNavOpen ? "active" : ""}`}>
            <ul className="page-elem">
              <li className="list">
                <NavLink onClick={()=>setIsNavOpen(!isNavOpen)} className={"link"} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="list">
                <NavLink onClick={()=>setIsNavOpen(!isNavOpen)} className={"link"} to={"/Basket"}>
                  Basket
                </NavLink>
              </li>
              <li className="list">
                <NavLink onClick={()=>setIsNavOpen(!isNavOpen)} className={"link"} to={"/Wishlist"}>
                  Wishlist
                </NavLink>
              </li>
              <li className="list">
                <NavLink onClick={()=>setIsNavOpen(!isNavOpen)} className={"link"} to={"/AddPage"}>
                  AddPage
                </NavLink>
              </li>
              <li>
                <button className="meet-btn">Meet Me</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
