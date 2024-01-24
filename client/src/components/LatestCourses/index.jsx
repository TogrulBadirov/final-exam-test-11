import React from "react";
import "./index.scss"

const LatestCourses = () => {
  return (
    <section id="LatestCourses">
      <div className="container">
        <div className="sectionHeader">
            <h2>Latest Courses</h2>
        </div>
        <div className="cards">
            <div className="row">

                <div className="col-lg-4 col-md-6 col-12 service">
                        <div className="image">
                        <img src="http://www.themestarz.net/html/lifecoach/assets/img/img-girl-field.jpg" alt="" />
                        </div>
                        <div className="text-content">
                        <h3>Don’t Know Where to Go?</h3>
                        <p>Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis</p>
                        <button className="join-btn">Join Course</button>
                        </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 service">
                        <div className="image">
                        <img src="http://www.themestarz.net/html/lifecoach/assets/img/img-girl-field.jpg" alt="" />
                        </div>
                        <div className="text-content">
                        <h3>Don’t Know Where to Go?</h3>
                        <p>Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis</p>
                        <button className="join-btn">Join Course</button>
                        </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 service">
                        <div className="image">
                        <img src="http://www.themestarz.net/html/lifecoach/assets/img/img-girl-field.jpg" alt="" />
                        </div>
                        <div className="text-content">
                        <h3>Don’t Know Where to Go?</h3>
                        <p>Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis</p>
                        <button className="join-btn">Join Course</button>
                        </div>
                </div>

                

            </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCourses;
