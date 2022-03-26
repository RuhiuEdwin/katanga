import React from 'react'
import { NavLink } from 'react-router-dom'
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
                <div className='footer-info'>
                    <h4 className='sub-title'>OUR INFORMATION</h4>
                    <div className='info'>
                        KATANGA 
                    </div>
                    <div className='info'>
                        Mon - Fri 8am to 6pm
                    </div>
                    <div className='info'>
                        info@katangagoldfields.com
                    </div>
                    <div className='info'>
                    +243978530749
                    </div>
                </div>
                <div className='subscribe'>
                    <h4 className='sub-title'>
                        SUBSCRIBE TO OUR NEWSLETTER
                    </h4>
                    <input type='text' classname="sub" placeholder="email address"/>
                    <input tybe="submit" value='SUBSCRIBE' className='sub-btn'/>
                </div> 
            </div>
                
                <div className='social-media'>
                    <AiOutlineInstagram className='social-icon'/>
                    <MdOutlineFacebook className='social-icon'/>
                    <AiFillTwitterCircle className='social-icon'/>
                </div>
            <p className='copyright'>
                2022 KATANGA GOLDFIELDS.
            </p>
        </div>
    </div>
  )
}

export default Footer