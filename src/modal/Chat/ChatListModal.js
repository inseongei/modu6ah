import React,{ useState } from 'react'
import styled from 'styled-components';
import Modal from 'react-modal';
import '../../shared/App.css'
import logo from '../../images/logo.png'
import ScrollToBottom from "react-scroll-to-bottom";
import ChatRoom from './ChatRoom'
import 'animate.css';
import { getCookie } from '../../shared/Cookie'
import { useDispatch , useSelector} from "react-redux"
import {GetChatListAxios} from '../../redux/modules/Data'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import io from "socket.io-client";

const socket = io.connect("http://13.125.241.180")

const ChatListModal = ({open,onClose}) => {
    const MyNickname = getCookie('nickname')
    const navigate = useNavigate();
    const nickname = getCookie('nickname')
    const [ChatList,setChatList] = React.useState('')
    const [NowRoom,setNowRoom] = React.useState([])
    const [realroom,setrealroom] = React.useState()
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [BeforeChatting,setBeforeChatting] = useState()

    // console.log(ChatList)









//   const Data = useSelector((state)=> state.Data);

//   console.log(Data)
  
    React.useEffect(()=>{
        axios.get('http://13.125.241.180/api/chats/rooms',{ headers : { Authorization: `Bearer ${getCookie("accessToken")}`}})
        .then((res)=>{
           console.log(res)
            setChatList(res.data.chatRoomList)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    // console.log(ChatList)

    const BeforeChat = () =>{
                ChatList.map((data)=>{
            return(
                axios.get('http://13.125.241.180/api/chats/messages/' + data.roomId,
                { headers : { Authorization: `Bearer ${getCookie("accessToken")}`}})
                .then((res)=>{
                  console.log(res.data.chatMessageList)
                  socket.emit("join_room",NowRoom)  
                  setBeforeChatting(res.data.chatMessageList)
                })
            )
        })
       
    }





    if(!open) return null
  return (
    <Modal isOpen={true} className="ChatList animate__animated animate__backInUp">
    <div className='One'>
        <span className='ChatLogo'><img src={logo} alt="로고"/></span>
        <span className='ChatTitle'>{nickname}님의 채팅내역</span>
        <button onClick={onClose}>X</button>
    </div>
    

    {/* 대화창 리스트 */}

    <ScrollToBottom className='message-container'>
        {ChatList&& ChatList.map((data,idx)=>{
            return(
            <div className='ChatListContainer' key ={idx} onClick={()=>{
                setModalIsOpen(true)
                socket.emit("join_room",data.roomId)
                axios.get('http://13.125.241.180/api/chats/messages/' + data.roomId,{
                    headers: { Authorization: `Bearer ${getCookie("accessToken")}`}
                    })
                .then((res)=>{
                    console.log(res.data.chatMessageList)
                    setNowRoom(res.data.chatMessageList)
                    setrealroom(data.roomId)
                })
             }}> 
            <div className='List' onClick={BeforeChat}>
                <div className='ChatImg'><div className='ChatImgOne'></div></div>
                <div className='ChatInfo'>
                    <div className='ChatName'> 
                    {MyNickname === data.nickname ? data.nickname : data.SenderNick} 
                    </div>
                    <div className='ChatContent'>준비중</div>
                    <div className='ChatDate'>{data.createdAt}</div>
                </div>
                <div className='ChatBell'><span>1</span></div>
            </div>
            </div>
            )
        })}

    </ScrollToBottom>  




    <ChatRoom open = {modalIsOpen} onClose={()=>setModalIsOpen(false)} NowRoom={NowRoom} BeforeChatting = {BeforeChatting} socket={socket} realroom={realroom}/>


     </Modal>
  )
}

Modal.setAppElement('#root')
export default ChatListModal

