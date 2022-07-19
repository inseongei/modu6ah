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
    width:135px;
    height:170px;
    border-radius: 30px;
    margin-left:15px;
    margin-right:10px;
    border: 1px solid black;
}

`

export default PhotoItem
