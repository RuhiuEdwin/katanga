import React from 'react'

const About = () => {
  return (
    <div className='about hero'>
       <h1 className='text-white font-black title'>WHO WE ARE</h1>
       <p className='about-info'>
            We are a rare minerals product and associated service provider fully affiliated with DMCC and committed to quality and exceptional service. 
            Driven by commitment to excellence and client satisfaction, we have grown to a local powerhouse in the rare minerals industry with a wide range of clients from all corners of the world
        </p>
        <div className='about-wrapper'>
                <div className='about-card'>
                    <h4>Mission</h4>
                    <p>To be the global standard in quality and exeptional service in the rare minerals industry </p>
                </div>
                <div className='about-card'>
                    <h4>Vision</h4>
                    <p>Push limits in quality assuarance and service provision</p>
                </div>
            </div>
    </div>
  )
}

export default About