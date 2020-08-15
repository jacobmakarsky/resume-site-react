import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import Pic1 from '../../../src/assets/portfolio/loopring3.JPG'
import Pic2 from '../../../src/assets/portfolio/loopring2.JPG'
import Pic3 from '../../../src/assets/portfolio/loopring.JPG'
import Pic4 from '../../../src/assets/portfolio/loopring4.JPG'


class LoopringCarousel extends Component {
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

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic4}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic3}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default LoopringCarousel;