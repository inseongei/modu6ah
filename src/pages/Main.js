//  장소 추천 카드
import React, { useState } from "react";
import styled from "styled-components";
import { PlaceData } from "../../shared/placedata";
import { MdOutlinePlace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { GetMainAxois, GetMainLogin } from "../../redux/modules/Data";
import { FaStar } from "react-icons/fa";

//  elements & components
import Grid from "../components/elements/Grid";
import Header from "../components/main/Header";
import Swiper from "../components/main/Swiper";
import MainLcard from '../components/cards/MainLcard';
import MainRcard from '../components/cards/MainRcard';
import Footer from "../components/main/Footer";
import MainScard from "../components/cards/MainScard";
import SearchInput from "../components/main/SearchInput";
import ChatIcon from '../components/main/ChatIcon'
import '../shared/App.css'

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  const token = localStorage.getItem('accessToken')

  React.useEffect(() => {
    token ? dispatch(GetMainAxois()) : dispatch(GetMainLogin())
  }, []);

  const post = useSelector((state) => state.Data.Profile);
  console.log(post);

  if (!post) {
    return <div></div>;
  }

  return (
    <div className="MainBackGround">
      <Header />
      <Swiper />
      <SearchInput/>
      <Grid maxWidth="1440px" height="100%" margin="0 auto" padding="0 12px">
        <Container>
          <div className="card_title">
            <Title>체험 모집</Title>
          </div>
          <div className="subtitle">
            <div className="subcontent">
              <SubTitle>
                다양한 공동육아 프로그램을 둘러보고, 참여를 신청해요!{" "}
              </SubTitle>

              <Btn
                onClick={() => {
                  navigate(`/recruit`);
                }}
              >
                더 보기
              </Btn>
            </div>
          </div>
          <MainScard />
          <hr />
          <div className="card_title">
            <Title style={{ marginTop: "100px" }}>장소 추천</Title>
          </div>
          <div className="subtitle">
            <div className="subcontent">
              <SubTitle>
                아이들과 함께 출입이 가능한 키즈존을 공유해요!
              </SubTitle>

              <Btn
                onClick={() => {
                  navigate(`/place`);
                }}
              >
                더 보기
              </Btn>
            </div>
          </div>
          <MainLcard />
          <hr />
          <div className="card_title">
            <Title style={{ marginTop: "100px" }}>육아템 리뷰</Title>
          </div>
          <div className="subtitle">
            <div className="subcontent">
              <SubTitle>유용한 육아 아이템들을 소개하고 추천해요!</SubTitle>
              <Btn
                onClick={() => {
                  navigate(`/review`);
                }}
              >
                더 보기
              </Btn>
            </div>
          </div>
          <MainRcard />
        </Container>
      </Grid>
      <ChatIcon/>
      <Footer />
    </div>
  );
}

const Container = styled.div`
  font-family: "Nanum Gothic";
  display: grid;
  grid-template-columns: repeat(auto-fit);
  gap: 3.5em;
  justify-content: center;
  align-items: center;

  .card {
    background: white;
    border-radius: 10px;
    border: none;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.17);
    overflow: hidden;
    width: 980px;
    height: 360px;
    display: flex;
    flex-direction: row;
  }

  .card-left {
    display: flex;
    width: 460px;
    height: 300px;
    margin: 30px 0px 0px 39px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .image {
    border-radius: 25px;
    width: 100%;
    overflow: hidden;
  }

  .atag {
    text-decoration: none;
    color: black;
    margin: 13px 0px 15px 0px;
  }

  .bookmark {
    margin-right: 60px;
    width: 34px;
    height: 34px;
    cursor: pointer;
  }

  .bookmark2 {
    margin-right: 60px;
    width: 34px;
    height: 34px;
    color: #6b4e16;
    cursor: pointer;
  }

  .card-left img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-right {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 60px;
  }

  .titleBox {
    display: flex;
  }

  .title {
    display: flex;
    justify-content: space-between;

    h3 {
      font-weight: 700;
    }
  }

  .title p {
    color: #A8A8A8;
    font-weight: 700;
    margin: 3px 0px 0px 8px;
  }

  .profile_box {
    display: flex;
    margin-top: 8px;
    margin-bottom: 20px;
  }

  .profile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
  }

  .detail_profile > img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-left: 2px;
  }

  .detail_profile {
    border-radius: 50%;
    /* display:flex; */
    align-items: center;
    display: block;
    justify-content: center;
  }

  strong {
    margin-top: 10px;
    margin-left: 10px;
  }

  .content {
    margin-right: 20px;
    width: 420px;
    height: 120px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .content p {
    font-weight: normal;
  }
`;

export default MainLcard;
