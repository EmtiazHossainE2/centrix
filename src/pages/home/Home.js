import React from 'react'
import Footer from '../../components/Common/Footer/Footer'
import Navbar from '../../components/Common/Navbar/Navbar'
import { About, Banner, Brand, Branding, ChooseUs, Cta, Discover, Faq, Offer, Testimonial } from '../../components/Home'

const Home = () => {
  return (
    <main className='Home'>
      <div className='gradient__bg'>
        <Navbar />
        <Banner />
      </div>
      <Brand />
      <Branding />
      <About />
      <Offer />
      <ChooseUs />
      <Discover />
      <Testimonial />
      <Faq />
      <Cta />
      <Footer />
    </main>
  )
}

export default Home