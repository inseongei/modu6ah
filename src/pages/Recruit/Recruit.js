// 모집 게시글 페이지
import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

//  elements & components
import Grid from '../../components/elements/Grid';
import Header from '../../components/main/Header';
import SCard from '../../components/cards/SCard'

function Recruit() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Container>
        <TitleBox>
          <Title>같이해요</Title>
          <div className='subtitle'>
            <SubTitle>
              다양한 공동육아 프로그램를 둘러보고,
              참여를 신청해요!</SubTitle>
          </div>
          <span>내가 하는 활동, 함께 할 팀원을 모집하고 싶다면?</span>
          <Btn onClick={() => { navigate(`/recruitadd`) }}
          >모집글 작성하기</Btn>
        </TitleBox>
        <div className='card_box'>
          <SCard />
        </div>
      </Container>

    </div>
  )
}



const Container = styled.div`
font-family: 'Noto Sans KR';

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
font-weight: 700;
margin-bottom: 0px;
`

const SubTitle = styled.p`
font-size: 20px;
font-weight: 700;
line-height: 29px;
color: #6B4E16;
margin-bottom: 50px;
padding-top: 15px;
 `;

const Btn = styled.button`
margin-left: 38.5%;
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


export default Recruit
