import { Link } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
	return (
		<section className={`hero`}>
			<Container fluid>
				<Row>
					<Col className={`hero-col`}>
						<h1 className={`hero-title`}>Welcome Brothers!</h1>
						{/* <Link className={`btn`} to="/recruitment">
							Recruitment
						</Link> */}
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Hero;
