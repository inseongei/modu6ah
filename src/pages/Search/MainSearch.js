import React, { useState } from "react";
import Header from "../../components/main/Header";
import styled from "styled-components";
import img_search from '../../images/search.png';
import SearchScard from '../../components/cards/SearchScard';
import SearchLcard from '../../components/cards/SearchLcard';
import SearchRcard from '../../components/cards/SearchRcard';
import Footer from "../../components/main/Footer";
import ChatIcon from '../../components/main/ChatIcon'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const MainSearch = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [recruit, setRecruit] = useState([]);
  const [place, setPlace] = useState([]);
  const [review, setReview] = useState([]);

  const search = () => {
    if(keyword.length > 0 ){ 
      axios.get(`https://zhaoxilin.shop/api/search?keyword=${keyword}`, { }) 
      .then((res) => { 
        console.log(res) 
        setRecruit(res.data.resultsInRecruit) 
        setPlace(res.data.resultsInPlace) 
        setReview(res.data.resultsInReview) 
      }); 
    } else { 
      alert('검색어를 입력하세요') 
    }
  }

  return (
    <>
      <Header />
      <Search>
        <div className="title">
          <div className="searchinput">게시글 검색</div>
          <div className="serchtitle">키워드 검색하기</div>
        </div>

        <div className="MainBox">
          <InputBox>
            <img src={img_search} alt="검색" />
            <div className="search">
              <input
                type="text"
                className="search-box"
                placeholder="키워드를 입력하세요 (예) 체험명, 지역명, 작성자"
                onChange={(e) => {
                  setKeyword(e.target.value)
                }}
              onKeyPress={search}
              />
              <button className="search_btn"
               onClick={search}
                >
                확인
              </button>
            </div>
          </InputBox>
          <Cards>
            <div className="text">
              "{keyword}"에 대한 검색 결과입니다.</div>
            <div className="subtitle">체험 모집</div>
            <div className="subContent">
              다양한 공동육아 프로그램을 둘러보고, 참여를 신청해요!
            </div>
          </Cards>

          <div className="cardBox">
            <SearchScard
            searchdata={recruit}
            />
          </div>

          <Cards>
            <div className="subtitle">장소 추천</div>
            <div className="subContent">
              아이들과 함께 출입이 가능한 키즈존을 공유해요!
            </div>
          </Cards>

          <div className="cardBox">
            <SearchLcard 
            searchdata={place}
            />
          </div>


          <Cards>
            <div className="subtitle">육아템 리뷰</div>
            <div className="subContent">
              유용한 육아용품들을 소개하고 추천해요!
            </div>
          </Cards>

          <div className="cardBox">
            <SearchRcard
            searchdata={review}
            />
          </div>
        </div>
      </Search>
      <ChatIcon />
      <Footer />
    </>
  );
};

const Search = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  padding-bottom: 50px;

  .title {
    width: 1014px;
    height: 100px;  
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .serchinput {
    color: #a8a8a8;
    font-family: "NanumGothic";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    padding-top: 20px;
    margin-bottom: 10px;
  }

  .serchtitle {
    color: #000000;
    font-family: "NanumGothic";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
  }

  .MoreBtn {
    width: 130px;
    height: 38px;
    position: relative;
    right: 50px;
    transition: all 0.25s ease;
    border-radius: 30px;
    background: #3C3C3C;
    margin-top: 30px;
    color: #fff;
    border: none;
    font-family: "NanumGothic";
    font-weight: 700;
  }


  .MainBox {
    border: 1px solid #e4e4e4;
    width: 1014px;
    margin: 30px auto;
    border-radius: 10px;
    background: #ffffff;
  }

  .cardBox {
    width: 90%;
    margin: auto;
  }
`;

const Cards = styled.div`
margin: 64px 0px 35px 85px;

.text {
  dispaly: flex;
  margin-left: 300px;
  margin-bottom: 30px;
  color: #A8A8A8;
}

.subtitle {
  color: #000000;
  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 900;
  font-size: 26px;
  line-height: 30px;
  margin-bottom: 12px;
}

.subContent {
  color: #6b4e16;
  font-family: "NanumGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
}
`;


const InputBox = styled.div`
  font-family: "Nanum Gothic";
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 30px;
    height: 30px;
    margin: 42px 10px 0 0;
  }

  .search {
    margin-top: 40px;
  }

  .search-box {
    width: 700px;
    height: 50px;
    border-radius: 30px;
    padding-left: 18px;
    border: 1.5px solid #3C3C3C;
    outline: none;

    input {
      ::placeholder{
        color: #A8A8A8;
      }
    }
  }

  .search_btn {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    background: #3C3C3C;
    border-radius: 30px;
    width: 75px;
    height: 44px;
    color: #FFFFFF;
    margin-top: 8px;
    margin-left: 10px;
  }
`;

export default MainSearch;
