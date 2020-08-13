import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'

import Background from '../assets/slideshowBackground.jpg'

import Forbes from '../assets/portfolio/forbes.JPG'
import HackPSU from '../assets/portfolio/hackpsu.jpeg'
import Jacob from '../assets/portfolio/jacob.jpg'
import Loopring from '../assets/portfolio/loopring.JPG'

const styles = {
	background: {
		backgroundImage: `url(${Background})`,

		/* Center and scale the image nicely */
	    backgroundPosition: 'center',
	    backgroundRepeat: 'no-repeat',
	    backgroundSize: 'cover',
	}
}

class Slideshow extends Component {
  render() {

    return (
		<Container fluid style = {styles.background} id="projects" className = "vw-100 vh-100">
		  <Row md = {12} className = "p-5 h-100 d-flex justify-content-center align-items-center">
		    <Col xs={12} md={3}>
		      <Image src={Jacob} thumbnail fluid/>
		    </Col>

		    <Col xs={6} md={3}>
		      <Image src={HackPSU} thumbnail fluid/>
		    </Col>

		    <Col xs={6} md={3}>
		      <Image src={Loopring} thumbnail fluid/>
		    </Col>

		    <Col xs={6} md={3}>
		      <Image src={Forbes} thumbnail fluid/>
		    </Col>
		  </Row>
		</Container>
    );
  }
}

export default Slideshow;