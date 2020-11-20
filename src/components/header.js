import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/images/bros_with_banjos.svg';

const Header = ({ siteTitle }) => (
	<Navbar bg="dark" variant="dark" expand="lg">
		<Container>
			<Navbar.Brand name="Bros with Banjos Homepage Link" href="/">
				{logo ? (
					<img
						alt="Bros with Banjos Logo"
						className={`logo-image`}
						src={logo}
					/>
				) : (
					siteTitle
				)}
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbar-nav" />
			<Navbar.Collapse id="navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link as={Link} to="/">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="/recruitment">
						Recruitment
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
