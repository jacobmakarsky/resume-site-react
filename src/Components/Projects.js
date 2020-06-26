import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import PopoverTitle from 'react-bootstrap/PopoverTitle'
import PopoverContent from 'react-bootstrap/PopoverContent'

import Innoblue from '../assets/portfolio/innoblue.JPG'
import HackPSU from '../assets/portfolio/nittanyai.JPG'
import HackPSU2 from '../assets/portfolio/workshop1.JPG'
import Website from '../assets/portfolio/website.jpg'

class Projects extends Component {
  render() {

    return (
		<Container fluid className = "bg-secondary" id="projects">
			<h3 className = "display-4 text-white pt-5">Projects</h3>

			<Row md = {12} className = "p-5">

		    	<Col md = {3} className = "mb-3">
		    		<OverlayTrigger
						placement = "top"
						overlay = {
					        <Popover id="popover-basic">
							    <Popover.Title as="h3">Innoblue Website - 2019</Popover.Title>
							    <Popover.Content>
							      Custom website using <strong>HTML, CSS, Javascript, Git & Github.</strong>
							    </Popover.Content>
							</Popover>
				      }
				    >
				      <Image className = "w-50" rounded fluid src = {Innoblue}/>
				    </OverlayTrigger>
		    	</Col>

		    	<Col md = {3} className = "mb-3">
		    		<OverlayTrigger
						placement = "top"
						overlay = {
					        <Popover id="popover-basic">
							    <Popover.Title as="h3">Disaster Relief & Recovery Software - 2019</Popover.Title>
							    <Popover.Content>
							      Hackathon project using <strong>Java, Swift, GCP & GCV.</strong>
							    </Popover.Content>
							</Popover>
				      }
				    >
				      <Image className = "w-50" rounded fluid src = {HackPSU}/>
				    </OverlayTrigger>
		    	</Col>

		    	<Col md = {3} className = "mb-3">
		    		<OverlayTrigger
						placement = "top"
						overlay = {
					        <Popover id="popover-basic">
							    <Popover.Title as="h3">Park Ranger Manager - 2018</Popover.Title>
							    <Popover.Content>
							      1st place winner in Hackathon (HackPSU). iOS application using <strong>Swift, Adobe XD & Xcode.</strong>
							    </Popover.Content>
							</Popover>
				      }
				    >
				      <Image className = "w-50" rounded fluid src = {HackPSU2}/>
				    </OverlayTrigger>
		    	</Col>

		    	<Col md = {3} className = "mb-3 d-flex justify-content-center align-items-center">
		    		<OverlayTrigger
						placement = "top"
						overlay = {
					        <Popover id="popover-basic">
							    <Popover.Title as="h3">This Website!</Popover.Title>
							    <Popover.Content>
							      I designed and developed this website myself using <strong>ReactJs, Bootstrap, Font Awesome, Git, Github, Github Pages, Sublime Text & Salt & Vinegar Kettle Cooked Chips.</strong>
							    </Popover.Content>
							</Popover>
				      }
				    >
				      <Image className = "w-50" rounded fluid src = {Website}/>
				    </OverlayTrigger>
		    	</Col>
			  </Row>
		</Container>
    );
  }
}

export default Projects;