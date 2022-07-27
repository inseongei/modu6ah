// 모집 카드
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { GetMainAxois, GetMainLogin } from "../../redux/modules/Data";
import location from '../../images/location.png'
import time from '../../images/time.png'
import age from '../../images/age.png'
import calendar from '../../images/calendar.png'
import axios from "axios";

function BookScard() {
  const navigate = useNavigate();
  const [book, setbook] = React.useState();
  const [btn, setbtn] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("https://zhaoxilin.shop/api/mypage/bookmark/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setbook(res.data.recruitBookmarkList.slice(0, 6));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const recruitsMore = async () => {
    await axios
      .get("https://zhaoxilin.shop/api/mypage/bookmark/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setbtn(!btn);
        btn
          ? setbook(res.data.recruitBookmarkList)
          : setbook(res.data.recruitBookmarkList.slice(0, 6));
      });
  };

  return (
    <>
      <Container>
        {book &&
          book.map((item, idx) => {
            return (
              <div className="card" key={idx}>
                <div className="card-top">
                  {item.status === true ? <p>모집완료</p> : <span>모집중</span>}
                  {item.bookmarkStatus === true ? (
                    <BsFillBookmarkFill
                      className="checkIcon"
                      onClick={() => {
                        axios
                          .put(
                            "https://zhaoxilin.shop/api/recruits/bookmark/" +
                              item.recruitPostId,
                            null,
                            {
                              headers: {
                                Authorization: `Bearer ${localStorage.getItem(
                                  "accessToken"
                                )}`,
                              },
                            }
                          )
                          .then((res) => {
                            console.log(res);
                            window.location.reload();
                          });
                      }}
                    />
                  ) : (
                    <BsBookmark
                      className="icon"
                      onClick={() => {
                        axios
                          .put(
                            "https://zhaoxilin.shop/api/recruits/bookmark/" +
                              item.recruitPostId,
                            null,
                            {
                              headers: {
                                Authorization: `Bearer ${localStorage.getItem(
                                  "accessToken"
                                )}`,
                              },
                            }
                          )
                          .then((res) => {
                            console.log(res);
                            window.location.reload();
                          });
                      }}
                    />
                  )}
                </div>
                {/* 카드 타이틀 */}
                <div
                  className="titleTwo"
                  onClick={() => {
                    navigate("/recruitdetail/" + item.recruitPostId);
                  }}
                >
                  <span>{item.title}</span>
                </div>
                {/* 카드 내용물 */}
                <div
                  className="card-bottom"
                  onClick={() => {
                    navigate("/recruitdetail/" + item.recruitPostId);
                  }}
                >
                  <div><img src={location} alt="사진"/>{item != null && item.place}</div>
                  <div><img src={time} alt="사진"/>{item != null && item.time}</div>
                  <div><img src={calendar} alt="사진"/>{item != null && item.createdAt}</div>
                  <div><img src={age} alt="사진"/>{item != null && item.age}</div>
                </div>
              </div>
            );
          })}
      </Container>
      <div className="btnBox">
        <button className="MoreBtn" onClick={recruitsMore}>
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
    display: flex;
    width: 284px;
    height: 247px;
    background: white;
    border-radius: 20px;
    border: none;
    border: 1px solid #A8A8A8;
  }
  .card-top {
    display: flex;
    width: 284px;
    height: 30px;
    justify-content: space-between;
    margin: 20px 20px 25px 20px;
  }
  .card-top > p {
    margin: 0px 0px 4px 4px;
    background-color: #a8a8a8;
    border-radius: 20px;
    padding: 6px 15px 7px 15px;
    color: white;
  }

  .card-top span {
    width: 114px;
    height: 28px;
    background: #F4B03E;
    border: 1px solid #F4B03E;
    border-radius: 30px;
    color: #FFFFFF;
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    justify-content:center;
    align-items: center;
  }

  .icon {
    margin-right: 60px;
    width: 30px;
    height: 30px;
    color: black;
    cursor: pointer;
    position: relative;
    top: 0px;
  }
  .titleTwo {
    width: 234px;
    height: 23px;
    cursor: pointer;
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    margin: 0px 25px 25px 25px;
  }
  .card-bottom {
    cursor: pointer;
    margin: 0px 20px 20px 25px;
    width: 243px;
    height: 104px;
  }
  .card-bottom div {
    margin-bottom: 8px;
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
  }

  .card-bottom > div > img{
    margin-right: 8px;
  }
  .checkIcon {
    margin-right: 40px;
    width: 30px;
    height: 30px;
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

export default BookScard;
