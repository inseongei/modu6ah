// 육아템 리뷰 카드
import React from 'react'
import styled from 'styled-components';
import { Reviewdata } from '../../shared/reviewdata';
import { MdOutlinePlace } from "react-icons/md";

function RCard() {
    return (
        <Container>
            {Reviewdata.map((item,index) => (
                <div className='card' 
                key={index}>
                    {/* 카드 위쪽 '타이틀' */}
                    <div className='card-top'>
                        <h3>{item.title}</h3>
                        <p>{item.productType}</p>
                    </div>
                    <a><MdOutlinePlace/> {item.url}</a>
                    {/* 카드 중간 '이미지'*/}
                    <div className='card-body'>
                        <div className='image'>
                            <img src={item.imageUrl} />
                        </div>
                        {/* 카드 아래쪽 '아이디 및 내용물' */}
                        <div className='profile_box'>
                            <div className='profile' />
                            <strong>{item.nickname}</strong>
                        </div>
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}
        </Container>
    )
}

const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,480px);
gap: 3em;
justify-content: center;
align-items: center;
// background-color: lightgray;


.card {
background: white;
border-radius: 30px;
border: 1px solid lightgray;
box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.09);
cursor: pointer;
overflow: hidden;
height: 600px;
}

.card-top {
    display: flex;
    margin: 30px 0px 0px 30px;
    width: 100%;
}

.card-top p {
 display: flex;
 margin-top: 8px;
 margin-left: 10px;
 color: gray;
}

a {
    margin-left: 25px;
}

.card-body {
    width: 460px;
    margin-left: 8px;
}

.image{
    border-radius: 25px;
    overflow: hidden;
}

.card-body img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.profile_box{
    display: flex;
    margin-top: 15px;
}

.profile{
    width: 50px;
    height:50px;
    border-radius:50%;
    border:1px solid black;  
  }
  
  strong { 
    font-family: 'Noto Sans KR';
    margin-top: 12px;
    margin-left: 10px;
  }

  .card-body p {
    margin-top: 10px;
    margin-left: 5px;
  }
`;

export default RCard
