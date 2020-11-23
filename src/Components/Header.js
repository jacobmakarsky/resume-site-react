import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Background from '../assets/headerBackground.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faSkype } from '@fortawesome/free-brands-svg-icons/faSkype'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope'

const styles = {
	transparentColor: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},

	jumbotron: {
		backgroundImage: `url(${Background})`,

		/* Center and scale the image nicely */
	    backgroundPosition: 'center',
	    backgroundRepeat: 'no-repeat',
	    backgroundSize: 'cover',
	},

	link: {
		color: '#FFFFFF',
		fontSize: '1.2rem'
	},

	button: {
		color: '#FFFFFF',
		fontSize: '2rem'
	}
}

class Header extends Component {
  render() {

    return (
		<Jumbotron fluid style = {styles.jumbotron} className = "w-100 vh-100 position-center m-0" id="home">
			<div style = {styles.transparentColor} className = "position-absolute fixed-top w-100 vh-100">
				<Container fluid = "lg" className = "d-flex justify-content-center align-items-center">
					<Navbar 
						expand="lg"
						sticky="top"
						variant = "dark"
						collapseOnSelect
					>
					  <Navbar.Toggle aria-controls="basic-navbar-nav"/>

					  <Navbar.Collapse id="basic-navbar-nav">
					    <Nav>
					      <Nav.Link style = {styles.link} href="#home" className="mr-3">Home</Nav.Link>
					      <Nav.Link style = {styles.link} href="#aboutMe" className="mr-3">About</Nav.Link>
					      <Nav.Link style = {styles.link} href="#resume" className="mr-3">Resume</Nav.Link>
					      <Nav.Link style = {styles.link} href="#projects" className="mr-3">Portfolio</Nav.Link>
					      <Nav.Link style = {styles.link} href="#contact" className="mr-3">Contact</Nav.Link>
					    </Nav>
					  </Navbar.Collapse>
					</Navbar>
				</Container>

				<Container fluid = "lg" className = "h-100 d-flex justify-content-center align-items-center">
					<Row>
						<Col>
							<h1 className = "display-1">Jacob Makarsky</h1>

							<p className = "lead">
								Pittsburgh based Software Engineer & UX/UI Designer.
							</p>

							<Button style = {styles.button} size = "lg" href = "mailto:jacobmakarsky@gmail.com" variant="link" className="mr-2">
								<FontAwesomeIcon icon={faEnvelope}/>
							</Button>

							<Button style = {styles.button} size = "lg" href = "https://www.linkedin.com/in/jacobmakarsky/" variant="link" className="mr-2">
								<FontAwesomeIcon icon={faLinkedinIn}/>
							</Button>

							<Button style = {styles.button} size = "lg" href = "https://github.com/jacobmakarsky" variant="link" className="mr-2">
								<FontAwesomeIcon icon={faGithub}/>
							</Button>
						</Col>
					</Row>
				</Container>
			</div>
		</Jumbotron>
    );
  }
}

export default Header;