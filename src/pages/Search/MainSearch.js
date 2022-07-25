import React,{useState} from "react";
import Header from "../../components/main/Header";
import styled from "styled-components";
import Footer from "../../components/main/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/pages/SearchBar";
import search from "../../images/search.png";
import SCardSearch from "../../components/cards/SCardSearch";
import LCardSearch from "../../components/cards/LCardSearch";
import RCardSearch from "../../components/cards/RCardSearch";
import ChatIcon from '../../components/main/ChatIcon'


const MainSearch = () => {
  const navigate = useNavigate();
  const [scard, setScard] = useState();
  const [lcard, setLcard] = useState();
  const [rcard, setRcard] = useState();
  const [query, setQuery] = useState();

  React.useEffect(() => {
    axios
      .get("http://dlckdals04.shop/api/search", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res)
        setScard(res.data.resultsInRecruit);
        setLcard(res.data.resultsInPlace.slice(0, 6));
        setRcard(res.data.resultsInReview.slice(0, 6));
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <InputBox>
        <img src={search} alt="검색" />
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="검색어를 입력해주세요"
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </InputBox>
      <SearchBox>
        <SearchBar />
        <div className="MainBox">
          <div className="titleOne">
            <div className="subtitle">체험 모집</div>
            <div className="subContent">
              다양한 공동육아 프로그램을 둘러보고, 참여를 신청해요!
            </div>
          </div>

          <div className="cardBox">
            <SCardSearch
            scard={scard}
            query={query}
            />
          </div>

          <div className="titleOne">
            <div className="subtitle">장소 추천</div>
            <div className="subContent">
              아이들과 함께 출입이 가능한 키즈존을 공유해요!
            </div>
          </div>

          <div className="cardBox">
            <LCardSearch 
            lcard={lcard}
            query={query}
            />
          </div>


          <div className="titleOne">
            <div className="subtitle">육아템 리뷰</div>
            <div className="subContent">
              유용한 육아용품들을 소개하고 추천해요!
            </div>
          </div>

          <div className="cardBox">
            <RCardSearch 
            rcard={rcard}
            query={query}
            />
          </div>
        </div>
      </SearchBox>
      <ChatIcon/>
      <Footer />
    </>
  );
};

const SearchBox = styled.div`
  width: 100%;
  background-color: #f5f5f5;

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
    background-color: #eee;
    width: 600px;
    height: 40px;
    border-radius: 30px;
    padding: 9px;
    border: none;
    outline: none;
  }
`;

const Btn = styled.button`
  margin-top: 40px;
  margin-left: 10px;
  padding: 7px 17px;
  cursor: pointer;
  border: 1px solid transparent;
  background: gray;
  color: white;
  border-radius: 20px;
`;

export default MainSearch;
