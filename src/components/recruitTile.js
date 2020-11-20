import { Link } from 'gatsby';
import React from 'react';
import WidgetTitleBar from './widgetTitleBar';

const Hero = () => {
	return (
		<section className={`recruit-tile`}>
			<WidgetTitleBar text="Recruitment" />
			<Link
				className={`recruit-tile-link`}
				to="/recruitment"
				name="Recruitment Link"
			>
				<p>We are recruiting!</p>
				<span className="fake-link arrow-link">Read More</span>
			</Link>
		</section>
	);
};

export default Hero;
