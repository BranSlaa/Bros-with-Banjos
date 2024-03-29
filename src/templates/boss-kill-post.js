import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function BossKillPost({ data, pageContext }) {
	const { next, prev } = pageContext;
	console.log(next);
	console.log(prev);
	const boss = data.contentfulBossKills;
	return (
		<Layout>
			<SEO title={`Boss Kill ${boss.bossName}`} />
			<Container>
				<Row className={`boss-kill-post`}>
					<Col>
						<div className="link-row">
							<Link
								to="/boss-kills"
								className="back-link arrow-link left"
							>
								Back to Boss Kills
							</Link>
							<div className="next-prev">
								{prev ? (
									<Link
										to={`/boss-kills/${prev.slug}`}
										className="next-prev-link arrow-link left"
									>
										{prev.bossName}
									</Link>
								) : (
									''
								)}
								{next ? (
									<Link
										to={`/boss-kills/${next.slug}`}
										className="next-prev-link arrow-link"
									>
										{next.bossName}
									</Link>
								) : (
									''
								)}
							</div>
						</div>
						<h2 className={`boss-tile-name`}>{boss?.bossName}</h2>
						<div className="image-wrapper">
							<GatsbyImage
								image={getImage(boss?.teamPicture)}
								alt={boss?.teamPicture?.file?.fileName}
							/>
						</div>
						<div className="boss-kill-description">
							{boss?.description}
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
			description
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
