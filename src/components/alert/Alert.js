import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Grid from "../elements/Grid";
import cancel from '../../images/cancel.png';
import component from '../../images/Component.png';

import { useNavigate } from "react-router-dom";

const Alert = () => {
    const navigate = useNavigate();

    return (

            <DetailContainer>
                <Grid align="center" height="100px" margin="0 0 32 0">
                    <div className="cancel_img">
                        <img src={cancel} alt="로고" />
                    </div>
                    <Logo>
                
                        <div className="check_img">
                            <img src={component} alt="로고" />
                        </div>
                    </Logo>
                    <Text>
                    text text
                    </Text>

                    <LoginBtn
                    // onClick={() => { navigate(`/login`) }}
                    >
                        확인
                    </LoginBtn>
                </Grid>
            </DetailContainer>

    );
};


const DetailContainer = styled.div`
  font-family: "Nanum Gothic";
  width: 300px;
  height: 250px;
  cursor: auto;
  display: flex;
  outline: none;
  background-color: #fff ;
  border: 1px solid #E4E4E4;
  border-radius: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.17);

  p {
    color: #6B4E16;
    font-weight: bolder;
    margin-top: 20px;
  }

.input_box {

    input {
       width: 270px;
        padding: 8px 13px 8px 13px;
        border-radius: 10px;
        border: 1px solid #A8A8A8;
        outline: none;
    }
}

.cancel_img > img{
    width: 20px;
    margin-top: 20px;
    margin-left: 240px;
 }
`

const Logo = styled.h1`
 display:flex;
 align-items: center;
 justify-content: center;
 margin-top: 15px;

 .check_img > img {
   width: 40px;
 }

 .logo {
   margin-left: 15px;
   color: #F4B03E;
   font-size: 30px;
 }
`

const Text = styled.div`
margin-top: 20px;
font-weight: bolder;
`;

const LoginBtn = styled.button`
width: 100px;
height: 40px;
font-size: 10px;
color: #ffffff;
background-color: #3C3C3C;
text-align: center;
border-radius: 30px;
touch-action: manipulation;
justify-content: center;
align-items: center;
border: 1px solid transparent;
cursor: pointer;
margin-top: 27px;
font-weight: bold;
font-size: 14px;
`;

Modal.setAppElement("#root");

export default Alert;
