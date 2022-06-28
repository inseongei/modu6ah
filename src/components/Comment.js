import React from 'react'
import styled from 'styled-components'


const comment = () => {
  return (
    <CommentBox>
        <div>댓글창</div>
        <div className='Box'>
            <div className='Chat'>
                <input type="text"/>
                <button>작성</button>
            </div>
        </div>
    </CommentBox>

  )
}

const CommentBox = styled.div`
    text-align:center;

.Box{
    width:50%;
    height: 80vh;
    border: 1px solid black;
    margin:auto;
}

.Chat{
    position: relative;
    bottom: 0;
}
`

export default comment