import React from 'react'
import styled from 'styled-components';

//  elements & components
import Grid from '../components/elements/Grid';
import Header from '../components/Header';
import RCard from '../components/cards/RCard';

function Place() {
  return (
    <div>
      <Header/>
      <Grid align="center" height="100px" margin="0 0 32 0">
           <Title>육아 물품 추천</Title>
           </Grid>
        <Container>
       <div className='cards'>
         <RCard />
       </div>
      </Container>
    </div>
  )
}

const Title = styled.h1 `
margin-top: 50px;
`;

const Container = styled.div``;

export default Place;
