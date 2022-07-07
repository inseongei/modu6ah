import React,{ useState } from 'react'
import styled from 'styled-components';
import Modal from 'react-modal';
import '../shared/App.css'
import logo from '../images/logo.png'
import ScrollToBottom from "react-scroll-to-bottom";
import ChatRoom from './ChatRoom'
import 'animate.css';
import { getCookie } from '../shared/Cookie'
import { useDispatch , useSelector} from "react-redux"
import {GetChatListAxios} from '../redux/modules/Data'
import axios from 'axios';

const ChatListModal = ({open,onClose}) => {
    const nickname = getCookie('nickname')
    const [ChatList,setChatList] = React.useState('')



  const Data = useSelector((state)=> state.Data);

  console.log(Data)
  
    // React.useEffect(()=>{
    //     axios.get('http://13.125.241.180/api/chats/rooms',{ headers : { Authorization: `Bearer ${getCookie("accessToken")}`}})
    //     .then((res)=>{
    //         console.log(res.data.chatRoomList)
    //         setChatList(res.data.chatRoomList)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // },[])

    console.log(ChatList)



    const [modalIsOpen, setModalIsOpen] = useState(false);
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
        {ChatList&&ChatList.map((data,idx)=>{
            return(
            <div className='ChatListContainer' onClick={()=>setModalIsOpen(true)}> 
            <div className='List'>
                <div className='ChatImg'><div className='ChatImgOne'></div></div>
                <div className='ChatInfo'>
                    <div className='ChatName'>{data.postNickname}</div>
                    <div className='ChatContent'>준비중</div>
                    <div className='ChatDate'>{data.createdAt}</div>
                </div>
                <div className='ChatBell'><span>1</span></div>
            </div>
            </div>
            )
        })}

    </ScrollToBottom>  




    <ChatRoom  open = {modalIsOpen} onClose={()=>setModalIsOpen(false)}/>


     </Modal>
  )
}

Modal.setAppElement('#root')
export default ChatListModal

