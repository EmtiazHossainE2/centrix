import React from 'react'
import { reviewData } from './reviewData'
import './Testimonial.css'
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Review from './Review';

const Testimonial = () => {
  return (
    <div className='container mx-auto section__padding py-16'>
      <div className='text-center'>
        <p className='text-[#02e0b8] 2xl:pt-20'>Testimonial</p>
        <h2 className='text-4xl md:text-5xl font-bold gradient__text pb-8 lg:pb-12 md:pt-5'>What they say</h2>
      </div>

      <div className="">
        <Swiper
          loop={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {reviewData.map((review, index) => (
            <SwiperSlide
              key={index}
            >
              <Review review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


    </div>
  )
}

export default Testimonial