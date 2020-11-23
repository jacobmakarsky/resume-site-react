import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons/faGoogleDrive'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard'

import Me from '../assets/me.JPG'

class AboutMe extends Component {
  render() {

    return (
		<Container fluid style={{backgroundColor: "#162129"}} id="aboutMe">
			<Row xs={12} className="pt-5 justify-content-md-center">
				<Col>
		    		<h1 className = "display-4 text-light">About Me</h1>
		    	</Col>
		    </Row>

		    <Row xs = {12} className="p-5">
				<Col xs = {12} md = {6} lg={4} className = "m-auto">
					<Card className="text-center">
					  	<Card.Body>
					  		<Card.Text>I love creating and do so through software development. Focuses on blockchain and disruptive technology. 我会说一点中文。Я учу русский. 
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