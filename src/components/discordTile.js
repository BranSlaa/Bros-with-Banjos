import { Link } from 'gatsby';
import React from 'react';
import discordLogo from '../assets/images/Discord-Logo+Wordmark-White.svg';

const Hero = () => {
	return (
		<section className={`discord-tile`}>
			<Link
				target="_blank"
				className={`discord-tile-link`}
				to="https://discord.gg/9VvYYhm"
				name="Bros with Banjos Discord Link"
			>
				<img alt="Discord Logo" src={discordLogo} />
			</Link>
		</section>
	);
};

export default Hero;
