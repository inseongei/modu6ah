import React from 'react'
import '../App.css'
import { FcComments } from "react-icons/fc"; 

const Header = () =>{
  return(
    <div className='Header_container'>

    <div className='Header_LOGO'>LOGO</div>

    <div className='Header_Right_container'>
      <div className='Header_profile'></div>
      nickname <FcComments className='Header_icon'></FcComments>
    </div>

    </div>
  )
}

export default Header;