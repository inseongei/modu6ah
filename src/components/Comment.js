import React from 'react'
import styled from 'styled-components'


const comment = () => {
  return (
    <CommentBox>
        <div className='comment_section'> 
            <div className='title'>댓글 <input type="text"/></div>
        <button className='btn'>등록</button>
        </div>
        <div className='box'>
            <div className='chat'>
            <div className='first'>
              <div className='profile'></div>
            </div>
            <div className='name'>닉네임</div>
            <div className='comment_box'>
                <div className='comment'>댓글을 달아주세요</div>
                <div className='date'>2022.07.05 14:00</div>
            </div>
           
            </div>
             <button className='delete'>삭제</button>
        </div>
    </CommentBox>
  )
}

const CommentBox = styled.div`
*{
  max-width: 100%;
  height: auto;
}

margin-top:30px;

.comment_section{
    display: flex;
    justify-content: space-between;
    width:90%;
    height:60px;
    margin-top: 85px;
    margin-left: 70px;
}

.title {
    font-size: 25px;
   
    input { 
        border: 1px solid #E4E4E4;
        border-radius: 30px;
        margin-left: 35px;
        height: 50px;
        width: 70%;
    }
    
} 

.btn{
    width: 10%;
    height: 30px;
    border-radius: 30px;
    color: #22211a;
    background-color: #F4B03E;
    margin-top: 7px;
    padding-bottom: 30px;
}

.box{
    width: 90vh;
    height: 80vh;
    // border: 1px solid lightgray;
    margin:0 auto;
    margin-top: 30px;
    display:flex;
}

.chat {
  width: 770px;
  height: 50px;
  display:flex;
}

.profile{
    width: 50px;
    height:50px;
    border-radius:50%;
    border:1px solid black;
  }

  .name{
    display: flex;
    justify-content:center;
    align-items:center;
    font-family: 'Noto Sans KR';
    margin-left: 10px;
  }

  .comment_box {
    margin-top:14px;
    margin-left: 30px;
  }

  .delete{
    width: 20%;
    height: 10px;
    border-radius: 20px;
    color: white;
    background-color: #E4E4E4;
    margin-top: 20px;
    padding-bottom: 23px;
    border: 0;
    outline: 0;
  }

`


export default comment