import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import MyPageChatList from '../components/MyPageChatList'
import Chat from '../components/Chat'

function MyPage() {
  return (
    <>
    <Header/>
    <Container>

    <div className='Menu'>
      <h4> 마이페이지</h4>
        <div className='Menu_item'>
        <div className='profile_item'><span>프로필 관리</span></div>
        <div className='bookmark_item'><span>북마크 게시글</span></div>
        <div className='chat_item'> <span>1:1 채팅 내역</span></div>
      </div>
    </div>

      <div className='List'>
        <MyPageChatList/>
      </div>
      <div className='Chat'><Chat/></div>
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

.Menu_item > div > span{
  cursor:pointer;
}

.Menu_item > div > span:hover{
  color:#6B4E16;
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
.Menu_item{
  max-width: 100%;
  width: 53%;
  height: 233px;
  margin-top:70px;
  border: 1px solid #A8A8A8;
  border-radius: 30px;
  position: relative;
  bottom: 150px;
}

 h4 {
  position: relative;
  bottom: 150px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 38px;
}



.profile_item{
width:100%;
padding-top:20px;
height: 33%;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 29px;
color: #A8A8A8;
text-align: center;
}

.bookmark_item{
padding-top:20px;
width:100%;
height: 33%;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 700;
text-align: center;
font-size: 20px;
border-top:1px solid #A8A8A8;
border-bottom:1px solid #A8A8A8;
line-height: 29px;
color: #A8A8A8;
}

.chat_item{
width:100%;
padding-top:20px;
height: 33%;
text-align: center;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 29px;
color: #A8A8A8;
}
`
export default MyPage
