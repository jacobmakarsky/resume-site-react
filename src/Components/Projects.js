import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

import Miletus from '../assets/portfolio/miletus.jpg'
import Innoblue from '../assets/portfolio/innoblue.JPG'
import HackPSU from '../assets/portfolio/nittanyai.JPG'
import HackPSU2 from '../assets/portfolio/workshop1.JPG'
import Website from '../assets/portfolio/website.jpg'

class Projects extends Component {
  render() {

    return (
		<Container fluid className = "bg-secondary p-1" id="projects">
			<h3 className = "display-4 text-white pt-5">Portfolio</h3>

			<CardColumns className = "m-5 p-2">
			  <Card>
			    <Card.Img variant="top" src={Miletus} />
			    <Card.Body>
			      <Card.Title>Miletus - Crypto Arbitrage Trading Software</Card.Title>
			      <Card.Text>
			        Custom software using <strong>React</strong> & <strong>Javascript</strong>. <strong>Draggable</strong> & <strong>Resizeable</strong> components. <strong>Customizeable personal dashboard</strong>. My crown jewel project :)
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      	<Button variant="primary" href="https://www.linkedin.com/company/digitalwealthmanagement/">See More</Button>
			    </Card.Footer>
			  </Card>

			  <Card>
			    <Card.Img className = "p-5" variant="top" src={Innoblue} />
			    <Card.Body>
			      <Card.Title>Innoblue Website - 2019</Card.Title>
			      <Card.Text>
			        Custom website using <strong>HTML, CSS, Javascript, Git & Github.</strong>
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      	<Button variant="primary" href="http://www.innoblue.org">See More</Button>
			    </Card.Footer>
			  </Card>

			  <Card bg = "primary" text = "light">
			    <blockquote className="blockquote mb-0 card-body">
			      <strong>Ease-of-use</strong> is the most important heuristic in my UI/UX design process.
			    </blockquote>
			  </Card>

			  <Card>
			    <Card.Img variant="top" src= {HackPSU} />
			    <Card.Body>
			      <Card.Title>Disaster Relief & Recovery Software - 2019</Card.Title>
			      <Card.Text>
			        Hackathon project using <strong>Java, Swift, GCP & GCV.</strong>
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      	<Button variant="primary" href="https://devpost.com/software/disaster-relief-recovery-application-drra">See More</Button>
			    </Card.Footer>
			  </Card>

			  <Card>
			    <Card.Img variant="top" src= {HackPSU2} />
			    <Card.Body>
			      <Card.Title>Park Ranger Manager - 2018</Card.Title>
			      <Card.Text>
					1st place winner in Hackathon (HackPSU). iOS application using <strong>Swift, Adobe XD & Xcode.</strong>
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      	<Button variant="primary" href="https://devpost.com/software/park-ranger-manager">See More</Button>
			    </Card.Footer>
			  </Card>

			  <Card>
			    <Card.Img variant="top" src= {Website} />
			    <Card.Body>
			      <Card.Title>This Website!</Card.Title>
			      <Card.Text>
					I designed and developed this website myself using <strong>ReactJs, Bootstrap, Font Awesome, Git, Github, Github Pages, Sublime Text & Salt & Vinegar Kettle Cooked Chips.</strong>
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      	<Button variant="primary" href="https://www.makarsky.dev">See More</Button>
			    </Card.Footer>
			  </Card>
			</CardColumns>
		</Container>
    );
  }
}

export default Projects;