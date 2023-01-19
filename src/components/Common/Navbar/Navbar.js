import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';
import logo from '../../../assets/logo.png'
import './Navbar.css'

//************************************  Common Menu 
const Menu = () => {
  return (
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#about">About Us</a></p>
      <p><a href="#offer">Offer</a></p>
      <p><a href="#choose">Why Choose Us</a></p>
      <p><a href="#testimonial">Testimonial</a></p>
      <p><a href="#faq">Faq</a></p>
    </>
  )
}

//*********************** Navbar 
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='navbar  container mx-auto'>

      {/********************** * For Desktop  ********************* */}
      <div className="navbar__links">
        <div className="navbar__links-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="navbar__links-container">
        <Menu />
      </div>
      <div className="centrixBtn navbar__sign">
        <button type="button">Get Started</button>
      </div>

      {/********************** * For Mobile ********************* */}
      <div className="navbar__menu">
        {toggleMenu
          ? <RiCloseLine style={{ color: "white" }} size={27} onClick={() => setToggleMenu(false)} />
          : <AiOutlineMenu style={{ color: "white" }} size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="navbar__menu-container scale-up-center">
            <div className="navbar__menu-container_links">
              <Menu />
            </div>
            <div className="navbar__menu-container_links-sign centrixBtn">
              <button type="button">Get Started</button>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Navbar