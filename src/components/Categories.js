import React from 'react'
import styled from 'styled-components';
import { FcMenu } from "react-icons/fc";


const Categories = () => {
  return (
    <Header>
      <Category href="/">카테고리<HeaderIcon href="##"><FcMenu></FcMenu></HeaderIcon> </Category>
      <HeaderA href="/">모집게시글</HeaderA>
      <HeaderA href="/"> 장소추천</HeaderA>
      <HeaderA href="/">육아 물품 리뷰</HeaderA>
    </Header>
  )
}






// 카테고리 스타일 컴포넌트 코드
const Header = styled.div`
  width:100%;
  height:45px;
  display:flex;
  justify-content:center;
  align-items:center;

  @media screen and (max-width:768px){
    flex-direction:column;
    text-align:center;
    margin:83px 0px 0px 0px;
  }
`

const Category = styled.a`
  margin-right: 30px;
  text-decoration:none;
  width:100%;
  color:black;

  @media screen and (max-width:768px){
    flex-direction:column;
    padding:10px;
    margin:0px;
  }
`

const HeaderA = styled.a`
  padding:10px;
  text-decoration:none;
  color: black;
  width:100%;

  &:hover{
    background-color: #d49466;
    border-radius:4px;
  }

  @media screen and (max-width:768px){
    display:flex;
    flex-direction:column;
  }
`

const HeaderIcon = styled.div`
  font-size:35px;
  width:100%;
  display:none;

  @media screen and (max-width:768px){
    display:block;
    text-align: right;
  }
`


export default Categories