import React, { useState } from "react";
// style
import styled from "styled-components";

// elements & components
import Header from "../../components/main/Header";
import Place from "./Place";
import Comment from "../../components/elements/Comment";
import Map from "../../components/pages/Map";

import data from "../../shared/data";
import PhotoList from "../../components/pages/PhotoList";
import Content from "../../components/pages/Content";

const PlaceDetail = () => {
  const [datas, setDatas] = useState(data);
  const [currItem, setCurrItem] = useState(datas[0]);

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
          <Content /> 
        </div>   
          <Map />
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
`

export default PlaceDetail;
