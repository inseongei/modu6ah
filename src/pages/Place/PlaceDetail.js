import React, { useState } from "react";
import styled from "styled-components";

// elements & components
import Header from "../../components/main/Header";
import Place from "./Place";
import PlaceComment from "../../components/pages/PlaceComment";
import KakaoMap from "../../components/pages/KakaoMap";
import { GrLocation } from "react-icons/gr";
import { FaStar } from "react-icons/fa";

import axios from "axios";
import data from "../../shared/data";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/main/Footer";

const PlaceDetail = () => {
  const [datas, setDatas] = useState(data);
  const [currItem, setCurrItem] = useState(datas[0]);
  const navigate = useNavigate();
  const [detail, setDetail] = useState("");
  const { placePostId } = useParams();
  const Profile = localStorage.getItem("profileUrl");

  React.useEffect(() => {
    axios
      .get("http://dlckdals04.shop/api/places/" + placePostId)
      .then((res) => {
        console.log(res.data);
        setDetail(res.data.placeDetails);
      });
  }, []);

  if (!detail) {
    return <div></div>;
  }

  return (
    <>
      <Header />
      <Container>
        <Title>
          <div className="subject">장소추천</div>
          <div className="page">
            <p>상세페이지</p>
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
              <div className="box_top">
                <div className="title">
                  <h2>{detail.title}</h2>
                  <span>
                    <FaStar
                      size={28}
                      style={{
                        color: "#FFBA5A",
                        marginLeft: "5px",
                      }}
                    />
                  </span>
                  <p>{detail.star}점</p>
                </div>
                <div className="location">
                  <p>
                    <GrLocation />
                    {detail.region}
                  </p>
                </div>
                <div className="info">
                  <Image>
                    <div className="ProfileImg">
                      <img src={Profile} />
                    </div>
                  </Image>
                  <p className="nickname">{detail.nickname}</p>
                </div>
              </div>
              <div className="box">
                <div className="content">
                  <p>{detail.content}</p>
                </div>
              </div>
              <Btn>
                <button className="btn">수정</button>
                <button className="btn">삭제</button>
              </Btn>
            </ContentBox>
          </div>
          <div className="mapbox">
            <KakaoMap />
          </div>
        </Box>
        <PlaceComment />
      </Container>
      <Footer />
    </>
  );
};

const Title = styled.div`
  padding-top: 40px;
  margin-left: 130px;

  .subject {
    color: #a8a8a8;
  }

  .page {
    font-size: 30px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  width: 1200px;
  height: 1300px;

  background: white;

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  margin-top: 50px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

  border: 1px solid lightgray;
  border-radius: 10px;

  .Box {
    margin: 80px auto;
    width: 80%;
    height: 70vh;
    display: flex;
  }
  .imgBox {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .Bigimg {
    width: 50%;
    height: 50%;
    margin: auto;
    border-radius: 30px;
  }

  .Bigimg > img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }

  .imgSmall {
    height: 30%;
    display: flex;
  }

  .imgSmall > div {
    border: 1px solid black;
    margin: 30px auto;
    width: 100px;
    height: 100px;
    border-radius: 30px;
  }

  .imgSmall > div > img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }

  .mapbox {
    margin-top: 50px;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #f5f5f5;

  .Box {
    margin: 30px auto;
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

const PhotoBox = styled.div`
  display: flex;
  width: 650px;
  margin-top: 50px;

  .picture {
    width: 100%;
    height: 600px;
  }

  .box {
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mainPhoto {
    border: 1px solid black;
    margin-left: 35px;
    margin-bottom: 20px;
    width: 550px;
    height: 350px;
    border-radius: 30px;
  }

  .photos {
    widht: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .photos > ul {
    display: flex;

    img {
      width: 100%;
      height: 100%;
      border-radius: 30px;
    }
  }
`;

const ContentBox = styled.div`
  width: 500px;
  margin-top: 80px;
  margin-left: 40px;

  .title {
    display: flex;
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
    margin-left: 42px;

    h2 {
      margin-top: 2px;
    }

    p {
      margin-left: 7px;
      margin-top: 3px;
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
    margin: 10px 0px 10px 40px;
  }

  .info {
    display: flex;
    align-items: center;
    margin-left: 30px;

    p {
      margin-top: 14px;
      margin-left: 10px;
    }
  }

  .profile {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  .profile > img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  .nickname {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    margin-left: 30px;
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .content {
    border: 2px solid #e4e4e4;
    border-radius: 10px;
    width: 400px;
    height: 350px;
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
    margin-left: 12px;
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
  margin-left: 50px;
  margin-right: 40px;

  .btn {
    width: 300px;
    height: 30px;
    border-radius: 20px;
    color: white;
    background-color: #3c3c3c;
    margin-top: 20px;
    margin-right: 10px;
    padding-top: 9px;
    padding-bottom: 33px;
    border: 0;
    outline: 0;
  }
`;

export default PlaceDetail;
