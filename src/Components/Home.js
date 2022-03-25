import React from 'react'
import '../sass/home.css'
import refinery from "../images/refinery.jpg"
import bullions from "../images/bullions.jpg"
import minting from "../images/minting.png"
import smelt from "../images/smelt.jpg"
import assaying from "../images/assaying.jpg"
import separation from "../images/separation.jpg"


const Home = () => {
  return (
    <div>
        <div className='h-screen text-center main hero'>
            <h1 className='font-black text-white'> KATANGA GOLDFIELDS</h1>
            <p className='text-white'>QUALITY ASSURED</p>
            <div className='button'>
                <button className='one'>
                    OUR SERVICES
                </button>
                <button className='two'>
                    CONTACT US
                </button>
            </div>
        </div>
        <div className='about hero'>
           <h1 className='text-white font-black title'>WHO WE ARE</h1>
           <p className=''>

           </p>
           <button className='aboutbtn'>
               MORE ABOUT US
           </button>
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
           <button className='link'>
               ALL SERVICES
           </button>
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
            <iframe className='mapiframe'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.436604552237!2d26.735981514802837!3d-11.0058323921661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1971398c74a5758b%3A0x12a352410f5d8969!2sKatanga!5e0!3m2!1sen!2ske!4v1648215418390!5m2!1sen!2ske">

                </iframe>
            </div>
        </div>
  )
}

export default Home