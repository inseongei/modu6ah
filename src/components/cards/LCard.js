import React from 'react'
import styled from 'styled-components';
import { PlaceData } from '../../shared/placedata';

function LCard() {

    return (
        <>
        <Container>
            {PlaceData.map(item => (
                <div className='card'>
                    <div className='card-box'>
                        {/* <img src={item.imageUrl} alt={item.title} /> */}
                        <h3>{item.title}</h3>
                        <div className='card-right'>
                            <h3>{item.content}</h3>
                            <p>{item.nickname}</p>
                            <p>{item.createdAt}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Container>
</>
    )
}

const Container = styled.div`
display: flex;

// background-color: lightgray;
justify-content: center;
align-items: center;
gap: 3.5em;

.card {
background: white;
border-radius: 30px;
padding-left: 250px;
padding-bottom: 30px;
box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.09);
}

.card-box {
    margin: 10px 40px 0px;
}

h3 {
    margin-left: 10px;

}

p {
    margin: 0;
}

`;


export default LCard;

