import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import axios from "axios";
import email from '../../images/email.png';
import Grid from "../elements/Grid";
import Fin from '../../images/Fin.png';

import { useNavigate } from "react-router-dom";

const EmailAlert = ({ open, onClose, emailcode, data }) => {
    const navigate = useNavigate();
    const [code, setCode] = useState('');
    // console.log(code)

    //인증 코드가 input 값과 같으면 회원가입 완료
    const test = () => {
        if (emailcode == code) {
            axios
                .post("https://zhaoxilin.shop/api/users/signup", data
                )
                .then((response) => {
                    alert(`${data.nickname}님! 회원가입을 축하드립니다.`);
                    navigate('/login');
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            return null
        }
    };

    console.log(code);

    if (!open) return null;
    return (
        <Modal isOpen={true} >
            <DetailContainer>
                <Grid align="center" height="100px" margin="0 0 32 0">
                    <div className="cancel_img">
                        <img src={Fin}
                        style={{cursor:"pointer"}} alt="로고"
                         onClick={() => {
                            navigate(`/signup`);
                          }}/>
                    </div>
                    <Logo>
                        <div className="email_img">
                            <img src={email} alt="로고" />
                        </div>
                    </Logo>
                    <Text>
                        인증 메일 발송 완료
                    </Text>
                    <p>{data.email}</p>
                    <div className="input_box">
                        <input
                            onChange={(e) =>
                                setCode(e.target.value)}
                            placeholder="인증 번호를 입력하세요"
                        />
                    </div>

                    <LoginBtn
                    // onClick={() => { navigate(`/login`) }}
                    >
                        번호 재발급
                    </LoginBtn>

                    <LoginBtn
                        onClick={test}
                        style={{ marginLeft: "10px" }}
                    >
                        인증 확인
                    </LoginBtn>
                </Grid>
            </DetailContainer>

        </Modal>
    );
};


const DetailContainer = styled.div`
font-family: "Nanum Gothic";
  height: 340px;
  width: 350px;
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
    margin-left: 270px;
 }
`

const Logo = styled.h1`
 display:flex;
 align-items: center;
 justify-content: center;

 .email_img > img {
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
width: 132px;
height: 40px;
font-size: 10px;
color: #ffffff;
background-color: #3C3C3C;
text-align: center;
border-radius: 10px;
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

export default EmailAlert;
