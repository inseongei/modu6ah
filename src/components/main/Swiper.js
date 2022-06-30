import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../../shared/App.css';

const Swiper = () => {
  return (
    <div>   
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdogU1TFXeOsrpaXwVwatNbroFGgTdB5Qykg&usqp=CAU"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdogU1TFXeOsrpaXwVwatNbroFGgTdB5Qykg&usqp=CAU"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdogU1TFXeOsrpaXwVwatNbroFGgTdB5Qykg&usqp=CAU"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    </div>
  )
}



export default Swiper
