import React from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header'
import '../shared/App.css'
import styled from 'styled-components'
import Comment from '../components/Comment'

const DetailOne = () => {
  return (
    <>
    <Header/>
    <Categories/>
    <Detail>
        <div className='First_header'> 
            <div className='Second_header'>
            <div>프로필</div>
            <div>게시글 작성자</div>
            <div>메시지 아이콘</div>
            </div>

            <div>
                <div>모집상태 : 모집중</div>
            </div>

            <div>
                <button>수정</button>
                <button>삭제</button>
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

        <div className='Detail_content'> 내용 : </div>


    </Detail>
    <Comment/>
    </>
  )
}



// 모집게시판 상세 페이지 스타일 코드

const Detail = styled.div`
.First_header{
    display:flex;
    justify-content:space-around;
    width: 100%;
    border: 1px solid black;
}

.Second_header{
    display:flex;
}

.Detail_title{
    border: 1px solid black;
    text-align: center;
}

.third_header{
    display: flex;
    border: 1px solid black;
}

.Detail_img{
    width:50%;
    height:50vh;
    border:1px solid black;
}

.Detail_information{
    width:50%;
    height:50vh;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
}

.Detail_information > div > span {
    width: 300px;
    border-bottom : 1px solid black;
}

.Detail_content{
    border:1px solid black;
    width:100%;
    height:20vh;
}
`












export default DetailOne