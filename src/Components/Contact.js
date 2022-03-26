import React from 'react'

const Contact = () => {
  return (
    <div>
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

export default Contact