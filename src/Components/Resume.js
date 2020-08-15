import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'

import Me from '../assets/me.JPG'

class Resume extends Component {
  render() {

    return (
		<Container fluid className = "bg-light" id="resume">
			<Row md = {12} className = "p-5">
		    	<Col md={3} className = "d-flex justify-content-center align-items-center">
		    		<h1 className = "display-4 mb-3">Education</h1>
		    	</Col>

		    	<Col md = {6} className = "mx-auto">
		    		<Card className="text-center">
					  <Card.Header>Pennsylvania State University</Card.Header>
					  <Card.Body>
					    <Card.Title>B.S in Information Science & Technology</Card.Title>
					    <h6 className = "card-subtitle mb-2 text-muted">May 2020</h6>
					    <Card.Text>
					      Learned software engineering at an educational level, learned 2 years of Chinese, 
					      made friends from all over the world and helped lead in the local entrepreneur community.
					    </Card.Text>
					  </Card.Body>
					  <Card.Footer>State College, Pennsylvania</Card.Footer>
					</Card>
		    	</Col>
		    </Row>

		    <Row>
				<Col md={3}>
		    		<h1 className = "display-4 mb-3">Work</h1>
		    	</Col>

		    	<Col md = {6} className = "mx-auto">
					<Card className="text-center" className = "mb-5">
					  <Card.Header>Digital Wealth Management</Card.Header>
					  <Card.Body>
					    <Card.Title>Partner & Software Engineer</Card.Title>
					    <h6 className = "card-subtitle mb-2 text-muted">Mar 2020 - Present</h6>
					    <Card.Text>
					      Designing and developing front end (React) for a cryptocurrency arbitrage 
					      trading software to be licensed online for hedge funds
					    </Card.Text>
					  </Card.Body>
					  <Card.Footer>State College, Pennsylvania</Card.Footer>
					</Card>

					<Card className="text-center" className = "mb-5">
					  <Card.Header>Innoblue</Card.Header>
					  <Card.Body>
					    <Card.Title>Vice President</Card.Title>
					    <h6 className = "card-subtitle mb-2 text-muted">Apr 2019 - May 2020</h6>
					    <Card.Text>
					      Help lead the organization's direction, events, influence and connections.
					    </Card.Text>
					  </Card.Body>
					  <Card.Footer>State College, Pennsylvania</Card.Footer>
					</Card>

					<Card className="text-center" className = "mb-5">
					  <Card.Header>HackPSU</Card.Header>
					  <Card.Body>
					    <Card.Title>Guest Speaker</Card.Title>
					    <h6 className = "card-subtitle mb-2 text-muted">May 2019 & Nov 2019</h6>
					    <Card.Text>
					      Hosted workshops called 'Introduction to Blockchain Development' & 
					      'Introduction to iOS App Development' each with 50+ attendees.
					    </Card.Text>
					  </Card.Body>
					  <Card.Footer>State College, Pennsylvania</Card.Footer>
					</Card>

					<Card className="text-center" className = "mb-5">
					  <Card.Header>Arus Labs LLC</Card.Header>
					  <Card.Body>
					    <Card.Title>Software Engineer (Contract)</Card.Title>
					    <h6 className = "card-subtitle mb-2 text-muted">Sept 2019 - Nov 2019</h6>
					    <Card.Text>
					      Design & Develop an iOS application using Swift, Xcode and Adobe XD
					    </Card.Text>
					  </Card.Body>
					  <Card.Footer>State College, Pennsylvania</Card.Footer>
					</Card>

					<Card className="text-center" className = "mb-5">
					  <Card.Header>Loopring</Card.Header>
					  <Card.Body>
					    <Card.Title>Blockchain Software Engineering Intern</Card.Title>
					    <h6 className = "card-subtitle mb-2 text-muted">Sept 2019 - Nov 2019</h6>
					    <Card.Text>
					      	Developed smart contract (Solidity, JS) to allow users to swap Loopring’s NEO blockchain coin (LRC), traded at a volume of $5k-$50k USD/day, for Loopring’s TRON blockchain coin (LRN).
					    	Designed some event posters and social media images.
					    </Card.Text>
					  </Card.Body>
					  <Card.Footer>Shanghai, China</Card.Footer>
					</Card>

					<Card className="text-center" className = "mb-5">
					  <Card.Header>CTe Learning, Inc.</Card.Header>
					  <Card.Body>
					    <Card.Title>App Designer</Card.Title>
					    <h6 className = "card-subtitle mb-2 text-muted">SMar 2016 - May 2016</h6>
					    <Card.Text>
					      I was employed by Cte Learning Incorporated; it was a paid internship where I designed an 
					      application for Big Time Grain Company. I regularly pitched the project status of the application 
					      through video chat, received feedback and made changes.
					    </Card.Text>
					  </Card.Body>
					  <Card.Footer>Greensburg, Pennsylvania</Card.Footer>
					</Card>
		    	</Col>
		    </Row>

		    <Row>
				<Col md={3}>
		    		<h1 className = "display-4 mb-3">Skills</h1>
		    	</Col>

		    	<Col md = {6} className = "mx-auto">
		    		<Card className = "mb-3">
					  <Card.Header className="text-left">
					  	Java
					  </Card.Header>
					  <Card.Body>
					    <ProgressBar animated now={60} />
					  </Card.Body>
					</Card>

					<Card className = "mb-3">
					  <Card.Header className="text-left">
					  	ReactJs
					  </Card.Header>
					  <Card.Body>
					    <ProgressBar animated now={70} />
					  </Card.Body>
					</Card>

					<Card className = "mb-3">
					  <Card.Header className="text-left">
					  	HTML5
					  </Card.Header>
					  <Card.Body>
					    <ProgressBar animated now={70} />
					  </Card.Body>
					</Card>

					<Card className = "mb-3">
					  <Card.Header className="text-left">
					  	CSS
					  </Card.Header>
					  <Card.Body>
					    <ProgressBar animated now={70} />
					  </Card.Body>
					</Card>

					<Card className = "mb-3">
					  <Card.Header className="text-left">
					  	JavaScript
					  </Card.Header>
					  <Card.Body>
					    <ProgressBar animated now={40} />
					  </Card.Body>
					</Card>

					<Card className = "mb-3">
					  <Card.Header className="text-left">
					  	Solidity
					  </Card.Header>
					  <Card.Body>
					    <ProgressBar animated now={25} />
					  </Card.Body>
					</Card>

					<Card className = "mb-3">
					  <Card.Header className="text-left">
					  	MongoDB
					  </Card.Header>
					  <Card.Body>
					    <ProgressBar animated now={25} />
					  </Card.Body>
					</Card>

					<Card className = "mb-3">
					  <Card.Header className="text-left">
					  	Git
					  </Card.Header>
					  <Card.Body>
					    <ProgressBar animated now={60} />
					  </Card.Body>
					</Card>

					<Card className = "mb-3">
					  <Card.Header className="text-left">
					  	Adobe Illustrator
					  </Card.Header>
					  <Card.Body>
					    <ProgressBar animated now={50} />
					  </Card.Body>
					</Card>

					<Card className = "mb-3">
					  <Card.Header className="text-left">
					  	Adobe XD
					  </Card.Header>
					  <Card.Body>
					    <ProgressBar animated now={90} />
					  </Card.Body>
					</Card>

					<Card className = "mb-3">
					  <Card.Header className="text-left">
					  	Google Cloud Platform
					  </Card.Header>
					  <Card.Body>
					    <ProgressBar animated now={40} />
					  </Card.Body>
					</Card>

					<Card className = "mb-3">
					  <Card.Header className="text-left">
					  	Google Cloud Vision
					  </Card.Header>
					  <Card.Body>
					    <ProgressBar animated now={25} />
					  </Card.Body>
					</Card>

					<Card className = "mb-3">
					  <Card.Header className="text-left">
					  	User Experience & Design
					  </Card.Header>
					  <Card.Body>
					    <ProgressBar animated now={80} />
					  </Card.Body>
					</Card>
		    	</Col>
			</Row>
		</Container>
    );
  }
}

export default Resume;