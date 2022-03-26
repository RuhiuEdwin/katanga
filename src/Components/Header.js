import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import nav from "../images/logo.png"
import {CgMenuRight} from 'react-icons/cg'
import {ImCross} from "react-icons/im";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(() => {

      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])
  return (
    <div> 
        <nav>
          <NavLink to='/'>
          <img className='nav-logo' src={nav} alt=""/>
          </NavLink>           
          <CgMenuRight className='bars nav-inactive' onClick={toggleNav}/>
      {(toggleMenu || screenWidth > 600) && (
            <div className='navlinks'>
              <li>
                <NavLink activeClassName='active' className='nav-link' exact to='/'>
                  <p className='nav-title'>Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' className='nav-link' exact to='/about'>
                  <p className='nav-title'>About Us</p>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' className='nav-link' exact to='/services'>
                  <p className='nav-title'>Our Services</p>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' className='nav-link' exact to='/contact'>
                  <p className='nav-title'>Contact Us</p>
                </NavLink>
              </li>
              <button onClick={toggleNav} className="sidebar-btn">
                <ImCross className='nav-active bars'/>
              </button>
            </div>
                )}     
        </nav>
    </div>
  )
}

export default Header