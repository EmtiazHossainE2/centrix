import React from 'react'
import { chooseData } from './chooseData'
import chooseBg from '../../../assets/choose/choose.png'
import './ChooseUs.css'

const ChooseUs = () => {
  return (
    <div className='choose__us-gradient' id='choose'>
      <div className="container mx-auto section__padding">
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          {/********************** * Choose Left ********************* */}
          <div className='basis-1/2'>
            <p
              className='text-[#02e0b8] capitalize mt-5'
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >Why Choose Us</p>
            <h2
              className='gradient__text text-2xl lg:text-5xl font-bold py-5'
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >With great power comes great productivity.</h2>
            <div>
              {chooseData.map((data, index) => (
                <div
                  key={index}
                  className='text-white py-5 '
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-sine"
                >
                  {/********************** * Single Data ********************* */}
                  <div className='flex  items-start gap-x-3'>
                    <div>
                      <img src={data.icon} alt="" />
                    </div>
                    <div className='mt-2'>
                      <h3 className='text-xl font-bold'>{data.title}</h3>
                      <p>{data.des}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/********************** * Choose Right ********************* */}
          <div
            className='basis-1/2'
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <img src={chooseBg} alt="chooseBg" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ChooseUs