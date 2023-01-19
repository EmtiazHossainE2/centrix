import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import logo1 from '../../../assets/trust_icon-1.png'
import logo2 from '../../../assets/trust_icon-2.png'
import logo3 from '../../../assets/trust_icon-4.png'
import logo5 from '../../../assets/trust_icon-5.png'
import logo6 from '../../../assets/trust_icon-6.png'

import './Brand.css'

const brandLogo = [
  { img: logo1 },
  { img: logo2 },
  { img: logo3 },
  { img: logo5 },
  { img: logo6 },
  { img: logo1 },
  { img: logo2 },
  { img: logo3 },
]

const Brand = () => {
  return (
    <section className="container mx-auto  section__padding ">
      <div className="lg:px-20">
        <Swiper
          loop={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {brandLogo.map((logo, index) => (
            <SwiperSlide
              key={index}
            >
              <img src={logo.img} alt="brand"  />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Brand