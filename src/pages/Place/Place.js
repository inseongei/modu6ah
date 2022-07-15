import React from 'react'
import styled from 'styled-components';

//  elements & components
import Grid from '../../components/elements/Grid';
import Header from '../../components/main/Header';
import Footer from '../../components/main/Footer';
import LCard from '../../components/cards/LCard';
import { useNavigate } from 'react-router-dom';

function Place() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Container>
        <TitleBox>
          <Title>장소 추천</Title>
          <div className='subtitle'>
            <SubTitle>
              아이들과 함께 출입이 가능한 장소들을 공유해요!
            </SubTitle>
          </div>
          <span>내가 다녀온 장소, 추천하고 싶다면?</span>
          <Btn onClick={() => { navigate(`/placeadd`) }}
          >
            추천글 작성하기</Btn>
        </TitleBox>
        <div className='card_box'>
          <LCard />
        </div>
      </Container>
      <Footer />
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

export default Place
