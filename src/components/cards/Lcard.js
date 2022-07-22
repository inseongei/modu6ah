//  장소 추천 카드
import React, { useState, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";
import { MdOutlinePlace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import dog from "../../images/dog.jpg";
import { useDispatch, useSelector } from "react-redux";
import { loadPhotoDB } from "../../redux/modules/placepage";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import InfiniteScroll from "react-infinite-scroll-component";

function LCard() {
  const [data, setData] = useState([]);
  const [Items, setItems] = useState([]);
  const [noMore,setnoMore] = useState(true)
  const [index , setindex] = useState(1)
  const Profile = localStorage.getItem("profileUrl");
  const navigate = useNavigate();

  const division = (arr, n) => {
    const length = arr.length;
    const divide =
      Math.floor(length / n) + (Math.floor(length % n) > 0 ? 1 : 0);
    const newArray = [];

    for (let i = 0; i <= divide; i++) {
      // 배열 0부터 n개씩 잘라 새 배열에 넣기
      newArray.push(arr.splice(0, n));
    }

    return newArray;
  };

  React.useEffect(() => {
    axios
      .get("http://dlckdals04.shop/api/places", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data.placePosts)
        let data = res.data.placePosts.slice(0,2);
        setData([...data]);
      });
  }, []);





  const axiosData = () => {
    axios
      .get("http://dlckdals04.shop/api/places", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data.placePosts);
        let result = division(res.data.placePosts,2)
        if(noMore === true){
          setData((list) => [...list,result[index]].flat())
          setindex(index+1)
        } else if(result.length === data){
          setnoMore(false)
        } else{
          return null
        }
      });
  };
  
  console.log(data);
  return (
    <>
      <InfiniteScroll
        dataLength={data.length}
        next={axiosData}
        hasMore={noMore}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
        endMessage={
          <p>여기가 카드 끝이여 </p>
        }
      ></InfiniteScroll>
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
    margin: 6px 10px 0px 5px;
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
