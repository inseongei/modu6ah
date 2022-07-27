// 모집 카드
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { GetMainAxois, GetMainLogin } from "../../redux/modules/Data";
import axios from "axios";
import img_location from '../../images/location.png';
import img_time from '../../images/time.png';
import img_calendar from '../../images/calendar.png';
import img_age from '../../images/age.png';

function MainScard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("accessToken");

  React.useEffect(() => {
    token ? dispatch(GetMainAxois()) : dispatch(GetMainLogin());
  }, []);

  const post = useSelector((state) => state.Data.Profile);

  if (!post) {
    return <div></div>;
  }

  return (
    <>
      <Container>
        {post.recruitPosts &&
          post.recruitPosts.map((item, idx) => {
            return (
              item != null && (
                <div className="card animate__animated animate__fadeIn" key={idx}>
                  <div className="card-top">
                    {item.status === true ? (
                      <p>모집완료</p>
                    ) : (
                      <span>모집중</span>
                    )}

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
                              dispatch(GetMainAxois())
                            });
                        }}
                      ></BsFillBookmarkFill>
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
                              dispatch(GetMainAxois())
                            });
                        }}
                      />
                    )}
                  </div>
                  {/* 카드 타이틀 */}
                  <div
                    className="title"
                    onClick={() => {
                      navigate("/recruitdetail/" + item.recruitPostId);
                    }}
                  >
                    <h1>{item != null && item.title}</h1>
                  </div>
                  {/* 카드 내용물 */}
                  <div
                    className="card-bottom"
                    onClick={() => {
                      navigate("/recruitdetail/" + item.recruitPostId);
                    }}
                  >
                    <p><img src={img_location}/>
                    {item != null && item.place}</p>
                    <p><img src={img_time}/>
                    {item != null && item.date}</p>
                    <p><img src={img_calendar}/>
                    {item != null && item.time}</p>
                    <p><img src={img_age}/>
                    {item != null && item.age}</p>
                  </div>
                </div>
              )
            );
          })}
      </Container>
    </>
  );
}
const Container = styled.div`
  display: grid;
  // grid-template-columns: repeat(auto-fit, 380px);
  grid-template-columns: repeat(auto-fill, minmax(24%, 100px));
  gap: 2em;
  justify-content: center;
  align-items: center;
  width: 100%;
  .card {
    display: flex;
    height: 100%;
    background: white;
    border-radius: 20px;
    border: 1px solid lightgray;
    // box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.17);
  }

  .card-top > p {
    margin: 0px 0px 4px 4px;
    background-color: #a8a8a8;
    border-radius: 20px;
    padding: 6px 15px 7px 15px;
    color: white;
  }
  .card-top {
    display: flex;
    margin: 30px 0px 0px 30px;
    width: 100%;
    justify-content: space-between;
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
    margin-bottom: 5px;
   
    img {
      margin-right: 5px;
    }
  }

  .checkIcon {
    margin-right: 65px;
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

export default MainScard;
