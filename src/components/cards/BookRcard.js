// 육아템 리뷰 카드
import React from "react";
import styled from "styled-components";
import { MdOutlinePlace } from "react-icons/md";
import axios from "axios";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

function BookRcard() {
  const [book, setbook] = React.useState();
  const [btn, setbtn] = React.useState(true)

  React.useEffect(() => {
    axios
      .get("https://zhaoxilin.shop/api/mypage/bookmark", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res)
        setbook(res.data.reviewBookmarkList.slice(0,3));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const ReviewMore = async () => {
    await axios.get("https://zhaoxilin.shop/api/mypage/bookmark/",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res)=>{
      console.log(res)
      setbtn(!btn)
      btn ? setbook(res.data.reviewBookmarkList) : setbook(res.data.reviewBookmarkList.slice(0,3)) 
    })
  };




  return (
    <>
    <Container>
      {book &&
        book.map((data, idx) => {
          return (
            <div className="card" key={idx}>
              {/* 카드 위쪽 '타이틀' */}
              <div className="card-top">
                <div>
                  <h3>{data.title}</h3>
                  <p>{data.productType}</p>
                </div>

                <div>
                  {data.bookmarkStatus === true ? (
                    <BsFillBookmarkFill
                      className="bookmark2"
                      onClick={() => {
                        axios
                          .put(
                            "https://zhaoxilin.shop/api/reviews/bookmark/" +
                              data.reviewPostId,
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
                            "https://zhaoxilin.shop/api/reviews/bookmark/" +
                              data.reviewPostId,
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
              <a href={data.url}>
                <MdOutlinePlace />
                {data.url}
              </a>
              {/* 카드 중간 '이미지'*/}
              <div className="card-body">
                <div className="image">
                  <img src={data.imageUrl[0]} alt="사진" />
                </div>
                {/* 카드 아래쪽 '아이디 및 내용물' */}
                <div className="profile_box">
                  <div className="detail_profile">
                    <img src={data.profileUrl} alt="프로필 이미지" />
                  </div>
                  <strong>{data.nickname}</strong>
                </div>
                <div className="content">
                  <p>{data.content}</p>
                </div>
              </div>
            </div>
          );
        })}
    </Container>
    <div className="btnBox">
    <button  className ="MoreBtn" onClick={ReviewMore}>{btn ? "더보기" : "닫기"}</button>
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

export default BookRcard;
