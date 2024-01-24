import React from "react";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import VideoModal from "../VideoModal";

const FreeVideos = () => {
  return (
    <section id="FreeVideos">
      
      <div className="container">
        <div className="sectionHeader">
          <h2>Free Videos</h2>
          <p>Selected Videos From Previous Seminars</p>
        </div>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img
              src="http://www.themestarz.net/html/lifecoach/assets/img/img-woman-standing.jpg"
              alt=""
            />
            <div className="circle">
            <i className="fa-solid fa-play"></i>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="http://www.themestarz.net/html/lifecoach/assets/img/img-male-mentoring.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="http://www.themestarz.net/html/lifecoach/assets/img/img-couple-yacht.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default FreeVideos;
