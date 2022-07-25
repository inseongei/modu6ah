import React from 'react'
import styled from 'styled-components'
import chat from '../../images/chat.png'
import io from "socket.io-client";
import { toast } from "react-toastify";
import ChatListModal from '../../modal/Chat/ChatListModal'
// 소켓서버 연결
const socket = io.connect("https://zhaoxilin.shop");
const ChatIcon = () => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [notify, setNotify] = React.useState([]);
    const nickname = localStorage.getItem("nickname");

      console.log(notify)
  // 상대방이 보낸 메시지를 알림 이벤트 경로로 데이터를 받음
  React.useEffect(() => {
    socket.off("notify").on("notify", (data) => {
      console.log(data)
      if (nickname === data.senderNick) {
        return null;
      } else if (nickname !== data.receiverNick) {
        return null;
      } else {
        toast.success(`${data.senderNick}님이 메시지를 보냈습니다`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          limit: 3,
        });
        setNotify((list) => [...list, data]);
        localStorage.setItem("count", data.message);
      }
    });
  }, []);

    const messageBtn = () => {
        setModalIsOpen(true);
        localStorage.removeItem("count");
        setNotify([]);
      };


  return (
    <>
    <Box>
    <img src ={chat} alt="채팅" 
    onClick={messageBtn} 
    className="chatImg"/>
    </Box>
    <ChatListModal
    open={modalIsOpen}
    onClose={() => setModalIsOpen(false)}
    />
    </>
  )
}

const Box = styled.div`
position: fixed;
right: 0px;
bottom: 0px;
padding: 20px;

.chatImg {
    width:70px;
    height: 70px;
    cursor: pointer;
}
`

export default ChatIcon