import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='container mx-auto md:pb-20'>
      <div className='section__padding flex flex-col lg:flex-row justify-between items-center space-x-5' id='home'>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="basis-1/2 "
        >
          <h1 className='text-4xl md:text-5xl font-bold gradient__text pb-5 md:py-5'>Artificial Intelligence for Business Applications</h1>
          <p className='text-[#81afdd] py-2'>Amet consectetur adipisicing elit. Accusantium, maiores reprehenderit saepe libero veritatis assumenda qui suscipit animi ab. Labore sint dicta corporis placeat nisi beatae repellat ducimus. Quidem sit consequuntur, consequatur non .</p>
          <div className="centrixBtn pt-5 pb-10">
            <button type="button" id='discover'>Discover More</button>
          </div>
        </div>
        <div className="basis-1/2 "></div>
      </div>
    </div>
  )
}

export default Banner