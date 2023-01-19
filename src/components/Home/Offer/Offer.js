import React from 'react'
import './Offer.css'
import { offerData } from './offerData'
import SingleOffer from './SingleOffer'

const Offer = () => {
  return (
    <div className='container mx-auto section__padding ' id='offer'>
      <div className='offer__container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 p-5 shadow-md '>
          {/********************** * Offer Left ********************* */}
          <div className="lg:col-span-5">
            <p className='text-[#02e0b8] capitalize mt-5'>What we offer</p>
            <h2 className='gradient__text text-2xl lg:text-5xl font-bold pt-5'>Artificial intelligence will help everyone succeed.</h2>
            <div className='mt-5 mb-5 lg:mb-0 w-[50px] h-[3px] bg-[#02e0b8]' />
          </div>

          {/********************** * Offer Right ********************* */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            {offerData.map((data, index) => (
              <SingleOffer key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer