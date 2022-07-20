import React from 'react'
import styled from 'styled-components';
import { FaStar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

function Content() {


    return (
        <ContentBox>
            <div className='box_top'>
                <div className='title'>
                    <p></p>
                    <span>
                       
                    </span>

                </div>
                <div className='location'>
                    <p>
                        <GrLocation />
                        서울특별시 성수동 어쩌구 1004번지</p>
                </div>
                <div className='info'>
                <Image>
                  <div className="ProfileImg">
                    <img  />
                  </div>
                </Image>
                    <p className='nickname'>5세맘육아왕</p>
                </div>
            </div>
            <div className='box'>
                <div className='content'>
                    <p>내용</p>
                    {/* <div className='btnBox'>
                        <button className='ParkBtn'>주차가능</button>
                        <button className='KidBtn'>예스키즈존</button>
                    </div> */}
                </div>
            </div>
            <Btn>
        <button
          className="btn"

        >
          수정
        </button>
        <button className="btn">
          삭제
        </button>
      </Btn>
        </ContentBox>

    )
}

const ContentBox = styled.div`
 width:500px;
 margin-top: 60px;
 margin-left: 40px;
      
.title{
  display:flex;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  margin-left: 42px;
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
    margin: 7px;
  }
  .location{
    display: flex;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin: 10px 0px 10px 40px;
  }

.info{
    display:flex;
    align-items:center;
    margin-left: 30px;

    p {
      margin-top: 14px;
      margin-left: 10px;
    }
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
  margin-left:30px;
  }
  .box{
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top: 20px;
}
.content{
  border: 2px solid #E4E4E4;
  border-radius: 10px;
  width:400px;
  height:350px;
}
.content > p {
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
  
  .btnBox{
    display:flex;
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

const Image = styled.div`
.ProfileImg {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;
  border: 1px solid gray;

    img {
      height:50px;
      border-radius:50%;
    }
  }
`;

const Btn = styled.div`
  display: flex;
  margin-left: 50px;
  margin-right: 40px;

  .btn {
    width: 300px;
    height: 30px;
    border-radius: 20px;
    color: white;
    background-color: #3c3c3c;
    margin-top: 20px;
    margin-right: 10px;
    padding-top: 9px;
    padding-bottom: 33px;
    border: 0;
    outline: 0;
  }
`;

export default Content;
