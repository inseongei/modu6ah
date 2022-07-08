import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'



const ReviewDetail = () => {
  return (
    <>
    <Header/>
    <Review>

    <div className='reviewC'>
    <div className='images'><div className='title'>대표이미지</div></div>
    <div className='imageBox'>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
    </div>


    <div className='mainBox'>
        <div className='one'>
            <div className='position'>
            <span> 제목</span>
            <input type="text"/>
            </div>

            <div className='position'>
            <span> 위치</span>
            <input type="text"/>
            </div>

            <div className='position'>
            <span> 별점</span>
            <span> ⭐⭐⭐⭐⭐</span>
            <span>4.0점</span>
            </div>

        </div>



        <div className='two'>
            <div className='contentBox'> 
            <span className='content'>내용</span>
            <div>
            <span className='btnList'>
                <button className='ParkBtn'> 주차가능</button>
                <button className='KidBtn'> 예스키즈존</button>
            </span>
            </div>

            </div>
        </div>
    </div>



    <div className='btnBox'>
        <button>취소</button>
        <button>등록하기</button>
    </div>


    </div>

    
    </Review>

    </>
  )
  
}

const Review = styled.div`
.reviewC{
    width:100%;
    height: 93vh;
}

.title{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    padding:10px;
    margin-left:160px;
}

.images{
    width:90%;
    height: 5%;
    margin:auto; 
}

.imageBox{
    width:90%;
    margin:auto;
    height: 30%;
    display:flex;
    justify-content:center;
    align-items:center;
}

.mainBox{
    width:90%;
    height: 59%;
    margin:auto;
    display:flex;
}

.btnBox{
    width:90%;
    margin:auto;
    height: 5%;
    display:flex;
    justify-content: flex-end;
}

.one{
    width:40%;
}

.two{
    width:60%;
    display:flex;
    justify-content: center;
    align-items:center;
}

.img{
    width:300px;
    height:250px;
    border: 1px solid #E4E4E4;
    border-radius: 10px;
    margin-left: 25px;
}

.one > div >span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
}

.one > div > input {
    border: 1px solid #E4E4E4;
    border-radius: 10px;
    width:50%;
    height: 50px;
}

.position{
    margin:50px 0px 30px 30px;
}

.position >span{
    margin-right: 30px;
}

.contentBox{
    width:75%;
    height: 90%;
    border: 1px solid #E4E4E4;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
}

.contentBox > span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
}

.content{
    padding:20px;
}

.btnList{
    display:flex;
    justify-content:space-around;
    margin-bottom:10px;
}

.ParkBtn{
  width:20%;
  height: 50%;
  border-radius:15px;
  font-size: 17px;
  color:#263238;
  border: none;
  background-color:#ffa000;

}

.KidBtn{
  width:20%;
  height: 50%;
  border-radius:15px;
  font-size: 17px;
  color:#263238;
  border: none;
  background-color:#c5e1a5; 
}

.btnBox > button{
background: #3C3C3C;
border-radius: 30px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
color:white;
width:10%;
height: 45px;
margin-right: 80px;
}















`



export default ReviewDetail