import React from "react";
import Header from "../../components/main/Header";
import styled from "styled-components";
// import BookScard from "../../components/cards/BookScard";
// import BookRcard from "../../components/cards/BookRcard";
// import BookLcard from "../../components/cards/BookLcard";
import Footer from "../../components/main/Footer";
import axios from "axios";
import SearchInput from "../../components/main/SearchInput";
import { useNavigate } from "react-router-dom";
import SearchScard from "../../components/cards/SearchScard";
import SearchLcard from "../../components/cards/SearchLcard";
import SearchRcard from "../../components/cards/SearchRcard";

const MainSearch = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <SearchInput />
      <SearchBox>
        <div className="title-list">
          <ul className="title-li">
            <li className="title"
            style={{marginRight:"30px"}}
              onClick={() => { navigate(`/api/search`) }}>
              전체</li>
            <li className="title"
             style={{marginRight:"30px"}}
            onClick={() => { navigate(`/search/recruit`) }}>
              모집 게시글</li>
            <li className="title"
             style={{marginRight:"30px"}}
            onClick={() => { navigate(`/search/place`) }}>
              장소 추천</li>
            <li className="title"
            style={{marginRight:"30px"}}
            onClick={() => { navigate(`/search/review`) }}>
              육아템 리뷰</li>
          </ul>

        </div>

        <div className="MainBox">
          <div className="titleOne">
            <div className="subtitle">체험 모집</div>
            <div className="subContent">
              다양한 공동육아 프로그램을 둘러보고, 참여를 신청해요!
            </div>
          </div>

          <div className="cardBox">
          <SearchScard/>
          </div>

          <div className="titleOne">
            <div className="subtitle">장소 추천</div>
            <div className="subContent">
              아이들과 함께 출입이 가능한 키즈존을 공유해요!
            </div>
          </div>

          <div className="cardBox">
          <SearchLcard/>
          </div>


          <div className="titleOne">
            <div className="subtitle">육아템 리뷰</div>
            <div className="subContent">
              유용한 육아용품들을 소개하고 추천해요!
            </div>
          </div>

          <div className="cardBox">
          <SearchRcard/>
          </div>
        </div>
      </SearchBox>
      <Footer />
    </>
  );
};

const SearchBox = styled.div`
  width: 100%;
  background-color: #f5f5f5;

  .title-list {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    li {
        display: flex;
        list-style: none;
        margin-top: 30px;
    }
  }

  .title-li{
    display: flex;
  }

  .title {
    color: #000000;
    font-family: "Nanum Gothic";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    cursor: pointer;
  }


  .MoreBtn {
    border: 2px solid #ddd;
    width: 70px;
    height: 30px;
    position: relative;
    right: 50px;
    transition: all 0.25s ease;
    border-radius: 5px;
    margin-top: 30px;
  }

  .MoreBtn:hover {
    border-color: #111;
    box-shadow: 1px 2px 4px rgb(0 0 0 / 10%);
  }

  .MainBox {
    border: 1px solid #e4e4e4;
    width: 80%;
    margin: 30px auto;
    border-radius: 10px;
    background: #ffffff;
  }

  .subtitle {
    color: #000000;
    font-family: "Nanum Gothic";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 12px;
  }

  .subContent {
    color: #6b4e16;
    font-family: "Nanum Gothic";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
  }

  .titleOne {
    margin: 64px 0px 35px 85px;
  }

  .cardBox {
    width: 90%;
    margin: auto;
  }
`;

export default MainSearch;
