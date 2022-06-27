import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import styled from 'styled-components';
import '../../App.css'

const Swiper = () => {
    const imageData =[
        {url:'https://images.unsplash.com/photo-1529672425113-d3035c7f4837?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
        {url :'https://images.unsplash.com/photo-1571210862729-78a52d3779a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGtpZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
        {url :'https://images.unsplash.com/photo-1600880291319-1a7499c191e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
    ]


  return (
  <IMGS>
    <SimpleImageSlider
        width={'100%'}
        height={'35%'}
        images={imageData}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={3.0}
      />
  </IMGS>

  )

}


const IMGS = styled.div`
    @media screen and (max-width:768px){
      margin-top: 83px;
  }
`

export default Swiper