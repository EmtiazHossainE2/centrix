import React from 'react'
import { brandData } from './brandData'
import { AiOutlineRight } from 'react-icons/ai'
import './Branding.css'


const Branding = () => {
  return (
    <div className='branding container mx-auto section__padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center'>
      {brandData.map((data, index) => (
        <div key={index}>
          <div className={`branding__content text-white  shadow-xl rounded-lg  md:text-center container mx-auto ${index === 1 ? "activeColor " : " bg-[#16337a] "} `}>
            <div className='md:flex justify-center'>
              <img src={data.icon} alt="icon" />
            </div>
            <h3 className='text-lg lg:text-2xl font-bold py-3'>{data.title}</h3>
            <p>{data.des}</p>
            <div className='md:flex justify-center'>
              <button className='px-6 py-1 mt-5 border rounded-[50px] text-white text-center flex gap-x-2 justify-center items-center'>See More <AiOutlineRight /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Branding