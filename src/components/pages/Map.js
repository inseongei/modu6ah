import React, { useState } from 'react'
import styled from 'styled-components'
import KakaoMap from './KakaoMap'

const { daum } = window

function Map() {
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)

  }

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
      <Position>
       <strong>위치</strong>
        <MapSearch
        placeholder="검색어를 입력하세요"
         onChange={onChange} 
         value={InputText} />
        <button type="submit">검색</button>
        {/* <input type="text" id="sample5_address" placeholder="주소"/>
<input type="button" onclick="sample5_execDaumPostcode()" value="주소 검색"/><br/> */}
      </Position>
      </form>
      <KakaoMap searchPlace={Place} />
    </>
  )
}

const Position = styled.div`
margin-left: 28px;
margin-bottom: 20px;
 
button{ 
  margin-left: 10px;
}
`;

const MapSearch = styled.input`
border: 1px solid #e4e4e4;
border-radius: 10px;
width: 330px;
height: 50px;
margin-left: 20px;
outline: none;

::placeholder {
  padding-left: 8px;
}
`;

export default Map;
