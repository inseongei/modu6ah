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

const socket = io.connect("https://zhaoxilin.shop");

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
      .get("https://zhaoxilin.shop/api/chats/rooms",  {
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
      .delete("https://zhaoxilin.shop/api/chats/rooms/" + realroom,{
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
      className="ChatList animate__animated animate__fadeIn animate__slower"
    >

      {/* 대화창 리스트 */}

      <ScrollToBottom className="message-container">
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
