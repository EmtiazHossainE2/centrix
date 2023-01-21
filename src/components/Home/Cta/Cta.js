import React from 'react'
import './Cta.css'

const Cta = () => {
  return (
    <div className='container mx-auto section__padding relative mb-[-100px] md:mb-[-130px] z-0'>
      <div className='Cta__gradient-bg text-white py-12 px-5 flex flex-col lg:flex-row justify-between items-center'>
        <div className='basis-7/12'>
          <h3 className='text-2xl lg:text-3xl font-bold'>Exploring machine learning or have a specific use case? Let’s talk.</h3>
          <div className='w-12 h-1 bg-[#02e0b8] mt-5 mb-5 '/>
        </div>

        <div className='basis-5/12 lg:border-l border-[#02e0b8] lg:pl-6'>
          <p>Psum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <div className="py-5">
            <button type="button" className='bg-[#02e0b8] px-5 py-2 text-black rounded-xl'>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta