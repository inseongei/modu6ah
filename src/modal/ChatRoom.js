import React,{ useState } from 'react'
import styled from 'styled-components';
import Modal from 'react-modal';
import '../shared/App.css'
import { BiLogOut } from "react-icons/bi";
import ScrollToBottom from "react-scroll-to-bottom";

const ChatListModal = ({open,onClose}) => {
    if(!open) return null
  return (
    <Modal isOpen={true} className="ChatList">
    <div className='RoomOne'>
        <div className='RoomFake'></div>
        <div className='RoomDate'> 2022년 06월 30일 목요일</div>
    <button onClick={onClose}><BiLogOut className='icon'></BiLogOut></button>
    </div>





    <ScrollToBottom className='message-containerTwo'>
    <div className='RoomChatList animate__animated animate__fadeInDown'>
        <div className='RoomChat'>
        <div className='RoomImg'>
        <div className='RoomProfile'>
            {/* 사진 */}
        </div>
        </div>
        <div className='RoomContent'>
            <div className='RoomName'>길동이맘</div>
            <div className='ChatRoomInput'></div>
        </div>
        <div className='RoomTime'>오전 10:07</div>
        </div>

    </div>
    </ScrollToBottom>

    <div className='RoomSend'>
        <input type="text" className='RoomInput'/>
        <button>보내기</button>
    </div>







     </Modal>
  )
}

Modal.setAppElement('#root')
export default ChatListModal

