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
        <div className='Box'>
          <PhotoList
            datas={datas}
            currItem={currItem}
            onView={onView}
          />
          <Content/>
        </div>
      </Container>
      <Map/>
      <Comment />
    </>

  )
}


const Container = styled.div`
 width: 100%;
  
.Box{
  margin: 30px auto;
  width:80%;
  display:flex;
}
`


export default PlaceDetail;
