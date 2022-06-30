import React from 'react'
import Header from '../components/Header'
import '../shared/App.css'
import styled from 'styled-components'
import Comment from '../components/Comment'
import { FcComments } from "react-icons/fc"; 
import Footer from '../components/Footer'

const DetailOne = () => {

  return (
    <>
    <Header/>
    <Detail>
        <div className='First_header'> 
            <div className='Second_header'>
            <div className='Detail_profile'></div>
            <div>게시글 작성자</div>
            <div><FcComments className='Detail_icon'></FcComments></div>
            </div>

            <div>
                <div>모집상태 : 모집중 </div>
            </div>

            <div>
                <button className='Detail_insert'>수정</button>
                <button className='Detail_delete'>삭제</button>
            </div>

        </div>

        <div className='Detail_title'>
            <h1> 타이틀</h1>
        </div>

        <div className='third_header'>
            <div className='Detail_img'>사진</div>

            <div className='Detail_information'>

            <div>날짜 : <span>2022-06-28</span></div>
            <div>시간 : <span>07~19시</span></div>
            <div>장소 : <span>서울 / 서초구</span></div>

            </div>
        </div>

        <div className='Detail_content'>
            <span> 내용:</span>
            <span className='commentBox'></span>
             
        </div>


    </Detail>
    <Comment/>
    <Footer/>
    </>
  )
}



// 모집게시판 상세 페이지 스타일 코드

const Detail = styled.div`
.First_header{
    display:flex;
    justify-content:space-around;
    width: 100%;
    align-items:center;
    height: 50px;
    border: 1px solid black;
}

.Second_header{
    display:flex;
    align-items: center;
}

.Detail_title{
    border: 1px solid black;
    text-align: center;
}

.Detail_icon{
    font-size:40px;
}

.Detail_insert{
    margin-right: 20px;
    background-color:#5c6bc0;
    border: 2px solid #5c6bc0;
    width:80px;
    border-radius:20px;
    font-weight: 700;
    font-size:20px;
    height:40px;
}

.Detail_delete{
    margin-right: 20px;
    border-radius:20px;
    background-color:#f48fb1;
    border: 2px solid #f48fb1;
    width:80px;
    font-weight: 700;
    font-size:20px;
    height:40px;
}

.third_header{
    display: flex;
    border: 1px solid black;
    height:70vh;
}

.Detail_img{
    width:40%;
    height:60vh;
    border:1px solid black;
    border-radius:20px;
    margin:30px 0px 0px 50px;
}

.commentBox{
    width:80%;
    border:1px solid black;
    border-radius:20px;
    height:20%;
    margin-left:30px;
}

.Detail_profile{
    width:50px;
    height:50px;
    border:1px solid black;
    border-radius: 50%;
}

.Detail_information{
    width:50%;
    height:50vh;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin:30px 0px 0px 50px;
}

.Detail_information > div > span {
    width: 300px;
    border-bottom : 1px solid black;
}

.Detail_content{
    border:1px solid black;
    width:100%;
    height:20vh;
    display:flex;
    align-items: center;
    justify-content: center;
}
`

export default DetailOne;
