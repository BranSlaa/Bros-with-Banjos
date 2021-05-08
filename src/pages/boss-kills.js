import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import AllBossKills from '../components/allBossKills';
import { Col, Container, Row } from 'react-bootstrap';

const BossKillsPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<Hero />
			<Container className={`primary-container`}>
				<Row>
					<Col lg={12}>
						<AllBossKills />
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default BossKillsPage;
