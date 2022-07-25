import React from "react";
import Header from "../../components/main/Header";
import styled from "styled-components";
import Footer from "../../components/main/Footer";
import axios from "axios";
import SearchScard from "../../components/cards/SearchScard";
import SearchBar from "../../components/pages/SearchBar";
import search from "../../images/search.png";
import { useNavigate } from "react-router-dom";
import ChatIcon from '../../components/main/ChatIcon'
const RecruitSearch = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState();
  const [query, setQuery] = React.useState();
 
  // console.log(data.filter(item=>item.title.toLowerCase().includes("뽀로")));

  React.useEffect(() => {
    axios
      .get("http://dlckdals04.shop/api/search", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res)
        setData(res.data.resultsInRecruit.slice(0, 9));
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  if(!data) {
    <div></div>
  }

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
            <SearchScard
             data={data}
            query={query}/>
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

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  justify-content: center;
  align-items: center;
  width: 100%;
  .card {
    display: flex;
    height: 100%;
    background: white;
    border-radius: 30px;
    border: none;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.17);
  }
  .card-top {
    display: flex;
    margin: 30px 0px 0px 30px;
    width: 100%;
    justify-content: space-between;
  }
  .card-top > p {
    margin: 0px 0px 4px 4px;
    background-color: #a8a8a8;
    border-radius: 20px;
    padding: 6px 15px 7px 15px;
    color: white;
  }

  .card-top span {
    margin: 0px 0px 4px 4px;
    background-color: #f4b03e;
    border-radius: 20px;
    padding: 6px 15px 7px 15px;
    color: white;
  }

  .icon {
    margin-right: 60px;
    width: 34px;
    height: 34px;
    color: black;
    cursor: pointer;
    position: relative;
    top: 0px;
  }
  .title {
    padding: 30px 10px 25px 33px;
    cursor: pointer;
    h1 {
      font-size: 25px;
      font-weight: bold;
    }
  }
  .card-bottom {
    cursor: pointer;
    margin: 0px 0px 20px 30px;
  }
  .card-bottom p {
    margin: 0px 0px 8px 4px;
  }
  .checkIcon {
    margin-right: 60px;
    width: 34px;
    height: 34px;
    cursor: pointer;
    position: relative;
    top: 0px;
    color: #6b4e16;
  }
  .checkIcon:hover {
    transform: scale(1.13);
  }
  .icon:hover {
    transform: scale(1.13);
  }
`;

export default RecruitSearch;
