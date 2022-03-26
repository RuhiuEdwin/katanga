import React from 'react'
import refinery from "../images/refinery.jpg"
import bullions from "../images/bullions.jpg"
import minting from "../images/minting.png"
import smelt from "../images/smelt.jpg"
import assaying from "../images/assaying.jpg"
import separation from "../images/separation.jpg"

const Services = () => {
  return (
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
                   <p className='card-details '>
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
                   <p className='card-details '>
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
                   <p className='card-details '>
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
                   <p className='card-details '>
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
                   <p className='card-details'>
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
                   <p className='card-details'>
                        We facilitate sales of rare minerals that have undergone thorough inspection, validation and refinery to our large clientele.
                   </p>
               </div>
           </div>
       </div>
    </div>
  )
}

export default Services