import React from 'react'
import '../App.css'
import { FcComments } from "react-icons/fc"; 

const Header = () =>{
  return(
    <nav className='Header'>
      <div className='Header_logo'>
        <a href="##" > LOGO</a> 
      </div>

      <ul className='Header_right'>
        <li className='Header_profile'></li>
        <li>닉네임</li>
        <div className='Header_icon'><FcComments></FcComments></div>
      </ul>
    </nav>
  )
}

export default Header;