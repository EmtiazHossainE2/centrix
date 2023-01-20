import React from 'react'
import './Discover.css'
import video from '../../../assets/video/animatedVideo.mp4'

const Discover = () => {
  return (
    <div className='discover '>
      <div className="container mx-auto text-white">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="flex flex-col items-center justify-center section__padding text-center">
          <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold pb-2 pt-10 lg:pt-5 2xl:pt-20'>Artificial Intelligence is the </h2>
          <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold pb-5'>new  big thing in technology</h2>
          <p className='text-[15px] md:text-[13px] lg:text-[17px] py-2 p'>Aapiente psam aspernatur consectetur facere quis consequatur reprehenderit facilis doloremque</p>
          <p className='text-[15px] md:text-[13px] lg:text-[17px]'>Culpa ut sint nesciunt ipsa officiis eaque. Eos reprehenderit iure, tenetur quasi reiciendis obca .</p>
          <div className="centrixBtn pt-8">
            <button type="button" id='discover'>Discover More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover