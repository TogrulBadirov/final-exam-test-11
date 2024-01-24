import React from "react";
import "./index.scss";
const Header = () => {
  return (
    <section id="Header">
      <img
        className="header-img-left"
        src="http://www.themestarz.net/html/lifecoach/assets/img/bg-shape-top-left.png"
        alt=""
      />
      <img
        className="header-img-right"
        src="http://www.themestarz.net/html/lifecoach/assets/img/bg-shape-bottom-right.png"
        alt=""
      />
      <img
        className="header-img-middle"
        src="http://www.themestarz.net/html/lifecoach/assets/img/bg-woman.png"
        alt=""
      />
      <div className="container">
        <div className="content">
          <h1>Push Your Life To a New Level</h1>
          <p>Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis</p>
          <div className="button">
            <button className="learn-more-btn">Learn More</button>
            <button className="meet-me-btn">Meet Me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
