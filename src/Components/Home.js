import React from 'react'
import '../sass/home.css'
import { NavLink } from 'react-router-dom'
import refinery from "../images/refinery.jpg"
import bullions from "../images/bullions.jpg"
import minting from "../images/minting.png"
import smelt from "../images/smelt.jpg"
import assaying from "../images/assaying.jpg"
import separation from "../images/separation.jpg"
import {MapContainer} from './Map'


const Home = () => {
    // Use object destructing, so you don't need to remember the exact order

  return (
    <div>
        <div className='h-screen text-center main hero'>
            <h1 className='font-black text-white'> KATANGA GOLDFIELDS</h1>
            <p className='text-white'>QUALITY ASSURED</p>   
            <div className='button'>
                <NavLink exact to='/services' className='one'>
                    OUR SERVICES
                </NavLink>
                <NavLink exact to='/contact' className='two'>
                    CONTACT US
                </NavLink>
            </div>
        </div>
        <div className= "about hero">
           <h1 className='text-white font-black title'>WHO WE ARE</h1>
           <p className='about-info'>
            We are a rare minerals product and associated service provider fully affiliated with DMCC and committed to quality and exceptional service. 
            Driven by commitment to excellence and client satisfaction, we have grown to a local powerhouse in the rare minerals industry with a wide range of clients from all corners of the world
           </p>
           <NavLink exact to='/about' className='aboutbtn'>
               MORE ABOUT US
           </NavLink>
        </div>
        <div className='services hero'>
            <div className='header text-center'>
                <h1 className='font-black title'>WHAT WE DO</h1>
                <p className='text-center service-info'>
                Since its establishment, KATANGA GOLDFIELDS has curved its name in the gold and silver refinery industry through its unparalleled commitment to quality service and customer satisfaction.
                </p>
           </div>
           <div className='services-wrapper'>
               <div className='service-card'>
                   <div className='card-img'>
                        <img className='service-img' src={ refinery } alt=""/>
                   </div>
                   <div className='card-main'>
                       <h4 className='card-title'>
                            GOLD & SILVER REFINERY
                       </h4>
                       <p className='card-details text-white'>
                            We offer high quality refinery services that ensure that the best product is put out to the market
                       </p>
                   </div>
               </div>
               <div className='service-card'>
                   <div className='card-img'>
                        <img className='service-img' src={ smelt } alt=""/>
                   </div>
                   <div className='card-main'>
                       <h4 className='card-title'>
                            SMELTING
                       </h4>
                       <p className='card-details text-white'>
                            We use environmentally friendly practices to convert large lots of gold and silver into smaller quantities as per the clients request.
                       </p>
                   </div>
               </div>
               <div className='service-card'>
                   <div className='card-img'>
                        <img className='service-img' src={ minting } alt=""/>
                   </div>
                   <div className='card-main'>
                       <h4 className='card-title'>
                            MINTING
                       </h4>
                       <p className='card-details text-white'>
                            We offer modern minting services producing customized medallions, coins, medals and bullions for a wide range of clients.
                       </p>
                   </div>
               </div>
               <div className='service-card'>
                   <div className='card-img'>
                        <img className='service-img' src={ assaying } alt=""/>
                   </div>
                   <div className='card-main'>
                       <h4 className='card-title'>
                            ASSAYING SERVICES
                       </h4>
                       <p className='card-details text-white'>
                            We are among a very small group of companies that offer assaying services, specializing in Cupellation Method, to determine the concentration of Gold.
                       </p>
                   </div>
               </div>
               <div className='service-card'>
                   <div className='card-img'>
                        <img className='service-img' src={ separation } alt=""/>
                   </div>
                   <div className='card-main'>
                       <h4 className='card-title'>
                            MINERAL SEPARATION SERVICES
                       </h4>
                       <p className='card-details text-white'>
                            We offer unparalleled rare minerals separation and recovery services with utmost transparency and precision.
                       </p>
                   </div>
               </div>
               <div className='service-card'>
                   <div className='card-img'>
                        <img className='service-img' src={ bullions } alt=""/>
                   </div>
                   <div className='card-main'>
                       <h4 className='card-title'>
                            RARE MINERAL SALES
                       </h4>
                       <p className='card-details text-white'>
                            We facilitate sales of rare minerals that have undergone thorough inspection, validation and refinery to our large clientele.
                       </p>
                   </div>
               </div>
           </div>
           <NavLink exact to='/services' className='link'>
               ALL SERVICES
           </NavLink>
        </div>
        <div className='contact hero'>
            <div className='contact-main text-center'>
                <h1 className='font-black title'>TALK TO US</h1>
                <p className='text-center'>
                    We would love to hear from you. <br/>Kindly fill in the form below and we will get back to you immediately.
                </p>
            </div> 
            <form>
                <label>
                    <h4>EMAIL ADDRESS</h4>
                    <input type='email' required/>
                </label>
                <label>
                    <h4>YOUR NAMES</h4>
                    <input type='text' required/>
                </label>
                <label>
                    <h4>MESSAGE</h4>
                    <input type='text' required/>
                </label>
                <input type='submit' className='submit' value='SEND'/>
            </form> 

           {/* <NavLink to='/contact'>
               Our Services
           </NavLink> */}
        </div>
            <div className='contact-info text-center'>
                <div className='contact-wrapper'>
                    <div className='phone'>
                        <h4>PHONE NUMBER</h4>
                        <p>+243978530749</p>
                    </div>
                    <div className='phone'>
                        <h4>EMAIL ADDRESS</h4>
                        <p>info@katangagoldfields.com</p>
                    </div>
                </div>
            </div>
            <div className='map'>
        <MapContainer/>
            </div>
    </div>
  )
}

export default Home;