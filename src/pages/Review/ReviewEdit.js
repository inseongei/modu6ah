import React from 'react'
import styled from 'styled-components'
import Header from '../../components/main/Header'
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';






const ReviewEdit = () => {
    const [Detail, setDetail] = React.useState()
    const navigate = useNavigate()
    let {reviewPostId} = useParams();
    const content_ref = React.useRef()
    const url_ref = React.useRef()
    const title_ref = React.useRef()
    const productType_ref = React.useRef()


    React.useEffect(()=>{
        axios.get('http://dlckdals04.shop/api/reviews/' + reviewPostId )
        .then((res)=>{
          console.log(res.data.reviewDetails)
          setDetail(res.data.reviewDetails)
        })
      },[])

      if (!Detail) {
        return <div></div>;
      }


const ReviewInsert = () =>{
    let data= {
        title :title_ref.current.value,
        content : content_ref.current.value,
        url :url_ref.current.value,
        productType : productType_ref.current.value
    }




    axios.put('http://dlckdals04.shop//api/reviews/' + reviewPostId,data,{
        headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      }).then((res)=>{
        console.log(res)
      })
}















  return (
    <>
    <Header/>
    <Review>
    <div className='reviewC'>
    <div className='images'><div className='title'>대표이미지</div></div>

    <div className='imageBox'>
    <input type="file"/>
    {Detail.imageUrl.map((data,idx)=>{
        return(
            <div className='img' key={idx}><img src={data} alt="사진"/></div>
        )
    })}


    </div>


    <div className='mainBox'>
        <div className='one'>
            <div className='position'>
            <span> 제목</span>
            <input type="text" placeholder={Detail.title} ref={title_ref}/>
            </div>

            <div className='position'>
            <span> 주소</span>
            <input type="text" placeholder={Detail.url} ref={url_ref}/>
            </div>

            <div className='position'>
            <span> 종류</span>
            <input type="text"  placeholder={Detail.productType} ref={productType_ref}/>
            </div>



        </div>



        <div className='two'>
            <span className='content'>내용</span>
            <textarea className='contentBox' placeholder={Detail.content} ref={content_ref}/> 
            



        </div>
    </div>



    <div className='btnBox'>
        <button>취소</button>
        <button onClick={ReviewInsert}>수정완료</button>
    </div>


    </div>

    
    </Review>

    </>
  )
  
}

const Review = styled.div`
.reviewC{
    width:100%;
    height: 93vh;
}

.title{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    padding:10px;
    margin-left:160px;
}

.images{
    width:90%;
    height: 5%;
    margin:auto; 
}

.imageBox{
    width:90%;
    margin:auto;
    height: 30%;
    display:flex;
    justify-content:center;
    align-items:center;
}

.mainBox{
    width:90%;
    height: 39%;
    margin:auto;
    display:flex;
}

.btnBox{
    width:90%;
    margin:auto;
    height: 5%;
    display:flex;
    justify-content: flex-end;
}

.one{
    width:40%;
}

.two{
    width:60%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items:center;
}

.img{
    width:300px;
    height:250px;
    border: 1px solid #E4E4E4;
    border-radius: 10px;
    margin-left: 25px;
}

.img > img {
    width:300px;
    height:250px;
    border-radius: 10px;
}

.one > div >span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
}

.one > div > input {
    border: 1px solid #E4E4E4;
    border-radius: 10px;
    width:50%;
    height: 50px;
}

.position{
    margin:50px 0px 30px 30px;
}

.position >span{
    margin-right: 30px;
}

.contentBox{
    width:75%;
    height: 80%;
    border: 1px solid #E4E4E4;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
}

.contentBox > span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
}

.content{
    padding:20px;
}

.btnList{
    display:flex;
    justify-content:space-around;
    margin-bottom:10px;
}

.ParkBtn{
  width:20%;
  height: 50%;
  border-radius:15px;
  font-size: 17px;
  color:#263238;
  border: none;
  background-color:#ffa000;

}

.KidBtn{
  width:20%;
  height: 50%;
  border-radius:15px;
  font-size: 17px;
  color:#263238;
  border: none;
  background-color:#c5e1a5; 
}

.btnBox > button{
background: #3C3C3C;
border-radius: 30px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
color:white;
width:10%;
height: 45px;
margin-right: 80px;
border: none;
}




`


export default ReviewEdit;
