import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailPhotoDB } from "../../redux/modules/placepage";

import styled from "styled-components";

const { kakao } = window;

const KakaoMap = () => {
  const [Places, setPlaces] = useState([]);
  const { placePostId } = useParams();
  const container = useRef(null);
  const dispatch = useDispatch();

  // 방법 1. axios 통신
  React.useEffect(() => {
    axios
      .get("http://dlckdals04.shop/api/places/" + placePostId)
      .then((res) => {
        console.log(res.data.placeDetails);
        setPlaces(res.data.placeDetails);
      });
  }, []);

  // 방법 2. redux 사용
  // const detail = useSelector((state) => state.placepage.list.placeDetails);
  // console.log(detail);

  // React.useEffect(() => {
  //   dispatch(detailPhotoDB(placePostId));
  // }, []);

  // 방법 3. async await..
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://dlckdals04.shop/api/places/`
  //         + placePostId);
  //        setPlaces(response.data.placeDetails)
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchPost()
  // }, []);

  useEffect(() => {
    // const container = document.getElementById('myMap')
    window.scrollTo(0, 0);
    const options = {
      center: new kakao.maps.LatLng(37.537187, 127.005476),
      level: 4,
      draggable: false,
    };

    // 지도를 생성합니다
    const map = new kakao.maps.Map(container.current, options);

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();
    console.log(geocoder);

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(`${Places.region}`, function (result, status) {
      console.log(result);

      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        console.log(result);
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        const marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content:
            '<div style="width:150px;text-align:center;padding:6px 0;">' +
            Places.location +
            "</div>",
        });
        infowindow.open(map, marker);

        map.setCenter(coords);
      }
    });
  });

  return (
    <MapBox
      id="map"
      style={{
        width: "1110px",
        height: "480px",
      }}
      ref={container}
    />
  );
};

const MapBox = styled.div`
  border-radius: 10px;
`;

const InfoBox = styled.div`
  margin-bottom: 40px;
`;

export default KakaoMap;
