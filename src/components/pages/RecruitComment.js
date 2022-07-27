// 체험 모집 댓글
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import img_delete from '../../images/deletecomment.png';

const RecruitComment = () => {
  const [comment, setComment] = useState('');
  const [state, setState] = useState('');
  const nickname = localStorage.getItem("nickname");

  const navigate = useNavigate();
  const { recruitPostId } = useParams();

  //댓글 작성
  const addComment = () => {
    const comment_data = {
      comment, nickname
    }
    axios.post('https://zhaoxilin.shop/api/recruits/' + recruitPostId + '/comments',
      comment_data,
      { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } })
      .then((res) => {
        // console.log(res)
        window.alert('댓글 작성 성공')
        window.location.replace("/recruitdetail/" + recruitPostId)
      })
      .catch((err) => {
        window.alert("로그인 후 사용해 주세요");
        // console.log(err.response.data.message);
      })
  }

  // 댓글 조회
  React.useEffect(() => {
    axios.get('https://zhaoxilin.shop/api/recruits/' + recruitPostId,
      { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } })
      .then((res) => {
        setState(res.data.recruitComments)
        console.log(res.data.recruitComments)
      })
      .catch((err) => {
        // console.log(err)
      });
  }, []);

  //댓글 삭제
  const deleteComment = (e) => {
    // console.log(e.target);
    axios
      .delete('https://zhaoxilin.shop/api/recruits/' + recruitPostId + '/comments/' + e.target.id,
        { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } })

      .then((response) => {
        console.log(response);
        alert("삭제가 완료되었습니다.");
        window.location.replace("/recruitdetail/" + recruitPostId)
      })
      .catch((error) => {
        alert("게시글을 삭제할 권한이 없습니다.");
        console.log(error)
      });
  };

  return (
    <CommentBox>
      <div className='comment'>
        <div className='comment_section'>
          <div className='h1Box'>
            <h1>댓글</h1>
          </div>
          <div className='add_comment'>
            <div className='inputBox'>
              <input
                type="text"
                placeholder='댓글을 입력해주세요'
                onChange={e =>
                  setComment(e.target.value)}
              /> 
              <div className='btnBox'>
              <button className='btn'
                onClick={addComment}
              >
                등록
              </button>
            </div>
          </div>
            </div>
           
        </div>

        {state &&
          state.map((data, index) => {
            return (
              <div className='box'
                key={index}>
                <div className='chat'>
                  <div className='profile'>
                    <div className="ProfileImg">
                      <img src=
                        {data.profileUrl}
                        alt="사진" />
                    </div>
                  </div>
                  <div className='name'
                  >
                    {data.nickname}
                  </div>
                  <div className='comment_box'>
                    <div className='comment'
                    >
                      {data.comment}
                    </div>
                    <div className='date'
                    >
                      {data.createdAt}
                    </div>
                  </div>

                </div>
                {nickname === data.nickname 
                ? ( <button
                  className='delete'
                  onClick={deleteComment}
                >
                  <img id={data.recruitCommentId}
                  src={img_delete}/>
                </button>
                ) : (
                 <></>
                )}
              </div>
            )
          })}
      </div>
    </CommentBox>
  )
}

const CommentBox = styled.div`
font-family: "Nanum Gothic";
max-width: 100%;
margin-top: 50px;
padding-bottom: 280px;

.comment_section{
display: flex;
margin-left: 150px;
}

.h1Box{
  margin-right: 30px;
}

.h1Box > h1{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  margin-top: 10px;
  margin-left: 10px;
}

.add_comment{
display: flex;
}

.inputBox{
  width: 1050px;
  display: flex;
  margin-bottom: 10px;
}

.inputBox > input{
  width: 100%;
  display: flex;
  border: 1px solid #A8A8A8;
  height: 57px;
  border-radius: 10px;
  outline: none;
  padding-left: 20px;
}

.btnBox{
 display:flex;
 width: 140px;
}

.btn{
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  background: #3C3C3C;
  border-radius: 30px;
  width: 71px;
  color: #FFFFFF;
  margin-top: 5px;
  margin-left:30px;
}

.box{
  width: 920px;
  display:flex;
  margin-left: 210px;
  margin-top: 5px;
  padding: 25px;
}

.chat {
width: 100%;
height: 50px;
display:flex;
}

.ProfileImg {
width: 55px;
height: 55px;
border-radius: 50%;
margin-left: 10px;
cursor: pointer;

 img {
    height: 50px;
    border-radius:50%;
  }
}

.name{
  display: flex;
  justify-content:center;
  align-items:center;
  margin-left:  12px;
  font-weight: bolder;
}

.comment_box {
  margin-top: 10px;
  margin-left: 30px;
}

.date {
  color: #A8A8A8;
}

.delete{
  widht:0px;
  height: 0px;
  display: hidden;
  border: 0;
  outline: 0;


  img {
    width: 35px;
   height: 35px;
   border-radius: 50%;
   margin-top: 15px;
   position:absolute;
  }
}
`
export default RecruitComment;
