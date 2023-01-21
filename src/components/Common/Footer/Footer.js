import React from 'react'
import './Footer.css'
import FooterBottom from './FooterBottom/FooterBottom'
import FooterTop from './FooterTop/FooterTop'

const Footer = () => {
  return (
    <footer className='text-white'>
      <FooterTop />
      <FooterBottom />
    </footer>
  )
}

export default Footer