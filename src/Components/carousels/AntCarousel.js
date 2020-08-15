import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import Pic1 from '../../../src/assets/portfolio/anteater4.JPG'
import Pic2 from '../../../src/assets/portfolio/anteater5.JPG'
import Pic3 from '../../../src/assets/portfolio/anteater3.JPG'
import Pic4 from '../../../src/assets/portfolio/anteater6.JPG'
import Pic5 from '../../../src/assets/portfolio/anteater1.JPG'
import Pic6 from '../../../src/assets/portfolio/shanghai.JPG'

class AntCarousel extends Component {
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

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic3}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic4}
            alt="Fourth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic5}
            alt="Fifth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic6}
            alt="Sixth slide"
          />
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default AntCarousel;