// 모집 카드
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { GetMainAxois } from "../../redux/modules/Data";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";
import Swal from "sweetalert2";

function MainScard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(GetMainAxois());
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
                <div className="card" key={idx}>
                  <div className="card-top">
                    <p>모집완료</p>
                    {item.bookmarkStatus === true ? (
                      <div className="iconBox">
                        <BsFillBookmarkFill
                          className="checkIcon"
                          onClick={() => {
                            axios
                              .put(
                                "http://dlckdals04.shop/api/recruits/bookmark/" +
                                  item.recruitPostId,
                                null,
                                {
                                  headers: {
                                    Authorization: `Bearer ${getCookie(
                                      "accessToken"
                                    )}`,
                                  },
                                }
                              )
                              .then((res) => {
                                Swal.fire({
                                  text: `북마크 해제`,
                                  icon: "success",
                                  confirmButtonText: "완료",
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    window.location.reload();
                                  }
                                });
                              })
                              .catch((err) => console.log(err));
                          }}
                        ></BsFillBookmarkFill>
                      </div>
                    ) : (
                      <div className="iconBox">
                        <BsBookmark
                          className="icon"
                          onClick={() => {
                            axios
                              .put(
                                "http://dlckdals04.shop/api/recruits/bookmark/" +
                                  item.recruitPostId,
                                null,
                                {
                                  headers: {
                                    Authorization: `Bearer ${getCookie(
                                      "accessToken"
                                    )}`,
                                  },
                                }
                              )
                              .then((res) => {
                                Swal.fire({
                                  text: `북마크 등록`,
                                  icon: "success",
                                  confirmButtonText: "완료",
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    window.location.reload();
                                  }
                                });
                              })
                              .catch((err) => console.log(err));
                          }}
                        />
                      </div>
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
                    <p>{item != null && item.createdAt}</p>
                    <p>{item != null && item.time}</p>
                    <p>{item != null && item.place}</p>
                    <p>{item != null && item.age}</p>
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
    border-radius: 30px;
    border: none;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.17);
  }

  .iconBox {
    margin-left: 20px;
  }

  .card-top {
    display: flex;
    margin: 30px 0px 0px 30px;
    width: 100%;
    justify-content: space-between;
  }

  .card-top p {
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
  }

  .colorIcon {
    background-color: #f48fb1;
    margin-right: 60px;
    width: 34px;
    height: 34px;
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
