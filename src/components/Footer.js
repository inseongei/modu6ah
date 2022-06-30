import React from 'react'
import styled from 'styled-components'
import { FaFigma,FaGithub,FaStore } from "react-icons/fa";
import '../shared/App.css'




const Footer = () => {
  return (
    <FooterContainer>
        <div className='Footer_main'>
            <div className='icon_box'>
            <a href='https://github.com/Maiowol/Forkids_Project'><FaGithub></FaGithub></a> &nbsp;
            <a href='https://github.com/changmin97/forkidsProject'><FaGithub></FaGithub></a> &nbsp;
            <a href='https://www.figma.com/file/6oxe17NH1VuhHdZxdj9X9N/항해99'><FaFigma></FaFigma></a> &nbsp;
            <a href='##'><FaStore></FaStore></a> &nbsp;
            
            </div>

            <div>
                Front-End : 김숙영, 정인성
            </div>

            <div className='position'>
                Back-End : 이창민, 조세림,안재훈
            </div>

            <div>
                designer : 서혜빈
            </div>
            <span className='mine'>
                Copyright 2022. 모두의육아 all right reserved.
            </span>
        </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
    width: 100%; 
    color:#3C3C3C;
    height: 173px;
    background-color: #E4E4E4;

.Footer_main{
    padding-top:10px;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
}
.hi{
    display:flex;
    flex-direction: column;
}
.icon_box{
    font-size:35px;
    padding-left:20px;
}

.position{
    margin: 7px 0px 7px 0px;
}

.mine{
    text-align:right;
    width:100%;
}

a{
    color:black;
    text-decoration: none;
}

.icon{
    font-size:20px;
}

@media screen and (max-width: 768px) {
    height: 182px;

    .mine{
        text-align: center;
        margin-top:5px;
    }

}
`



export default Footer