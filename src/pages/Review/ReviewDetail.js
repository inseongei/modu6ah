import React,{useState} from 'react'
import styled from 'styled-components'
import { FaStar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

import Header from '../../components/main/Header'
import ReviewComment from '../../components/pages/ReviewComment'
import data from '../../shared/data';
import PhotoList from '../../components/pages/PhotoList';
import Content from '../../components/pages/Content';
import {useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { getCookie } from '../../shared/Cookie';
import Footer from '../../components/main/Footer';

const ReviewDetail = () => {
const nickname = localStorage.getItem("nickname");
const Profile = localStorage.getItem("profileUrl");
const {reviewPostId} = useParams();
const [Detail, setDetail] = React.useState()

const navigate = useNavigate()

  React.useEffect(()=>{
    axios.get('http://dlckdals04.shop/api/reviews/' + reviewPostId )
    .then((res)=>{
      console.log(res.data.reviewDetails)
      setDetail(res.data.reviewDetails)
    })
  },[])

  // const onView = (id) => {
  //   setCurrItem(datas.find(item => item.id === id))
  // }

  const deleteReview = () =>{
  axios.delete('http://dlckdals04.shop/api/reviews/' + reviewPostId ,{
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  }).then((res)=>{
    navigate('/review')
  })
  .catch((err)=> console.log(err))
}
  if (!Detail) {
    return <div></div>;
  }
  return (
    <>
    <Header/>
    <Container>
        <div className='Box'>
          <div className='imgBox'>
            <div className='Bigimg'><img src={Detail.imageUrl[0]} alt ="사진"/></div>
            <div className='imgSmall'>
              {Detail.imageUrl.map((item,idx)=>{
                return(
                  <div key={idx}><img src={item} alt ="사진"/></div>
                )
              })}
            </div>

          </div>
          <ContentBox>
            <div className='box_top'>
                <div className='title'>
                    <p>{Detail.title}</p>
                    <span>
                        {Detail.productType}
                    </span>

                </div>
                <div className='location'>
                    <p>
                        <GrLocation />
                        {Detail.url}</p>
                </div>
                <div className='info'>
                    <div className='profile'><img src={Profile} alt="사진"/></div>
                    <p className='nickname'>{Detail.nickname}</p>
                </div>
            </div>
            <div className='box'>
                <div className='content'>
                    <p>{Detail.content}</p>
                </div>
                {nickname === Detail.nickname? <div className='btnBox'>
                  <button onClick={()=>{navigate('/ReviewEdit/' + reviewPostId)}}>수정</button>
                  <button onClick={deleteReview}>삭제</button>
                </div>
                : 
                null
                }

            </div>
        </ContentBox>
        </div>
      </Container>
      <ReviewComment />
      <Footer/>
    </>
    
  )
}


const Container = styled.div`
  width:100%;
  height: 100vh;
 
.Box{
  margin: 80px auto;
  width:80%;
  height: 70vh;
  display:flex;
}
.imgBox{
  width:50%;
  display: flex;
  flex-direction:column;
}

.Bigimg{
  width: 50%;
  height: 50%; 
  margin: auto;
  border-radius: 30px;
}

.Bigimg >img{
  width:100%;
  height: 100%;
  border-radius: 30px;
}

.imgSmall{
  height: 30%;
  display: flex;
}


.imgSmall >div {
  border: 1px solid black;
  margin: 20px auto;
  width: 100px;
  height: 100px;
  border-radius: 30px;
}

.imgSmall >div > img {
  width: 100%;
  height: 100%;
  border-radius: 30px;
}
`

const ContentBox = styled.div`
 width:50%;
 height: 70vh;
 
.box_top{
   height: 25%;
   position: relative;
   left:40px;

 }
 .box_top > div{
   height: 33%;
 }
      
.title{
  display:flex;
  align-items:center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  padding-left:30px;
 }

.title > span {
  color: #A8A8A8;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-left: 15px;
}
 
.icon{
    color:#fdd835;
    margin-left:30px;
  }
.starScore{
    color: #A8A8A8;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
  .location{
    display: flex;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    padding: 30px;
  }
  .info{
    display:flex;
    align-items:center;
    padding: 30px;
  }
  
  .profile{
    width:70px;
    height:70px;
    border-radius: 50%;
  }

  .profile > img {
    width:70px;
    height:70px;
    border-radius: 50%;
  }
  
  .nickname{
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  margin-left: 15px;
  margin-top: 20px;
  }

  .box{
  height: 55%;
  margin-top:50px;
  display:flex;
  align-items:center;
  flex-direction:column;
}
.content{
  border: 2px solid #E4E4E4;
  border-radius: 10px;
  width:80%;
  height:90%;
}
.content > p {
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
width:100%;
height: 80%;
}
.content > div{
  width:100%;
  height: 20%;
}
.ParkBtn{
    width:30%;
    height: 50%;
    border-radius:15px;
    font-size: 17px;
    color:#263238;
    border: none;
    background-color:#ffa000;
  }
  
  .btnBox > button{
    background: #3C3C3C;
    border-radius: 30px;
    color:#fff;
    width: 195px;
    height: 48px;
    border: none;
  }

  .btnBox {
    width: 100%;
    height: 100px;
    align-items: center;
    display: flex;
    justify-content:space-around;
  }
  
  .KidBtn{
    width:30%;
    height: 50%;
    border-radius:15px;
    font-size: 17px;
    color:#263238;
    border: none;
    background-color:#c5e1a5; 
  }
`;


export default ReviewDetail;
