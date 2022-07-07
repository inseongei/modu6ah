import React from 'react'
import styled from 'styled-components';

//  elements & components
import Grid from '../components/elements/Grid';
import Header from '../components/Header';
import LCard from '../components/cards/LCard';

function Place() {
  return (
    <div>
      <Header />
      <Grid align="center" height="100px" margin="0 0 32 0">
        <Title>장소 추천 게시글</Title>
      </Grid>
      <Container>
        <div className='cards'>
          <LCard />
        </div>
      </Container>
    </div>
  )
}

const Title = styled.h1`
margin-top: 50px;
`;

const Container = styled.div``;

export default Place
