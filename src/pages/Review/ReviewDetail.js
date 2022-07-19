import React,{useState} from 'react'
import styled from 'styled-components'
import { FaStar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

import Header from '../../components/main/Header'
import Comment from '../../components/elements/Comment'
import data from '../../shared/data';
import PhotoList from '../../components/pages/PhotoList';
import Content from '../../components/pages/Content';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ReviewDetail = () => {
let {reviewPostId} = useParams();
const [Detail, setDetail] = React.useState()
const [datas, setDatas] = useState(data)
const [currItem, setCurrItem] = useState(datas[0])

  React.useEffect(()=>{
    axios.get('http://dlckdals04.shop/api/reviews/' + reviewPostId )
    .then((res)=>{
      console.log(res.data.reviewDetails)
      setDetail(res.data.reviewDetails)
    })
  },[])

  // const onView = (id) => {
  //   setCurrItem(datas.find(item => item.id === id))
  // }



  if (!Detail) {
    return <div></div>;
  }


  return (
    <>
    <Header/>
    <Container>
        <div className='Box'>
        <PhotoList
            datas={datas}
            currItem={currItem}
            Detail={Detail}
          />
          <ContentBox>
            <div className='box_top'>
                <div className='title'>
                    <p>{Detail.title}</p>
                    <span>
                        {Detail.productType}
                    </span>

                </div>
                <div className='location'>
                    <p>
                        <GrLocation />
                        {Detail.url}</p>
                </div>
                <div className='info'>
                    <div className='profile'><img src={Detail.profileUrl} alt="사진"/></div>
                    <p className='nickname'>{Detail.nickname}</p>
                </div>
            </div>
            <div className='box'>
                <div className='content'>
                    <p>{Detail.content}</p>
                </div>
            </div>
        </ContentBox>
        </div>
      </Container>
      <Comment />
    </>
    
  )
}


const Container = styled.div`
  width:100%;
  height: 100vh;
 
.Box{
  margin: 80px auto;
  width:80%;
  height: 70vh;
  display:flex;
}
`

const ContentBox = styled.div`
 width:50%;
 height: 70vh;
 
.box_top{
   height: 45%;
 }
 .box_top > div{
   height: 33.5%;
 }
      
.title{
  display:flex;
  align-items:center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  padding:30px;
 }

.title > span {
  color: #A8A8A8;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-left: 15px;
}
 
.icon{
    color:#fdd835;
    margin-left:30px;
  }
.starScore{
    color: #A8A8A8;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
  .location{
    display: flex;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    padding: 30px;
  }
  .info{
    display:flex;
    align-items:center;
    padding: 30px;
  }
  
  .profile{
    width:70px;
    height:70px;
    border-radius: 50%;
  }

  .profile > img {
    width:70px;
    height:70px;
    border-radius: 50%;
  }
  
  .nickname{
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  margin-left:30px;
  }
  .box{
  height: 55%;
  display:flex;
  align-items:center;
  justify-content:center;
}
.content{
  border: 2px solid #E4E4E4;
  border-radius: 10px;
  width:80%;
  height:90%;
}
.content > p {
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
width:100%;
height: 80%;
}
.content > div{
  width:100%;
  height: 20%;
}
.ParkBtn{
    width:30%;
    height: 50%;
    border-radius:15px;
    font-size: 17px;
    color:#263238;
    border: none;
    background-color:#ffa000;
  }
  
  .btnBox{
    display:flex;
    justify-content:space-around;
  }
  
  .KidBtn{
    width:30%;
    height: 50%;
    border-radius:15px;
    font-size: 17px;
    color:#263238;
    border: none;
    background-color:#c5e1a5; 
  }
`;
const PhotoBox = styled.div`
display: flex;
width: 55%;

.picture{
  width:100%;
  height: 800px;
}

.box{
  height: 500px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.small{
  
  widht: 40px;
  display:flex;
  justify-content:center;
  align-items:center;
}

.small > ul{
  display: flex;
}


.mainPhoto{
  border:1px solid black;
  margin-left: 35px;
  width:65%;
  height:400px;
  border-radius: 30px;
}
`;

export default ReviewDetail;