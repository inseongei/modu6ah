import React, { useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import { getCookie } from "../shared/Cookie";
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import io from "socket.io-client";
import MyPageChat from '../components/MyPage/MyPageChat';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import {ko} from 'date-fns/esm/locale';


const AddOne = () => {
  const navigate = useNavigate();
  const [on, setOn] = useState(false)

  // 모집중 , 모집완료 상태 변경하기 
  const inputChange = () => {
    setOn(!on);
  };

  // 1:1 문의하기 버튼 눌렀을때 채팅방 생성 + 채팅방 입장하기
  const GoChat = () => {
    axios.post('http://13.125.241.180/api/chats/rooms/1', null, {
      headers: { Authorization: `Bearer ${getCookie("accessToken")}` }
    })
      .then((res) => {
        console.log(res)
        const socket = io.connect("http://13.125.241.180")
        const roomId = res.data.roomId
        socket.emit("join_room", roomId);
        navigate('/MyPage/' + roomId)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const [startDate, setStartDate] = useState(new Date());

  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
 
  const handleChange = (newValue) => {
    setValue(newValue);
  };

    return (
      <>
        <Header />
        <Detail>
          <div className='toggle'>
            <input type="checkbox" id="chk1" /><label htmlFor="chk1" onClick={inputChange}><span>선택</span></label>
            <h1> {!on ? "모집중" : "모집완료"}</h1>
          </div>
          <div className='container'>
            <div className='add_input'>
              <div><strong>제목</strong> <input type="text" /></div>
              <div><strong>날짜</strong>
           
              <SDatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  locale={ko}
                  dateFormat="yyyy년 MM월 dd일"
                />
                </div>
             
              <div><strong>시간</strong> 
              <input type="text" />
              
              </div>
              <div><strong>위치</strong> <input type="text" /></div>
              <div><strong>연령</strong> <input type="text" /></div>
            </div>
            <div className='box'>
              <textarea />
              <Btn>
                <button className='delete'>취소</button>
                <button className='add'>등록하기</button>
              </Btn>
            </div>
          </div>
        </Detail>
      </>
    )
};

const Detail = styled.div`
.toggle{
    margin-left: 20px;
    display:flex;
    height: 100px;
}

label {
    margin-top:15px;
}

.toggle > h1{
    margin:20px 0px 0px 50px;
}

.container{
    display:flex;
}

.add_input{
    width:50%;
    height:50vh;
    display:flex;
    justify-content:center;
    flex-direction:column;
    font-size : 25px;
}

.add_input > div {
    margin:50px 0px 0px 70px;
}

.add_input > div >input{
    border: 1px solid #E4E4E4;
    border-radius: 10px;
    display: inline-block;
    width: 450px;
    padding: 10px;
    margin-left: 30px;

    outline: none;
}

.box{
  margin-top: 8%;
    width:50%;
    height:60vh;
}

textarea {
    padding:20px;
    height:60%;
    width:80%;
    border:1px solid #E4E4E4;
    border-radius:10px;
    font-size:20px;
    font-weight:400;
    word-break:normal;
    outline: none;
    resize: vertical; /* 상하만 가능 */
}


.Detail_profile{
    width:144px;
    height: 144px;
    border-radius:50%;
    /* display:flex; */
    align-items:center;
    display:block;
    justify-content:center;
}

.Detail_username{
    width: 70%;
}

.username{
    height: 50%;
    display:flex;
    align-items:center;
    margin-left:30px;
    font-size:33px;
    width: 100%;

}

input{
    position:absolute;
    // left:-1000%;
    }

label{
    position:relative;
    display:block;
    width:200px;
    height: 60px;
    background:#A58646;
    border-radius:60px;
    transition: background .4s;
} 

label:after{
    content:"";
    position: absolute;
    left:7.5px;
    top:50%;
    width: 45px;
    height: 45px;
    border-radius:100%;
    background-color:#fff;
    transform: translateY(-50%);
    box-shadow:1px 3px 4px rgba(0,0,0.1);
    transition: all .4s; 

}

input:checked + label:after {
left:calc(100% - 52.5px);
}
input:checked + label{background-color:#6B4E16;}

label span {display:none;}

`

const SDatePicker = styled(DatePicker)`
    border: 1px solid #E4E4E4;
    border-radius: 10px;
    display: inline-block;
    width: 450px;
    padding: 10px;
    margin-left: 30px;
    outline: none;


`;

const Btn = styled.div`
display: flex;
align-items:center;
justify-content:center;
margin-left: 16px;

.delete{
  width: 30%;
  height: 30px;
  border-radius: 20px;
  color: white;
  background-color: #3C3C3C;
  margin-top: 20px;
  margin-right: 10px;
  padding-top: 6px;
  padding-bottom: 30px;
  border: 0;
  outline: 0;
}

#chk1 {
  display:none;
}

.add{
  width: 30%;
  height: 30px;
  border-radius: 20px;
  color: white;
  background-color: #3C3C3C;
  margin-top: 20px;
  margin-right: 10px;
   padding-top: 6px;
  padding-bottom: 30px;
  border: 0;
  outline: 0;
}
`;

export default AddOne
