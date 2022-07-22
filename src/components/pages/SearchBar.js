import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

function SearchBar() {
    const navigate = useNavigate();

  return (
    <List>
      <div className="title-list">
          <ul className="title-li">
            <li className="title"
            style={{marginRight:"30px"}}
              onClick={() => { navigate(`/api/search`) }}>
              전체</li>
            <li className="title"
             style={{marginRight:"30px"}}
            onClick={() => { navigate(`/search/recruit`) }}>
             체험 모집</li>
            <li className="title"
             style={{marginRight:"30px"}}
            onClick={() => { navigate(`/search/place`) }}>
              장소 추천</li>
            <li className="title"
            style={{marginRight:"30px"}}
            onClick={() => { navigate(`/search/review`) }}>
              육아템 리뷰</li>
          </ul>

        </div>
    </List>
  )
}

const List = styled.div`

.title-list {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  li {
      display: flex;
      list-style: none;
      margin-top: 30px;
  }
}

.title-li{
  display: flex;
}

.title {
  color: #000000;
  font-family: "Nanum Gothic";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 30px;
  cursor: pointer;
}
`;


export default SearchBar
