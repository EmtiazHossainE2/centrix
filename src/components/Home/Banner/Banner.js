import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='container mx-auto'>
      <div className='banner section__padding' id='home'>
        <div className="banner__content ">
          <h1 className='gradient__text'>Artificial Intelligence for Business Applications</h1>
          <p className='py-3'>Amet consectetur adipisicing elit. Accusantium, maiores reprehenderit saepe libero veritatis assumenda qui suscipit animi ab. Labore sint dicta corporis placeat nisi beatae repellat ducimus. Quidem sit consequuntur, consequatur non .</p>
          <div className="centrixBtn pt-5 pb-10">
            <button type="button" id='discover'>Discover More</button>
          </div>
        </div>
        <div className="banner__right "></div>
      </div>
    </div>
  )
}

export default Banner