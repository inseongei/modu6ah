import React from 'react'
import styled from 'styled-components'
import { FaFigma,FaGithub,FaStore } from "react-icons/fa";
import '../shared/App.css'




const Footer = () => {
  return (
    <FooterContainer>
        <div className='Footer_main'>

        </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
    width: 100%; 
    color:#3C3C3C;
    height: 130px;
    background-color: #3C3C3C;
    position: relative;
    transform: translateY(1100%);

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