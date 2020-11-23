import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faSkype } from '@fortawesome/free-brands-svg-icons/faSkype'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard'

import Me from '../assets/me.JPG'

const styles = {
	button: {
		color: '#212529',
		fontSize: '2rem'
	}
}

class Contact extends Component {
  render() {

    return (
		<Container fluid className = "bg-light" id="contact">
		  <Row md = {12} className = "p-5">
		    <Col md = {6} className="m-auto">
		    	<Card>
				  <Card.Header as="h5">Contact Me</Card.Header>
				  <Card.Body>
				    <Card.Title>jacobmakarsky@gmail.com</Card.Title>
				    <Button variant="primary" href = "mailto:jacobmakarsky@gmail.com">Email Me</Button>
				  </Card.Body>
				  <Card.Footer>
				  	<Button style = {styles.button} size = "lg" href = "https://www.linkedin.com/in/jacobmakarsky/" variant="link" className="mr-2">
						<FontAwesomeIcon icon={faLinkedinIn}/>
					</Button>

					<Button style = {styles.button} size = "lg" href = "https://github.com/jacobmakarsky" variant="link" className="mr-2">
						<FontAwesomeIcon icon={faGithub}/>
					</Button>
				  </Card.Footer>
				</Card>
		    </Col>
		  </Row>

		  <Row md = {12} className = "p-5">
		  	<Col md = {12}>
		  		<Card body>Copyright © 2020 Jacob Makarsky</Card>
		  	</Col>
		  </Row>
		</Container>
    );
  }
}

export default Contact;