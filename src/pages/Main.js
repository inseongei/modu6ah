// 메인 페이지
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//  elements & components
import Grid from "../components/elements/Grid";
import Header from "../components/main/Header";
import Swiper from "../components/main/Swiper";
import MainLcard from '../components/cards/MainLcard';
import MainRcard from '../components/cards/MainRcard';
import Footer from "../components/main/Footer";
import MainScard from "../components/cards/MainScard";
import SearchInput from "../components/main/SearchInput";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
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
      <Footer />
    </div>
  );
};

const Container = styled.div`
  font-family: "Nanum Gothic";
  padding-left: 50px;
  padding-right: 50px;
  .card_title {
    widht: 10px;
    width: 960px;
  }
  .subtitle {
    display: flex;
    margin-left: 171px;
  }
  .subcontent {
    display: flex;
    width: 970px;
    justify-content: space-between;
  }
  hr {
    color: #e4e4e4;
    height: 2.5px;
    margin-top: 100px;
  }
`;

const Title = styled.p`
  display: flex;
  font-size: 28px;
  font-weight: 750;
  margin-top: 95px;
  margin-left: 170px;
  margin-bottom: 0px;
`;

const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  color: #6b4e16;
  // margin-left: 171px;
  margin-bottom: 50px;
  padding-top: 5px;
`;

const Btn = styled.button`
  margin-bottom: 50px;
  padding: 10px 17px;
  cursor: pointer;
  border: 1px solid transparent;
  background: #3c3c3c;
  color: white;
  border-radius: 30px;
  font-weight: 700;
`;

export default Main;
