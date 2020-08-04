import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons'

import Me from '../assets/me.JPG'

const styles = {
}

class AboutMe extends Component {
  render() {

    return (
		<Container fluid className = "bg-dark" id="aboutMe">
		  <Row md = {12} className = "p-5">
		    <Col md = {3} className="m-auto">
		    	<Image className="w-50" fluid src={Me} roundedCircle />
		    </Col>

		    <Col className = "text-left m-5 pr-md-5">
		    	<Row>
		    		<h3 className = "text-white">About Me</h3>

			    	<p className = "text-muted mt-3">
			    		I enjoy being around people, using my imagination to design & develop software and experimenting 
			    		with different methods of development. I plan to be a digital nomad; I want to see the world and 
			    		eventually gain enough equity to help in philanthropy.
			    	</p>
		    	</Row>

		    	<Row>
			    	<Col md = {6} className = "p-0 mt-5">
			    		<h3 className = "text-white">Contact Details</h3>
				    	<p className = "text-muted mt-3">Jacob Makarsky</p>
				    	<p className = "text-muted">Pittsburgh, Pennsylvania</p>
				    	<p className = "text-muted">jacobmakarsky@gmail.com</p>
			    	</Col>
		    	</Row>
		    </Col>
		  </Row>
		</Container>
    );
  }
}

export default AboutMe;