import React, { useState } from "react";
import Modal from "react-modal";
import "../../shared/App.css";
import logo from "../../images/logo.png";
import ScrollToBottom from "react-scroll-to-bottom";
import ChatRoom from "./ChatRoom";
import "animate.css";
import axios from "axios";
import { BsTrash } from "react-icons/bs";
import io from "socket.io-client";

const socket = io.connect("http://dlckdals04.shop");

const ChatListModal = ({ open, onClose }) => {
  const nickname = localStorage.getItem("nickname");
  const [ChatList, setChatList] = React.useState("");
  const [NowRoom, setNowRoom] = React.useState([]);
  const [realroom, setrealroom] = React.useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const profileUrl = localStorage.getItem("profileUrl");
  const token = localStorage.getItem("accessToken");

  React.useEffect(() => {
    axios
      .get("http://dlckdals04.shop/api/chats/rooms",  {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
      .then((res) => {
        setChatList(res.data.lastChats);
      })
      .catch((err) => {
      });
  }, []);

  const Delete = () => {
    axios
      .put("http://dlckdals04.shop/api/chats/rooms/" + realroom, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        alert("방에 나갔습니다");
      })
      .catch((err) => {
        console.log(err);
      });

      axios
      .delete("http://dlckdals04.shop/api/chats/rooms/" + realroom,{
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        alert("방에 나갔습니다");
      })
      .catch((err) => {
        console.log(err);
      });


      



  };

  if (!open) return null;

  return (
    <Modal
      isOpen={true}
      className="ChatList animate__animated animate__backInUp"
    >
      <div className="One">
        <span className="ChatLogo">
          <img src={logo} alt="로고" />
        </span>
        <span className="ChatTitle">{nickname}님의 채팅내역</span>
        <button onClick={onClose}>X</button>
      </div>

      {/* 대화창 리스트 */}

      <ScrollToBottom className="message-container">
        <div className="ChatListContainer">
          {ChatList &&
            ChatList.map((data, idx) => {
              return (
                data != null && (
                  <div
                    className="List"
                    key={idx}
                    onClick={() => {
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
                          "http://dlckdals04.shop/api/chats/messages/" +
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
                    }}
                  >
                    <div className="ChatImg">
                      <div className="ChatImgOne">
                        <img
                          src={
                            profileUrl === data.profileUrlTwo
                              ? data.profileUrl
                              : data.profileUrlTwo
                          }
                          alt="사진"
                        />
                      </div>
                    </div>
                    <div className="ChatInfo">
                      <div className="ChatName">
                        {data.receiverNick === nickname
                          ? data.senderNick
                          : data.receiverNick}
                      </div>

                      <div className="ChatContent">{data.message}</div>
                      <div className="ChatDate">{data.time}</div>
                    </div>
                    <div className="ChatBell">
                      <span>
                        <BsTrash className="Trash" onClick={Delete}></BsTrash>
                      </span>
                    </div>
                  </div>
                )
              );
            })}
        </div>
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
