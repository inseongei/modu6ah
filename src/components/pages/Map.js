import React from 'react'
import styled from 'styled-components'

function Map() {
  return (
   <MapBox>
<div className='map_container'>

</div>
   </MapBox>
  )
}

const MapBox = styled.div`
height:500px;
display:flex;
align-items:center;
justify-content:center;

.map_container{
border: 2px solid #E4E4E4;
border-radius: 10px;
width:60%;
height:90%;
}
`;

export default Map
