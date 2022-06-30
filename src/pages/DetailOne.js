import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'

const DetailOne = () => {
  return (
    <>
    <Header/>
    <Detail>
        <div className='toggle'>
            <input type="checkbox"/> 모집중
        </div>
        <div className='one_container'>
            <div className='one_box'>
                <div> 제목  <span>블루베리 농장 체험</span></div>
                <div>날짜  <span>2022-06-30(목)</span></div>
                <div>시간  <span>15:00</span></div>
                <div>위치  <span>블루베리팜 수원점</span></div>
                <div>연령대  <span className='span_position'>5~10세</span></div>
            </div>
            <div className='two_box'>
            <div className='three_box'>
            <div className='Detail_profile'>프로필사진</div>

            <div className="Detail_username">
            <div className="username">안양길동맘</div>
            <div className='btn_box'>
                <button>1:1문의하기</button>
                <button>신청하기</button>
            </div>
            </div>
            </div>

            <div className='four_box'>
            블루베리 농장 체험 가려는데 거리가 멀어 운전 가능한 학부모님 찾습니다~
            현재 안양에 거주 중이라 근처 가까운 곳에서 뵈었으면 좋겠습니다.
            육아 스타일: 강하게 키웁니다
            준비물: 물티슈
            입장료: 성인 15000원 / 아동 8000원
            </div>


            </div>
        </div>
    </Detail>
    </>
  )
}

const Detail = styled.div`
    border:1px solid black;


.toggle{
    border:1px solid black;
    height: 100px;
}

.one_container{
    display:flex;
}

.one_box{
    border:1px solid black;
    width:50%;
    height:50vh;
    display:flex;
    justify-content:center;
    flex-direction:column;
    font-size : 25px;
    
}

.one_box > div {
    margin:30px 0px 0px 70px;
}


.span_position{
    position:relative;
    right:23px;
}
.one_box > div >span{
    border:2px solid #E4E4E4;
    display:inline-block;
    width:30vw;
    padding:10px;
    margin-left: 30px;
}

.btn_box{
    display:flex;
    align-items:center;
    justify-content:center;
}

.btn_box > button {
    width:236px;
    height:48px;
    margin-left:13px;
    background-color:white;
    font-size:20px;
}


.two_box{
    border:1px solid black;
    width:50%;
    height:50vh;
}

.three_box{
    border:1px solid black;
    height:30%;
    display:flex;
}

.four_box{
    padding:20px;
    border:1px solid black;
    height:70%;
    width:70%;
    margin:auto;
    word-break:normal;
}

.Detail_profile{
    width:144px;
    height: 144px;
    border-radius:50%;
    border:1px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
}

.Detail_username{
    border:1px solid black;
    width: 70%;
}

.username{
    height: 50%;
    display:flex;
    align-items:center;
    margin-left:30px;
    border:1px solid black;
    font-size:33px;

}

.btn_box{
    border:1px solid black;
    height:50%;
}
`

export default DetailOne