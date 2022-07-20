import React from 'react'
import styled from 'styled-components'

function PhotoItem({ item, onView }) {
    return (
        <PhotoBox>
        <li>
            <img src={item} alt="사진" />
        </li>
        </PhotoBox>
    )
}

const PhotoBox = styled.div`
display: flex;
list-style: none;

img { 
    width:140px;
    height:130px;
    border-radius: 30px;
    margin-left:10px;
    margin-right: 5px;
    border: 1px solid black;
}

`

export default PhotoItem;
