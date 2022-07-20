//  장소 추천 카드
import React from 'react'
import styled from 'styled-components';
import { MdOutlinePlace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import dog from '../../images/dog.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { loadPhotoDB } from '../../redux/modules/placepage';

function LCard() {
 const navigate = useNavigate();
 const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadPhotoDB());
  }, []);

 const post = useSelector((state) => state.placepage.list);
 console.log(post);

 if (!post) {
    return <div></div>;
  }

    return (
        <>
            <Container>
                {post && post.map ((data, index) => (
                    <div className='card' 
                    key={index}
                    onClick={() => {
                        navigate('/placedetail/' 
                        + data.placePostId
                        )
                    }}>
                        {/* 카드 왼쪽 '이미지' */}
                        <div className='card-left'>
                            <div className='image'>
                                <img src={data.imageUrl[0]} />
                            </div>

                        </div>
                        {/* 카드 오른쪽 '타이틀 및 설명' */}
                        <div className='card-right'>
                            <div className='title'>
                                <h3>{data.title}</h3>
                                <p>⭐ {data.star}</p>
                            </div>
                            <a><MdOutlinePlace/> {data.region}</a>
                            <div className='profile_box'>
                            <div className='detail_profile'>
                                <img 
                                src={data.profileUrl}
                                 alt="프로필" />
                            </div>
                                <strong>{data.nickname}</strong>
                            </div>
                            <div className='content'>
                                <p>{data.content}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </Container>
        </>
    )
}

const Container = styled.div`
font-family: 'Nanum Gothic';

display: grid;
grid-template-columns: repeat(auto-fit);
gap: 3.5em;
justify-content: center;
align-items: center;


.card {
background: white;
border-radius: 30px;
border: none;
box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.17);
cursor: pointer;
overflow: hidden;
width: 980px;
height: 360px;
display: flex;
flex-direction: row;
}

.card-left {
    display: flex;
    width: 460px;
    height: 300px;
    margin: 30px 0px 0px 39px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.image {
    border-radius: 25px;
    width: 100%;
    overflow: hidden;
}

.card-left img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-right {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 60px;
}

.title {
    display: flex;
    
    h3{
        font-weight: 700;
    }
}

.title p {
    margin-top: 4px;
    margin-left: 10px;
}

.profile_box{
    display: flex;
    margin-top: 15px;
    margin-bottom: 20px;
}

.profile{
    width:50px;
    height:50px;
    border-radius:50%;
    border:1px solid black;  
  }

  .detail_profile > img {
    width:45px;
    height:45px;
    border-radius:50%;
    margin-left: 10px;
}

.detail_profile{
    border-radius:50%;
    /* display:flex; */
    align-items:center;
    display:block;
    justify-content:center;
}
  
  strong { 
    margin-top: 10px;
    margin-left: 10px;
  }

  .card-right p {
    margin: 0px 10px 0px 5px;
  }

  .content { 
      margin-right: 20px;
      width: 420px;
      height: 180px;
      box-sizing: border-box;
      overflow: hidden;
  }

  .content p {
      font-weight: normal;
  }

`;

export default LCard;
