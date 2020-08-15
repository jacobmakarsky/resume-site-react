import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons'

import Me from '../assets/me.JPG'

class AboutMe extends Component {
  render() {

    return (
		<Container fluid className = "bg-dark" id="aboutMe">
			<Row>
				<Col xs = {12} md={4} className = "d-flex justify-content-center align-items-center">
		    		<h1 className = "display-4 mt-5 text-light">About Me</h1>
		    	</Col>

				<Col xs = {12} md = {4} className = "m-auto p-5">
					<Card className="text-center">
					  	<Card.Body>
					  		<Card.Text>I enjoy being around people, using my imagination to design & develop software and experimenting 
			    			with different methods of development. Finding the cleanest and easiest way to design/develop something is a big challenge, but something I greatly enjoy doing. I plan to be a digital nomad; I want to see the world and 
			    			eventually gain enough equity to help in philanthropy.
			    			</Card.Text>
					  	</Card.Body>
					</Card>
				</Col>

				<Col xs = {12} md = {4} className = "m-auto p-5">
		    		<Card className="text-center">
		    			<Card.Header><strong>Contact Details</strong></Card.Header>
					  	<Card.Body>
					  		<Card.Text>
					  			<p className = "text-muted">Jacob Makarsky</p>
			    				<p className = "text-muted">Pittsburgh, Pennsylvania</p>
			    				<p className = "text-muted">jacobmakarsky@gmail.com</p>
			    			</Card.Text>
					  	</Card.Body>
					</Card>				 
		    	</Col>
			</Row>
		</Container>
    );
  }
}

export default AboutMe;