import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
//  elements & components
import Grid from '../components/elements/Grid';
import Header from '../components/Header'
import Swiper from '../components/main/Swiper'
import SCard from '../components/cards/SCard'
import LCard from '../components/cards/LCard'
import RCard from '../components/cards/RCard'
import Footer from '../components/Footer'

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Swiper />
      <Grid>
  
          <div className='recruit'>
            <Title>같이해요</Title>
            <SubTitle>다양한 공동육아 프로그램를 둘러보고,
              참여를 신청해요 </SubTitle>
            <SCard />
          </div>

     
            <div className='place'>
                <Title>장소 추천</Title>
                <SubTitle>
                  아이들과 함께 출입이 가능한 장소들을 공유해요
                  </SubTitle>
                <LCard />
            </div>

            <div className='review'>
              <Title>육아템 리뷰</Title>
              <SubTitle>
                육아는 장비빨! 생생한 사용후기를 공유해요
            </SubTitle>
              <RCard />
            </div>
         
          <Footer />
      </Grid>
    </div>

  )
}

const Title = styled.p`
display: flex;
align-items: center;
justify-content: center;
font-family: 'Noto Sans KR';
font-size: 35px;
font-weight: 700;
margin-top: 150px;
margin-bottom: 8px;
 `

const SubTitle = styled.p`
display: flex;
align-items: center;
justify-content: center;
font-family: 'Noto Sans KR';
font-size: 20px;
font-weight: 700;
line-height: 29px;
color: #6B4E16;
margin-bottom: 60px;
 `;

export default Main
