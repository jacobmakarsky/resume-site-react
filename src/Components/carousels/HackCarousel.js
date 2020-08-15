import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import Pic1 from '../../../src/assets/portfolio/hackpsu.JPG'
import Pic2 from '../../../src/assets/portfolio/hackpsu2.JPG'

class HackCarousel extends Component {
  render() {
    return (
      <Carousel interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default HackCarousel;