import React,{ useState } from 'react'
import styled from 'styled-components';
import Modal from 'react-modal';
import '../shared/App.css'
import { BiLogOut } from "react-icons/bi";
import ScrollToBottom from "react-scroll-to-bottom";
import {useSelector} from "react-redux"
import io from "socket.io-client";
import { getCookie } from '../shared/Cookie'


const socket = io.connect("http://13.125.241.180")


const ChatListModal = ({open,onClose,roomId}) => {
    const input_Ref = React.useRef()
    const nickname = getCookie('nickname')
    const [realtime, setRealtime] = React.useState([]);
    // const [currentMessage, setCurrentMessage] = React.useState("");
    console.log(roomId)
    console.log(realtime)

    React.useEffect(() => {
        socket.on("receive_message", (data) => {
        setRealtime((list) => [...list, data]);
          console.log(data)
        },); 
    },[]);


    const sendMessage = async () => {
        // if (currentMessage !== "") {
          const messageData = {
            roomId: roomId,
            senderNick: nickname,
            message: input_Ref.current.value,
            time:
              new Date(Date.now()).getHours() +
              ":" +
              new Date(Date.now()).getMinutes(),
          };
          console.log(messageData)
          await socket.emit("send_message", messageData);
        // }
      };








    if(!open) return null
  return (
    <Modal isOpen={true} className="ChatList">
    <div className='RoomOne'>
        <div className='RoomFake'></div>
        <div className='RoomDate'> 2022년 06월 30일 목요일</div>
    <button onClick={onClose}><BiLogOut className='icon'></BiLogOut></button>
    </div>





    <ScrollToBottom className='message-containerTwo'>
    <div className='RoomChatList animate__animated animate__zoomIn'>
        {realtime.map((data,idx)=>{
            return(
                <div className='RoomChat' key={idx}>
                <div className='RoomImg'>
                <div className='RoomProfile'>
                    {/* 사진 */}
                </div>
                </div>
                <div className='RoomContent'>
                    <div className='RoomName'>{data.senderNick}</div>
                    <div className='ChatRoomInput'>{data.message}</div>
                </div>
                <div className='RoomTime'>{data.time}</div>
                </div>
            )
        })}


    </div>
    </ScrollToBottom>

    <div className='RoomSend'>
        <input type="text" className='RoomInput' ref={input_Ref}/>
        <button onClick={sendMessage}>보내기</button>
    </div>







     </Modal>
  )
}

Modal.setAppElement('#root')
export default ChatListModal

