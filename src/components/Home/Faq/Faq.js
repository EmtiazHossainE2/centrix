import React, { useState } from 'react'
import Accordion from './Accordion'
import { faqData } from './faqData'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='container mx-auto section__padding ' id='faq'>
      <div className='text-center'>
        <p
          className='text-[#02e0b8] '
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          FAQ
        </p>
        <h2
          className='text-2xl md:text-5xl font-bold gradient__text pb-8 lg:pb-12 pt-5 '
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          Frequently Ask Questions
        </h2>
      </div>

      {/* accordion   */}
      <div className="text-white grid grid-cols-1 lg:grid-cols-1 gap-3 " data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine">
        {faqData.map((data, index) => (
          <Accordion
            key={index}
            question={data.question}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <p className='text-start'>{data.answer}</p>
          </Accordion>
        ))}
      </div>


    </div>
  )
}

export default Faq