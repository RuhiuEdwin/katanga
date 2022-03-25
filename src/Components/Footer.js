import React from 'react'
import logo from "../images/katanga.png"
import { AiOutlineInstagram } from 'react-icons/ai'
import { MdOutlineFacebook } from 'react-icons/md'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='footer-wrapper'>
                <img className='footer-logo' src={logo} alt=""/>
                
                <div className='social-media'>
                    <AiOutlineInstagram className='social-icon'/>
                    <MdOutlineFacebook className='social-icon'/>
                    <AiFillTwitterCircle className='social-icon'/>
                </div>
            </div>
            <p className='copyright'>
                2022 KATANGA GOLDFIELDS.
            </p>
        </div>
    </div>
  )
}

export default Footer