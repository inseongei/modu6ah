import React from 'react'
import styled from 'styled-components'

function PhotoItem({ item, onView }) {
    const { image, title, id } = item
    return (
        <PhotoBox>
                <li onClick={() => onView(id)}>
                    <img src={image} />
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
