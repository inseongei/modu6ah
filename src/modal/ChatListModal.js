import React,{ useState } from 'react'
import styled from 'styled-components';
import Modal from 'react-modal';
import '../shared/App.css'
import logo from '../images/logo.png'
import ScrollToBottom from "react-scroll-to-bottom";
import ChatRoom from './ChatRoom'
import 'animate.css';

const ChatListModal = ({open,onClose}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    if(!open) return null
  return (
    <Modal isOpen={true} className="ChatList animate__animated animate__backInUp">
    <div className='One'>
        <span className='ChatLogo'><img src={logo} alt="로고"/></span>
        <span className='ChatTitle'>Nickname님의 채팅내역</span>
        <button onClick={onClose}>X</button>
    </div>
    

    {/* 대화창 리스트 */}

    <ScrollToBottom className='message-container'>
    <div className='ChatListContainer' onClick={()=>setModalIsOpen(true)}> 
    <div className='List'>
        <div className='ChatImg'><div className='ChatImgOne'></div></div>
        <div className='ChatInfo'>
            <div className='ChatName'>길동맘</div>
            <div className='ChatContent'>저랑 같이가요 !</div>
            <div className='ChatDate'>2022-06-13</div>
        </div>
        <div className='ChatBell'><span>1</span></div>
    </div>
    </div>
    </ScrollToBottom>  




    <ChatRoom  open = {modalIsOpen} onClose={()=>setModalIsOpen(false)}/>


     </Modal>
  )
}

Modal.setAppElement('#root')
export default ChatListModal

