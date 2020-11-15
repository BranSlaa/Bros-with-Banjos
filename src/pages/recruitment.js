import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const RecruitmentPage = ({ data }) => {
	return (
		<Layout>
			<SEO title="Recruitment" />
			<p>Recruitment page</p>
		</Layout>
	);
};

export default RecruitmentPage;

export const recruitmentQuery = graphql`
	{
		allContentfulRecruitment {
			edges {
				node {
					classes {
						Death_Knight {
							Blood {
								Recruiting
								Role
							}
							Frost {
								Recruiting
								Role
							}
							Unholy {
								Recruiting
								Role
							}
						}
						Demon_Hunter {
							Havoc {
								Recruiting
								Role
							}
							Vengeance {
								Recruiting
								Role
							}
						}
						Druid {
							Balance {
								Recruiting
								Role
							}
							Feral {
								Recruiting
								Role
							}
							Guardian {
								Recruiting
								Role
							}
							Restoration {
								Recruiting
								Role
							}
						}
						Hunter {
							Beast_Mastery {
								Recruiting
								Role
							}
							Survival {
								Recruiting
								Role
							}
							Marksmanship {
								Recruiting
								Role
							}
						}
						Mage {
							Arcane {
								Recruiting
								Role
							}
							Fire {
								Recruiting
								Role
							}
							Frost {
								Recruiting
								Role
							}
						}
						Paladin {
							Holy {
								Recruiting
								Role
							}
							Protection {
								Recruiting
								Role
							}
							Retribution {
								Recruiting
								Role
							}
						}
						Priest {
							Discipline {
								Recruiting
								Role
							}
							Holy {
								Recruiting
								Role
							}
							Shadow {
								Recruiting
								Role
							}
						}
						Rogue {
							Assassination {
								Recruiting
								Role
							}
							Outlaw {
								Recruiting
								Role
							}
							Subtlety {
								Recruiting
								Role
							}
						}
						Warlock {
							Affliction {
								Recruiting
								Role
							}
							Demonology {
								Recruiting
								Role
							}
							Destruction {
								Recruiting
								Role
							}
						}
						Warrior {
							Arms {
								Recruiting
								Role
							}
							Fury {
								Recruiting
								Role
							}
							Protection {
								Recruiting
								Role
							}
						}
					}
				}
			}
		}
	}
`;
