import React, { useState } from "react";
import styled from "styled-components";
import { GoThreeBars,GoX,GoPerson,GoBell} from "react-icons/go";
import logo from '../images/logo.png'
import profile from '../images/profile.png'

const Header = () => {
  // 모바일 처리시 메뉴 -> 버튼  처리 방식을  state :  true /  false로 관리
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const [chatBox , setchatBox] = useState(false)



  return (
    <>
    <Headers isToggled={isToggled} userToggled={userToggled}>
      {/* 햄버거 버튼(bar) */}
      <div
        className="toggle"
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
      {!isToggled ? <GoThreeBars className="icon"></GoThreeBars>  : <GoX className="icon"></GoX>}
      </div>

      <div className="logo_container">
        <div className="logo_img"><img src={logo} alt="로고"/></div> 
        <div className="logo">모두의 육아</div> 
      </div>

      {/* User 버튼 */}
      <div
        className="user"
        onClick={() => {
          setUserToggled(!userToggled);
        }}
      >
      {!userToggled ? <GoPerson className="icon"></GoPerson> : <GoX className="icon"></GoX>}
      </div>

      {/* 메뉴 리스트 */}
      <ul className="header__menulist">
        <li>같이해요</li>
        <li>추천해요</li>
        <li>육아템 리뷰</li>
      </ul>

      {/* User 메뉴 리스트 */}
      <ul className="header__right">
        <li className="bell"><GoBell onClick={() => {
          setchatBox(!chatBox);
        }}></GoBell></li>
        <li className="profile">
          <img src={profile} alt="프로필"/>
        </li>
        <li className="nick">nickname</li>
        <li className="MyPage">마이페이지</li>
        <li className="LogoOut">로그아웃</li>
      </ul>
    </Headers>

    <ChatBox chatBox= {chatBox}>
      <div className="box">
        <div className="ChatBox"> ㅎㅇ</div>
      </div>
    </ChatBox>
    </>




  )
}

// 헤더 스타일 코드 
const Headers = styled.div`
  max-width: 100%;
  height:75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #3C3C3C;

  .logo {
    margin: 16px 16px 16px 23px;
    font-size: 20px;
    font-weight: 700;
    color: #F4B03E;
  }
  .logo_container{
    display:flex;
    align-items:center;
    margin-left: 10px;
  }
  .logo_img{
    width:40px;
    height: 40px;
  }

  .logo_img > img {
    width:40px;
    height: 40px;
  }

  .header__menulist {
    list-style: none;
    display: flex;
    font-size:17px;
    color: #A58646;
  }

  .bell{
    font-size:35px;
  }

  .MyPage{
    display:none;
  }
  
  .header__menulist > li{
    cursor: pointer;
    font-weight:700;
    font-size:20px;
  }

  .header__menulist > li:hover{
    transform: scale(1.30);
    color:#6B4E16;
    
  }

  .header__left {
    display: flex;
  }

  .nick{
    font-size:20px;
    font-weight: 700;
    color: #3C3C3C;
  }

  .header__right {
    list-style: none;
    display: flex;
    margin-right:30px;
  }

  .header__right div {
    margin: 0 1rem;
  }

  .profile{
    width:50px;
    height: 50px;
    border-radius:50%;
  }

  .profile > img {
    width:35px;
    height: 35px;
  }


  .LogoOut{
    font-size:20px;
    font-weight:700;
    color:#3C3C3C;
    cursor: pointer;
  }

  li {
    padding: 0 1rem;
    display:flex;
    align-items:center;
    margin-left:10px;
  }

  .toggle {
    display: none;
    font-size: 30px;
    margin-top:10px;
    padding: 16px;
  }

  .user {
    display: none;
    font-size: 30px;
    margin-top:7px;
    padding: 16px;
  }

  .icon{
    font-size:35px;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;

    .header__right {
      display: ${(props) => (props.userToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      margin:0px;
      background-color: #F6BD41;
    }

    .header__menulist {
      display: ${(props) => (props.isToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      margin:0px;
      background-color: #F6BD41;
    }

    .header__menulist li,
    .header__right li {
      margin: 1rem 0;
      padding: 0;
    }

    .header__menulist li:hover{
      transform: scale(1.05);
      color:#6B4E16;
    }

    .MyPage{
      display:block;
    }

    .toggle {
      display: block;
    }

    .user {
      display: block;
    }

    .profile{
      display:none;
    }

    .nick{
      display:none;
    }

    .bell{
      display:none;
    }
  }
`

const ChatBox = styled.div`
  width:23%;
  height:40vh;
  position:absolute;
  left:68%;
  display: ${(props) => (props.chatBox ? "flex" : "none")};
  background-color:#F6BD41;

  .box{
    display:flex;

    flex-direction:column;
    background-color:#E4E4E4;
  }

  .ChatBox{
    display:flex;
    height: 100px;
    width:23vw;
    border:1px solid black;
  }
`


export default Header