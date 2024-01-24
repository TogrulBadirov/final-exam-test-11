import React from "react";
import "./index.scss"

const Discuss = () => {
  return (
    <section id="Discuss">
      <div className="container">
        <div className="sectionHeader">
            <h2>How Can I Help You</h2>
            <p>We can discuss your problems</p>
        </div>
        <div className="cards">
            <div className="row">

                <div className="col-lg-4 col-md-6 col-12 service">
                        <div className="image">
                        <img src="http://www.themestarz.net/html/lifecoach/assets/img/icon-head-question.png" alt="" />
                        </div>
                        <h3>Don’t Know Where to Go?</h3>
                        <p>Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis</p>
                </div>

                <div className="col-lg-4 col-md-6 col-12 service">
                        <div className="image">
                        <img src="http://www.themestarz.net/html/lifecoach/assets/img/icon-head-question.png" alt="" />
                        </div>
                        <h3>Don’t Know Where to Go?</h3>
                        <p>Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis</p>
                </div>

                <div className="col-lg-4 col-md-6 col-12 service">
                        <div className="image">
                        <img src="http://www.themestarz.net/html/lifecoach/assets/img/icon-head-question.png" alt="" />
                        </div>
                        <h3>Don’t Know Where to Go?</h3>
                        <p>Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis</p>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Discuss;
