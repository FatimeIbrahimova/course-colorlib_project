import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import "./Home.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <div className='hero-sec'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='img'>
            </div>
            <div className='img-desc'>
            <h1>Get Your <span>Education</span>Today</h1>
            </div>
           
        </SwiperSlide>
        <SwiperSlide>
        <div className='img'>
            </div>
            <div className='img-desc'>
            <h1>Get Your <span>Education</span>Today</h1>
            </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
  )
}

export default Slider
