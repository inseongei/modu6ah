import React from 'react'
import styled from 'styled-components'

import { NaverMap } from 'react-naver-maps'; // 패키지 불러오기

function Map() {
  return (
   <MapBox>
<div className='map_container'>
<NaverMap
      mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
      style={{
        width: '100%', // 네이버지도 가로 길이
        height: '100%' // 네이버지도 세로 길이
      }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
      defaultZoom={13} // 지도 초기 확대 배율
    />
</div>
   </MapBox>
  )
}

const MapBox = styled.div`
height:500px;
display:flex;
align-items:center;
justify-content:center;


.map_container{
border: 2px solid #E4E4E4;
border-radius: 10px;
width:60%;
height:90%;
}
`;

export default Map;
