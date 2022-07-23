// 육아템 리뷰 카드
import React from "react";
import styled from "styled-components";
import { MdOutlinePlace } from "react-icons/md";
import axios from "axios";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";


function SearchLcard({data, query}) {
  const [btn, setbtn] = React.useState(true);

  return (
    <>
      <Container>
        {data &&
          data.filter((item) =>
            item.title.includes(query) ||
            item.content.includes(query)
          )
            .map((item) => {
              return (
                <div className="card" key={item._id}>
                  {/* 카드 위쪽 '타이틀' */}
                  <div className="card-top">
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.productType}</p>
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
                  <a href={item.url}>
                    <MdOutlinePlace />
                    {item.url}
                  </a>
                  {/* 카드 중간 '이미지'*/}
                  <div className="card-body">
                    <div className="image">
                      <img src={item.imageUrl[0]} alt="사진" />
                    </div>
                    {/* 카드 아래쪽 '아이디 및 내용물' */}
                    <div className="profile_box">
                      <div className="detail_profile">
                        <img src={item.profileUrl} alt="프로필 이미지" />
                      </div>
                      <strong>{item.nickname}</strong>
                    </div>
                    <div className="content">
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
      </Container>
      <div className="btnBox">
        <button className="MoreBtn">
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
    border-radius: 30px;
    border: none;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.17);
    overflow: hidden;
    height: 570px;
  }
  .card-top {
    display: flex;
    justify-content: space-between;
    margin: 30px 0px 0px 50px;
    h3 {
      font-weight: 700;
    }
  }
  .card-top p {
    display: flex;
    margin-top: 8px;
    margin-left: 10px;
    color: gray;
  }

  .card-top > div {
    display: flex;
  }

  a {
    text-decoration: none;
    color: black;
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

  a {
    margin-left: 51px;
  }
  .card-body {
    width: 100%;
    cursor: pointer;
    text-align: center;
  }
  .image {
    border-radius: 25px;
    overflow: hidden;
  }
  .card-body img {
    width: 80%;
    height: 270px;
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

export default SearchLcard;
