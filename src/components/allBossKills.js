import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import WidgetTitleBar from './widgetTitleBar';
import AllBossKillTile from './allBossKillTile';
import { Col, Container, Row } from 'react-bootstrap';

export default function AllBossKills() {
	const data = useStaticQuery(graphql`
		query AllBossKillDataQuery {
			allContentfulBossKills {
				nodes {
					slug
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
		}
	`);
	return (
		<section className={`all-boss-kills`}>
			<WidgetTitleBar text="All Boss Kills" />
			<Container>
				<Row className={`all-boss-kills-row`}>
					<Col xs={12}>
						<Row>
							{data.allContentfulBossKills.nodes
								.sort(function (date1, date2) {
									return (
										new Date(date2.killDate) -
										new Date(date1.killDate)
									);
								})
								.map((boss, index) => {
									return (
										<AllBossKillTile
											key={index}
											boss={boss}
										/>
									);
								})}
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
