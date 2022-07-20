import React, { useState } from "react";
import styled from "styled-components";

// elements & components
import Header from "../../components/main/Header";
import Place from "./Place";
import Comment from "../../components/elements/Comment";
import KakaoMap from "../../components/placepage/KakaoMap";
import { GrLocation } from "react-icons/gr";

import axios from "axios";
import data from "../../shared/data";
import PhotoList from "../../components/placepage/PhotoList";
import Content from "../../components/placepage/Content";
import { useDispatch, useSelector } from "react-redux";
import { detailPhotoDB } from "../../redux/modules/placepage";
import { useNavigate, useParams } from "react-router-dom";


const PlaceDetail = () => {
  const [datas, setDatas] = useState(data);
  const [currItem, setCurrItem] = useState(datas[0]);
  const navigate = useNavigate();
  const [detail, setDetail] = useState('');
  const {placePostId} = useParams();

 React.useEffect(()=>{
    axios.get("http://dlckdals04.shop/api/places/" + placePostId )
    .then((res)=>{
        console.log(res.data)
        setDetail(res.data.placeDetails)
    })
},[])

  const onView = (id) => {
    setCurrItem(datas.find((item) => item.id === id));
  };

  return (
    <>
      <Header />
      <Container>
      <Title>
        <div className="subject">
          장소추천
        </div>
        <div className="page">
          <p>상세페이지</p>
        </div>
      </Title>
        <Box>
        <div className='Box'>
          <PhotoList
            datas={datas}
            currItem={currItem}
            onView={onView}
          />
          <ContentBox>
      <div className='box_top'>
        <div className='title'>
          <p>{detail.title}</p>
          <span>
        
          </span>
        </div>
        <div className='location'>
          <p>
            <GrLocation />
            {detail.region}
           </p>
        </div>
        <div className='info'>
          <Image>
            <div className="ProfileImg">
              <img src={detail.profileUrl}/>
            </div>
          </Image>
          <p className='nickname'>
            {detail.nickname}
            </p>
        </div>
      </div>
      <div className='box'>
        <div className='content'>
          <p>{detail.content}</p>
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
        </div>   
        <div className="mapbox">
          <KakaoMap/>
        </div> 
        </Box>
        <Comment />
      </Container>
    </>

  )
}

const Title = styled.div`
padding-top: 40px;
margin-left: 130px;

.subject {
color: #A8A8A8;
}

.page {
  font-size: 30px;
  font-weight: 700;
}
`;


const Box = styled.div`
width: 1200px;
height: 1300px;

background: white;

margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
margin-top: 50px;
margin-bottom: 32px;
display: flex;
flex-direction: column;

border: 1px solid lightgray;
border-radius: 10px;
`;

const Container = styled.div`
 width: 100%;
 background-color: #F5F5F5;
  
.Box{
  margin: 30px auto;
  justify-content: center;
  align-items: center;
  display:flex;
}

.mapbox {
  display:flex;
  justify-content: center;
  align-items: center;
}
`

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
  margin-left: 12px;
  margin-top: 6px;
  cursor: pointer;

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


export default PlaceDetail;
