import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const AllBossKillTile = ({ boss }) => (
	<Col xs={12} md={6} lg={4} className="all-boss-kill-tile-col">
		<div className="all-boss-kill-tile">
			<GatsbyImage
				image={getImage(boss?.teamPicture)}
				alt={boss?.teamPicture?.file?.fileName}
			/>
			<div className="all-boss-kill-tile-wrapper">
				<h2 className={`boss-tile-name`}>{boss?.bossName}</h2>
				<p className={`boss-tile-difficulty`}>
					{`${boss?.bossNumber} / ${boss?.raid?.numberOfBosses} ${boss?.difficulty} -`}{' '}
					<em>{`${boss?.raid?.raidName}`}</em>
				</p>
				<p className={`boss-tile-killdate`}>{boss?.killDate}</p>
			</div>
		</div>
	</Col>
);

AllBossKillTile.propTypes = {
	boss: PropTypes.object,
};

AllBossKillTile.defaultProps = {
	boss: null,
};

export default AllBossKillTile;
