import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='container mx-auto px-24 py-6'>
      <div className='flex flex-col gap-5 items-center lg:flex-row justify-between'>
        <div className="flex justify-center items-center gap-5">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4  "
          >
            <span className="text-2xl text-[#02e0b8] hover:text-[#023b74]">
              <BsLinkedin />
            </span>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4   "
          >
            <span className="text-2xl text-[#02e0b8] hover:text-red-700">
              <BsInstagram />
            </span>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4"
          >
            <span className="text-2xl text-[#02e0b8] hover:text-[#023b74]">
              <BsFacebook />
            </span>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4"
          >
            <span className="text-2xl text-[#02e0b8] hover:text-[#023b74]">
              <BsTwitter />
            </span>
          </a>
        </div>
        <div >
          <p className='text-center text-[14px]'>Copyright © {currentYear} <br className='lg:hidden' /> Centrix - <a className='text-[#02e0b8]' href="https://themeforest.net/item/centrix-artificial-intelligence-technology-services-elementor-template-kit/35232880?_ga=2.209195986.1796671126.1674206463-470280518.1674061811" target="_blank" rel="noopener noreferrer">Themeforest </a> <br className='lg:hidden' /> All rights reserved. Developer <a className='text-[#02e0b8]' href="https://www.linkedin.com/in/emtiazhossaine2/" target="_blank" rel="noopener noreferrer">Emtiaz</a>
          </p>
        </div>
      </div>

    </div>
  )
}

export default FooterBottom