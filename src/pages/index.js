import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import BossKills from '../components/bossKills';
import { Col, Container, Row } from 'react-bootstrap';
import DiscordTile from '../components/discordTile';
import RecruitTile from '../components/recruitTile';

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<Hero />
			<Container className={`primary-container`}>
				<Row>
					<Col lg={9}>
						<BossKills />
					</Col>
					<Col lg={3}>
						<Row>
							<Col>
								<RecruitTile />
								<DiscordTile />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default IndexPage;
