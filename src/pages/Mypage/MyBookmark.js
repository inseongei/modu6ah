import React from 'react'
import Header from '../../components/main/Header'
import styled from 'styled-components'

const MyBookmark = () => {
  return (
    <>
    <Header/>
    <Bookmark>
        <div className='title'>
            <div className='mypage'>마이페이지</div>
            <div className='booktitle'>북마크</div>
        </div>

        <div className='MainBox'>

        <div className='titleOne'>
            <div className='subtitle'>체험 모집</div>
            <div className='subContent'>다양한 공동육아 프로그램을 둘러보고, 참여를 신청해요!</div>
        </div>















        </div>

    </Bookmark>
    </>
  )
}

const Bookmark = styled.div`
width:100%;
background-color: #F5F5F5;

.title{
    width:80%;
    margin: auto;
}

.mypage{
    color: #A8A8A8;
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    padding-top:20px;
    margin-bottom:10px;
}

.booktitle{
    color: #000000;
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
}

.MainBox{
    border: 1px solid #E4E4E4;
    width:80%;
    height: 100vh;
    margin: 30px auto;
    border-radius: 10px;
    background: #FFFFFF;
}

.subtitle{
    color: #000000;
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 12px;
}

.subContent{
    color: #6B4E16;
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
}

.titleOne{
    margin: 64px 0px 35px 85px
}





























































`

export default MyBookmark