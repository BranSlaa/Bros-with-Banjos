import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import WidgetTitleBar from '../components/widgetTitleBar';

import DeathKnightBlood from '../assets/images/spell_icons/spell_deathknight_bloodpresence.jpg';
import DeathKnightFrost from '../assets/images/spell_icons/spell_deathknight_frostpresence.jpg';
import DeathKnightUnholy from '../assets/images/spell_icons/spell_deathknight_unholypresence.jpg';

import DemonHunterHavoc from '../assets/images/spell_icons/ability_demonhunter_specdps.jpg';
import DemonHunterVengeance from '../assets/images/spell_icons/ability_demonhunter_spectank.jpg';

import DruidBalance from '../assets/images/spell_icons/spell_nature_starfall.jpg';
import DruidFeral from '../assets/images/spell_icons/ability_druid_catform.jpg';
import DruidGuardian from '../assets/images/spell_icons/ability_racial_bearform.jpg';
import DruidRestoration from '../assets/images/spell_icons/spell_nature_healingtouch.jpg';

import HunterBeastMastery from '../assets/images/spell_icons/ability_hunter_bestialdiscipline.jpg';
import HunterMarksmanship from '../assets/images/spell_icons/ability_hunter_focusedaim.jpg';
import HunterSurvival from '../assets/images/spell_icons/ability_hunter_camouflage.jpg';

import MageArcane from '../assets/images/spell_icons/spell_holy_magicalsentry.jpg';
import MageFire from '../assets/images/spell_icons/spell_fire_firebolt02.jpg';
import MageFrost from '../assets/images/spell_icons/spell_frost_frostbolt02.jpg';

import MonkBrewmaster from '../assets/images/spell_icons/spell_monk_brewmaster_spec.jpg';
import MonkMistweaver from '../assets/images/spell_icons/spell_monk_mistweaver_spec.jpg';
import MonkWindwalker from '../assets/images/spell_icons/spell_monk_windwalker_spec.jpg';

import PaladinHoly from '../assets/images/spell_icons/spell_holy_holybolt.jpg';
import PaladinProtection from '../assets/images/spell_icons/ability_paladin_shieldofthetemplar.jpg';
import PaladinRetribution from '../assets/images/spell_icons/spell_holy_auraoflight.jpg';

import PriestDiscipline from '../assets/images/spell_icons/spell_holy_powerwordshield.jpg';
import PriestHoly from '../assets/images/spell_icons/spell_holy_guardianspirit.jpg';
import PriestShadow from '../assets/images/spell_icons/spell_shadow_shadowwordpain.jpg';

import RogueAssassination from '../assets/images/spell_icons/ability_rogue_deadlybrew.jpg';
import RogueOutlaw from '../assets/images/spell_icons/ability_rogue_waylay.jpg';
import RogueSubtlety from '../assets/images/spell_icons/ability_stealth.jpg';

import ShamanElemental from '../assets/images/spell_icons/spell_nature_lightning.jpg';
import ShamanEnhancement from '../assets/images/spell_icons/spell_shaman_improvedstormstrike.jpg';
import ShamanRestoration from '../assets/images/spell_icons/spell_nature_magicimmunity.jpg';

import WarlockAffliction from '../assets/images/spell_icons/spell_shadow_deathcoil.jpg';
import WarlockDemonology from '../assets/images/spell_icons/spell_shadow_metamorphosis.jpg';
import WarlockDestruction from '../assets/images/spell_icons/spell_shadow_rainoffire.jpg';

import WarriorArms from '../assets/images/spell_icons/ability_warrior_savageblow.jpg';
import WarriorFury from '../assets/images/spell_icons/ability_warrior_innerrage.jpg';
import WarriorProtection from '../assets/images/spell_icons/ability_warrior_defensivestance.jpg';

function chooseImage(c, s) {
	if (c === 'Death Knight') {
		if (s === 'Blood') {
			return DeathKnightBlood;
		} else if (s === 'Frost') {
			return DeathKnightFrost;
		} else if (s === 'Unholy') {
			return DeathKnightUnholy;
		}
	} else if (c === 'Demon Hunter') {
		if (s === 'Havoc') {
			return DemonHunterHavoc;
		} else if (s === 'Vengeance') {
			return DemonHunterVengeance;
		}
	} else if (c === 'Druid') {
		if (s === 'Balance') {
			return DruidBalance;
		} else if (s === 'Feral') {
			return DruidFeral;
		} else if (s === 'Guardian') {
			return DruidGuardian;
		} else if (s === 'Restoration') {
			return DruidRestoration;
		}
	} else if (c === 'Hunter') {
		if (s === 'Beast Mastery') {
			return HunterBeastMastery;
		} else if (s === 'Marksmanship') {
			return HunterMarksmanship;
		} else if (s === 'Survival') {
			return HunterSurvival;
		}
	} else if (c === 'Mage') {
		if (s === 'Arcane') {
			return MageArcane;
		} else if (s === 'Fire') {
			return MageFire;
		} else if (s === 'Frost') {
			return MageFrost;
		}
	} else if (c === 'Monk') {
		if (s === 'Brewmaster') {
			return MonkBrewmaster;
		} else if (s === 'Mistweaver') {
			return MonkMistweaver;
		} else if (s === 'Windwalker') {
			return MonkWindwalker;
		}
	} else if (c === 'Paladin') {
		if (s === 'Holy') {
			return PaladinHoly;
		} else if (s === 'Protection') {
			return PaladinProtection;
		} else if (s === 'Retribution') {
			return PaladinRetribution;
		}
	} else if (c === 'Priest') {
		if (s === 'Discipline') {
			return PriestDiscipline;
		} else if (s === 'Holy') {
			return PriestHoly;
		} else if (s === 'Shadow') {
			return PriestShadow;
		}
	} else if (c === 'Rogue') {
		if (s === 'Assassination') {
			return RogueAssassination;
		} else if (s === 'Outlaw') {
			return RogueOutlaw;
		} else if (s === 'Subtlety') {
			return RogueSubtlety;
		}
	} else if (c === 'Shaman') {
		if (s === 'Elemental') {
			return ShamanElemental;
		} else if (s === 'Enhancement') {
			return ShamanEnhancement;
		} else if (s === 'Restoration') {
			return ShamanRestoration;
		}
	} else if (c === 'Warlock') {
		if (s === 'Affliction') {
			return WarlockAffliction;
		} else if (s === 'Demonology') {
			return WarlockDemonology;
		} else if (s === 'Destruction') {
			return WarlockDestruction;
		}
	} else if (c === 'Warrior') {
		if (s === 'Arms') {
			return WarriorArms;
		} else if (s === 'Fury') {
			return WarriorFury;
		} else if (s === 'Protection') {
			return WarriorProtection;
		}
	}
}

function string_to_slug(str) {
	str = str.replace(/^\s+|\s+$/g, ''); // trim
	str = str.toLowerCase();

	// remove accents, swap ñ for n, etc
	var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
	var to = 'aaaaeeeeiiiioooouuuunc------';
	for (var i = 0, l = from.length; i < l; i++) {
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	str = str
		.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
		.replace(/\s+/g, '-') // collapse whitespace and replace by -
		.replace(/-+/g, '-'); // collapse dashes

	return str;
}

const RecruitmentPage = ({ data }) => {
	return (
		<Layout>
			<SEO title="Recruitment" />
			<Container className="recruit-container">
				<Row className="justify-content-center">
					<Col xs={12} className="">
						<h1 className="page-title">Recruitment</h1>
					</Col>
					<Col xs={12} md={8} className="recruitment-blurb">
						<WidgetTitleBar text="Recruitment Information" />
						<p
							className="recruitment-blurb-content"
							dangerouslySetInnerHTML={{
								__html:
									data.allMarkdownRemark.edges[0].node.html,
							}}
						></p>
					</Col>
					<Col xs={12} md={3} className="">
						<WidgetTitleBar text="Classes" />
						<div className="recruitment-classes">
							{data.allContentfulRecruitment.nodes[0].classes &&
								data.allContentfulRecruitment.nodes[0].classes.classes
									.sort(function (c1, c2) {
										if (c1.class > c2.class) return 1;
										if (c1.class < c2.class) return -1;
										return 0;
									})
									.map(function (c, i) {
										return (
											<div key={i} class="class-list">
												<h2
													class={`class-name ${string_to_slug(
														c.class
													)}`}
												>
													{c.class}
												</h2>
												<div className="spec-list">
													{c.specs &&
														c.specs.map(function (
															s
														) {
															return (
																<OverlayTrigger
																	placement={
																		'top'
																	}
																	overlay={
																		<Tooltip
																			id={`tooltip-top`}
																		>
																			{
																				s.name
																			}
																		</Tooltip>
																	}
																>
																	<img
																		className={`spec ${
																			s.recruiting
																				? 'is-recruiting'
																				: 'not-recruiting'
																		}`}
																		src={chooseImage(
																			c.class,
																			s.name
																		)}
																	/>
																</OverlayTrigger>
															);
														})}
												</div>
											</div>
										);
									})}
						</div>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default RecruitmentPage;

export const recruitmentQuery = graphql`
	{
		allMarkdownRemark {
			edges {
				node {
					html
					headings {
						depth
						value
					}
					frontmatter {
						# Assumes you're using title in your frontmatter.
						title
					}
				}
			}
		}
		allContentfulRecruitment {
			nodes {
				classes {
					classes {
						class
						specs {
							name
							recruiting
							role
						}
					}
				}
				childContentfulRecruitmentContentTextNode {
					content
				}
			}
		}
	}
`;
