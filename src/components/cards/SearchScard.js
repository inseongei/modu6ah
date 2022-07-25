// 모집 카드
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useSearchParams} from 'react-router-dom';

function SearchScard({data, query}) {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState();
  const [btn, setbtn] = React.useState(true);

  // 매니저님께 여쭤 볼 부분입니다. 지우지 말아주세요 :)
  // const dispatch = useDispatch();
  // const search = useSelector((state) => state);
  // console.log(search);
  // React.useEffect(() => {
  //   dispatch(GetMainAxois());
  // }, []);

  return (
    <>
            <Container>
              {data &&
                data.filter((item)=> 
                   item.title.includes(query) ||
                   item.content.includes(query)
                ).map((item) => {
                  return (
                    <div className="card" key={data._id}>
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
                        className="title"
                        onClick={() => {
                          navigate("/recruitdetail/" + item.recruitPostId);
                        }}
                      >
                        <h1>{item.title}</h1>
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
                  );
                })}
            </Container>
            <div className="btnBox">
              <button
               
                className="MoreBtn" >
                더 보기
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
  width: 100%;
  .card {
    display: flex;
    height: 100%;
    background: white;
    border-radius: 30px;
    border: none;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.17);
  }
  .card-top {
    display: flex;
    margin: 30px 0px 0px 30px;
    width: 100%;
    justify-content: space-between;
  }
  .card-top > p {
    margin: 0px 0px 4px 4px;
    background-color: #a8a8a8;
    border-radius: 20px;
    padding: 6px 15px 7px 15px;
    color: white;
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
    margin: 0px 0px 8px 4px;
  }
  .checkIcon {
    margin-right: 60px;
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

export default SearchScard;
