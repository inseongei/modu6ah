// 육아템 리뷰 카드
import React,{useState} from "react";
import styled from "styled-components";
import { MdOutlinePlace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import InfiniteScroll from "react-infinite-scroll-component";

function RCard() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [noMore,setnoMore] = useState(true)
  const [index , setindex] = useState(1)

  // 배열 자르기 함수 (배열 , 몇개단위)
  const division = (arr, n) => {
    const length = arr.length;
    const divide =
      Math.floor(length / n) + (Math.floor(length % n) > 0 ? 1 : 0);
    const newArray = [];
    // 배열 0부터 n개씩 잘라 새 배열에 넣기
    for (let i = 0; i <= divide; i++) {
      newArray.push(arr.splice(0, n));
    }
    return newArray;
  };


  React.useEffect(() => {
    axios
      .get("http://dlckdals04.shop/api/reviews", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data.reviewPosts)
        let data = res.data.reviewPosts.slice(0,3);
        setData([...data]);
      });
  }, []);

  // 페이지 스크롤이 하단에 도착할때 실행되는 함수
  const axiosData = () => {
    axios
      .get("http://dlckdals04.shop/api/reviews", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data.reviewPosts);
        let result = division(res.data.reviewPosts,3)
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
                          "http://dlckdals04.shop/api/reviews/bookmark/" +
                            item.reviewPostId,
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
                  ></BsFillBookmarkFill>
                ) : (
                  <BsBookmark
                    className="bookmark"
                    onClick={() => {
                      axios
                        .put(
                          "http://dlckdals04.shop/api/reviews/bookmark/" +
                            item.reviewPostId,
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
            <a>
              <MdOutlinePlace /> {item.url}
            </a>
            {/* 카드 중간 '이미지'*/}
            <div
              className="card-body"
              onClick={() => {
                navigate("/reviewdetail/" + item.reviewPostId);
              }}
            >
              <div className="image">
                <img src={item.imageUrl[0]} alt="사진" />
              </div>
              {/* 카드 아래쪽 '아이디 및 내용물' */}
              <div className="profile_box">
                <div className="detail_profile">
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
  display: grid;
  grid-template-columns: repeat(auto-fit, 460px);
  gap: 3.6em;
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

export default RCard;
