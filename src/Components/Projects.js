import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

import Miletus from '../assets/portfolio/miletus.jpg'
import Website from '../assets/portfolio/website.jpg'
import Loopring from '../assets/portfolio/loopring.JPG'

import {
	PRMCarousel,
	InnoCarousel,
	AntCarousel,
	HackCarousel,
	NittanyCarousel,
	LiveBetCarousel,
	LoopringCarousel
} from './carousels';

class Projects extends Component {
  render() {

    return (
		<Container fluid style={{backgroundColor: "#162129"}} className = "p-1" id="projects">
			<h3 className = "display-4 text-white pt-5">Portfolio</h3>

			<CardColumns className = "m-5 p-2">
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

			  <Card>
			    <Card.Img variant="top" src={Miletus} />
			    <Card.Body>
			      <Card.Title>Miletus, Crypto Arbitrage Trading Software - 2020</Card.Title>
			      <Card.Text>
			        Custom software using <strong>React</strong> & <strong>Javascript</strong>. <strong>Draggable</strong> & <strong>Resizeable</strong> components. <strong>Customizeable personal dashboard</strong>. My crown jewel project :)
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      	<Button variant="primary" href="https://www.linkedin.com/company/digitalwealthmanagement/">See More</Button>
			    </Card.Footer>
			  </Card>

			  <Card>
			    <LiveBetCarousel />
			    <Card.Body>
			      <Card.Title>LiveBet - Spring 2020</Card.Title>
			      <Card.Text>
			      	Designed website on <strong>Wordpress</strong> and an <strong>iOS</strong> application for a <strong>blockchain</strong> sports betting startup that we decided to put on hold due to Covid-19.
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      	<Button variant="primary" href="https://livebet.games">See More</Button>
			    </Card.Footer>
			  </Card>

			  <Card>
			    <NittanyCarousel />
			    <Card.Body>
			      <Card.Title>Nittany AI Challenge 3rd Place - Fall 2019</Card.Title>
			      <Card.Text>
			      	Participated in an <strong>AI</strong> challenge (solo team) at HackPSU (Penn State university-wide public Hackathon, 1000+ attendees).
			      </Card.Text>
			      <Card.Text>
			      	The <strong>Java</strong> software for first responders and local governments scrapes social media by hashtag or a list of residents, scans the images uploaded which can be sorted by date, uses <strong>AI</strong> to evaluate what's going on in the pictures, sends the data from <strong>Google Cloud Platform</strong> to <strong>MongoDB Atlas</strong>, and then sends the data to the Java application to be viewed by the user.

					The <strong>iOS</strong> phone application allows residents to see local news stories quickly, request items, request assistance, see if other neighbors are meeting up, and see who else needs help and if they can help themselves.
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      	<Button variant="primary" href="https://devpost.com/software/disaster-relief-recovery-application-drra">See More</Button>
			    </Card.Footer>
			  </Card>

			  <Card bg = "primary" text = "light">
			    <blockquote className="blockquote mb-0 card-body">
			      <strong>Consistency</strong> is the most important heuristic in my UI/UX design. <strong>Ease-of-use</strong> is my biggest focus when thinking of <strong>Usability.</strong>
			    </blockquote>
			  </Card>

			  <Card>
			    <InnoCarousel />
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

			  <Card>
			    <LoopringCarousel />
			    <Card.Body>
			      <Card.Title>TRON Blockchain Smart Contract - Summer 2019</Card.Title>
			      <Card.Text>
			      	Developed smart contract (Solidity, JS) to allow users to swap Loopring’s NEO blockchain coin (LRC), traded at a volume of $5k-$50k USD/day, for Loopring’s TRON blockchain coin (LRN)
			      </Card.Text>
			      <Card.Text>
			      	Designed some event posters and social media images 
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      	<Button variant="primary" href="https://github.com/jacobmakarsky/lrn2lrt">See More</Button>
			    </Card.Footer>
			  </Card>

			  <Card>
			    <AntCarousel />
			    <Card.Body>
			      <Card.Title>AntEater, Shanghai Hackathon - Summer 2019 </Card.Title>
			      <Card.Text>
					Web application that scanned business websites (looking for keywords) using <strong>AI</strong> to find the best B2B customer for business. I created it with 2 other teammates using <strong>Python</strong> & <strong>Javascript</strong>. It was at a Hackathon I found; joined a random team at in China while studying abroad. I designed the front-end/logo and presented the project.
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      	<Button variant="primary" href="https://www.hackathon.io/projects/21875">See More</Button>
			    </Card.Footer>
			  </Card>

			  <Card bg = "primary" text = "light">
			    <blockquote className="blockquote mb-0 card-body">
			      <strong>My design process:</strong> 1) Find user goals and their challenges with similar software. 2) Create user personas to better understand the potential customer. 3) Create wireframes and a mock-up. 4) Do some usability testing. 5) Research the appropriate development language, necessary tools and scope of using said tools. 6) Begin development.
			    </blockquote>
			  </Card>

			  <Card>
			    <HackCarousel />
			    <Card.Body>
			      <Card.Title>Workshop Host - Spring/Fall 2019 </Card.Title>
			      <Card.Text>
			      	2 time invited guest speaker / presenter. Hosted workshop on "Intro to Blockchain Development" where I showed 60+ workshop attendees how to make an <strong>Ethereum</strong> smart contract using <strong>Solidity</strong> on Remix. Hosted another workshop on "Intro to iOS Development" where I showed 40+ attendees how to design and develop a basic <strong>iOS</strong> portfolio app using <strong>Xcode</strong>, <strong>Swift</strong>, and <strong>Adobe XD</strong>.
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      	<Button variant="primary" href="https://drive.google.com/drive/folders/1XOUUYmi6xkU3t2ubHO7PCBFS52xDuHx_?usp=sharing">See More</Button>
			    </Card.Footer>
			  </Card>

			  <Card>
			    <PRMCarousel />
			    <Card.Body>
			      <Card.Title>Park Ranger Manager - Fall 2018</Card.Title>
			      <Card.Text>
					1st place winner in Hackathon (HackPSU). iOS application using <strong>Swift, Adobe XD & Xcode.</strong>
			      </Card.Text>
			    </Card.Body>
			    <Card.Footer>
			      	<Button variant="primary" href="https://devpost.com/software/park-ranger-manager">See More</Button>
			    </Card.Footer>
			  </Card>
			</CardColumns>
		</Container>
    );
  }
}

export default Projects;