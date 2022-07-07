import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import MyPageChatList from '../components/MyPage/MyPageChatList'
import MyPageChat from '../components/MyPage/MyPageChat'
import MyPageMenu from '../components/MyPage/MyPageMenu'



function MyPage() {
  return (
    <>
    <Header/>
    <Container>
      <div className='Chat'><MyPageChat/></div>
    </Container>
    </>
  )
}


const Container = styled.div`
display:flex;
.Chat{
  width:100%;
  height:91vh;
}

`
export default MyPage
