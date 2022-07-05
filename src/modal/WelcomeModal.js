import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

import Grid from '../components/elements/Grid';

import logo from '../images/logo.png';


function WelcomeModal() {

    const navigate = useNavigate();

    return (
        <div>
            <ModalBody>
                <ModalOverlay>
                    <ModalContent>
                        <DetailContainer>
                            <Grid align="center" height="100px" margin="0 0 32 0">
                                <Logo>
                                    <div className="logo_img"
                                        onClick={() => { navigate(`/`) }}
                                    ><img src={logo} alt="로고" /></div>
                                    <div className="logo">모두의 육아</div>
                                </Logo>
                                <SubTitle>
                                    가입 완료 <br />
                                   환영합니다!
                                </SubTitle>
                                <Text>
                                    우리 함께 <br/>
                                    육아를 즐겁게
                                </Text>
                                <LoginBtn
                        onClick={() => 
                            { navigate(`/login`) }}
                        type='submit'>
                        로그인 하기
                      </LoginBtn>
                            </Grid>
                        </DetailContainer>
                    </ModalContent>
                </ModalOverlay>
            </ModalBody>
        </div>
    )
}


const ModalBody = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  z-index: 0;
  overflow-y: hidden;
`
const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #0009;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
`

const ModalContent = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const DetailContainer = styled.div`
  height: 600px;
  width: 50%;
  cursor: auto;
  display: flex;
  outline: none;
  background-color: #fff;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

`

const Logo = styled.h1`
 display:flex;
 align-items: center;
 justify-content: center;
 margin-top: 40px;

 .logo_img > img {
   width: 60px;
 }

 .logo {
   margin-left: 15px;
   color: #F4B03E;
   font-size: 35px;
 }
 }
`

const SubTitle = styled.h3`
display: flex;
align-items: center;
justify-content: center;
margin-top: 70px;
`;

const Text = styled.p`
margin-top: 60px;
`;

const LoginBtn = styled.button`
height: 55px;
font-size: 15px;
width: 40%;
color: #ffffff;
background-color: #A58646;
text-align: center;
border-radius: 40px;
touch-action: manipulation;
justify-content: center;
align-items: center;
border: 1px solid transparent;
cursor: pointer;
margin-top: 60px;

`;

const FooterBtn = styled.div`
  padding: 80px 0 0 0px;
  margin: 0px 0 200px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  gap: 8px;
  .cancel-btn,
  .submit-btn {
    background-color: #fff;
    border: 0.5px solid #d1d1d1;
    padding: 0 9px;
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    border-radius: 4px;
    height: 32px;
    line-height: 30px;
    color: #767676;
    transition: all 0.1s ease-in-out;

    &:hover {
      color: #111;
      border: 0.5px solid #111;
    }
  }
`

const Textarea = styled.textarea`
  width: 95%;
  padding: 10px;
  margin: 10px 0px 13px;
  font-family: 'Noto Sans KR';
  font-size: 13px;
  border-radius: 4px;
  border: 1px solid #d1d1d1;
  transition: border 0.1s ease-in-out;
  resize: none;

  &:focus {
    outline: none;
    border: 1px solid #111;
  }
`

export default WelcomeModal;
