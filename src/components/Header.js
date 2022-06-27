import React from 'react'
import '../App.css'
import { FcComments } from "react-icons/fc"; 
import styled from 'styled-components';

const Header = () =>{
  return(
    <HeaderNav>
      <HeaderLogo>
        <Logo href="##" > LOGO</Logo> 
      </HeaderLogo>

      <HeaderRight>
        <Profile></Profile>
        <Li>닉네임</Li>
        <HeaderIcon><FcComments></FcComments></HeaderIcon>
      </HeaderRight>
    </HeaderNav>
  )
}


// Header 컴포넌의 스타일 코드 
const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e8eaf6;

  @media screen and (max-width:768px){
    padding:10px;
    background-color: #e8eaf6;
  }
`

const HeaderLogo = styled.div`
  margin-left: 20px;

  @media screen and (max-width:768px){
    margin:0px;
  }
`

const Logo = styled.a`
  text-decoration: none;
  color: black;
  padding: 8px 12px;
  font-size: 30px;
`

const HeaderRight = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 30px;
  
  @media screen and (max-width:768px){
    margin:0px;
  }
`

const Profile = styled.li`
  border: 1px solid black;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 8px 12px;
  font-size: 25px;
  display: flex;
  align-items: center;

  @media screen and (max-width:768px){
    border: 1px solid black;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`

const Li = styled.li`
  padding: 8px 12px;
  font-size: 25px;
  display: flex;
  align-items: center;
`

const HeaderIcon = styled.div`
  font-size: 40px;
  display: flex;
  align-items: center;
`




export default Header;