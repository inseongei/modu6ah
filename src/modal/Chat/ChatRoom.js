import React,{ useState } from 'react'
import styled from 'styled-components';
import Modal from 'react-modal';
import '../../shared/App.css'
import { BiLogOut } from "react-icons/bi";
import ScrollToBottom from "react-scroll-to-bottom";
import {useSelector} from "react-redux"
import io from "socket.io-client";
import { getCookie } from '../../shared/Cookie'
import axios from 'axios';
import { data } from 'autoprefixer';




const ChatRoom = ({open,onClose,roomId,NowRoom,BeforeChatting,socket,realroom}) => {
    const input_Ref = React.useRef()
    const nickname = getCookie('nickname')
    const [NowChat, setNowChat] = React.useState([]);
    const [realtime, setRealtime] = React.useState([]);
    const [room, setRoom] = React.useState();
    console.log(NowRoom)
    console.log(realroom)

  // const set = new Set(NowChat)




    React.useEffect(() => {
      socket.on('receive_message',(data)=>{
          setNowChat((list) => [...list, data]);
          console.log(data)
     })
   },[socket]);



   React.useEffect(() => {
    socket.on("test", (data) => {
      console.log(data)
      setRoom(data);
    },); 
},[socket]);












    const sendMessage = async() =>  {
        // if (currentMessage !== "") {
          const messageData = {
            roomId: realroom,
            senderNick: nickname,
            message: input_Ref.current.value,
            time:
              new Date(Date.now()).getHours() +
              ":" +
              new Date(Date.now()).getMinutes(),
          };
          await socket.emit("send_message", messageData);
          setNowChat((list) => [...list, messageData]);
          console.log(messageData)

        // }
      };


      console.log(NowChat)




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
        {NowRoom&&NowRoom.map((data,idx)=>{
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


        {NowChat&&NowChat.map((data,idx)=>{
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

export default ChatRoom

