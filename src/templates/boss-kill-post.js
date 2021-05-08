import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function BossKillPost({ data }) {
	const boss = data.contentfulBossKills;
	return (
		<Layout>
			<SEO title={`Boss Kill ${boss.bossName}`} />
			<Container>
				<Row className={`boss-kill-post`}>
					<Col>
						<Link
							to="/boss-kills"
							className="back-link arrow-link left"
						>
							Back to Boss Kills
						</Link>
						<h2 className={`boss-tile-name`}>{boss?.bossName}</h2>
						<div className="image-wrapper">
							<GatsbyImage
								image={getImage(boss?.teamPicture)}
								alt={boss?.teamPicture?.file?.fileName}
							/>
						</div>
						<div className="boss-kill-post-content-wrapper">
							<p className={`boss-tile-difficulty`}>
								{`${boss?.bossNumber} / ${boss?.raid?.numberOfBosses} ${boss?.difficulty} -`}{' '}
								<em>{`${boss?.raid?.raidName}`}</em>
							</p>
							<p className={`boss-tile-killdate`}>
								{boss?.killDate}
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
}

export const query = graphql`
	query BossKillPosts($slug: String!) {
		contentfulBossKills(slug: { eq: $slug }) {
			bossName
			difficulty
			killDate(formatString: "MMM, DD YYYY")
			bossNumber
			raid {
				numberOfBosses
				raidName
			}
			teamPicture {
				file {
					url
					fileName
				}
				gatsbyImageData(placeholder: BLURRED)
			}
		}
	}
`;
