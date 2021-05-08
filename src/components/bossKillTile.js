import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { Col, Row } from 'react-bootstrap';

const BossKillTile = ({ boss }) => (
	<Link
		to={`/boss-kills/${boss.slug}`}
		className="boss-kill-tile"
		style={{ backgroundImage: `url(${boss?.bossPicture?.file?.url})` }}
	>
		<Row noGutters>
			<Col xs={12} md={8}>
				<h3 className={`boss-tile-name`}>{boss?.bossName}</h3>
			</Col>
			<Col xs={12} md={4}>
				<h4
					className={`boss-tile-difficulty`}
				>{`${boss?.bossNumber} / ${boss?.raid?.numberOfBosses} ${boss?.difficulty}`}</h4>
			</Col>
			<Col xs={12} md={8}>
				<h4 className={`boss-tile-killdate`}>{boss?.killDate}</h4>
			</Col>
			<Col xs={12} md={4}>
				<p className={`boss-tile-raid`}>{boss?.raid?.raidName}</p>
			</Col>
		</Row>
	</Link>
);

BossKillTile.propTypes = {
	boss: PropTypes.object,
};

BossKillTile.defaultProps = {
	boss: null,
};

export default BossKillTile;
