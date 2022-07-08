import React,{useState} from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import dog from '../images/dog.jpg'
import { getCookie } from '../shared/Cookie'
import axios from "axios"
import io from "socket.io-client";
import Comment from '../components/Comment';
import OneToOneChat from '../modal/OneToOneChat'


const RecruitDetail = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);  // 모달창 열고 닫는 State 값
    const [on, setOn] = useState(false)     // 상세페이지의 모집중/모집완료 토글버튼 State 값
    const [roomId, setRoomId] = useState()  //  서버로 부터 받은 roomId state로 저장

    // 모집중 , 모집완료 상태 변경하기 
    const inputChange = () => {setOn(!on);};


    // 1:1 문의하기 버튼 눌렀을때 채팅방 생성 + 채팅방 입장하기
    const GoChat = () => {
        axios.post('http://13.125.241.180/api/chats/rooms/2',   // 2 대신 postId로 구현하여야 함 [임시로 지정해 놓은것] ★★★★★
        '', // post 요청이지만 데이터값 포함하지않아도 됌
        { headers : { Authorization: `Bearer ${getCookie("accessToken")}`}})     // 쿠키에 저장된 accessToken 헤더에 같이 넣어주기
        .then((res)=>{  // 성공했을 시 success
            const socket = io.connect("http://13.125.241.180")  // 1 . 소켓 서버 연결
            const roomId = res.data.roomId                      // 2 . response로 넘겨준 roomId 를 roomId 라는 변수에 저장
            setRoomId(roomId)                                   // 3 . 서버에서 받은 roomId 를 state에 저장 ( 1:1 대화창에 넘겨주기 위함)
            socket.emit("join_room", roomId);                   // 4 . "join_room" 이라는 경로에 저장해둔 roomId를 넘겨줌
            setModalIsOpen(true)                                // 5 . 방 생성에 성공했을 시 1:1 대화창 열기
        })
        .catch((err)=>{
            console.log(err)
        })

    }







// =======화면 뷰 코드========
return (
<>
<Header />
<Detail>
    <div className='toggle'>
        <input type="checkbox" id="chk1"  /><label htmlFor="chk1" onClick={inputChange}><span>선택</span></label>
        <h1> {!on ? "모집중" : "모집완료"}</h1>
    </div>
    <div className='one_container'>
        <div className='one_box'>           
            <div>제목  <span>블루베리 농장 체험</span></div>
            <div>날짜  <span>2022-06-30(목)</span></div>
            <div>시간  <span>15:00</span></div>
            <div>위치  <span>블루베리팜 수원점</span></div>
            <div>연령  <span>5~10세</span></div>
        </div>
        <div className='two_box'>
            <div className='three_box'>
                <div className='Detail_profile'>
                    <img src={dog} alt="프로필" />
                </div>

                <div className="Detail_username">
                    <div className="username">안양길동맘</div>
                    <div className='btn_box'>
                        <button onClick={GoChat}>1:1문의하기</button>
                        <button>신청하기</button>            
                    </div>
                </div>
            </div>

            <div className='four_box'>
                블루베리 농장 체험 가려는데 거리가 멀어 운전 가능한 학부모님 찾습니다~
                현재 안양에 거주 중이라 근처 가까운 곳에서 뵈었으면 좋겠습니다.
                육아 스타일: 강하게 키웁니다
                준비물: 물티슈
                입장료: 성인 15000원 / 아동 8000원
            </div>
        </div>
    </div>
    <Comment/>
</Detail>
{/* 1:1 채팅창에 roomId 와 모달 open & close를 props로 넘겨주기 위함 */}
<OneToOneChat
open={modalIsOpen}  // 모달창 열기
onClose={()=>setModalIsOpen(false)} // 모달창 닫기
roomId={roomId} // OneToOneChat 컴포넌트에서 사용할 'roomId' -> props로 전달 
/> 
</>
)

}

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

.one_container{
    display:flex;
}

.one_box{
    width:50%;
    height:50vh;
    display:flex;
    justify-content:center;
    flex-direction:column;
    font-size : 25px;
    
}

.one_box > div {
    margin:30px 0px 0px 70px;
}

.Detail_profile > img {
    width:144px;
    height:144px;
    border-radius:50%;
}

.one_box > div >span{
    border: 1px solid #E4E4E4;
    display:inline-block;
    width:30vw;
    padding:10px;
    margin-left: 30px;
}

.toggle >input {
    display:none;
}

.btn_box{
    display:flex;
    align-items:center;
    justify-content:center;
}

.btn_box > button {
    width:236px;
    height:48px;
    margin-left:13px;
    background-color:white;
    font-size:20px;
}

.two_box{
    width:50%;
    height:50vh;
}

.three_box{
    height:30%;
    display:flex;
}

.four_box{
    padding:20px;
    height:70%;
    width:80%;
    border:2px solid #E4E4E4;
    border-radius:15px;
    font-size:20px;
    font-weight:400;
    margin-top:40px;
    word-break:normal;
}

.Detail_profile{
    width:144px;
    height: 144px;
    border-radius:50%;
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

.btn_box{
    height:50%;
}



.off{
    display:none;
}


label{
    position:relative;
    display:block;
    width:100px;
    height: 45px;
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

input:checked + label:after {left:calc(100% - 52.5px);}
input:checked + label{background-color:#6B4E16;}
label span {display:none;}

`

export default RecruitDetail