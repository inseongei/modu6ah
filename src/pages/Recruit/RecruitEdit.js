// 체험 모집 수정 페이지
import React, { useState } from "react";
import styled from "styled-components";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

import { useDispatch, useSelector } from "react-redux";
import { updatePostDB } from "../../redux/modules/post";
import { useNavigate, useParams } from "react-router-dom";
import { detailPostDB } from "../../redux/modules/post";

import Grid from "../../components/elements/Grid";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import ChatIcon from '../../components/main/ChatIcon'

function RecruitEdit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { recruitPostId } = useParams();

  const [status, setStatus] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [age, setAge] = useState("");

  const upload = () => {
    const newPost = {
      title,
      content,
      date,
      time,
      place,
      age,
      status,
    };
    dispatch(updatePostDB(recruitPostId, newPost));
    console.log(recruitPostId, newPost);
  };

  // 모집중 , 모집완료 상태 변경하기
  const inputChange = () => {
    setStatus(!status);
  };

  React.useEffect(() => {
    dispatch(detailPostDB(recruitPostId));
  }, []);

  const detail = useSelector((state) => state.post.list);
  // console.log(detail);

  return (
    <>
      <Header />
      <BackGround>
      <Grid maxWidth="1440px" height="100%" margin="0 auto" padding="0 12px">
      <Title>
            <div className="subject">체험 모집</div>
            <div className="page">
              <p>수정하기</p>
            </div>
          </Title>
        <Detail>
        <Box>
          <div className="container">
            <div className="add_input">
              <div className="toggle">
                <input className="inputbox" type="checkbox" id="chk1" />
                <label htmlFor="chk1" onClick={inputChange}>
                  <span>선택</span>
                </label>
                <p> {status ? "모집완료" : "모집중"}</p>
              </div>
              <div className="input__section">
                <div style={{ marginBottom: "34px" }}>
                  <strong>제목</strong>
                  <input
                    onChange={(e) => 
                      setTitle(e.target.value)}
                    style={{ width: "400px" }}
                    type="text"
                    placeholder={detail.title}
                  />
                </div>
                <div
                  className="date"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Monat>날짜</Monat>
                  <DatePicker
                    customInput={<Input />}
                    selected={date}
                    onChange={(date) => setDate(date)}
                    locale={ko}
                    dateFormat="yyyy년 MM월 dd일"
                  />
                </div>
              </div>
              <div className="time"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}>
                    <Time>시간</Time>
                    <DatePicker
                     customInput={<Input />}
                      selected={time}
                      onChange={(time) => setTime(time)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      placeholderText={detail.time}
                      locale={ko}
                    />
                     {/* <input type="time"
                      onChange={(e) =>
                        setTime(e.target.value)}
                      placeholder="시간을 입력하세요"
                    />  */}
                  </div>
              <div className="location">
                <strong>위치</strong>
                <input
                  onChange={(e) => setPlace(e.target.value)}
                  type="text"
                  placeholder={detail.place}
                />
              </div>
              <div className="age">
                <strong>연령</strong>
                <input
                  onChange={(e) => setAge(e.target.value)}
                  type="text"
                  placeholder={detail.age}
                />
              </div>
            </div>
            <div className="box">
              <textarea
                onChange={(e) => setContent(e.target.value)}
                placeholder={detail.content}
              />
              <Btn>
                <button
                  className="btn"
                  onClick={() => {
                    navigate(`/recruit`);
                  }}
                >
                  취소{" "}
                </button>
                <button className="btn" onClick={upload}>
                  등록하기
                </button>
              </Btn>
            </div>
          </div>
          </Box>
        </Detail>
      </Grid>
      </BackGround>
      <ChatIcon/>
      <Footer />
    </>
  );
}

const BackGround = styled.div`
font-family: "Nanum Gothic";
background: #F5F5F5;
padding-bottom: 10px;
`;

const Title = styled.div`
  padding-top: 40px;
  margin-left: 160px;

  .subject {
    color: #a8a8a8;
  }

  .page {
    font-size: 30px;
    font-weight: bolder;
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

const Detail = styled.div`
.container {
  display: flex;
}

.add_input {
  width: 530px;
  height: 570px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 25px;
  margin-left: 50px;
}

.add_input > div {
  margin: 40px 0px 0px 10px;
  object-fit: cover;
}

.add_input > div > input {
  border: 1px solid #A8A8A8;
  display: inline-block;
  width: 400px;
  padding: 8px;
  margin-left: 30px;
  border-radius: 10px;
}

.add_input {
  strong {
    font-size: 20px;
  }
}

.location {
  input {
      outline: none;
  }
}

.age {
 input {
  outline: none;
 }
}

  .toggle {
    display: flex;
    margin-left: 20px;
    height: 50px;
  }
  
  .toggle > p {
    margin: 20px 0px 0px 30px;
    font-size: 20px;
  }

  .input__section {
    margin: 40px 0px 0px 70px;
    font-size: 20px;
  }

  .input__section > div > input {
    border: 1px solid #A8A8A8;
    display: inline-block;
    width: 370px;
    padding: 14px;
    margin-left: 30px;
    border-radius: 10px;
    padding-left: 12px;
    outline: none;
    font-size: 19px;
  }


  .location {
    input {
      outline: none;
      padding-left: 16px;
      font-size: 19px;
      height: 55px;

      ::placeholder{
        font-size: 19px;
        padding-left: 4px;
      }
    }
  }

  .age{
    input {
      outline: none;
      padding-left: 13px;
      font-size: 19px;
      height: 55px;

      ::placeholder{
        font-size: 19px;
        padding-left: 4px;
      }
    }
  }

  .box {
    margin-top: 120px;
    width: 404px;
  }

  strong {
    padding-top: 30px;
  }

  textarea {
    width: 450px;
    height: 425px;
    border: 1px solid #A8A8A8;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 400;
    margin-top: 20px;
    word-break: normal;
    padding: 20px;
    outline: none;
    resize: vertical; /* 상하만 가능 */
  }

  .Detail_profile {
    width: 144px;
    height: 144px;
    border-radius: 50%;
    /* display:flex; */
    align-items: center;
    display: block;
    justify-content: center;
  }

  .Detail_username {
    width: 70%;
  }
  
  .username {
    height: 50%;
    display: flex;
    align-items: center;
    margin-left: 30px;
    font-size: 33px;
    width: 100%;
  }
  
  .inputbox {
    position: absolute;
    left: -1000%;
  }

  label {
    margin-top: 16px;
    position: relative;
    display: block;
    width: 60px;
    height: 30px;
    background: #a58646;
    border-radius: 60px;
    transition: background 0.4s;
  }

  label:after {
    content: "";
    position: absolute;
    left: 0px;
    top: 48%;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #fff;
    transform: translateY(-50%);
    box-shadow: 1px 3px 4px rgba(0, 0, 0.1);
    transition: all 0.4s;
  }
  
  input:checked + label:after {
    left: calc(100% - 25.0px);
  }
  
  input:checked + label {
    background-color: #6b4e16;
  }
  
  label span {
    display: none;
  }
`;

const Monat = styled.div`
display: flex;
width: 50px;
height: 40px;
margin-right: 24px;
margin-top: 20px;
font-weight: bold;
`;

const Time = styled.strong`
display: flex;
width: 80px;
height: 20px;
margin-right: -2px;
margin-top: -10px;
`;

const Input = styled.input`
border: 1px solid #A8A8A8;
border-radius: 10px;
width: 400px;
height: 60px;
padding: 10px;
display: flex;
margin-top: 5px;
margin-bottom: -2px;
cursor: pointer;
outline: none;
font-size: 19px;
`;

const Btn = styled.div`
  display: flex;
  margin-right: -190px;
  margin-left: 170px;

  .btn {
    width: 30%;
    height: 30px;
    border-radius: 20px;
    color: white;
    background-color: #3c3c3c;
    margin-top: 20px;
    margin-right: 20px;
    padding-top: 9px;
    padding-bottom: 33px;
    border: 0;
    outline: 0;
  }
`;

export default RecruitEdit;
