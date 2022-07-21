//  장소 추천 카드
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { MdOutlinePlace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import dog from "../../images/dog.jpg";
import { useDispatch, useSelector } from "react-redux";
import { loadPhotoDB } from "../../redux/modules/placepage";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

function LCard() {
  const [data, setData] = useState("");
  const Profile = localStorage.getItem("profileUrl");
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");
  React.useEffect(() => {
    axios
      .get("http://dlckdals04.shop/api/places", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setData(res.data.placePosts);
      });
  }, []);

  return (
    <>
      <Container>
        {data &&
          data.map((item, index) => (
            <div className="card" key={index}>
              {/* 카드 왼쪽 '이미지' */}
              <div
                className="card-left"
                onClick={() => {
                  navigate("/placedetail/" + item.placePostId);
                }}
              >
                <div className="image">
                  <img src={item.imageUrl[0]} alt="사진" />
                </div>
              </div>
              {/* 카드 오른쪽 '타이틀 및 설명' */}
              <div className="card-right">
                <div className="title">
                  <div
                    className="titleBox"
                    onClick={() => {
                      navigate("/placedetail/" + item.placePostId);
                    }}
                  >
                    <h3>{item.title}</h3>
                    <p>⭐ {item.star}</p>
                  </div>

                  <div>
                    {item.bookmarkStatus === true ? (
                      <BsFillBookmarkFill
                        className="bookmark2"
                        onClick={() => {
                          axios
                            .put(
                              "http://dlckdals04.shop/api/places/bookmark/" +
                                item.placePostId,
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
                        className="bookmark"
                        onClick={() => {
                          axios
                            .put(
                              "http://dlckdals04.shop/api/places/bookmark/" +
                                item.placePostId,
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
                </div>
                <a href="##" className="atag">
                  <MdOutlinePlace />
                  {item.region}
                </a>
                <div
                  className="profile_box"
                  onClick={() => {
                    navigate("/placedetail/" + item.placePostId);
                  }}
                >
                  <div className="detail_profile">
                    <img src={Profile} alt="프로필" />
                  </div>
                  <strong>{item.nickname}</strong>
                </div>
                <div
                  className="content"
                  onClick={() => {
                    navigate("/placedetail/" + item.placePostId);
                  }}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
      </Container>
    </>
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
    border-radius: 30px;
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
    cursor: pointer;
  }
  .bookmark2 {
    margin-right: 60px;
    width: 34px;
    height: 34px;
    color: #6b4e16;
    cursor: pointer;
  }
  .titleBox {
    cursor: pointer;
  }

  .atag {
    text-decoration: none;
    color: black;
    margin: 20px 0px 20px 0px;
  }
  .bookmark {
    margin-right: 60px;
    width: 34px;
    height: 34px;
    cursor: pointer;
  }
  .image {
    border-radius: 25px;
    width: 100%;
    overflow: hidden;
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

  .title {
    display: flex;
    justify-content: space-between;

    h3 {
      font-weight: 700;
    }
  }

  .title p {
    margin-top: 4px;
    margin-left: 10px;
  }

  .profile_box {
    display: flex;
    margin-top: 15px;
    margin-bottom: 20px;
    cursor: pointer;
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
    margin-left: 10px;
  }

  .detail_profile {
    border-radius: 50%;
    align-items: center;
    display: block;
    justify-content: center;
  }

  strong {
    margin-top: 10px;
    margin-left: 10px;
  }

  .card-right p {
    margin: 0px 10px 0px 5px;
  }

  .content {
    margin-right: 20px;
    width: 420px;
    height: 180px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
  }

  .content p {
    font-weight: normal;
  }
`;

export default LCard;
