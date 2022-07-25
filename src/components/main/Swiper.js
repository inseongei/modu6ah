import React from "react";
import styled from "styled-components";
import mainImg from "../../images/mainimg.png";
import "animate.css";
import '../../shared/font/font.css'

const Swiper = () => {
  return (
    <Item>
      <div className="MainBox">
        <div className="textBox">
          <div className="title animate__animated animate__fadeInDown animate__slow">
            '육아', 함께 그리고 즐겁게!
          </div>
          <div className="subtitle animate__animated animate__fadeInUp animate__slow">
            ‘공동육아’란 부모 등 다양한 이웃이 모여 체험, 놀이, 학습 등 활동을
            함께 하고 육아 정보
            <br />를 공유하는 새로운 보육 공동체입니다. 양육자와 아이 모두 사회
            구성원으로 성장할 수<br /> 있도록 서로 도와가며 모두를 위한 육아의
            장을 만들어나가요!
          </div>
        </div>

        <div className="imgBox animate__animated animate__fadeInRight animate__slow">
          <img src={mainImg} alt="사진" className="mainImg" />
        </div>
      </div>
    </Item>
  );
};

const Item = styled.div`
  width: 100%;
  height: 700px;
  margin: auto;
  display: flex;
  background-color: #fff;

  .MainBox {
    display: flex;
    width: 1440px;
    margin: auto;
  }
  .mainImg {
    width: 499px;
    height: 388px;
  }

  .textBox {
    width: 720px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-family: "NanumGothic";
    font-weight: 700;
    font-style: normal;
    font-size: 50px;
    line-height: 57px;
    margin-bottom: 30px;
  }

  .subtitle {
    color: #000000;
    font-family: "NanumGothic";
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
  }

  .imgBox {
    width: 720px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title.animate__animated.animate__animate__fadeInUp {
    --animate-duration: 2s;
  }

  .subtitle.animate__animated.animate__fadeInUp {
    --animate-duration: 2s;
  }

  .imgBox.animate__animated.animate__fadeInRight {
    --animate-duration: 2s;
  }
`;

export default Swiper;
