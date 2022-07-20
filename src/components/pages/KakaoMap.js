import React, { useEffect } from 'react'
import styled from 'styled-components'

const { kakao } = window

const KakaoMap = ({ searchPlace }) => {
  useEffect(() => {
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
    const container = document.getElementById('myMap')
    const options = {
      center: new kakao.maps.LatLng(37.537187, 127.005476),
      level: 10,
    }
    const map = new kakao.maps.Map(container, options)

    const ps = new kakao.maps.services.Places()

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds()

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i])
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }

        map.setBounds(bounds);
      }
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      })

      // console.log(marker);
      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:20px 0px 31px 10px;font-size:13px;">' + 
         place.place_name + '<br/>' + place.road_address_name +
        '</div>')
        infowindow.open(map, marker)
      })
    }
  }, [searchPlace])

  return (
    
    <MapBox
        id="myMap"
        style={{
          width: '480px',
          height: '400px',
        }}/>     
    
  )
}

const MapBox = styled.div`
border-radius: 10px;
`;

export default KakaoMap
