import PropTypes from 'prop-types';
import React from 'react';

const WidgetTitleBar = ({ text }) => (
	<div className="widget-title-bar">
		<h2 className="widget-title">{text}</h2>
	</div>
);

WidgetTitleBar.propTypes = {
	text: PropTypes.string,
};

WidgetTitleBar.defaultProps = {
	text: '',
};

export default WidgetTitleBar;
