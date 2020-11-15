import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import WidgetTitleBar from './widgetTitleBar';
import BossKillTile from './bossKillTile';
import { Col, Container, Row } from 'react-bootstrap';

const BossKills = ({}) => {
	const data = useStaticQuery(graphql`
		query BossKillDataQuery {
			allContentfulBossKills {
				nodes {
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
						}
					}
					bossPicture {
						file {
							url
						}
					}
				}
			}
		}
	`);
	return (
		<section className={`boss-kills`}>
			<WidgetTitleBar text="Latest Boss Kills" />
			<Container>
				<Row className={`boss-kills-row`}>
					<Col xs={12}>
						{data.allContentfulBossKills.nodes
							.sort(function (date1, date2) {
								return (
									new Date(date2.killDate) -
									new Date(date1.killDate)
								);
							})
							.slice(0, 5)
							.map((boss, index) => {
								return <BossKillTile key={index} boss={boss} />;
							})}
					</Col>
					{/* <Col xs={12} className={`all-boss-kills-link-col`}>
						<Link className={`arrow-link`} to={`boss-kills`}>
							View All
						</Link>
					</Col> */}
				</Row>
			</Container>
		</section>
	);
};

export default BossKills;
