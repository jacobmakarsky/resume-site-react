import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import Pic1 from '../../../src/assets/portfolio/livebet.JPG'
import Pic2 from '../../../src/assets/portfolio/livebet2.JPG'

class LiveBetCarousel extends Component {
  render() {
    return (
      <Carousel interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic2}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic1}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default LiveBetCarousel;