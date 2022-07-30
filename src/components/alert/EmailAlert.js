import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import axios from "axios";
import email from '../../images/email.png';
import Grid from "../elements/Grid";
import Fin from '../../images/cancel.png';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const EmailAlert = ({ open, onClose, emailcode, data }) => {
    const navigate = useNavigate();
    const [code, setCode] = useState('');
    const [newcode, setNewCode] = useState('');

    //인증 코드가 input 값과 같으면 회원가입 완료
    const test = () => {
        if (emailcode || newcode == code) {
            axios
                .post("https://zhaoxilin.shop/api/users/signup", data
                )
                .then((response) => {
                    Swal.fire({
                        text: `${data.nickname}님! 회원가입을 축하드립니다.`,
                        icon: "success",
                        confirmButtonText: "확인", 
                        confirmButtonColor: '#ffb300'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          navigate("/login");
                        }
                      })
                    })
                .catch((err) => {
                })
        } else {
            return null
        }
    };

    //번호 재발급
    const register = (e) => {
        e.preventDefault();
          axios
            .post("https://zhaoxilin.shop/api/users/signup/authMail",
              data
            )
            .then((response) => {
              setNewCode(response.data.authCode)
              Swal.fire({
                text: `인증 번호가 재발급 되었습니다.`,
                icon: "success",
                confirmButtonText: "확인", 
                confirmButtonColor: '#ffb300'
              })
            })
            .catch((error) => {
            });
      }

    if (!open) return null;
    return (
        <Modal isOpen={true} >
            <DetailContainer>
                <Grid align="center" height="100px" margin="0 0 32 0">
                    <Logo>
                        <div className="email_img">
                            <img src={email}
                             alt="로고" />
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

                    <Btn
                   onClick={register}
                    >
                        번호 재발급
                    </Btn>

                    <Btn
                        onClick={test}
                        style={{ marginLeft: "10px" }}
                    >
                        인증 확인
                    </Btn>
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
    margin-top: 20px;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 700;
  }

.input_box {

    input {
       width: 270px;
        padding: 8px 13px 8px 13px;
        border-radius: 10px;
        border: 1px solid #A8A8A8;
        outline: none;

        ::placeholder {
            color: #A8A8A8;
          
        }
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
 margin-top: 32px;

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
font-family: 'Nanum Gothic', sans-serif;
font-weight: 700;
`;

const Btn = styled.button`
width: 132px;
height: 40px;
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
font-size: 14px;
font-family: 'Nanum Gothic', sans-serif;
font-weight: 700;
`;

Modal.setAppElement("#root");

export default EmailAlert;
