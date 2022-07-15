import React from 'react'
import styled from 'styled-components';

//  elements & components
import Grid from '../../components/elements/Grid';
import Header from '../../components/main/Header';
import Footer from '../../components/main/Footer';
import RCard from '../../components/cards/RCard';

import { useNavigate } from 'react-router-dom';

function Review() {
  const navigate = useNavigate();
  return (
    <div>
      <Header/>
      <Container>
      <TitleBox>
      <Title>육아템 리뷰</Title>
            <div className='subtitle'>
            <SubTitle>
            유용한 육아 아이템들을 소개하고 추천해요!
            </SubTitle>
            </div>
            <span>내가 써본 육아템, 알려주고 싶다면?</span>
            <div className='button' >
            <Btn onClick={() => 
            { navigate(`/reviewadd`) }}
            >
              후기 작성하기</Btn>
              </div>
          </TitleBox>
          <div className='card_box'>
          <RCard />
          </div>
      </Container>
      <Footer/>
    </div>
  )
}

const Container = styled.div`
font-family: 'Nanum Gothic';

.subtitle {
  display: flex;
  justify-content: center;
  align-items:center;
  }
  
  span {
  display: flex;
  justify-content: center;
  align-items:center;
  margin-bottom: 20px;
  }
  
  .card_box {
    padding-top: 70px;
    background-color: #F5F5F5;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items:center;
    margin-bottom: 20px;
    }
`;

const TitleBox = styled.div`
background-color: white;
padding-top: 50px;
padding-bottom: 70px;
`;


const Title = styled.p`
display: flex;
justify-content: center;
align-items:center;
font-size: 35px;
font-weight: 750;
margin-bottom: 0px;
color: #6B4E16;
`

const SubTitle = styled.p`
font-size: 20px;
font-weight: 700;
line-height: 29px;
color: #3C3C3C;
margin-bottom: 50px;
padding-top: 15px;
 `;

const Btn = styled.button`
height: 50px;
font-size: 15px;
width: 330px;
color: #ffffff;
background-color: #3C3C3C;
text-align: center;
border-radius: 30px;
touch-action: manipulation;
justify-content: center;
align-items: center;
border: 1px solid transparent;
cursor: pointer;
 `;


export default Review;
