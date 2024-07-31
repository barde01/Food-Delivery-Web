import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt=""></img>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo ad maxime 
                    recusandae blanditiis impedit similique laudantium velit pariatur! Itaque vitae quos nostrum impedit 
                    cupiditate recusandae. Qui iure distinctio illum?</p>
                    <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt=""></img>
                    <img src={assets.twitter_icon} alt=""></img>
                    <img src={assets.linkedin_icon} alt=""></img>
                    </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-7909405623</li>
                    <li>rajeshbarde79094@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024  Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
