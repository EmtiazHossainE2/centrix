import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/logo.png'
import { BsFillSquareFill } from 'react-icons/bs'
import './FooterTop.css'


const FooterTop = () => {
  return (
    <div className='footer__top pt-20'>
      <div className="container mx-auto section__padding ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          {/************************************  Logo *************************************/}
          <div>
            <img src={logo} alt="logo" />
            <p className='mt-4'>Eorem um dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>

          {/************************************  Service *************************************/}
          <div>
            <h4 className='text-2xl font-bold mb-5'>Service</h4>
            <div className='flex flex-col gap-y-2 footer__top-link'>
              <Link to="/" ><BsFillSquareFill />Data Engineering</Link>
              <Link to="/"><BsFillSquareFill />Data & Analytics</Link>
              <Link to="/"><BsFillSquareFill />Natural Language Processing(NLP)</Link>
              <Link to="/"><BsFillSquareFill />Object Tracking</Link>
              <Link to="/"><BsFillSquareFill />Prediction System</Link>
              <Link to="/"><BsFillSquareFill />Automations</Link>
            </div>
          </div>

          {/************************************  Company *************************************/}
          <div>
            <h4 className='text-2xl font-bold mb-5'>Company</h4>
            <div className='flex flex-col gap-y-2 footer__top-link'>
              <a href="#about"><BsFillSquareFill />About us</a>
              <Link to="/"><BsFillSquareFill />Leadership</Link>
              <Link to="/"><BsFillSquareFill />Career</Link>
              <Link to="/"><BsFillSquareFill />Article & News </Link>
              <Link to="/"><BsFillSquareFill />Partnership</Link>
              <Link to="/"><BsFillSquareFill />Legal Notice</Link>
            </div>
          </div>

          {/************************************  Newsletter *************************************/}
          <div>
            <h4 className='text-2xl font-bold '>Newsletter</h4>
            <p className='py-5'>Signup our newsletter to get update information, news or insight.</p>
            <input
              className='bg-transparent text-white rounded-xl shadow-2xl '
              type="email"
              placeholder='Enter your email'
              required
            />
            <div className="centrixBtn pt-5 pb-10">
              <button type="button">Subscribe</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FooterTop