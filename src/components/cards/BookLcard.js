// 육아템 리뷰 카드
import React from "react";
import styled from "styled-components";
import { MdOutlinePlace } from "react-icons/md";
import axios from "axios";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

function BookLcard() {
  const [book, setbook] = React.useState();
  const [btn, setbtn] = React.useState(true);

  console.log(book)

  React.useEffect(() => {
    axios
      .get("https://zhaoxilin.shop/api/mypage/bookmark", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setbook(res.data.placeBookmarkList.slice(0, 3));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const PlaceMore = async () => {
    await axios
      .get("https://zhaoxilin.shop/api/mypage/bookmark", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setbtn(!btn);
        btn
          ? setbook(res.data.placeBookmarkList)
          : setbook(res.data.placeBookmarkList.slice(0, 3));
      });
  };

  return (
    <>
      <Container>
        {book &&
          book.map((data, idx) => {
            return (
                <div className="card">

                <div className="cardin">

                <div className="cardInto">

                </div>

                </div>




















                </div>
















































            );
          })}
      </Container>
      <div className="btnBox">
        <button className="MoreBtn" onClick={PlaceMore}>
          {btn ? "더보기" : "닫기"}
        </button>
      </div>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  justify-content: center;
  align-items: center;

  .card {
    background: white;
    border-radius: 20px;
    border: 1px solid #A8A8A8;
    overflow: hidden;
    width: 284px;
    height: 390px;
  }

  .firstT{
    width: 165.17px;
    height: 23px;
  }
  .card-top {
    display: flex;
    justify-content: space-between;
    margin: 26px 12px 8px 16px;
    width: 255.63px;
    height: 56.48px;
  }
  .card-top p {
    display: flex;
    margin-left: 10px;
    color: gray;
  }

  .card-top > div {
    display: flex;
  }

  .titleCard{
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    margin-left: 16px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .cardin{
    width: 264.43px;
    height: 350px;
  }
  .bookmark {
    margin-right: 60px;
    width: 34px;
    height: 34px;
    cursor: pointer;
  }

  .bookmark2 {
    margin-right: 10px;
    width: 34px;
    height: 34px;
    color: #6b4e16;
    cursor: pointer;
  }

  a {
    margin-left: 51px;
  }
  .card-body {
    width: 264.43px;
    height: 274px;
    cursor: pointer;
    text-align: center;
  }
  .image {
    border-radius: 25px;
    overflow: hidden;
  }



  .card-body img {
    width: 264.43px;
    height: 170.2px;
    margin-top: 3px;
    object-fit: cover;
    border-radius: 25px;
  }
  .profile_box {
    display: flex;
    margin-top: 15px;
    padding-left: 30px;
  }
  .detail_profile > img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-left: 10px;
  }
  .detail_profile {
    border-radius: 50%;
    /* display:flex; */
    align-items: center;
    display: block;
    justify-content: center;
  }

  strong {
    font-family: "Noto Sans KR";
    margin-top: 12px;
    margin-left: 10px;
  }
  .card-body p {
    margin-top: 10px;
    margin-left: 5px;
  }
  .content {
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 10px;
    padding-left: 30px;
    text-align: left;
  }
`;

export default BookLcard;
