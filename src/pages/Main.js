import React from 'react'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

//  elements & components
import Grid from '../components/elements/Grid';
import Header from '../components/Header'
import Swiper from '../components/main/Swiper'
import SCard from '../components/cards/SCard'
import LCard from '../components/cards/LCard'

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Swiper />
      <div className='recruit'>
        <p>모집 게시글</p>
        <SCard />
        <button>게시글 더 보기</button>
      </div>
      <div className='place'>
        <p>장소 추천</p>
        <LCard />
        <button>게시글 더 보기</button>
      </div>
      <div className='review'>
        <p>육아 물품 리뷰</p>
        <SCard />
        <button>게시글 더 보기</button>
      </div>
    </div>
      <Footer/>
  )
}



export default Main
