import React,{useState} from 'react'
import styled from 'styled-components'
import { FaStar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import Swal from "sweetalert2";

import Header from '../../components/main/Header'
import ReviewComment from '../../components/pages/ReviewComment'
import data from '../../shared/data';
import PhotoList from '../../components/pages/PhotoList';
import Content from '../../components/pages/Content';
import {useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/main/Footer';
import ChatIcon from '../../components/main/ChatIcon'
import revise from '../../images/revise.png';
import img_delete from '../../images/delete (1).png'
import location from '../../images/location.png';

const ReviewDetail = () => {
const nickname = localStorage.getItem("nickname");
const Profile = localStorage.getItem("profileUrl");
const {reviewPostId} = useParams();
const [detail, setDetail] = React.useState()
const navigate = useNavigate()
 
  React.useEffect(() => {
    axios
      .get("https://zhaoxilin.shop/api/reviews/" + reviewPostId)
      .then((res) => {
        console.log(res.data)
        setDetail(res.data.reviewDetails);
      });
  }, []);

  const deletePlace = () => {

    Swal.fire({
      title: '게시글을 삭제하시겠습니까 ?',
      text: "삭제된 게시글은 복구가 불가능합니다",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#ffb300',
      confirmButtonText: '삭제',
      cancelButtonText:'취소'
    }).then((result) => {
      if (result.isConfirmed) {
        axios
        .delete('https://zhaoxilin.shop/api/reviews/' + reviewPostId,
          { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } })
        .then((response) => {
          Swal.fire({
            text: `게시글 삭제가 완료되었습니다!`,
            icon: "success",
            confirmButtonText: "확인", 
            confirmButtonColor: '#ffb300'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/review')
            }
          });
          
        })
        .catch((error) => {
          alert("게시글을 삭제할 권한이 없습니다.");
        });
      }
    })   
  };

  if (!detail) {
    return <div></div>;
  }

  return (
    <>
      <Header />
      <Container>
      <div style={{width:"1000px",
        margin: "0 auto" }}>
        <Title>
          <div className="subject">
            육아템 리뷰
            </div>
          <div className="page">
            <p>상세 보기</p>
          </div>
        </Title>
        <Box>
          <div className="Box">
            <div className="imgBox">
              <div className="Bigimg">
                <img src={detail.imageUrl[0]} alt="사진" />
              </div>
              <div className="imgSmall">
                {detail.imageUrl.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <img src={item} alt="사진" />
                    </div>
                  );
                })}
              </div>
            </div>
            <ContentBox>
              {/* 카드 오른쪽 위 */}
              <div className="box_top">
                <div className="title">
                  <div className='title_box'>
                  <span>{detail.title}</span>
                  <p>{detail.productType}</p>
                  </div>
                  {nickname === detail.nickname ? (
                <Btn>
                  <button className="btn"
                  style={{ marginRight: "-8px" }}
                  onClick={()=>{navigate('/ReviewEdit/' + reviewPostId)}}
                  >
                  <img src={revise} />
                  </button>
                  <button className="btn"
                  onClick={deletePlace}
                  >
                <img src={img_delete} />
                  </button>
                </Btn>
              ) : (
                <></>
              )}
                </div>
                {/* 카드 오른쪽 중간 */}
                <div className="location">
                  <p>
                  <img src={location}/>
                    {detail.url}
                  </p>
                </div>
                <div className="info">
                  <Image>
                    <div className="ProfileImg">
                      <img src={detail.profileUrl} />
                    </div>
                  </Image>
                  <p className="nickname">{detail.nickname}</p>
                </div>
              </div>
              {/* 카드 내용 */}
              <div className="box">
                <div className="content">
                  <p>{detail.content}</p>
                </div>
              </div>
            </ContentBox>
          </div>
        </Box>
        <ReviewComment />
        </div>
      </Container>
      <ChatIcon />
      <Footer />
    </>
  );
};

const Title = styled.div`
  padding-top: 40px;

  .subject {
    color: #a8a8a8;
    margin-bottom: 2px;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 700;
  }

  .page {
    font-size: 30px;
    font-weight: 700;
  }

  p {
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 700;
  }
`;

const Box = styled.div`
width: 1040px;
height: 600px;

background: white;

margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
margin-top: 25px;
margin-bottom: 32px;
display: flex;
flex-direction: column;

border: 1px solid #E4E4E4;
border-radius: 10px;

  .Box {
    display: flex;
  }

  .imgBox {
    width: 400px;
    display: flex;
    flex-direction: column;
  }

  .Bigimg {
    width: 400px;
    height: 300px;
    border-radius: 15px;
  }

  .Bigimg > img {
    width: 400px;
    height: 300px;
    border-radius: 15px;
  }

  .imgSmall {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgSmall > div {
    border: 1px solid black;
    margin: 25px 10px;
    width: 120px;
    height: 120px;
    border-radius: 15px;
  }

  .imgSmall > div > img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #F5F5F5;

  .Box {
    padding-top: 50px;
    padding-right: 80px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .mapbox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ContentBox = styled.div`
  width: 380px;
  margin-left: 50px;

  .title {
    display: flex;
    font-size: 20px;
    line-height: 36px;

    span {
      margin-top: 5px;
      font-family: 'Nanum Gothic', sans-serif;
      font-weight: 700;
      font-size: 26px;
   
    }

    p {
      color: #A8A8A8;
      margin-left: 9px;
      margin-top: 5px;
    }
  }

  .icon {
    color: #fdd835;
    margin-left: 30px;
  }

  .starScore {
    color: #a8a8a8;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin: 7px;
  }

  .location {
    display: flex;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin: 10px 0px 10px 0px;

    img {
      width: 25px;
      margin-bottom: 5px;
      margin-right: 5px;
    }
  }

  .info {
    display: flex;
    align-items: center;

    p {
      margin-top: 14px;
      margin-left: 10px;
    }
  }

  .profile > img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  .nickname {
    font-style: normal;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    margin-left: 30px;
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
  }

  .content {
    border: 2px solid #e4e4e4;
    border-radius: 10px;
    width: 500px;
    height: 220px;
    overflow: hidden;
    padding: 10px;
  }

  .content > p {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    width: 100%;
    height: 80%;
  }

  .content > div {
    width: 100%;
    height: 20%;
  }

  .ParkBtn {
    width: 30%;
    height: 50%;
    border-radius: 15px;
    font-size: 17px;
    color: #263238;
    border: none;
    background-color: #ffa000;
  }

  .btnBox {
    display: flex;
    justify-content: space-around;
  }

  .KidBtn {
    width: 30%;
    height: 50%;
    border-radius: 15px;
    font-size: 17px;
    color: #263238;
    border: none;
    background-color: #c5e1a5;
  }
`;

const Image = styled.div`
  .ProfileImg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 6px;
    cursor: pointer;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`;

const Btn = styled.div`
  display: flex;
  position: absolute;
  padding-left: 416px;

  .btn {
    height: 20px;
    border-radius: 20px;
    border: 0;
    outline: 0;
  }

  img {
    width: 28px;
  }
`;

export default ReviewDetail;
