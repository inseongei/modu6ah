import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import MyPageChatList from '../components/MyPage/MyPageChatList'
import MyPageChat from '../components/MyPage/MyPageChat'
import io from "socket.io-client";
import MyPageMenu from '../components/MyPage/MyPageMenu'

const socket = io.connect("http://13.125.188.9")

function MyPage() {
  return (
    <>
    <Header/>
    <Container>
    <div className='Menu'>
    <MyPageMenu/>
    </div>

      <div className='List'>
        <MyPageChatList/>
      </div>
      <div className='Chat'><MyPageChat/></div>
    </Container>
    </>
  )
}


const Container = styled.div`
display:flex;
.Menu{
  width:25%;
  height:91vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
.List{
  width:25%;
  height:91vh;
  border-radius:15px;
  border:2px solid #E4E4E4;;
}
.Chat{
  width:50%;
  height:91vh;
}

`
export default MyPage
