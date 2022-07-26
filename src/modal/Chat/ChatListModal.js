import React, { useState } from "react";
import Modal from "react-modal";
import "../../shared/App.css";
import ScrollToBottom from "react-scroll-to-bottom";
import ChatRoom from "./ChatRoom";
import "animate.css";
import io from "socket.io-client";
import cancel from '../../images/cancel.png'
import redtrash from '../../images/Redbin.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useQuery} from 'react-query'

const socket = io.connect("https://zhaoxilin.shop");

const ChatListModal = ({ open, onClose }) => {
  const nickname = localStorage.getItem("nickname");
  const [ChatList, setChatList] = React.useState("");
  const [NowRoom, setNowRoom] = React.useState([]);
  const [realroom, setrealroom] = React.useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const profileUrl = localStorage.getItem("profileUrl");
  const token = localStorage.getItem("accessToken");

  const fetchSuperHeros = () =>{
    return axios.get("https://zhaoxilin.shop/api/chats/rooms",{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
  }
  // modal이라 웹페이지 시작점부터 get 되서 isLoading 처리 안해도 됌
  const {isLoading , data } = useQuery('Chat-List',fetchSuperHeros)

  console.log(data)

  // 삭제 버튼 눌렀을때 삭제가 되고 다시 리패치 시켜줌
  const Delete = (e) => {
    console.log(e.target.id)
    axios
    .delete("https://zhaoxilin.shop/api/chats/rooms/" + e.target.id,{
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res.data)
      alert("방에 나갔습니다");
    })
    .catch((err) => {
      console.log(err);
    });
};


  if (!open) return null;

  return (
    <Modal isOpen={true} className="ChatList animate__animated animate__fadeIn animate__slow">
        <div className="ChatListBox">
          <span className="OneToOne">1:1 채팅 목록</span>
          <img src = {cancel} alt="닫기" className="cancel" onClick={onClose}/>
        </div>


      {/* 대화창 리스트 */}
      <ScrollToBottom className="message-container" mode="top">
        {data.data.lastChats&& data.data.lastChats.map((data)=>{
          return(
            data != null &&
            <div className="listC animate__animated animate__fadeInDown animate__fast" key={data._id}>
            <div className="ChatListContainer">
              <div className="firstBox" onClick={() => {
                      setModalIsOpen(true);
                      const Joindata = {
                        roomId: data.roomId,
                        senderNick: data.senderNick,
                        receiverNick: data.receiverNick,
                        profileUrlTwo: data.profileUrl,
                      };
                      socket.emit("join_room", Joindata);
                      axios
                        .get(
                          "https://zhaoxilin.shop/api/chats/messages/" +
                            data.roomId,
                            {
                              headers: {
                                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                              }
                            })
                        .then((res) => {
                          console.log(res);
                          setNowRoom(res.data.chatMessageList);
                          setrealroom(data.roomId);
                        });
                    }} id={data.roomId} >
                <img src={profileUrl === data.profileUrlTwo ? data.profileUrl: data.profileUrlTwo} alt="사진" id={data.roomId}/>
              </div>
    
              <div className="SecondBox" onClick={() => {
                      setModalIsOpen(true);
                      const Joindata = {
                        roomId: data.roomId,
                        senderNick: data.senderNick,
                        receiverNick: data.receiverNick,
                        profileUrlTwo: data.profileUrl,
                      };
                      socket.emit("join_room", Joindata);
                      axios
                        .get(
                          "https://zhaoxilin.shop/api/chats/messages/" +
                            data.roomId,
                            {
                              headers: {
                                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                              }
                            })
                        .then((res) => {
                          console.log(res);
                          setNowRoom(res.data.chatMessageList);
                          setrealroom(data.roomId);
                        });
                    }} id={data.roomId}>
                <div className="ChatName"id={data.roomId}>{data.receiverNick === nickname ? data.senderNick:data.receiverNick}</div>
                <div className="ChatContent"id={data.roomId}>{data.message}</div>
              </div>
    
    
              <div className="ThirdBox" onClick={() => {
                      setModalIsOpen(true);
                      const Joindata = {
                        roomId: data.roomId,
                        senderNick: data.senderNick,
                        receiverNick: data.receiverNick,
                        profileUrlTwo: data.profileUrl,
                      };
                      socket.emit("join_room", Joindata);
                      axios
                        .get(
                          "https://zhaoxilin.shop/api/chats/messages/" +
                            data.roomId,
                            {
                              headers: {
                                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                              }
                            })
                        .then((res) => {
                          console.log(res);
                          setNowRoom(res.data.chatMessageList);
                          setrealroom(data.roomId);
                        });
                    }}id={data.roomId} >
              <div className="ChatTime"id={data.roomId}> {data.time}</div>
              </div>
              <div className="fourBox">
              <div className="ChatDel"><img src={redtrash} alt="쓰레기통" onClick={Delete} id={data.roomId}/></div>
              </div>
            </div>
            </div>
          )
        })}
      </ScrollToBottom>
      <ChatRoom
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        NowRoom={NowRoom}
        socket={socket}
        realroom={realroom}
      />
    </Modal>
  );
};


Modal.setAppElement("#root");
export default ChatListModal;
