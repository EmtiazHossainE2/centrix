import React from 'react'
import {GoQuote} from 'react-icons/go'

const Review = ({ review }) => {
  return (
    <div className='text-white bg-[#121228] p-5 shadow-2xl rounded-xl flex flex-col items-center text-center justify-center relative'>
      <div className='icon absolute top-0 right-0 bg-[#02e0b8] p-4 rounded-bl-[80%]'>
        <GoQuote size={25}/>
      </div>
      <div>
        <img src={review.man} width="70" className='rounded-full' alt="" />
      </div>
      <h4 className='py-2 text-lg font-semibold font-sans'>{review.name}</h4>
      <p className='text-[#02e0b8]'>{review.job}</p>
      <p className='py-3'>⭐⭐⭐⭐⭐</p>
      <p>{review.des}</p>
    </div>
  )
}

export default Review