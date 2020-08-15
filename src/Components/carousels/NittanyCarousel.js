import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import Pic2 from '../../../src/assets/portfolio/nittany1.JPG'
import Pic3 from '../../../src/assets/portfolio/nittany2.JPG'
import Pic4 from '../../../src/assets/portfolio/nittany3.JPG'
import Pic5 from '../../../src/assets/portfolio/nittany4.JPG'
import Pic6 from '../../../src/assets/portfolio/nittany5.JPG'

class NittanyCarousel extends Component {
  render() {
    return (
      <Carousel interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic3}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic4}
            alt="First slide"
          />
        </Carousel.Item>

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
            src={Pic6}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic5}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default NittanyCarousel;