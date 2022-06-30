import React from 'react'
import styled from 'styled-components'
import { FaReact,FaNodeJs } from "react-icons/fa";
import { ImPencil } from "react-icons/im";

const Footer = () => {
  return (
    <FooterContainer>
        <div className='FooterC'>

        <div className='icon'>
            <FaReact className='react'></FaReact> X <FaNodeJs className='Node'></FaNodeJs> X <ImPencil className='design'></ImPencil>
        </div>

        <div className='footerInformation'>
        <div>Back-End : 이창민, 조세림 , 안재훈</div>
        <div>Front-End : 김숙영 , 정인성</div>
        <div>designer : 서혜빈</div>
        </div>

        <div className='mine'> Copyright 2022. 모두의 육아 all rights reserved.</div>
        </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
@font-face {
    font-family: 'IBMPlexSansKR-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
    font-family: 'IBMPlexSansKR-Regular';
    width: 100%; 
    color:#e0e0e0;
    height: 30vh;
    background-color: #37474f;

.FooterC{
    padding:15px;
}

.icon{
    font-size:40px;
}

.react{
    font-family: 'SuncheonB';
    color:#4fc3f7;
    font-size:50px;
}

.Node{
    font-family: 'SuncheonB';
    color:#aed581;
    font-size:50px;
}

.design{
    font-family: 'SuncheonB';
    color:#ffe082;
    font-size:50px;
}

.mine{
    position:relative;
    top:100px;
}

`



export default Footer