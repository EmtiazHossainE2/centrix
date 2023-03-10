import React from 'react'

const SingleOffer = ({ data }) => {
  return (
    <div className='text-white py-6 2xl:py-10' data-aos="fade-right"
    data-aos-offset="300"
    data-aos-duration="1000"
    data-aos-easing="ease-in-sine">
      <div className='flex justify-center items-start gap-x-3'>
        <div>
          <img className='mt-1 w-[140px]' src={data.icon} alt="" />
        </div>
        <div>
          <h3 className='text-xl font-bold'>{data.title}</h3>
          <p>{data.des}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleOffer