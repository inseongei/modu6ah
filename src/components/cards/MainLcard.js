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

function MainLcard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  const token = localStorage.getItem('accessToken')

  React.useEffect(() => {
    token ? dispatch(GetMainAxois()) : dispatch(GetMainLogin())
  }, []);

  const post = useSelector((state) => state.Data.Profile);

  if (!post) {
    return <div></div>;
  }

  return (
    <>
      <Container>
        {post.placePosts &&
          post.placePosts.map((item, index) => (
            <div
              className="card"
              key={index}
            >
              {/* 카드 왼쪽 '이미지' */}
              <div className="card-left" 
                onClick={() => {
                navigate("/placedetail/" + 
                item.placePostId);
              }}>
                <div className="image">
                  <img src={item.imageUrl[0]} alt="사진" />
                </div>
              </div>
              {/* 카드 오른쪽 '타이틀 및 설명' */}
              <div className="card-right">
                <div className="title">
                  <div className="titleBox"
                    onClick={() => {
                      navigate("/placedetail/" +
                        item.placePostId);
                    }}>
                    <h3>{item.title}</h3>
                    <span>
                      <FaStar
                        size={28}
                        style={{
                          color: "#FFBA5A",
                          marginLeft: "5px",
                        }}
                      />
                    </span>
                    <p>{item.star}점</p>
                  </div>

                  <div>
                    {item.bookmarkStatus === true ? (
                      <BsFillBookmarkFill
                        className="bookmark2"
                        onClick={() => {
                          axios
                            .put(
                              "https://zhaoxilin.shop/api/places/bookmark/" +
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
                              "https://zhaoxilin.shop/api/places/bookmark/" +
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
                              console.log(res.data);
                              window.location.reload();
                            }).catch((err) => console.log(err))
                        }}
                      />
                    )}
                  </div>
                </div>
                <a href="##" className="atag">
                  <MdOutlinePlace />
                  {item.region}
                </a>
                <div className="profile_box"
                  onClick={() => {
                    navigate("/placedetail/" +
                      item.placePostId);
                  }}>
                  <div className="detail_profile"
                    onClick={() => {
                      navigate("/placedetail/" +
                        item.placePostId);
                    }}>
                    <img src={item.profileUrl} alt="프로필" />
                  </div>
                  <strong>{item.nickname}</strong>
                </div>
                <div className="content">
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
