//체험 모집 
import React, { useState } from "react";
import styled from "styled-components";

import Header from "../../components/main/Header";
import OneToOneChat from "../../modal/Chat/OneToOneChat";
import Footer from "../../components/main/Footer";
import Grid from "../../components/elements/Grid";
import RecruitComment from "../../components/pages/RecruitComment";
import ChatIcon from '../../components/main/ChatIcon';
import chatlist from '../../images/chatlist.png';
import img_location from '../../images/location.png';

import axios from "axios";
import io from "socket.io-client";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailPostDB, deletePostDB } from "../../redux/modules/post";
import { GetMyPageAxios } from "../../redux/modules/Data";

const socket = io.connect("https://zhaoxilin.shop"); // 1 . 소켓 서버 연결

const RecruitDetail = () => {
  const nickname = localStorage.getItem("nickname");
  const [modalIsOpen, setModalIsOpen] = useState(false); // 모달창 열고 닫는 State 값
  const [on, setOn] = useState(false); // 상세페이지의 모집중/모집완료 토글버튼 State 값

  // const [roomId, setRoomId] = useState()  //  서버로 부터 받은 roomId state로 저장
  const [state, setState] = useState("");
  let { recruitPostId } = useParams();
  const [RroomId, setRroomId] = useState();

  React.useEffect(() => {
    axios
      .get("https://zhaoxilin.shop/api/recruits/" + recruitPostId)
      .then((response) => {
        setState(response.data.recruitDetails);
      })
      .catch((response) => {
        // console.log(response);
      });
  }, []);

  // 모집중 , 모집완료 상태 변경하기
  const inputChange = () => {
    setOn(!on);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detail = useSelector((state) => state.post.list);

  // console.log(detail);

  React.useEffect(() => {
    dispatch(detailPostDB(recruitPostId));
  }, []);

  const deletePosting = () => {
    dispatch(deletePostDB(recruitPostId, navigate));
  };

  // 1:1 문의하기 버튼 눌렀을때 채팅방 생성 + 채팅방 입장하기
  const GoChat = () => {
    axios
      .post("https://zhaoxilin.shop/api/chats/rooms/" + recruitPostId, null, {
        headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      })
      .then((res) => {
        const JoinData = {
          roomId: res.data.roomId,
          receiverNick: state.nickname,
          senderNick: nickname,
          profileUrlTwo: state.profileUrl,
        };
        socket.emit("join_room", JoinData);
        setModalIsOpen(true);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <Header />
      <BackGround>
      <Grid maxWidth="1440px" height="100%" margin="0 auto" padding="0 12px">
        <Title>
          <div className="subject">체험 모집</div>
          <div className="page">
            <p>상세 보기</p>
          </div>
        </Title>
        <Detail>
          <Box>
             {/* 카드 왼쪽: 모집 토글, 제목, 날짜, 시간 등*/} 
            <div className="container">
              <div className="card-left">
                <div className="toggle">
                  <p> {!on ? "모집중" : "모집완료"} </p>
                </div>
                <div>
                  <strong> 제목 </strong>
                  <span>{detail.title}</span>
                </div>
                <div>
                  <strong> 날짜 </strong>
                  <span>{detail.date}</span>
                </div>
                <div>
                  <strong> 시간 </strong>
                  <span>{detail.time}</span>
                </div>
                <div>
                  <strong> 위치 </strong>
                  <span>{detail.place}</span>
                </div>
                <div>
                  <strong> 연령 </strong>
                  <span>{detail.age}</span>
                </div>
              </div>

              {/* 카드 오른쪽: 작성자 프로필, 버튼, 내용 */}
              <div className="card-right">
                <div className="card-top">
                  {nickname === detail.nickname ? (
                    <>
                     <Btn>
                      <button className="btn"
                      onClick={() => {
                        navigate(`/recruitedit/` + detail.recruitPostId);
                      }}>
                        <img src={img_location} ></img>
                      </button>
                     
                      <button className="btn" onClick={deletePosting}>
                      <img src={img_location} ></img>
                      </button>
                    </Btn>
                    
                    <div className="profile">
                    <div className="detail_profile">
                      <img
                        src={detail.profileUrl}
                        alt="프로필"
                        onClick={() => {
                          navigate("/manager/" + detail.nickname);
                          dispatch(GetMyPageAxios(detail.nickname));
                        }}
                      />
                    </div>
                    <div className="detail_username">
                      <div className="username">{detail.nickname}</div>
                    </div>
                    </div> 
                  </>
                  ) : (
                    <>
                    <div className="profile">
                    <div className="detail_profile">
                      <img
                        src={detail.profileUrl}
                        alt="프로필"
                        onClick={() => {
                          navigate("/manager/" + detail.nickname);
                          dispatch(GetMyPageAxios(detail.nickname));
                        }}
                      />
                    </div>
                    <div className="detail_username">
                      <div className="username">{detail.nickname}</div>
                    </div>
                   <BtnTwo>
                      <button className="btn" onClick={GoChat}>
                        <img src={chatlist}/>
                         1:1 채팅
                      </button>
                    </BtnTwo> 
                    </div> 
                  </>
                 )}
                </div>
                <div className="content">
                  {detail.content}
                  </div>
              </div>
            </div>
          </Box>
          <RecruitComment />
        </Detail>
      </Grid>
      </BackGround>
      <OneToOneChat
        open={modalIsOpen} // 모달창 열기
        onClose={() => setModalIsOpen(false)} // 모달창 닫기
        socket={socket}
      />
      <ChatIcon />
      <Footer />
    </>
  );
};

const BackGround = styled.div`
font-family: "Nanum Gothic";
background: #F5F5F5;
`;

const Title = styled.div`
  padding-top: 40px;
  margin-left: 160px;

  .subject {
    color: #a8a8a8;
  }

  .page {
    font-size: 30px;
    font-weight: 700;
  }
`;

const Detail = styled.div`
  .container {
    display: flex;
  }

  .toggle {
    display: flex;
    margin-left: 20px;
    height: 100px;
    justify-content: space-between;
  }
  
  .toggle > p {
    margin: 20px 0px 0px 30px;
    font-size: 20px;
  }

  .card-left {
    width: 600px;
    height: 570px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 25px;
  }

  .card-left > div {
    margin: 40px 0px 0px 70px;
    font-size: 20px;
  }

  .card-left > div > span {
    border: 1px solid #A8A8A8;
    display: inline-block;
    width: 365px;
    padding: 10px;
    margin-left: 30px;
    border-radius: 10px;
  }

  .inputbox {
    position: absolute;
    left: -1000%;
  }

  label {
    margin-top: 16px;
    position: relative;
    display: block;
    width: 80px;
    height: 35px;
    background: #a58646;
    border-radius: 60px;
    transition: background 0.4s;
  }

  label:after {
    content: "";
    position: absolute;
    left: 0px;
    top: 48%;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #fff;
    transform: translateY(-50%);
    box-shadow: 1px 3px 4px rgba(0, 0, 0.1);
    transition: all 0.4s;
  }

  input:checked + label:after {
    left: calc(100% - 40.5px);
  }
  input:checked + label {
    background-color: #6b4e16;
  }

  label span {
    display: none;
  }

  .card-right {
    width: 50%;
    margin-left: 30px;
  }

  .card-top {
    margin: 80px 0px 0px 10px;
    width: 100%;
  }

  .card-top p {
    display: flex;
    color: gray;
  }

  .profile {
    display: flex;
  }

  .detail_profile > img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-left: 10px;
    cursor: pointer;
  }

  .detail_profile {
    border-radius: 50%;
    /* display:flex; */
    align-items: center;
    display: block;
    justify-content: center;
  }

  .username {
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-left: 20px;
    font-size: 20px;
    width: 100%;
  }

  .content {
    width: 450px;
    height: 330px;
    border: 1px solid #A8A8A8;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 400;
    margin-top: 20px;
    word-break: normal;
    padding: 20px;
  }
`;

const Box = styled.div`
width: 1100px;
height: 680px;

background: white;

margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
margin-top: 30px;
margin-bottom: 32px;
display: flex;
flex-direction: column;

border: 1px solid lightgray;
border-radius: 10px;
`;

const Btn = styled.div`
  display: flex;
  margin-left: 400px;

  .btn {
    height: 30px;
    border-radius: 20px;
    margin-right: 10px;
    padding-top: 9px;
    padding-bottom: 33px;
    border: 0;
    outline: 0;
  }
`;

const BtnTwo = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-top: 6px;

  img {
    margin-right: 6px;
  }

  .btn {
    width: 129px;
    height: 30px;
    border-radius: 30px;
    color: #A8A8A8;
    padding-top: 9px;
    padding-bottom: 35px;
    border: 1.5px solid #F4B03E;
    outline: 0;
    font-weight: bolder;
  }
`;

export default RecruitDetail;
