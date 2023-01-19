import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='container mx-auto section__padding' id='about'>
      <div className='about flex flex-col lg:flex-row justify-between items-center space-x-5'>
        {/********************** * About Left ********************* */}
        <div className="about__left text-white">
          <h5 className='text-[#02e0b8] capitalize mt-5'>about us</h5>
          <h2 className='text-3xl lg:text-5xl font-bold gradient__text py-5'>Artificial intelligence is not a matter of science fiction.</h2>
          <p className='text-[#81afdd] py-2'>Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <div className="centrixBtn pt-5 pb-10">
            <button type="button" id='discover'>Discover More</button>
          </div>
        </div>

        {/********************** * About Right ********************* */}
        <div className="about__right">
          <iframe width="560" height="315"  src="https://www.youtube.com/embed/XHOmBV4js_E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default About